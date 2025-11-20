import ChinguCard from "./ChinguCard";
import type { ChinguCardPropsType } from "./ChinguCard";

export default function ChinguList(props: { data: ChinguCardPropsType[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
      {props.data.map((chingu, index) => (
        <ChinguCard key={index} {...chingu} />
      ))}
    </div>
  );
}
