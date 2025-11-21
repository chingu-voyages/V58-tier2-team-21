import ChinguFilter from "./ChinguFilter";
import ChinguList from "./ChinguList";

export default function ChinguListPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="md:w-1/3 lg:w-1/4">
        <ChinguFilter />
      </div>
      <div className="flex-1">
        <ChinguList data={[]}/>
      </div>
    </div>
  )
}