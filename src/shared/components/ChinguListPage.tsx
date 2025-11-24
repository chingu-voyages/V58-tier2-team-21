import ChinguFilter from "./ChinguFilter";
import ChinguList from "./ChinguList";
import type { ChinguCardPropsType } from "./ChinguCard";
import ChingueSearch from "./ChinguSearch";
import { useState } from "react";

type ChinguListPageProps = {
  data: ChinguCardPropsType[];
}

export default function ChinguListPage({ data }: ChinguListPageProps) {
  
  const [searchTerm, setSearchTerm] = useState<string>("");
  
  return (
    <div className="flex flex-row gap-4">
      <div className="md:w-1/3 lg:w-1/4 bg-gray-200 border border-gray-400 rounded-lg p-2">
        <ChingueSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <ChinguFilter />
      </div>
      <div className="flex-1">
        <ChinguList data={data} />
      </div>
    </div>
  );
}
