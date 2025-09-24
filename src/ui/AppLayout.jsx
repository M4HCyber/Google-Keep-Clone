import { Outlet } from "react-router-dom";
import Header from "./Header";
import MainLayout from "./MainLayout";
import NavLinks from "./NavLinks";
function AppLayout() {
  return (
    <div>
      <Header />
      <MainLayout>
        <NavLinks />
        <Outlet />
      </MainLayout>
    </div>
  );
}

export default AppLayout;
