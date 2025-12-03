import Container from "../../shared/components/Container";
import HamburgerIcon from "../../assets/img/32-menu-to-arrow-left-3.svg";
import HeaderNav from "./HeaderNav.tsx";
import { useState } from "react";

export default function Header() {
  const [expanded, setExpanded] = useState<boolean>(false)

  return (
    <header>
      <Container>
        <div className="flex items-center justify-between py-6 md:py-8">
          <h1 className="font-bold text-xl">
            <span className="text-(--color-primary-light)">Chingu</span>
            <span className="text-(--color-secondary)">Demo</span>
          </h1>

          <button
            onClick={() => setExpanded(true)}
            className="absolute top-6 right-6 sm:hidden hover:opacity-75"
          >
            <img className="w-6 h-6" src={HamburgerIcon} alt="Hamburger icon." />
          </button>

          <HeaderNav expanded={false} setExpanded={setExpanded} />
        </div>
      </Container>
    </header>
  )
}