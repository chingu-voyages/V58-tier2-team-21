import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router";

export default function Layout() {
	return (
		<div className="min-h-screen flex flex-col font-nunito bg-black-100">
			<Header />
			<main className="grow">
				<Outlet />
			</main>
			<Footer />
		</div>
	)
}