import { useState } from "react";
import Drawer from "../../shared/components/Drawer";
import Filter from "../Filter";
import Container from "../../shared/components/Container";
import { Outlet } from "react-router";
import { useChinguFiltering, type filterHookType } from "../../hooks/useChinguFiltering";

export default function FilterLayout() {
	const [filterOpen, setFilterOpen] = useState<boolean>(false);
	const filtering: filterHookType = useChinguFiltering()

	return (
		<Container>
			<div className="relative h-full grid grid-row-[1fr] grid-cols-1 md:grid-cols-[300px_1fr] xl:grid-cols-[360px_1fr] gap-4 lg:gap-8 py-4 overflow-hidden">
				{/*open drawer button*/}
				<button
					className="md:hidden cursor-pointer text-white-100 focus:outline-none absolute top-8 right-4 bg-primary text-sm py-1 px-2 rounded-sm"
					onClick={() => setFilterOpen(true)}
				>filter</button>

				<Drawer open={filterOpen} side="left" setOpen={setFilterOpen} breakpoint="md">
					<Filter filterHook={filtering} />
				</Drawer>
				<section className="h-full overflow-scroll">
					<Outlet context={filtering} />
				</section>
			</div>
		</Container>
	)
}