import { useState } from "react";
import NavLink from "./NavLink.tsx";
import clsx from "clsx";
import HamburgerIcon from "../assets/img/32-menu-to-arrow-right-3.svg";
import CloseIcon from "../assets/img/16-c-remove.svg";
import Container from "../shared/components/Container";
import Drawer from "../shared/components/Drawer.tsx";

export default function Header() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <header>
      <Container>
        <div className="py-4 sm:py-6 md:h-20 flex items-center justify-between">
          {/*logo*/}
          <div className="text-xl md:text-2xl font-bold">
            <span className="text-primary">Chingu</span>
            <span className="text-secondary">Demo</span>
          </div>

          {/*open nav button*/}
          <button onClick={() => setOpen(true)} className="sm:hidden cursor-pointer">
            <span className="sr-only">Close menu</span>
            <img className="size-6" src={HamburgerIcon} alt="Open menu icon." />
          </button>

          <Drawer open={open} setOpen={setOpen} side="right">
            <div
              className={clsx(
                "h-full w-64 bg-black-200 flex pt-24 px-8 shadow-lg",
                "sm:w-auto sm:bg-transparent sm:p-0 sm:shadow-none"
              )}
            >
              {/*close nav button*/}
              <button
                className="absolute top-4 right-6 sm:hidden cursor-pointer"
                onClick={() => setOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <img className="size-6" src={CloseIcon} alt="Close menu icon." />
              </button>

              <nav
                className={clsx(
                  "flex flex-col gap-4",
                  "sm:flex-row sm:flex sm:items-center sm:gap-12 lg:gap-16"
                )}
              >
                <NavLink label="home" to="/" onClick={() => setOpen(false)} />
                <NavLink label="list" to="list" onClick={() => setOpen(false)} />
                <NavLink label="map" to="map" onClick={() => setOpen(false)} />
              </nav>
            </div>
          </Drawer>
        </div>
      </Container>
    </header>
  );
}