import HeaderLink from "./HeaderLink.tsx";
import CloseIcon from "../../assets/img/16-c-remove.svg";
import clsx from 'clsx';
import { useEffect, useState } from "react";

type HeaderNavProps = {
  expanded: boolean
  setExpanded: (expanded:boolean) => void
}

export default function HeaderNav({expanded, setExpanded}: HeaderNavProps) {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth)

  useEffect(() => {
    const watchWindowWidth = () => {
      setExpanded(false)
      setWindowWidth(window.innerWidth)
    }
    window.addEventListener("resize", watchWindowWidth)
    return () => window.removeEventListener("resize", watchWindowWidth)
  }, [])

  const sideNavClasses:string = "fixed top-0 right-0 h-screen w-64 flex-col gap-4 px-10 py-20 bg-(--color-black-200)"
  const topNavClasses:string = "items-center gap-12 lg:gap-14"

  const classNames = clsx('flex', (windowWidth < 640) ? sideNavClasses : topNavClasses)

  return (
    <nav
      className={classNames}>

      <button
        onClick={() => setExpanded(false)}
        className="absolute top-6 right-6 sm:hidden hover:opacity-75"
      >
        <img className="w-6 h-6" src={CloseIcon} alt="Close icon." />
      </button>

      <HeaderLink text="Home" to="/" />
      <HeaderLink text="List" to="list" />
      <HeaderLink text="Map" to="map" />
    </nav>
  )
}