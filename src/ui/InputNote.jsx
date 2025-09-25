import { AiOutlineCheckSquare, AiOutlineFontColors } from "react-icons/ai";
import ButtonIcon from "./ButtonIcon";
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
import { useReducer, useState } from "react";
import FontMenu from "./FontMenu";
import { useGlobal } from "../context/GlobalContext";

const initialState = {
  inputsValue: {
    title: "",
    content: "",
    date: new Date().toISOString(),
  },
  fontSettingOpen: false,
};
function InputNote() {
  const { addNote } = useNoteAPI();
  const { menuHandleClick } = useGlobal();
  function reducer(state, action) {
    switch (action.type) {
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
          fontSettingOpen: !state.fontSettingOpen,
        };
    }
  }
  const [{ inputsValue, fontSettingOpen }, dispatch] = useReducer(
    reducer,
    initialState
  );
  // const [inputsValue, setInputsValue] = useState({
  //   title: "",
  //   content: "",
  //   date: new Date().toISOString(),
  // });
  const [isOpen, setIsOpen] = useState(false);

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
  console.log(fontSettingOpen);
  return (
    <div className="flex justify-center py-5" onBlur={handleBlur}>
      {fontSettingOpen && <FontMenu />}
      <div
        className="shadow-md/35 p-3 rounded-sm flex flex-row-reverse"
        onClick={() => setIsOpen(true)}
      >
        {!isOpen ? (
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
              className="p-2 placeholder:text-xl h-auto text-xl font-semibold outline-none"
            />
            {isOpen && (
              <textarea
                name="content"
                id="content"
                onChange={handleChange}
                value={inputsValue.content}
                placeholder="Take a note..."
                className="resize-none p-2 h-auto outline-none"
              ></textarea>
            )}
          </div>
          {isOpen && (
            <div className="flex gap-30">
              <div className="flex gap-5">
                <ButtonIcon
                  size="small"
                  onClick={(e) => {
                    menuHandleClick(e);
                    dispatch({ type: "openFont" });
                  }}
                  onBlur={() => dispatch({ type: "openFont" })}
                >
                  <AiOutlineFontColors />
                </ButtonIcon>
                <ButtonIcon size="small">
                  <BsPalette />{" "}
                </ButtonIcon>
                <ButtonIcon size="small">
                  <HiOutlineBell />
                </ButtonIcon>
                <ButtonIcon size="small">
                  <HiOutlineUserPlus />
                </ButtonIcon>
                <ButtonIcon size="small">
                  <HiOutlinePhoto />
                </ButtonIcon>
                <ButtonIcon size="small">
                  <HiOutlineEllipsisVertical />
                </ButtonIcon>
                <ButtonIcon size="small" disabled={true}>
                  <HiOutlineArrowUturnLeft />
                </ButtonIcon>
                <ButtonIcon size="small" disabled={true}>
                  <HiOutlineArrowUturnRight />
                </ButtonIcon>
              </div>
              <Button>Close</Button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default InputNote;
