import { createContext, useContext, useEffect, useReducer } from "react";

const GlobalContext = createContext();
const initialState = {
  searchQuery: "",
  isNavOpen: true,
  notesData: [],
  menuPosition: null,
  editLabelsOpen: false,
  labelsData: [],
  newLabels: [],
  deleteLabelOpen: "",
};

export default function GlobalProvider({ children }) {
  function reducer(state, action) {
    switch (action.type) {
      case "navOpen":
        return {
          ...state,
          isNavOpen: action.payload ?? !state.isNavOpen,
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
      case "receivedLabel":
        return {
          ...state,
          labelsData: action.payload,
        };
      case "addlabel":
        return {
          ...state,
          newLabels: [...state.newLabels, ...action.payload],
        };

      case "daleteLabel":
        return {
          ...state,
          newLabels: state.newLabels.filter(
            (label) => label.id !== action.payload,
          ),
        };
      case "deleteLabelAlert":
        return {
          ...state,
          deleteLabelOpen: action.payload,
        };
      case "search":
        return {
          ...state,
          searchQuery: action.payload,
        };
    }
  }

  const [
    {
      isNavOpen,
      notesData,
      menuPosition,
      editLabelsOpen,
      deleteLabelOpen,
      newLabels,
      labelsData,
      searchQuery,
    },
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
    const URL = "http://localhost:800/";
    async function fetchNote() {
      const res = await fetch(`${URL}notes`);
      const data = await res.json();
      dispatch({ type: "receivedData", payload: data });
    }
    fetchNote();

    async function fetchLabel() {
      const res = await fetch(`${URL}labels`);
      const data = await res.json();
      dispatch({ type: "receivedLabel", payload: data });
    }
    fetchLabel();
  }, []);
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
        newLabels,
        labelsData,
        searchQuery,
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
