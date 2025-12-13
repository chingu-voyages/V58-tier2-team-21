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

  if (!data) {
    return (
      <p className="flex items-center gap-2 justify-center p-4 bg-red-100 text-red-700 rounded-lg shadow-sm border border-red-200">
        <span className="text-xl">⚠️</span>
        Data failed to load. Please refresh the page or check your internet
        connection.
      </p>
    );
  }

  if (data.length === 0) {
    return (
      <p className="flex items-center gap-2 justify-center p-4 bg-yellow-100 text-yellow-800 rounded-lg shadow-sm border border-yellow-200">
        <span className="text-xl">🔍</span>
        No matches found. Please try different filter options or a different
        keyword.
      </p>
    );
  }

  if (currentItems.length === 0) {
    return (
      <p className="flex items-center gap-2 justify-center p-4 bg-gray-100 text-gray-800 rounded-lg shadow-sm border border-gray-300">
        No matches found for the selected page.
      </p>
    );
  }

  try {
    return (
      <>
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 3xl:grid-cols-3 gap-3 px-2 sm:px-4 mx-auto justify-items-center">
          {currentItems.map((chingu, index) => (
            <ChinguCard key={index} {...chingu} />
          ))}
        </div>

        <ReactPaginate
          previousAriaLabel="<"
          nextAriaLabel=">"
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
  } catch (e) {
    console.error(e);
    return (
      <p className="flex items-center gap-2 justify-center p-4 bg-gray-100 text-gray-800 rounded-lg shadow-sm border border-gray-300">
        <span className="text-xl">❌</span>
        Something went wrong while displaying the data. Try searching/filtering
        again!
      </p>
    );
  }
}
