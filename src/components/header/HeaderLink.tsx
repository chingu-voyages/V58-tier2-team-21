import { NavLink } from "react-router";

type HeaderLinkProps = {
  text:string
  to: string
}

export default function HeaderLink({text, to}:HeaderLinkProps) {
  return (
    <NavLink to={to}>{text}</NavLink>
  )
}