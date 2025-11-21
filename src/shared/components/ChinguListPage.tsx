import ChinguFilter from "./ChinguFilter";
import ChinguList from "./ChinguList";
import type { ChinguCardPropsType } from "./ChinguCard";

type ChinguListPageProps = {
  data: ChinguCardPropsType[];
}

export default function ChinguListPage({ data }: ChinguListPageProps) {
  return (
    <div className="flex flex-col gap-4">
      <div className="md:w-1/3 lg:w-1/4">
        <ChinguFilter />
      </div>
      <div className="flex-1">
        <ChinguList data={data} />
      </div>
    </div>
  );
}
