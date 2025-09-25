import { useGlobal } from "../context/GlobalContext";

export function useNoteAPI() {
  const { dispatch } = useGlobal();
  function addNote(newNote) {
    fetch("http://localhost:800/notes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newNote),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Note added:", data);
        // update your React state so UI shows new note
        dispatch({ type: "addNote", payload: data });
      });
  }

  function deleteNote(id) {
    //   const { dispatch } = useGlobal();
    fetch(`http://localhost:800/notes/${id}`, {
      method: "DELETE",
    }).then(() => {
      console.log("Note deleted:", id);
      // update state to remove it from UI
      // dispatch({ type: "deleteNote", payload: id });
      // setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
    });
  }

  return { addNote, deleteNote };
}
