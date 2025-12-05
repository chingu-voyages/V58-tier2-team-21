import { NavLink as Link } from "react-router";
import type { MouseEvent } from "react";
import clsx from "clsx";

type NavLinkProps = {
	label: string
	to: string
	onClick?: (event: MouseEvent<HTMLAnchorElement>) => void
}

export default function NavLink({ label, to, onClick }: NavLinkProps) {
	const getClassNames = (isActive:boolean) => {
		return clsx(
			"capitalize font-bold text-lg sm:text-base",
			isActive ? "text-primary" : "text-white-200 hover:text-primary-light"
		)
	}
	return (
		<Link
			to={to}
			className={({isActive}) => getClassNames(isActive)}
			onClick={onClick}
		>{label}</Link>
	)
}