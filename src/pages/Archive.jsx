import { HiArchive } from "react-icons/hi";
import Empty from "../ui/Empty";
import { HiArchiveBox } from "react-icons/hi2";

function Archive() {
  return (
    <div className="flex h-dvh items-center justify-center">
      <Empty icon={<HiArchiveBox />}>Your Achieved notes appear here</Empty>
    </div>
  );
}

export default Archive;
