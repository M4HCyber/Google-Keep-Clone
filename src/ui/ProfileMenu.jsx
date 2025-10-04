import {
  HiArrowDown,
  HiArrowRightOnRectangle,
  HiChevronDown,
  HiChevronUp,
  HiPlus,
  HiXMark,
} from "react-icons/hi2";
import ButtonIcon from "./ButtonIcon";
import Menu from "./Menu";
import Button from "./Button";
import { useMenu } from "../context/MenuContext";
import { useState } from "react";

function ProfileMenu() {
  const { showMoreAccounts, dispatch } = useMenu();
  const [scroll, setScroll] = useState(false);
  function handleToggle() {
    dispatch({ type: "showMoreAccounts" });
  }

  //   useEffect(() => {
  //     function handleScroll() {
  //       setScroll(window.scrollY > 0);
  //     }
  //     window.addEventListener("scroll", handleScroll);
  //     return () => window.removeEventListener("scroll, handleScroll");
  //   }, []);

  function handleScroll(e) {
    const element = e.target;
    console.log(e.target);
    setScroll(element.scrollTop > 0);
  }
  console.log(scroll);
  return (
    <Menu type="googleProfile">
      <div className="flex w-[400px] flex-col gap-1 text-sm font-medium">
        <div
          onScroll={handleScroll}
          className={`flex items-center justify-between p-3 ${scroll ? "shadow-md" : ""}`}
        >
          <div className="flex items-center gap-3">
            <img
              src="img/square-passport.png"
              alt=""
              className={`rounded-round w-[40px]`}
            />
            <p className="font-semibold">m4hcyber@gmail.com</p>
          </div>
          <ButtonIcon
            size="small"
            onClick={() => dispatch({ type: "profileMenuOpen" })}
          >
            <HiXMark />
          </ButtonIcon>
        </div>
        <div
          className={`custom-scrollbar-profile flex flex-col gap-[2px] ${!showMoreAccounts ? "" : "h-[600px]"} overflow-y-auto p-3`}
        >
          <div className="flex flex-col items-center gap-2">
            <div className="rounded-round h-[100px] w-[100px] cursor-pointer p-[3px] hover:bg-gray-100">
              <img
                src="img/square-passport.png"
                alt=""
                className="rounded-round"
              />
            </div>
            <p className="text-xl font-medium">Hi, Mahmoud!</p>
            <button className="mb-3 cursor-pointer rounded-2xl border-2 border-gray-400 px-5 py-2 text-blue-500 hover:bg-gray-100">
              Manage your Google Account
            </button>
          </div>
          <div
            onClick={handleToggle}
            className={`${showMoreAccounts ? "rounded-t-2xl" : "rounded-2xl"} flex cursor-pointer items-center justify-between bg-white px-5 py-3 hover:bg-gray-300`}
          >
            <p>
              {!showMoreAccounts ? "Show more accounts" : "Hide more accounts"}
            </p>
            <div className="flex cursor-pointer items-center gap-2">
              {!showMoreAccounts && (
                <div className="flex cursor-pointer items-center gap-2">
                  <button className="rounded-round flex h-[30px] w-[30px] cursor-pointer items-center justify-center bg-blue-500 p-2 text-white hover:opacity-85">
                    A
                  </button>
                  <button className="rounded-round flex h-[30px] w-[30px] cursor-pointer items-center justify-center bg-purple-500 p-2 text-white hover:opacity-85">
                    M
                  </button>
                </div>
              )}
              <button className="rounded-round flex h-[30px] w-[30px] cursor-pointer items-center justify-center bg-gray-200 p-2 hover:opacity-85">
                {!showMoreAccounts ? <HiChevronDown /> : <HiChevronUp />}{" "}
              </button>
            </div>
          </div>
          {showMoreAccounts && (
            <div className="flex flex-col gap-[2px]">
              <div className="flex justify-between gap-3 bg-white px-5 py-3">
                <button className="rounded-round flex h-[30px] w-[30px] cursor-pointer items-center justify-center bg-blue-500 p-2 text-white hover:opacity-85">
                  A
                </button>
                <div className="flex flex-col gap-2">
                  <span>
                    <p className="font-medium">Ahmad Kabir</p>
                    <p className="text-xs font-light">ahmadkabir@gmail.com</p>
                  </span>
                  <div className="flex gap-3">
                    <Button bgColor="bg-blue-200">Sign in</Button>
                    <Button
                      bgColor="bg-white"
                      border="border-[1px]"
                      borderColor="border-gray-200"
                    >
                      Remove
                    </Button>
                  </div>
                </div>
                <p className="h-fit w-fit rounded-xl bg-gray-300 px-2 text-[0.7rem]">
                  Signed out
                </p>
              </div>

              <div className="flex justify-between gap-3 bg-white px-5 py-3">
                <button className="rounded-round flex h-[30px] w-[30px] cursor-pointer items-center justify-center bg-purple-500 p-2 text-white hover:opacity-85">
                  A
                </button>
                <div className="flex flex-col gap-2">
                  <span>
                    <p className="font-medium">Mahmoud Ibrahim</p>
                    <p className="text-xs font-light">mahmoudabuja@gmail.com</p>
                  </span>
                  <div className="flex gap-3">
                    <Button bgColor="bg-blue-200">Sign in</Button>
                    <Button
                      bgColor="bg-white"
                      border="border-[1px]"
                      borderColor="border-gray-200"
                    >
                      Remove
                    </Button>
                  </div>
                </div>
                <p className="h-fit w-fit rounded-xl bg-gray-300 px-2 text-[0.7rem]">
                  Signed out
                </p>
              </div>
              <div className="flex cursor-pointer items-center gap-3 bg-white px-5 py-3 hover:bg-gray-300">
                <span className="rounded-round bg-gray-100 p-1 text-xl text-blue-500">
                  <HiPlus />
                </span>
                <p className="font-semibold">Add another account</p>
              </div>
              <div className="flex cursor-pointer items-center gap-3 rounded-b-2xl bg-white px-5 py-3 hover:bg-gray-300">
                <span className="p-1 text-xl">
                  <HiArrowRightOnRectangle />
                </span>
                <p className="font-semibold">Sign out</p>
              </div>
            </div>
          )}
          <div className="flex justify-center gap-2 py-3 text-xs">
            <a href="">Privacy Policy</a>
            <p>|</p>
            <a href="">Terms of Services</a>
          </div>
        </div>
      </div>
    </Menu>
  );
}

export default ProfileMenu;
