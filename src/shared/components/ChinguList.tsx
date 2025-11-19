import ChinguCard from "./ChinguCard";
import type { ChinguCardPropsType } from "./ChinguCard";

export default function ChinguList(props: { data: ChinguCardPropsType[] }) {
  return props.data.map((chingu, index) => (
    <div key={index} className="grid-cols-2 gap-2">
      <ChinguCard {...chingu} />
    </div>
  ));
}
