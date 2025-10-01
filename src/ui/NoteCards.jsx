import { useGlobal } from "../context/GlobalContext";
import NoteItem from "./NoteItem";
import Empty from "./Empty";
import { HiEmojiSad } from "react-icons/hi";

function NoteCards({ type }) {
  // const {searchQuery} = useGlobal();
  const { notesData, searchQuery } = useGlobal();
  let filteredNote;

  if (searchQuery.length <= 0) filteredNote = notesData;
  if (searchQuery.length > 0)
    filteredNote = notesData
      .slice()
      .filter((note) =>
        `${note.title} ${note.content}`
          .toLowerCase()
          .includes(searchQuery.toLowerCase()),
      );
  if (filteredNote.length === 0)
    return (
      <div className="mt-40">
        <Empty icon={<HiEmojiSad />}>No record found</Empty>;
      </div>
    );

  if (type === "reminder")
    return (
      <div>
        {filteredNote
          .filter((noteR) => noteR.reminder)
          .map((note) => (
            <NoteItem key={note.id} note={note} />
          ))}
      </div>
    );
  return (
    <div className="grid grid-cols-4 gap-5">
      {filteredNote.map((note) => (
        <NoteItem key={note.id} note={note} />
      ))}
    </div>
  );
}

export default NoteCards;
