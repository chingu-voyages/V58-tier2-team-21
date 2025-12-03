import CloseIcon from "../../assets/img/16-c-remove.svg";
import HeaderLink from "./HeaderLink";
import clsx from 'clsx';

type NavDrawerProps = {
  open: boolean
  setOpen: (open:boolean) => void
}

export default function NavDrawer({open, setOpen}:NavDrawerProps) {
  return (
    <>
      <div
        className={`fixed inset-0 bg-black/50 transition-opacity ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      <div
        id="mobile-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Main Mobile Menu"
        tabIndex={-1}
        className={clsx(
          "fixed top-0 right-0 h-full w-64 bg-black-200 shadow-xl transform transition-transform duration-300 ease-out flex flex-col pt-24 px-8",
          open ? "translate-x-0" : "translate-x-full"
        )}
      >
        <button
          onClick={() => setOpen(false)}
          className="absolute top-6 right-6 cursor-pointer"
        >
          <span className="sr-only">Close menu</span>
          <img className="w-6 h-6" src={CloseIcon} alt="Close menu icon." />
        </button>
        <nav className="flex flex-col gap-4">
          <HeaderLink text="home" to="/" onClick={() => setOpen(false)} />
          <HeaderLink text="list" to="list" onClick={() => setOpen(false)} />
          <HeaderLink text="map" to="map" onClick={() => setOpen(false)} />
        </nav>
      </div>
    </>
  )
}