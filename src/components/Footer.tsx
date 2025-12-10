import Container from "../shared/components/Container";
import GithubLogo from "../assets/img/64-logo-github.svg";

export default function Footer() {
  const date: string = new Date().toDateString();

  return (
    <footer className="bg-black-200">
      <Container>
        <div className="h-24 sm:h-12 text-white-200 flex flex-col justify-center items-center gap-4 sm:flex-row sm:justify-between sm:items-center text-xs">
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
          <section className="flex items-center gap-2">
            <p>Voyage 58</p>
            <span>•</span>
            <p>Tier 2</p>
            <span>•</span>
            <p>Team 21</p>
          </section>
        </div>
      </Container>
    </footer>
  );
}