import { Outlet } from "react-router-dom";
import Header from "./Header";
import MainLayout from "./MainLayout";
import NavLinks from "./NavLinks";
import EditLablesForm from "./EditLablesForm";
import { useGlobal } from "../context/GlobalContext";
function AppLayout() {
  const { editLabelsOpen } = useGlobal();
  return (
    <div>
      {editLabelsOpen && <EditLablesForm />}
      <Header />
      <MainLayout>
        <NavLinks />
        <Outlet />
      </MainLayout>
    </div>
  );
}

export default AppLayout;
