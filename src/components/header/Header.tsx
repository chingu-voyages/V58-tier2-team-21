import Container from "../../shared/components/Container";
import HamburgerIcon from "../../assets/img/32-menu-to-arrow-left-3.svg";
import HeaderNav from "./HeaderNav.tsx";

export default function Header() {
  return (
    <header className="text-(--color-white-100) py-6 sm:py-8">
      <Container>
        <div className="header">
          <h1 className="font-bold text-xl">
            <span className="text-(--color-primary-light)">Chingu</span>
            <span className="text-(--color-secondary)">Demo</span>
          </h1>
          <button className="sm:hidden">
            <img className="h-6 w-6" src={HamburgerIcon} alt="Hamburger icon." />
          </button>
          <HeaderNav />
        </div>
      </Container>
    </header>
  )
}