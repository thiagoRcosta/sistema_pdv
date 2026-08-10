import { Outlet } from "react-router";
import Header from "./Header";

function Layout() {
  return (
    <div>
      <Header />
      <main className="container mx-auto mt-8">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
