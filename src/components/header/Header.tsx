import Container from "../../shared/components/Container";
import HamburgerIcon from "../../assets/32-menu-to-arrow-left.svg";

export default function Header() {
  return (
    <header className="bg-zinc-800 text-gray-200 py-6">
      <Container>
        <div className="flex justify-between">
          <h1 className="font-bold text-xl">
            <span className="text-green-500">Chingu</span>
            <span className="text-indigo-600">Demo</span>
          </h1>
          <button className="sm:hidden">
            <img className="h-6 w-6" src={HamburgerIcon} alt="Hamburger icon." />
          </button>
        </div>
      </Container>
    </header>
  )
}