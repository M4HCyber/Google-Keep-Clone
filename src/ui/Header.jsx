import {
  HiBars3,
  HiOutlineViewColumns,
  HiOutlineCog8Tooth,
  HiOutlineUserCircle,
  HiSquare2Stack,
} from "react-icons/hi2";
import Logo from "./Logo";
import InputSearch from "./InputSearch";
import ButtonIcon from "./ButtonIcon";
import { BsArrowClockwise, BsGrid3X3GapFill } from "react-icons/bs";
import { CiGrid41 } from "react-icons/ci";
import { useGlobal } from "../context/GlobalContext";
import { HiOutlineViewGrid } from "react-icons/hi";
function Header() {
  const { dispatch, noteLayoutColumn } = useGlobal();
  function handleClick() {
    dispatch({ type: "navOpen" });
  }
  function handleChangeLayout() {
    dispatch({ type: "noteLayout" });
  }
  return (
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
          <ButtonIcon onClick={() => window.location.reload()}>
            <BsArrowClockwise />
          </ButtonIcon>{" "}
          {!noteLayoutColumn ? (
            <ButtonIcon onClick={handleChangeLayout}>
              <HiOutlineViewGrid />
            </ButtonIcon>
          ) : (
            <ButtonIcon onClick={handleChangeLayout}>
              <HiSquare2Stack />
            </ButtonIcon>
          )}
          <ButtonIcon>
            <HiOutlineCog8Tooth />
          </ButtonIcon>
        </div>
        <div className="flex gap-1">
          <ButtonIcon>
            <BsGrid3X3GapFill />
          </ButtonIcon>
          <ButtonIcon>
            <HiOutlineUserCircle />
          </ButtonIcon>
        </div>
      </div>
    </header>
  );
}

export default Header;
