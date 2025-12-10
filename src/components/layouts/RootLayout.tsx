import { Outlet } from "react-router";
import Header from "../Header.tsx";
import Footer from "../Footer.tsx";

export default function RootLayout() {
	return (
		<div className="min-h-screen flex flex-col bg-black-100 font-nunito">
			<Header />
			<main className="flex grow h-full">
				<Outlet />
			</main>
			<Footer />
		</div>
	)
}