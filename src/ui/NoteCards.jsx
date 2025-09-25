import { useGlobal } from "../context/GlobalContext";
import NoteItem from "./NoteItem";

function NoteCards() {
  const { notesData } = useGlobal();
  return (
    <div className="grid grid-cols-4 gap-5">
      {notesData.map((note) => (
        <NoteItem key={note.id} note={note} />
      ))}
    </div>
  );
}

export default NoteCards;
