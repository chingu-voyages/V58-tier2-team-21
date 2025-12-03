import { NavLink } from "react-router";

type HeaderLinkProps = {
  text:string
  to: string
}

export default function HeaderLink({text, to}:HeaderLinkProps) {
  return (
    <NavLink
      className="text-(--color-white-200) hover:text-(--color-primary-light) font-bold text-lg sm:text-base"
      to={to}
    >{text}</NavLink>
  )
}