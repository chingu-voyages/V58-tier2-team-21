import Container from "../shared/components/Container";
import HamburgerIcon from "../assets/img/32-menu-to-arrow-right-3.svg"
import CloseIcon from "../assets/img/16-c-remove.svg"
import clsx from "clsx";
import NavLink from "./NavLink";
import { useState, useEffect } from "react";

export default function Header() {
	const [open, setOpen] = useState<boolean>(false);

	useEffect(() => {
		const collapseNav = () => setOpen(false)
		window.addEventListener("resize", collapseNav)
		return () => window.removeEventListener("resize", collapseNav)
	}, [])

	return (
		<>
			<header className="bg-black-100 py-6 md:py-8">
				<Container>
					<div className="flex items-center justify-between">
						{/* Logo */}
						<div className="font-bold text-xl md:text-2xl">
							<span className="text-primary">Chingu</span>
							<span className="text-secondary">Demo</span>
						</div>

						{/* Desktop nav */}
						<nav className="hidden sm:flex items-center gap-8 md:gap-12 xl:gap-16">
							<NavLink label="home" to="/" onClick={() => setOpen(false)} />
							<NavLink label="list" to="list" onClick={() => setOpen(false)} />
							<NavLink label="map" to="map" onClick={() => setOpen(false)} />
						</nav>

						{/* Mobile menu button */}
						<button
							onClick={() => setOpen(true)}
							className="sm:hidden cursor-pointer"
							aria-expanded={open}
							aria-controls="mobile-drawer"
						>
							<span className="sr-only">Open menu</span>
							<img className="w-6 h-6" src={HamburgerIcon} alt="Open menu icon." />
						</button>
					</div>
				</Container>
			</header>

			{/* Mobile nav */}
			<div
				className={`fixed inset-0 bg-black-200/50 transition-opacity ${
					open ? "opacity-100" : "opacity-0 pointer-events-none"
				}`}
				onClick={() => setOpen(false)}
				aria-hidden="true"
			/>
			<div
				id="mobile-drawer"
				role="dialog"
				aria-modal="true"
				aria-label="Mobile nav"
				className={clsx(
					"fixed top-0 right-0 h-full w-64 bg-black-200 shadow-xl transform transition-transform duration-300 ease-out px-8 pt-24",
          open ? "translate-x-0" : "translate-x-full"
        )}
			>
				<button
					onClick={() => setOpen(false)}
					className="absolute top-6 right-6 cursor-pointer"
				>
					<span className="sr-only">Close menu</span>
					<img className="w-6 h-6" src={CloseIcon} alt="Close menu icon." />
				</button>

				<nav className="flex flex-col items-start gap-4">
					<NavLink label="home" to="/" onClick={() => setOpen(false)} />
					<NavLink label="list" to="list" onClick={() => setOpen(false)} />
					<NavLink label="map" to="map" onClick={() => setOpen(false)} />
				</nav>
			</div>
		</>
	);
}
