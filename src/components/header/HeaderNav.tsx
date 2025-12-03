import HeaderLink from "./HeaderLink.tsx";
import CloseIcon from "../../assets/img/16-c-remove.svg";

export default function HeaderNav() {
  return (
    <nav
      className="fixed sm:static top-0 right-0 w-64 sm:w-auto h-full sm:h-auto bg-(--black-200) sm:bg-transparent px-8 py-24 sm:p-0"
    >
      <button className="absolute top-6 right-6 sm:hidden">
        <img className="h-6 w-6" src={CloseIcon} alt="Close icon." />
      </button>
      <ul
        className="flex flex-col gap-y-4 sm:flex-row sm:items-center gap-x-8 md:gap-x-12 xl:gap-x-16"
      >
        <li><HeaderLink text="Home" to="/" /></li>
        <li><HeaderLink text="List" to="list" /></li>
        <li><HeaderLink text="Map" to="map" /></li>
      </ul>
    </nav>
  )
}