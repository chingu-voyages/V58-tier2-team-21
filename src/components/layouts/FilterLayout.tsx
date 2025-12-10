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
        >
          <span className="sr-only">Open filter</span>
          filter
        </button>

        <Drawer
          open={filterOpen}
          side="left"
          setOpen={setFilterOpen}
          breakpoint="md"
        >
          {/*close drawer button*/}
          <button
            onClick={() => setFilterOpen(false)}
            className="md:hidden cursor-pointer text-white-100 focus:outline-none absolute top-2 right-4 bg-black-200 text-sm py-1 px-2 rounded-sm"
          >
            <span className="sr-only">Close filter</span>
            cancel
          </button>

          <Filter filterHook={filtering} />
        </Drawer>
        <section className="h-full overflow-scroll">
          <Outlet context={filtering} />
        </section>
      </div>
    </Container>
  );
}