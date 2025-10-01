import { Outlet } from "react-router-dom";
import Header from "./Header";
import MainLayout from "./MainLayout";
import NavLinks from "./NavLinks";
import EditLablesForm from "./EditLablesForm";
import { useGlobal } from "../context/GlobalContext";
import DeleteAlert from "./DeleteAlert";
function AppLayout() {
  const { editLabelsOpen, deleteLabelOpen } = useGlobal();
  return (
    <div>
      {editLabelsOpen && <EditLablesForm />}
      {deleteLabelOpen && (
        <DeleteAlert>
          We will delete this label and remove it from all of your Keep
          notes.Your notes will not be deleted
        </DeleteAlert>
      )}
      <Header />
      <MainLayout>
        <NavLinks />
        <div className="h-dvh overflow-auto">
          <Outlet />
        </div>
      </MainLayout>
    </div>
  );
}

export default AppLayout;
