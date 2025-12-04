import { Outlet } from "react-router";

export default function Layout({ children }: { children?: React.ReactNode }) {
  return (
    <div className="bg-backgroundLighter layout">
      <main>
        {children}
        <Outlet />
      </main>
    </div>
  );
}
