import { HiXMark } from "react-icons/hi2";
import ButtonIcon from "./ButtonIcon";
import Button from "./Button";

function AchieveMenu() {
  return (
    <div className="absolute bottom-5 left-10 z-100 flex items-center justify-between gap-30 bg-gray-800 px-5 py-3 text-gray-50">
      <p>Note achieved</p>
      <div className="flex justify-between">
        <Button colored="colored">Undo</Button>
        <ButtonIcon size="small" grayed="grayed">
          <HiXMark />
        </ButtonIcon>
      </div>
    </div>
  );
}

export default AchieveMenu;
