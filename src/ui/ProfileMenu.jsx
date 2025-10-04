import { HiArrowDown, HiChevronDown, HiXMark } from "react-icons/hi2";
import ButtonIcon from "./ButtonIcon";
import Menu from "./Menu";

function ProfileMenu() {
  return (
    <Menu type="google">
      <div className="flex w-[400px] flex-col gap-5 p-5">
        <div className="flex items-center justify-between">
          <p>m4hcyber@gmail.com</p>
          <ButtonIcon size="small">
            <HiXMark />
          </ButtonIcon>
        </div>
        <div className="flex flex-col items-center gap-3">
          <div className="rounded-round h-[100px] w-[100px] cursor-pointer p-[3px] hover:bg-gray-100">
            <img
              src="img/square-passport.png"
              alt=""
              className="rounded-round"
            />
          </div>
          <p className="font-medium">Hi, Mahmoud!</p>
          <button className="cursor-pointer rounded-2xl border-[2px] border-gray-400 px-5 py-2 text-blue-500">
            Manage your Google Account
          </button>
        </div>
        <div className="flex items-center justify-between rounded-2xl bg-white px-5 py-2">
          <p>Show more accounts</p>
          <div className="flex cursor-pointer items-center gap-3">
            <button className="rounded-round flex h-[30px] w-[30px] cursor-pointer items-center justify-center bg-blue-500 p-2 text-white hover:opacity-85">
              A
            </button>
            <button className="rounded-round flex h-[30px] w-[30px] cursor-pointer items-center justify-center bg-purple-500 p-2 text-white hover:opacity-85">
              M
            </button>
            <button className="rounded-round flex h-[30px] w-[30px] cursor-pointer items-center justify-center bg-gray-200 p-2 hover:opacity-85">
              <HiChevronDown />
            </button>
          </div>
        </div>
        <div className="flex justify-center gap-2 text-sm">
          <a href="">Privacy Policy</a>
          <p>|</p>
          <a href="">Terms of Services</a>
        </div>
      </div>
    </Menu>
  );
}

export default ProfileMenu;
