import { Outlet } from "react-router";

export default function Layout() {
  return (
    <div className="layout">
      <main>
        <Outlet />
      </main>
    </div>
  );
}
