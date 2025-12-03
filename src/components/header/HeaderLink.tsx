import { NavLink, type NavLinkRenderProps } from "react-router";
import type { MouseEvent } from "react";
import clsx from "clsx";

type HeaderLinkProps = {
  text: string
  to: string
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
}

export default function HeaderLink({text, to, onClick}:HeaderLinkProps) {
  const linkClasses = (isActive:boolean) => {
    return clsx(
      "capitalize font-bold text-lg sm:text-base",
      isActive ? "text-primary-light" : "text-white-200 hover:text-primary"
    )
  }

  return (
    <NavLink
      className={({isActive}:NavLinkRenderProps):string => linkClasses(isActive)}
      to={to}
      onClick={onClick}
    >{text}</NavLink>
  )
}