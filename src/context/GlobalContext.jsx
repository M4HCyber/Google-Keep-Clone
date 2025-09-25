import { createContext, useContext, useEffect, useReducer } from "react";

const GlobalContext = createContext();

const initialState = {
  isNavOpen: true,
  notesData: [],
  menuPosition: null,
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
            (note) => note.id !== state.payload.id
          ),
        };
      case "menuPosition":
        return {
          ...state,
          menuPosition: action.payload,
        };
    }
  }

  const [{ isNavOpen, notesData, menuPosition }, dispatch] = useReducer(
    reducer,
    initialState
  );

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

  console.log(notesData);
  return (
    <GlobalContext.Provider
      value={{ isNavOpen, dispatch, notesData, menuHandleClick, menuPosition }}
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
