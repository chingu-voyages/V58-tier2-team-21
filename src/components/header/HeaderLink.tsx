import { NavLink } from "react-router";
import type { MouseEvent } from "react";

type HeaderLinkProps = {
  text:string
  to: string
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
}

export default function HeaderLink({text, to, onClick}:HeaderLinkProps) {
  return (
    <NavLink
      className="text-white-200 capitalize hover:text-primary-light font-bold text-lg sm:text-base"
      to={to}
      onClick={onClick}
    >{text}</NavLink>
  )
}