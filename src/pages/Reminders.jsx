import InputNote from "../ui/InputNote";
import Empty from "../ui/Empty";
import ReminderNoteCards from "../ui/ReminderNoteCards";
import { useGlobal } from "../context/GlobalContext";
import { HiOutlineBellAlert } from "react-icons/hi2";
import NoteCards from "../ui/NoteCards";
function Reminders() {
  const { notesData } = useGlobal();
  return (
    <div
      className={`flex flex-col px-10 py-10 text-gray-700 ${
        !notesData ? "gap-20" : "gap-5"
      }`}
    >
      <InputNote />
      {notesData ? (
        <NoteCards type="reminder" />
      ) : (
        <Empty icon={<HiOutlineBellAlert />}>
          Notes with upcoming reminders appear here
        </Empty>
      )}
    </div>
  );
}

export default Reminders;
