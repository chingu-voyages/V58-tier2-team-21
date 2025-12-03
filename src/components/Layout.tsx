import Header from "./header/Header"
import Footer from "./Footer"
import Container from "../shared/components/Container.tsx"
import { Outlet } from "react-router"

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-black-100 text-sans">
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