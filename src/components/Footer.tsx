import Container from "../shared/components/Container";
import GithubLogo from "../assets/img/64-logo-github.svg";

export default function Footer() {
  const date: string = new Date().toDateString();

  return (
    <footer className="bg-black-200 rounded-lg px-4 mt-3">
      <Container>
        <div className="text-white-200 flex flex-col justify-center items-center gap-4 sm:flex-row sm:justify-between text-center sm:text-left text-xs py-2">
          <section className="flex items-center gap-4">
            <a
              className="hover:opacity-75"
              href="https://github.com/chingu-voyages/V58-tier2-team-21/"
              target="_blank"
            >
              <img className="w-6 h-6" src={GithubLogo} alt="Github logo." />
            </a>
            <p className="italic">{date}</p>
          </section>
          <section>
            <p className="text-[10px] uppercase tracking-wide text-white-400">
              Developers:
            </p>
            <p>
              Bastien Winant <span className="opacity-40">•</span> Lilla Tóth
            </p>
          </section>
          <section>
            <p className="text-[10px] uppercase tracking-wide text-white-400">
              Scrum Masters:
            </p>
            <p>
              Stephanie H <span className="opacity-40">•</span> chartGod
            </p>
          </section>
          <section>
            <p className="text-[10px] uppercase tracking-wide text-white-400">
              Product Owner:
            </p>
            <p>Amanda</p>
          </section>
          <section className="flex items-center gap-2">
            <p>Voyage 58</p>
            <span className="opacity-40">•</span>
            <p>Tier 2</p>
            <span className="opacity-40">•</span>
            <p>Team 21</p>
          </section>
        </div>
      </Container>
    </footer>
  );
}
