import { HiCheck, HiXMark } from "react-icons/hi2";
import ButtonIcon from "./ButtonIcon";
import Overlay from "./Overlay";
import Button from "./Button";

function EditLablesForm() {
  return (
    <Overlay>
      <div className="bg-white">
        <div className="">
          <h3 className="px-5 py-4">Edit Labels</h3>
        </div>
        <div className="flex gap-3 px-5 py-2">
          <ButtonIcon size="smaller">
            <HiXMark />
          </ButtonIcon>
          <input
            type="text"
            placeholder="Creat new label"
            className="text-sm outline-none"
          />
          <ButtonIcon size="smaller">
            <HiCheck />
          </ButtonIcon>
        </div>
        <div className="flex gap-3 px-5 py-2">
          <ButtonIcon size="smaller">
            <HiXMark />
          </ButtonIcon>
          <input
            type="text"
            placeholder="Creat new label"
            className="text-sm outline-none"
          />
          <ButtonIcon size="smaller">
            <HiCheck />
          </ButtonIcon>
        </div>
        <div className="flex justify-end border-t-[1px] border-gray-200 px-5 py-4">
          <Button>Done</Button>
        </div>
      </div>
    </Overlay>
  );
}

export default EditLablesForm;
