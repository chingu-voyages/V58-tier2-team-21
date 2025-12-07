import { type ReactNode } from "react";
import clsx from "clsx";
import { useEffect } from "react";

type sideType = "right" | "left"

type DrawerProps = {
	children: ReactNode
	open: boolean
	side: sideType
	setOpen: (open: boolean) => void
}

export default function Drawer({children, open, side, setOpen}: DrawerProps) {
	useEffect(() => {
		const collapseNav = () => setOpen(false)
		window.addEventListener("resize", collapseNav)
		return () => window.removeEventListener("resize", collapseNav);
	}, [])

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    if (open) document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [open]);

	const opposite: sideType = side === "right" ? "left" : "right"

	const transitionClass = {
		left: "transition-[left]",
		right: "transition-[right]",
	}[opposite]

	const positionClass = open
		? { left: "left-0", right: "right-0" }[opposite]
		: { left: "left-full", right: "right-full" }[opposite]

	return (
		<div
			className={clsx(
				`fixed top-0 w-screen h-screen flex z-1 ${transitionClass} duration-300`,
				`${side === "right" ? "justify-end" : "justify-start"} ${positionClass}`,
				"sm:static sm:w-auto sm:h-auto sm:bg-transparent sm:block"
			)}
		>
			{children}
		</div>
	)
}