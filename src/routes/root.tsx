import Header from "../components/header/Header"
import Footer from "../components/footer/Footer"
import Container from "../shared/components/Container.tsx"
import { Outlet } from "react-router"

export default function Root() {
  return (
    <div className="min-h-screen flex flex-col bg-(--color-black-100) text-(--font--sans)">
      <Header />
      <main className="grow">
        <Container>
          <Outlet />
        </Container>
      </main>
      <Footer />
    </div>
  )
}