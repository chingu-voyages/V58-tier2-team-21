import { NavLink } from "react-router";

type HeaderLinkProps = {
  text:string
  to: string
}

export default function HeaderLink({text, to}:HeaderLinkProps) {
  return (
    <NavLink
      className="text-(--white-200) hover:text-(--primary-light) font-bold text-lg sm:text-base"
      to={to}
    >{text}</NavLink>
  )
}