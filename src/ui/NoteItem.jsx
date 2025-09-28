import { AiOutlineFontColors } from "react-icons/ai";
import ButtonIcon from "./ButtonIcon";
import { BsPalette, BsPin } from "react-icons/bs";
import {
  HiCheckCircle,
  HiOutlineBell,
  HiOutlineEllipsisVertical,
  HiOutlinePhoto,
  HiOutlineUserPlus,
} from "react-icons/hi2";
import { useState } from "react";
import ToolsMenu from "./ToolsMenu";

function NoteItem({ note: { title, content } }) {
  const [isHover, setIsHover] = useState(false);
  return (
    <div
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className="relative flex h-fit w-[17rem] flex-row-reverse justify-between rounded-xl border-[1px] border-gray-200 px-5 py-3 hover:shadow-sm/50"
    >
      <span
        className={`${
          isHover ? "visible" : "invisible"
        } absolute -top-5 -left-5`}
      >
        <ButtonIcon>
          <HiCheckCircle />
        </ButtonIcon>
      </span>
      <span
        className={`${
          isHover ? "visible" : "invisible"
        } absolute top-1 right-1`}
      >
        <ButtonIcon size="smaller" fit="fit">
          <BsPin />
        </ButtonIcon>
      </span>
      <div className="flex w-full flex-col justify-between gap-2">
        <div>
          <h3 className="font-medium">{title}</h3>
          <p className="text-sm">{content}</p>
        </div>
        <div className={`${isHover ? "visible" : "invisible"} flex gap-2`}>
          <ToolsMenu size="small" />
          {/* <ButtonIcon size="smaller">
            <AiOutlineFontColors />
          </ButtonIcon>
          <ButtonIcon size="smaller">
            <BsPalette />{" "}
          </ButtonIcon>
          <ButtonIcon size="smaller">
            <HiOutlineBell />
          </ButtonIcon>
          <ButtonIcon size="smaller">
            <HiOutlineUserPlus />
          </ButtonIcon>
          <ButtonIcon size="smaller">
            <HiOutlinePhoto />
          </ButtonIcon>
          <ButtonIcon size="smaller">
            <HiOutlineEllipsisVertical />
          </ButtonIcon> */}
        </div>
      </div>
    </div>
  );
}

export default NoteItem;
