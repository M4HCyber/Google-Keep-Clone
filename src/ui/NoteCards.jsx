import { useGlobal } from "../context/GlobalContext";
import NoteItem from "./NoteItem";

function NoteCards({ type }) {
  const { notesData } = useGlobal();
  if (type === "reminder")
    return (
      <div>
        {notesData
          .filter((noteR) => noteR.reminder)
          .map((note) => (
            <NoteItem key={note.id} note={note} />
          ))}
      </div>
    );
  return (
    <div className="grid grid-cols-4 gap-5">
      {notesData.map((note) => (
        <NoteItem key={note.id} note={note} />
      ))}
    </div>
  );
}

export default NoteCards;
