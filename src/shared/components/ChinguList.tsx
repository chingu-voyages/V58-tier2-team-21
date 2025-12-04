import ChinguCard from "./ChinguCard";
import type { ChinguCardPropsType } from "./ChinguCard";

export default function ChinguList(props: { data: ChinguCardPropsType[] }) {
  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-2 3xl:grid-cols-3 gap-3 px-2 sm:px-4 mx-auto justify-items-center">
      {props.data.map((chingu, index) => (
        <ChinguCard key={index} {...chingu} />
      ))}
    </div>
  );
}
