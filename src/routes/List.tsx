import { type filterHookType } from "../hooks/useChinguFiltering";
import { useOutletContext } from "react-router";
import ChinguCard, { type ChinguCardPropsType} from "../shared/components/ChinguCard.tsx";

export default function List() {
	const { filteredList }: filterHookType = useOutletContext();

	return (
		<section className="flex flex-col gap-8 border border-white-200/50 p-4 md:p-5 lg:p-6 rounded-xl">
			<h2 className="font-bold text-white-200 text-lg md:text-xl">Chingus</h2>
			<div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] auto-rows-auto gap-4">
				{filteredList.map((chingu:ChinguCardPropsType, index:number) => (
					<ChinguCard key={index} {...chingu} />
				))}
			</div>
		</section>
	)
}