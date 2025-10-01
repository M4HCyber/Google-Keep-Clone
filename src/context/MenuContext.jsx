import { createContext, useContext, useReducer, useRef } from "react";
import { useNoteAPI } from "../utils/useNoteAPI";
import { useGlobal } from "./GlobalContext";

const MenuContext = createContext();
const initialState = {
  isInputOpen: false,
  inputsValue: {
    title: "",
    content: "",
    date: new Date().toISOString(),
  },
  fontSettingOpen: false,
  colorMenuOpen: false,
  remindMeMenuOpen: false,
  collaborationMenuOpen: false,
  moreMenuOpen: false,
  achievedMenuOpen: false,
  noteContentClicked: true,
  fontSize: "",
  fontDecoration: {
    bold: false,
    italic: false,
    underline: false,
  },
  backgroundColor: "",
};
export default function MenuProvider({ children }) {
  const { addNote } = useNoteAPI();
  const { menuHandleClick } = useGlobal();
  function reducer(state, action) {
    switch (action.type) {
      case "openInput":
        return {
          ...state,
          isInputOpen: action.payload,
        };

      case "inputChange":
        return {
          ...state,
          inputsValue: {
            ...state.inputsValue,
            ...action.payload,
          },
        };

      case "resetInputs":
        return {
          ...state,
          inputsValue: {
            title: "",
            content: "",
            date: new Date().toISOString(),
          },
        };

      case "openFont":
        return {
          ...state,
          fontSettingOpen: action.payload
            ? action.payload
            : !state.fontSettingOpen,
        };

      case "openColor":
        return {
          ...state,
          colorMenuOpen: action.payload ? action.payload : !state.colorMenuOpen,
        };

      case "openMoreMenu":
        return {
          ...state,
          moreMenuOpen: action.payload ? action.payload : !state.moreMenuOpen,
        };

      case "openRemindMe":
        return {
          ...state,
          remindMeMenuOpen: action.payload
            ? action.payload
            : !state.remindMeMenuOpen,
        };

      case "openCollaboration":
        return {
          ...state,
          collaborationMenuOpen: action.payload,
        };

      case "openAchieved":
        return {
          ...state,
          achievedMenuOpen: action.payload,
        };

      case "noteContentClick":
        return {
          ...state,
          noteContentClicked: action.payload,
        };

      case "changeFont":
        return {
          ...state,
          fontSize: action.payload,
        };
      case "changeDecoration":
        return {
          ...state,
          fontDecoration: {
            ...state.fontDecoration,
            ...action.payload,
          },
        };
      case "changeBackgroundColor":
        return {
          ...state,
          backgroundColor: action.payload,
        };
    }
  }
  const [
    {
      isInputOpen,
      inputsValue,
      fontSettingOpen,
      collaborationMenuOpen,
      colorMenuOpen,
      remindMeMenuOpen,
      moreMenuOpen,
      achievedMenuOpen,
      noteContentClicked,
      fontSize,
      fontDecoration,
      backgroundColor,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  function handleBlur() {
    if (!inputsValue.title || !inputsValue.content) return;
    // console.log(inputsValue);
    addNote(inputsValue);

    dispatch({
      type: "resetInputs",
    });

    // console.log(inputsValue);
  }

  function handleChange(e) {
    e.preventDefault();
    const { value, name } = e.target;
    dispatch({
      type: "inputChange",
      payload: { [name]: value },
    });
    // setInputsValue((prev) => {
    //   return {
    //     ...prev,
    //     [name]: value,
    //   };
    // });
  }

  // function handleDelete(id) {
  //   setNote((note) => note.filter((n) => n.id !== id));
  // }

  const fileInputRef = useRef(null);

  return (
    <MenuContext.Provider
      value={{
        dispatch,
        menuHandleClick,
        fileInputRef,
        handleChange,
        handleBlur,
        isInputOpen,
        inputsValue,
        fontSettingOpen,
        collaborationMenuOpen,
        colorMenuOpen,
        remindMeMenuOpen,
        moreMenuOpen,
        achievedMenuOpen,
        noteContentClicked,
        fontSize,
        fontDecoration,
        backgroundColor,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
}

export function useMenu() {
  const context = useContext(MenuContext);
  if (context === undefined)
    throw new Error("MenuContext was used outside MenuProvider");
  return context;
}
