import { HiOutlineLightBulb } from "react-icons/hi2";
import { useGlobal } from "../context/GlobalContext";
import Empty from "../ui/Empty";
import InputNote from "../ui/InputNote";
import NoteCards from "../ui/NoteCards";

function Notes() {
  const { notesData } = useGlobal();
  return (
    <div
      className={`flex h-dvh flex-col px-10 py-10 text-gray-700 ${
        !notesData ? "gap-20" : "gap-5"
      }`}
    >
      <InputNote />
      {notesData ? (
        <NoteCards />
      ) : (
        <Empty icon={<HiOutlineLightBulb />}>
          Notes that you add appear hear
        </Empty>
      )}
    </div>
  );
}

export default Notes;
