import { AiOutlineCheckSquare } from "react-icons/ai";
import ButtonIcon from "./ButtonIcon";
import ColorMenu from "./ColorMenu";
import CollaboratorMenu from "./CollaboratorMenu";
import {
  HiOutlineArrowUturnLeft,
  HiOutlineArrowUturnRight,
  HiOutlinePaintBrush,
  HiOutlinePhoto,
} from "react-icons/hi2";
import Button from "./Button";
import FontMenu from "./FontMenu";
import RemindMeMenu from "./RemindMeMenu";
import MoreMenu from "./MoreMenu";
import AchieveMenu from "./AchieveMenu";
import ToolsMenu from "./ToolsMenu";
import { useMenu } from "../context/MenuContext";
import { BsPin } from "react-icons/bs";

function InputNote() {
  const {
    dispatch,
    fontSettingOpen,
    colorMenuOpen,
    remindMeMenuOpen,
    moreMenuOpen,
    achievedMenuOpen,
    backgroundColor,
    collaborationMenuOpen,
    handleBlur,
    isInputOpen,
    handleChange,
    inputsValue,
    fontSize,
    fontDecoration,
  } = useMenu();
  if (collaborationMenuOpen) return <CollaboratorMenu dispatch={dispatch} />;
  return (
    <>
      {fontSettingOpen && <FontMenu dispatch={dispatch} />}
      {colorMenuOpen && <ColorMenu dispatch={dispatch} />}
      {remindMeMenuOpen && <RemindMeMenu />}
      {moreMenuOpen && <MoreMenu />}
      {achievedMenuOpen && <AchieveMenu />}
      <div className="flex justify-center py-5" onBlur={handleBlur}>
        <div
          style={{ background: backgroundColor }}
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
                  onClick={() =>
                    dispatch({ type: "noteContentClick", payload: false })
                  }
                  // onBlur={() =>
                  //   dispatch({ type: "noteContentClick", payload: true })
                  // }
                  value={inputsValue.content}
                  placeholder="Take a note..."
                  style={{ fontSize: fontSize }}
                  className={`h-auto ${fontDecoration.underline ? "underline" : ""} ${fontDecoration.italic ? "italic" : ""} font-${fontDecoration.bold ? "bold" : ""} resize-none p-2 outline-none`}

                  // className={`h-auto ${fontDecoration.underline} ${fontDecoration.italic} font-${fontDecoration.bold} resize-none p-2 outline-none`}
                ></textarea>
              )}
            </div>
            {isInputOpen && (
              <div className="flex gap-30">
                <div className="flex gap-5">
                  <ToolsMenu />
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
    </>
  );
}

export default InputNote;
