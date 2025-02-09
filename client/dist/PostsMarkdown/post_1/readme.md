# How Shared-Nothing Architecture Scales Even on a Single Node

### Single threaded event loop based key value store
- Key value stores like `Redis` use a single threaded event loop with multiplexed sockets to server the client queries
	- The IO-latency is really low (`0.1 nano-seconds ~ 10 microseconds`, based on where it is accessed from, L1 cache or memory) compared to the network latencies (`couple of 100ms`)
	- By the time a new TCP connection requests comes in we can process around `10000 operations in the worst case scenario`
- The event loop interleaves the execution  of the queries and network-IO (`example`: check if new connections are present on execution of every `1000 (~10ms) operations`)
	- in case a connection request is present on the listening queue accept it and add it to multiplexed socket list.
- `Why multiplexing`: A `read/recv` call on a single socket is **blocking**, meaning the application waits until data is available. **Multiplexing** solves this by using **non-blocking reads/recv**, where
	- `core idea`: Waits for **multiple sockets** to have data instead of blocking on one.
	- If no data is available, the **kernel immediately returns**, avoiding unnecessary blocking. This enables checking multiple sockets **concurrently** in an interleaved manner, while executing the queued application operations.
	- The application can `switch between I/O waiting and execution`, improving efficiency and responsiveness.
	- **Key Benefit:**  
		- By interleaving I/O waits with useful work, multiplexing enables high-performance event-driven architectures (e.g., **epoll, kqueue, select**).




---