# How Shared-Nothing Architecture Scales Even on a Single Node

### Pre-read
- [Coroutines]()

### Single threaded event loop based key value store
- Key value stores like `Redis` use a single threaded event loop with multiplexed sockets to server the client queries
	- The IO-latency is really low (`0.1 nano-seconds ~ 10 microseconds`, based on where it is accessed from, L1 cache or memory) compared to the network latencies (`couple of 100ms`)
	- By the time a new TCP connection requests comes in we can process around `10000 operations in the worst case scenario`
- The event loop interleaves the execution  of the queries and network-IO (`example`: check if new connections are present on execution of every `1000 (~10ms) operations`)
	- in case a connection request is present on the listening queue accept it and add it to multiplexed socket list.
- `Why multiplexing?`: A `read/recv` call on a single socket is **blocking**, meaning the application waits until data is available. **Multiplexing** solves this by using **`non-blocking reads/recv`**, where
	- `core idea`: Waits for **multiple sockets** to have data instead of blocking on one.
	- If no data is available, the **kernel immediately returns**, avoiding unnecessary blocking. This enables checking multiple sockets **concurrently** in an interleaved manner, while executing the queued application operations.
	- The application can `switch between I/O waiting and execution`, improving efficiency and responsiveness.
	- **Key Benefit:**  
		- By interleaving I/O waits with useful work, multiplexing enables high-performance event-driven architectures (e.g., **epoll, kqueue, select**).
![SingleThreadEventLoop|600x800](/PostsMarkdown/post_1/images/SingleThreadEventLoop.png)
---
## Multithreaded shard per core approach
### `Network Layer`:
- `I/O Threads Count`: Typically, 4 threads are spawned.
- `Role`: Each thread handles socket I/O for multiple client connections.
- `Mechanism`:Instead of using blocking read/write calls—which would leave the thread idle—each I/O thread spawns numerous coroutines/fibers, each `socket connection` get's it's own `coroutine-handler`
	- These coroutines perform non-blocking operations using APIs that suspend execution when no data is available (using, for example, the `co_await` operator).
	- The suspended coroutine `yields control back to the scheduler`, allowing other tasks to run on the same thread.
	- blocking `read/write calls` would make the thread would have wait doing no work. instead the `coroutines use non blocking calls` and `suspend in case there is no data at the socket buffers`, and allow others to make progress. thus minimizing OS level thread context switches (co-routines context switch happens at the user-level with lot less overhead) 
- `Thread Priority`: The network layer threads run at a `lower priority`. This minimizes contention with the more critical processing threads and helps `avoid unnecessary OS-level context switches`.
#### Benefits:
- `Reduced Overhead`: Using user-level coroutine context switches (with `co_await`) is much cheaper than OS-level thread context switches.
- `Improved Concurrency`: Non-blocking I/O enables a single thread to efficiently manage thousands of socket connections.
- `Decoupled architecture`: Network and storage operations are decoupled, and the use of lock-free queues within the shard 
- `High Concurrency`: Combining non-blocking I/O with fine-grained coroutines/fibers minimizes context switching overhead.
#### Potential Pitfalls in the Network Layer:
- `Incorrect Suspension`: If the coroutine implementation does not properly yield (e.g., accidentally using a blocking call), the thread may stall, reducing throughput.
- `Thread-Overload at network layer`: If the number of network threads is too low relative to the workload, incoming connections might experience latency.
- `Error Handling Complexity`: As asynchronous error propagation is more complicated, ensuring robust error handling and recovery is critical.
---
### `Storage Layer` (Shard-per-Core Model)
- `Core Binding`: Each CPU core gets its own dedicated thread and shard.
- `Lock-Free Operations`: Since operations are scoped to a single shard (or core), there is no need for locks on shared data structures.
	- A single-producer, single-consumer (SPSC) queue can be used for passing tasks between the network layer coroutine (or fiber) and the core thread.
- `Task Queue Mechanism`: Each core thread maintains its own operation/task queue. When a coroutine needs to perform an operation, it enqueues a task and receives a future/promise that will be resolved once the operation completes on the core thread.
#### Benefits
- `Elimination of Locks`: By confining operations to a single thread per shard, costly locking mechanisms are avoided, which significantly improves performance.
- `Predictable Performance`:Data locality and NUMA-awareness ensure that each core operates efficiently on its own data partition. Efficient resource utilization
- `Scalability`: The shard-per-core design is inherently scalable, especially on modern multi-core systems.
#### Potential Pitfalls in the Storage Layer
- `Queue Management`: Even with lock-free queues, the design assumes a strict single-producer, single-consumer paradigm. If this assumption is violated (e.g., due to an unforeseen concurrency bug), race conditions can occur.
- `Load Imbalance`:If certain shards receive disproportionately more traffic, it might lead to performance bottlenecks. Balancing the load across cores is critical.
- `Future/Promise Overhead`: Mismanagement of asynchronous promises can lead to issues such as memory leaks, dangling futures, or complex error propagation.
#### Pitfalls of the overall system
- `Debugging Complexity`: Asynchronous, coroutine-based designs can be more challenging to debug compared to straightforward, synchronous code.
- `Scheduler Overhead`: The efficiency of the user-level scheduler is critical. Poor scheduling algorithms can lead to fiber starvation or priority inversion.
- `Limited Flexibility`: The architecture assumes that operations are neatly partitioned by shard. Cross-shard operations or global state changes require extra care and might introduce contention.
	- for cross shard/partition transactions we will need to use some form of locking and synchronization mechanisms
- `Error Handling and Backpressure`: Robust mechanisms for error propagation, cancellation, and backpressure management must be in place. This is often an area that receives less attention in early implementations.
![ShardPerCoreDesign|600x800](/PostsMarkdown/post_1/images/ShardPerCoreDesign.png)
---
### Anti Caching
A technique to proactively offload infrequently accessed (`cold`) data from memory to disk, ensuring that only frequently accessed (`hot`) data remains in RAM.
#### Purpose
- Manage Large Datasets: Enables systems to handle data sets larger than available RAM.
- Optimize Performance: Keeps hot data in memory for fast access while minimizing memory pressure.
- Reduce Blocking: Uses asynchronous disk fetches to avoid stalling processing threads.
#### Key Concepts
- Memory Pressure Monitoring : Identify cold data based on low access frequency. Trigger eviction when memory utilization is high.
- Data Locality & Metadata: Keep essential metadata (indexes, keys) in memory. Evict full data records to disk while retaining lookup efficiency.
- `Asynchronous Disk Fetching`: On a cache miss, trigger non-blocking I/O to reload data. Use callbacks, promises, or async mechanisms to resume processing once data is available.
- `Retry Mechanism`: Return a retry signal or placeholder to the client on cache misses. the client automatically re-issue the request after the data is reloaded.
#### Benefits
- `Efficient Memory Usage`: Offloads rarely used data, keeping memory available for critical operations.
- `High Throughput`: Reduces blocking and context switching by leveraging async operations.
- `Scalability`: Adapts well to large-scale, memory-constrained systems.
#### Pitfalls & Considerations
- `Latency Spikes`: Disk fetches can introduce delays if not properly managed.
- `Resource Management`:Monitor and manage backpressure to prevent system overload.




---