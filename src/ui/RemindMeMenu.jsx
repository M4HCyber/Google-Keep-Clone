import { HiOutlineLocationMarker } from "react-icons/hi";
import Menu from "./Menu";
import { HiOutlineClock } from "react-icons/hi2";

function RemindMeMenu() {
  return (
    <Menu type="noPadding">
      <div className="flex flex-col gap-3 px-3 py-1">
        <h3>Remind me later</h3>
        <p className="mb-2 text-xs">Saved in Google Reminders</p>
      </div>
      <div className="flex flex-col text-xs">
        <div className="flex cursor-pointer justify-between gap-10 p-3 hover:bg-gray-100">
          <p>Later Today</p>
          <p>20:00</p>
        </div>
        <div className="flex cursor-pointer justify-between gap-10 p-3 hover:bg-gray-100">
          <p>Tomorrow</p>
          <p>08:00</p>
        </div>
        <div className="flex cursor-pointer justify-between gap-10 p-3 hover:bg-gray-100">
          <p>Next week</p>
          <p>Mon, 08:00</p>
        </div>
        <div className="p-3p-3 flex cursor-pointer justify-between gap-10 p-3 hover:bg-gray-100">
          <p>Home</p>
          <p>Azare</p>
        </div>
        <div className="flex cursor-pointer justify-between gap-10 p-3 hover:bg-gray-100">
          <p>Work</p>
          <p>Silicon Rubi Cyber Cafe Azare</p>
        </div>
        <div>
          <div className="flex cursor-pointer items-center gap-2 p-3 hover:bg-gray-100">
            <HiOutlineClock />
            <span>Select date and time</span>
          </div>
          <div className="flex cursor-pointer items-center gap-2 p-3 hover:bg-gray-100">
            <HiOutlineLocationMarker />
            <span>Select Place</span>
          </div>
        </div>
      </div>
    </Menu>
  );
}

export default RemindMeMenu;
