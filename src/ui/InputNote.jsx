import { AiOutlineFontColors } from "react-icons/ai";
import ButtonIcon from "./ButtonIcon";
import {
  HiOutlineArrowUturnLeft,
  HiOutlineArrowUturnRight,
  HiOutlineBell,
  HiOutlineEllipsisVertical,
  HiOutlinePhoto,
  HiOutlineUserPlus,
} from "react-icons/hi2";
import { BsPalette, BsPin } from "react-icons/bs";
import Button from "./Button";

function InputNote() {
  return (
    <div className="flex justify-center py-5">
      <div className="shadow-md/30 p-3 rounded-sm flex flex-row-reverse">
        <span className="text-2xl">
          <BsPin />
        </span>
        <form action="" className="flex flex-col">
          <div className="flex flex-col gap-2">
            <input
              type="text"
              name="title"
              id="title"
              placeholder="Title"
              className="p-2 placeholder:text-xl h-auto text-xl font-semibold outline-none"
            />
            <textarea
              name="content"
              id="content"
              placeholder="Take a note..."
              className="resize-none p-2 h-auto outline-none"
            ></textarea>
          </div>
          <div className="flex gap-30">
            <div className="flex gap-5">
              <ButtonIcon size="small">
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
        </form>
      </div>
    </div>
  );
}

export default InputNote;
