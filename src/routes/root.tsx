import Header from "../components/header/Header"
import Footer from "../components/footer/Footer"
import Container from "../shared/components/Container.tsx"
import { Outlet } from "react-router"

export default function Root() {
  return (
    <div className="min-h-screen flex flex-col bg-teal-300">
      <Header />
      <main className="grow bg-amber-300">
        <Container>
          <Outlet />
        </Container>
      </main>
      <Footer />
    </div>
  )
}