import ChinguFilter from "./ChinguFilter";
import ChinguList from "./ChinguList";
import type { ChinguCardPropsType } from "./ChinguCard";

type ChinguListPageProps = {
  data: ChinguCardPropsType[];
}

export default function ChinguListPage({ data }: ChinguListPageProps) {
  return (
    <div className="flex flex-row gap-4">
      <div className="md:w-1/3 lg:w-1/4 bg-gray-200 border border-gray-400 rounded-lg p-2">
        <ChinguFilter />
      </div>
      <div className="flex-1">
        <ChinguList data={data} />
      </div>
    </div>
  );
}
