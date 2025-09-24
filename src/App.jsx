import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Notes from "./pages/Notes";
import Reminders from "./pages/Reminders";
import EditLabels from "./pages/EditLabels";
import Archive from "./pages/Archive";
import Bin from "./pages/Bin";
import AppLayout from "./ui/AppLayout";
import GlobalContext from "./context/GlobalContext";
function App() {
  return (
    <GlobalContext>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="notes" />} />
            <Route path="notes" element={<Notes />} />
            <Route path="reminders" element={<Reminders />} />
            <Route path="edit-labels" element={<EditLabels />} />
            <Route path="archive" element={<Archive />} />
            <Route path="bin" element={<Bin />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalContext>
  );
}

export default App;
