import { Outlet } from "react-router";
import Header from "../Header.tsx";
import Footer from "../Footer.tsx";

export default function RootLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-black-100 font-nunito">
      <div className="w-full max-w-7xl mx-auto px-4 flex flex-col grow">
        <Header />
        <main className="flex grow h-full bg-blue-600">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}
