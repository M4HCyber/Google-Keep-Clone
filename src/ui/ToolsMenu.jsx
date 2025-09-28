import { HiOutlineArchive } from "react-icons/hi";
import ButtonIcon from "./ButtonIcon";
import {
  HiOutlineBell,
  HiOutlineEllipsisVertical,
  HiOutlinePhoto,
  HiOutlineUserPlus,
} from "react-icons/hi2";
import { BsPalette } from "react-icons/bs";
import { AiOutlineFontColors } from "react-icons/ai";
import { useMenu } from "../context/MenuContext";

function ToolsMenu({ size }) {
  const { dispatch, menuHandleClick, noteContentClicked, fileInputRef } =
    useMenu();

  if (size)
    return (
      <div className="flex gap-2">
        <ButtonIcon
          size="smaller"
          onClick={(e) => {
            menuHandleClick(e);
            dispatch({ type: "openColor" });
          }}
          // onBlur={() =>
          //   dispatch({ type: "openColor", payload: false })
          // }
        >
          <BsPalette />
        </ButtonIcon>
        <ButtonIcon
          size="smaller"
          onClick={(e) => {
            menuHandleClick(e);
            dispatch({ type: "openRemindMe" });
          }}
          onBlur={() => dispatch({ type: "openRemindMe", payload: false })}
        >
          <HiOutlineBell />
        </ButtonIcon>
        <ButtonIcon
          size="smaller"
          onClick={() => {
            dispatch({ type: "openCollaboration", payload: true });
          }}
        >
          <HiOutlineUserPlus />
        </ButtonIcon>
        <ButtonIcon size="smaller" onClick={() => fileInputRef.current.click()}>
          <HiOutlinePhoto />
          <input
            type="file"
            id="pictureUpload"
            className="hidden"
            ref={fileInputRef}
          />
        </ButtonIcon>

        <ButtonIcon
          size="smaller"
          onClick={() => {
            dispatch({ type: "openAchieved", payload: true });
          }}
        >
          <HiOutlineArchive />
        </ButtonIcon>
        <ButtonIcon
          size="smaller"
          onClick={(e) => {
            menuHandleClick(e);
            dispatch({ type: "openMoreMenu" });
          }}
          onBlur={() => dispatch({ type: "openMoreMenu", payload: false })}
        >
          <HiOutlineEllipsisVertical />
        </ButtonIcon>
      </div>
    );
  return (
    <div className="flex gap-5">
      <ButtonIcon
        size="small"
        onClick={(e) => {
          menuHandleClick(e);
          dispatch({ type: "openFont" });
        }}
        // onBlur={() =>
        //   dispatch({ type: "openFont", payload: false })
        // }
        disabled={noteContentClicked}
      >
        <AiOutlineFontColors />
      </ButtonIcon>
      <ButtonIcon
        size="small"
        onClick={(e) => {
          menuHandleClick(e);
          dispatch({ type: "openColor" });
        }}
        // onBlur={() =>
        //   dispatch({ type: "openColor", payload: false })
        // }
      >
        <BsPalette />
      </ButtonIcon>
      <ButtonIcon
        size="small"
        onClick={(e) => {
          menuHandleClick(e);
          dispatch({ type: "openRemindMe" });
        }}
        onBlur={() => dispatch({ type: "openRemindMe", payload: false })}
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
      <ButtonIcon size="small" onClick={() => fileInputRef.current.click()}>
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
        onBlur={() => dispatch({ type: "openMoreMenu", payload: false })}
      >
        <HiOutlineEllipsisVertical />
      </ButtonIcon>
    </div>
  );
}

export default ToolsMenu;
