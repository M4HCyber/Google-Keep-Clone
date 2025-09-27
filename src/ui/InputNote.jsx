import { AiOutlineCheckSquare, AiOutlineFontColors } from "react-icons/ai";
import ButtonIcon from "./ButtonIcon";
import ColorMenu from "./ColorMenu";
import CollaboratorMenu from "./CollaboratorMenu";
import {
  HiOutlineArrowUturnLeft,
  HiOutlineArrowUturnRight,
  HiOutlineBell,
  HiOutlineEllipsisVertical,
  HiOutlinePaintBrush,
  HiOutlinePhoto,
  HiOutlineUserPlus,
} from "react-icons/hi2";
import { BsPalette, BsPin } from "react-icons/bs";
import Button from "./Button";
import { useNoteAPI } from "../utils/useNoteAPI";
import { useReducer, useRef, useState } from "react";
import FontMenu from "./FontMenu";
import { useGlobal } from "../context/GlobalContext";
import RemindMeMenu from "./RemindMeMenu";
import { HiOutlineArchive } from "react-icons/hi";
import MoreMenu from "./MoreMenu";
import AchieveMenu from "./AchieveMenu";

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
};
function InputNote() {
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
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  function handleBlur() {
    if (!inputsValue.title || !inputsValue.content) return;
    console.log(inputsValue);
    addNote(inputsValue);

    dispatch({
      type: "resetInputs",
    });

    console.log(inputsValue);
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

  if (collaborationMenuOpen) return <CollaboratorMenu dispatch={dispatch} />;
  return (
    <div className="flex justify-center py-5" onBlur={handleBlur}>
      {fontSettingOpen && <FontMenu />}
      {colorMenuOpen && <ColorMenu />}
      {remindMeMenuOpen && <RemindMeMenu />}
      {moreMenuOpen && <MoreMenu />}
      {achievedMenuOpen && <AchieveMenu />}
      <div
        className="flex flex-row-reverse rounded-sm p-3 shadow-md/40"
        onClick={() => {
          dispatch({ type: "openInput", payload: true });
        }}
      >
        {!isInputOpen ? (
          <div className="flex gap-0">
            <ButtonIcon>
              <AiOutlineCheckSquare />
            </ButtonIcon>
            <ButtonIcon>
              <HiOutlinePaintBrush />
            </ButtonIcon>
            <ButtonIcon>
              <HiOutlinePhoto />
            </ButtonIcon>
          </div>
        ) : (
          <span className="text-2xl">
            <ButtonIcon>
              <BsPin />
            </ButtonIcon>
          </span>
        )}

        <form onSubmit={(e) => e.preventDefault()} className="flex flex-col">
          <div className="flex flex-col gap-2">
            <input
              type="text"
              name="title"
              id="title"
              onChange={handleChange}
              value={inputsValue.title}
              placeholder="Title"
              className="h-auto p-2 text-xl font-semibold outline-none placeholder:text-xl"
            />
            {isInputOpen && (
              <textarea
                name="content"
                id="content"
                onChange={handleChange}
                value={inputsValue.content}
                placeholder="Take a note..."
                className="h-auto resize-none p-2 outline-none"
              ></textarea>
            )}
          </div>
          {isInputOpen && (
            <div className="flex gap-30">
              <div className="flex gap-5">
                <ButtonIcon
                  size="small"
                  onClick={(e) => {
                    menuHandleClick(e);
                    dispatch({ type: "openFont" });
                  }}
                  onBlur={() => dispatch({ type: "openFont", payload: false })}
                >
                  <AiOutlineFontColors />
                </ButtonIcon>
                <ButtonIcon
                  size="small"
                  onClick={(e) => {
                    menuHandleClick(e);
                    dispatch({ type: "openColor" });
                  }}
                  onBlur={() => dispatch({ type: "openColor", payload: false })}
                >
                  <BsPalette />
                </ButtonIcon>
                <ButtonIcon
                  size="small"
                  onClick={(e) => {
                    menuHandleClick(e);
                    dispatch({ type: "openRemindMe" });
                  }}
                  onBlur={() =>
                    dispatch({ type: "openRemindMe", payload: false })
                  }
                >
                  <HiOutlineBell />
                </ButtonIcon>
                <ButtonIcon
                  size="small"
                  onClick={() => {
                    dispatch({ type: "openCollaboration", payload: true });
                  }}
                >
                  <HiOutlineUserPlus />
                </ButtonIcon>
                <ButtonIcon
                  size="small"
                  onClick={() => fileInputRef.current.click()}
                >
                  <HiOutlinePhoto />
                  <input
                    type="file"
                    id="pictureUpload"
                    className="hidden"
                    ref={fileInputRef}
                  />
                </ButtonIcon>

                <ButtonIcon
                  size="small"
                  onClick={() => {
                    dispatch({ type: "openAchieved", payload: true });
                  }}
                >
                  <HiOutlineArchive />
                </ButtonIcon>
                <ButtonIcon
                  size="small"
                  onClick={(e) => {
                    menuHandleClick(e);
                    dispatch({ type: "openMoreMenu" });
                  }}
                  onBlur={() =>
                    dispatch({ type: "openMoreMenu", payload: false })
                  }
                >
                  <HiOutlineEllipsisVertical />
                </ButtonIcon>
                <ButtonIcon size="small" disabled={true}>
                  <HiOutlineArrowUturnLeft />
                </ButtonIcon>
                <ButtonIcon size="small" disabled={true}>
                  <HiOutlineArrowUturnRight />
                </ButtonIcon>
              </div>
              <Button
                onClick={() => {
                  dispatch({ type: "openInput", payload: false });
                }}
              >
                Close
              </Button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default InputNote;
