import Container from "../../shared/components/Container";
import HamburgerIcon from "../../assets/img/32-menu-to-arrow-left-3.svg";
import HeaderNav from "./HeaderNav.tsx";

export default function Header() {
  return (
    <header className="text-(--white-100) py-6 md:py-8 relative">
      <Container>
        <div className="flex justify-between">
          <h1 className="font-bold text-xl">
            <span className="text-(--primary-light)">Chingu</span>
            <span className="text-(--secondary)">Demo</span>
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