import GlobeIcon from "../assets/img/48-world-pin.svg";
import Container from "../shared/components/Container";
import { Link } from "react-router";
import clsx from "clsx";

export default function Index() {
	return (
		<section className="w-full h-full relative pt-[12vh] md:pt-[16vh] lg:pt-[4vh] overflow-hidden">
			<Container>
				<div className={
					`max-w-sm md:max-w-md lg:max-w-md mx-auto flex flex-col gap-4 items-center lg:items-start text-center lg:text-left
						text-white-200 lg:relative lg:left-[20vw] xl:left-[15vw] lg:pt-[10vh]
					`}>
					<h1 className="max-w-xs text-3xl sm:max-w-none sm:text-4xl md:text-5xl font-bold leading-12 lg:leading-14">
						Discover Chingus Across the Globe
					</h1>
					<p className="text-xl">Learn about members of the Chingu community all over the world</p>
					<Link
						className="mt-4 text-lg bg-secondary hover:bg-secondary-light px-10 py-2 rounded-sm" to="list"
					>Explore now</Link>
				</div>
			</Container>
			<img
				className={clsx(
					"absolute size-96 top-[50vh] -right-28",
					"sm:w-[30em] sm:h-[30em]",
					"md:w-[35em] md:h-[35em] -right-32",
					"lg:w-[40em] lg:h-[40em] lg:top-auto lg:right-auto lg:-bottom-64 lg:-left-48 xl:-left-36",
					"xl:w-[45em] xl:h-[45em]",
					"2xl:w-[50em] 2xl:h-[50em]"
				)}
				src={GlobeIcon} alt="Globe icon." />
		</section>
	)
}