import Container from "../../shared/components/Container";
import { useState, useEffect } from "react";
import HamburgerIcon from "../../assets/img/32-menu-to-arrow-left-3.svg";
import HeaderLink from "./HeaderLink";
import NavDrawer from "./NavDrawer";

export default function Header() {
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    const collapseOnResize = () => setOpen(false)
    window.addEventListener("resize", collapseOnResize)
    return () => window.removeEventListener("resize", collapseOnResize)
  }, [])

  return (
    <>
      <header>
        <Container>
          <div className="w-full py-6 sm:py-8 flex items-center justify-between">
            <h1 className="font-bold text-xl">
              <span className="text-(--color-primary-light)">Chingu</span>
              <span className="text-(--color-secondary)">Demo</span>
            </h1>

            <nav className="hidden sm:flex items-center gap-8 md:gap-12 xl:gap-16">
              <HeaderLink text="home" to="/" />
              <HeaderLink text="list" to="list" />
              <HeaderLink text="map" to="map" />
            </nav>

            <button
              onClick={() => setOpen(true)}
              className="sm:hidden cursor-pointer"
              aria-expanded={open}
              aria-controls="mobile-drawer"
            >
              <span className="sr-only">Open menu</span>
              <img className="w-6 h-6" src={HamburgerIcon} alt="Open menu icon." />
            </button>
          </div>
        </Container>
      </header>

      <NavDrawer open={open} setOpen={setOpen} />
    </>
  );
}