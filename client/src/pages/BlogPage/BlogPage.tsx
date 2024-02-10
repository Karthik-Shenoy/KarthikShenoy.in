import ResourceCard from "../../components/ResourceCard/ResourceCard";

const lorem =
  "some boring Description, ome boring Description! ome boring Description. ome boring Description";
export function BlogPage() {
  return (
    <>
      <div className="flex flex-col items-center h-[90vh]">
        {/* Side bar component */}
        <h1 className="text-4xl p-10 font-bold">Hello World</h1>
        {/* Blog Cards section */}
        <div className="w-7/12 mb-10">
          <div className="grid grid-cols-2 gap-5">
            <ResourceCard
              key={10}
              title={"Learn Programming in 10 days"}
              description={lorem}
              image={"/"}
              linkParam={".."}
            />
            <ResourceCard
              key={10}
              title={"Learn Programming in 10 days"}
              description={lorem}
              image={"/"}
              linkParam={".."}
            />
            <ResourceCard
              key={10}
              title={"Learn Programming in 10 days"}
              description={lorem}
              image={"/"}
              linkParam={".."}
            />
            <ResourceCard
              key={10}
              title={"Learn Programming in 10 days"}
              description={lorem}
              image={"/"}
              linkParam={".."}
            />
            <ResourceCard
              key={10}
              title={"Learn Programming in 10 days"}
              description={lorem}
              image={"/"}
              linkParam={".."}
            />
            <ResourceCard
              key={10}
              title={"Learn Programming in 10 days"}
              description={lorem}
              image={"/"}
              linkParam={".."}
            />
          </div>
        </div>
      </div>
    </>
  );
}
