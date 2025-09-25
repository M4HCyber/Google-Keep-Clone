import { useGlobal } from "../context/GlobalContext";
import Empty from "../ui/Empty";
import InputNote from "../ui/InputNote";
import NoteCards from "../ui/NoteCards";

function Notes() {
  const { notesData } = useGlobal();
  return (
    <div
      className={`flex py-10 px-10 text-gray-700 flex-col ${
        !notesData ? "gap-20" : "gap-5"
      }`}
    >
      <InputNote />
      {notesData ? <NoteCards /> : <Empty />}
    </div>
  );
}

export default Notes;
