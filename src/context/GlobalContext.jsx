import { createContext, useContext, useEffect, useReducer } from "react";

const GlobalContext = createContext();
const labels = [
  { id: crypto.randomUUID(), label: "Mahmoud" },
  { id: crypto.randomUUID(), label: "Mahmoud" },
];
const initialState = {
  isNavOpen: true,
  notesData: [],
  menuPosition: null,
  editLabelsOpen: false,
  newLabels: [],
  deleteLabelOpen: false,
};

export default function GlobalProvider({ children }) {
  function reducer(state, action) {
    switch (action.type) {
      case "navOpen":
        return {
          ...state,
          isNavOpen: state.payload ? true : !state.isNavOpen,
        };
      case "receivedData":
        return {
          ...state,
          notesData: action.payload,
        };

      case "addNote":
        return {
          ...state,
          notesData: [...state.notesData, action.payload],
        };

      case "deleteNote":
        return {
          ...state,
          notesData: state.notesData.filter(
            (note) => note.id !== state.payload.id,
          ),
        };
      case "menuPosition":
        return {
          ...state,
          menuPosition: action.payload,
        };

      case "editLabelOpen":
        return {
          ...state,
          editLabelsOpen: !state.editLabelsOpen,
        };
      case "addlabel":
        return {
          ...state,
          newLabels: {
            ...state.newLabels,
            ...action.payload,
          },
        };
      case "deleteLabelAlert":
        return {
          ...state,
          deleteLabelOpen: action.payload,
        };
    }
  }

  const [
    { isNavOpen, notesData, menuPosition, editLabelsOpen, deleteLabelOpen },
    dispatch,
  ] = useReducer(reducer, initialState);

  function menuHandleClick(e) {
    const rect = e.target.closest("button").getBoundingClientRect();
    dispatch({
      type: "menuPosition",
      payload: {
        x: rect.x,
        y: rect.y + rect.height + 8,
      },
    });
  }

  useEffect(() => {
    async function fetchNote() {
      const res = await fetch("http://localhost:800/notes");
      const data = await res.json();
      dispatch({ type: "receivedData", payload: data });
    }
    fetchNote();
  }, []);

  console.log(editLabelsOpen);
  return (
    <GlobalContext.Provider
      value={{
        isNavOpen,
        dispatch,
        notesData,
        menuHandleClick,
        menuPosition,
        editLabelsOpen,
        deleteLabelOpen,
        labels,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export function useGlobal() {
  const context = useContext(GlobalContext);
  if (context === undefined)
    throw new Error("GlobalContext was used outside GlobalProvider");
  return context;
}
