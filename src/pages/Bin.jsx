import { HiTrash } from "react-icons/hi2";
import Empty from "../ui/Empty";

function Bin() {
  return (
    <div className="grid-row[0.1fr_auto] grid h-dvh justify-evenly py-5">
      <p className="font-medium italic">
        Notes in the Recycle Bin are delted after 7 days
      </p>
      <Empty icon={<HiTrash />}>No notes in Recyle Bin</Empty>
    </div>
  );
}

export default Bin;
