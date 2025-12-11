import { useState } from "react";
import ReactPaginate from "react-paginate";
import ChinguCard from "./ChinguCard";
import type { ChinguCardPropsType } from "./ChinguCard";

export default function ChinguList(props: { data: ChinguCardPropsType[] }) {
  const { data } = props;

  const itemsPerPage = 20;
  const [currentPage, setCurrentPage] = useState(0);

  const pageCount = Math.ceil(data.length / itemsPerPage);
  const startOffset = currentPage * itemsPerPage;
  const currentItems = data.slice(startOffset, startOffset + itemsPerPage);

  const handlePageClick = (e: { selected: number }) => {
    setCurrentPage(e.selected);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 3xl:grid-cols-3 gap-3 px-2 sm:px-4 mx-auto justify-items-center">
        {currentItems.map((chingu, index) => (
          <ChinguCard key={index} {...chingu} />
        ))}
      </div>

      <ReactPaginate
        previousAriaLabel="<"
        nextLabel=">"
        pageCount={pageCount}
        onPageChange={handlePageClick}
        containerClassName="flex gap-2 justify-center mt-6"
        pageClassName="px-3 py-1 border rounded bg-primary-light hover:bg-secondary hover:text-white hover:cursor-pointer"
        activeClassName="bg-secondary text-white"
        previousClassName="px-3 py-1 border rounded bg-secondary text-white hover:cursor-pointer"
        nextClassName="px-3 py-1 border rounded bg-secondary text-white hover:cursor-pointer"
        disabledClassName="opacity-50 cursor-default"
      />
    </>
  );
}
