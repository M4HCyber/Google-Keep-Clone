import React, { memo, useCallback } from "react";
import { HiBars3, HiOutlineCog8Tooth, HiSquare2Stack } from "react-icons/hi2";
import Logo from "./Logo";
import InputSearch from "./InputSearch";
import ButtonIcon from "./ButtonIcon";
import { BsArrowClockwise, BsGrid3X3GapFill } from "react-icons/bs";
import { useGlobal } from "../context/GlobalContext";
import { HiOutlineViewGrid } from "react-icons/hi";
import { useMenu } from "../context/MenuContext";
import SettingsMenu from "./SettingsMenu";
import GoogleAppsMenu from "./GoogleAppsMenu";
import ProfileMenu from "./ProfileMenu";

function Header() {
  const { dispatch, noteLayoutColumn, menuHandleClickApps } = useGlobal();
  const {
    menuHandleClick,
    settingsOpenMenu,
    dispatch: dispatchMenu,
    googleAppsOpen,
  } = useMenu();

  // stable handlers
  const handleClick = useCallback(() => {
    dispatch({ type: "navOpen" });
  }, [dispatch]);

  const handleChangeLayout = useCallback(() => {
    dispatch({ type: "noteLayout" });
  }, [dispatch]);

  const handleReload = useCallback(() => {
    window.location.reload();
  }, []);

  const handleSettingsClick = useCallback(
    (e) => {
      menuHandleClick(e);
      dispatchMenu({ type: "settingOpen" });
    },
    [menuHandleClick, dispatchMenu],
  );
  const handleAppsClick = useCallback(
    (e) => {
      menuHandleClickApps(e);
      dispatchMenu({ type: "googleAppsOpen" });
    },
    [menuHandleClick, dispatchMenu],
  );

  return (
    <>
      {settingsOpenMenu && <SettingsMenu />}
      {googleAppsOpen && <GoogleAppsMenu />}
      {/* {<ProfileMenu />} */}
      <header className="border-border-subtle flex justify-between border-b-[1px] px-5 py-2">
        <div className="flex w-full gap-16">
          <div className="flex items-center gap-3">
            <ButtonIcon onClick={handleClick}>
              <HiBars3 />
            </ButtonIcon>
            <Logo />
          </div>
          <InputSearch />
        </div>
        <div className="flex gap-10">
          <div className="flex gap-1">
            <ButtonIcon onClick={handleReload}>
              <BsArrowClockwise />
            </ButtonIcon>
            {!noteLayoutColumn ? (
              <ButtonIcon onClick={handleChangeLayout}>
                <HiOutlineViewGrid />
              </ButtonIcon>
            ) : (
              <ButtonIcon onClick={handleChangeLayout}>
                <HiSquare2Stack />
              </ButtonIcon>
            )}
            <ButtonIcon onClick={handleSettingsClick}>
              <HiOutlineCog8Tooth />
            </ButtonIcon>
          </div>
          <div className="flex items-center gap-1" onClick={handleAppsClick}>
            <ButtonIcon>
              <BsGrid3X3GapFill />
            </ButtonIcon>
            <div className="rounded-round h-[40px] w-[40px] cursor-pointer p-[3px] hover:bg-gray-100">
              <img
                src="img/square-passport.png"
                alt=""
                className="rounded-round"
              />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default memo(Header);
