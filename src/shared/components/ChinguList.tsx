import ChinguCard from "./ChinguCard";
import type { ChinguCardPropsType } from "./ChinguCard";

export default function ChinguList(props: { data: ChinguCardPropsType[] }) {
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-3 px-2 sm:px-4 mx-auto">
      {props.data.map((chingu, index) => (
        <ChinguCard key={index} {...chingu} />
      ))}
    </div>
  );
}
