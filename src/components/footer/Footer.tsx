import Container from "../../shared/components/Container"
import GithubLogo from "../../assets/64-logo-github.svg"

export default function Footer() {
  const date:string = new Date().toDateString();

  return (
    <footer className="bg-zinc-800 text-gray-200">
      <Container>
        <div className="py-10 flex flex-col gap-y-12 md:flex-row md:justify-between">
          <section className="flex flex-col justify-between items-start gap-y-6">
            <a className="hover:opacity-75" href="https://github.com/chingu-voyages/V58-tier2-team-21" target="_blank">
              <img className="h-8 w-8" src={GithubLogo} alt="Github logo" />
            </a>
            <p className="text-sm italic">{date}</p>
          </section>
          <section className="flex flex-col gap-6 md:flex-row lg:gap-12 xl:gap-16">
            <div className="flex flex-col gap-y-2 md:gap-y-4 h-full">
              <h3 className="font-bold">Product owners</h3>
              <ul className="flex flex-col gap-y-1">
                <li>Amanda</li>
                <li>Joan</li>
              </ul>
            </div>
            <div className="flex flex-col gap-y-2 md:gap-y-4 h-full">
              <h3 className="font-bold">Scrum masters</h3>
              <ul className="flex flex-col gap-y-1">
                <li>Stephanie H</li>
                <li>chartGod</li>
              </ul>
            </div>
            <div className="flex flex-col gap-y-2 md:gap-y-4 h-full">
              <h3 className="font-bold">Web developers</h3>
              <ul className="flex flex-col gap-y-1">
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