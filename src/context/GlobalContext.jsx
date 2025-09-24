import { createContext, useContext, useReducer } from "react";

const GlobalContext = createContext();

const initialState = {
  isNavOpen: true,
};

export default function GlobalProvider({ children }) {
  function reducer(state, action) {
    switch (action.type) {
      case "navOpen":
        return {
          ...state,
          isNavOpen: state.payload ? true : !state.isNavOpen,
        };
    }
  }

  const [{ isNavOpen }, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalContext.Provider value={{ isNavOpen, dispatch }}>
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
