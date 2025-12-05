import Container from "../shared/components/Container";
import GithubLogo from "../assets/img/64-logo-github.svg"

export default function Footer() {
	const date:string = new Date().toDateString();

	return (
		<footer className="bg-black-200 py-8">
			<Container>
				<div className="text-white-200 flex justify-between pr-8 sm:flex-col sm:gap-12 sm:px-0 md:flex-row md:justify-between md:gap-0">
					<section className="flex flex-col gap-6 items-start sm:justify-between md:gap-0">
						<a className="hover:opacity-75" href="https://github.com/chingu-voyages/V58-tier2-team-21/" target="_blank">
							<img className="w-8 h-8" src={GithubLogo} alt="Github logo." />
						</a>
						<p className="text-sm italic">{date}</p>
					</section>
					<section className="flex flex-col gap-4 sm:flex-row sm:justify-between md:gap-14 lg:gap-16 xl:gap-20">
						<div className="flex flex-col gap-2">
							<h3 className="font-bold">Product owners</h3>
							<ul className="flex flex-col gap-1">
								<li>Amanda</li>
								<li>Joan</li>
							</ul>
						</div>
						<div className="flex flex-col gap-2">
							<h3 className="font-bold">Scrum masters</h3>
							<ul className="flex flex-col gap-1">
								<li>Stephanie H</li>
								<li>chartGod</li>
							</ul>
						</div>
						<div className="flex flex-col gap-2">
							<h3 className="font-bold">Web developers</h3>
							<ul className="flex flex-col gap-1">
								<li>LillaT</li>
								<li>Bastien Winant</li>
							</ul>
						</div>
					</section>
				</div>
			</Container>
		</footer>
	)
}