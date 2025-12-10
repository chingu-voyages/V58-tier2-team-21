import { Outlet } from "react-router";
import Header from "../Header.tsx";
import Footer from "../Footer.tsx";

export default function RootLayout() {
	return (
		<div className="bg-black-100 font-nunito">
			<Header />
			<main className="h-[calc(100vh-(56px+96px))] sm:h-[calc(100vh-(56px+48px))] md:h-[calc(100vh-(80px+48px))]">
				<Outlet />
			</main>
			<Footer />
		</div>
	)
}