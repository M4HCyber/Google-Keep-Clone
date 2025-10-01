import {
  HiBars3,
  HiOutlineViewColumns,
  HiOutlineCog8Tooth,
  HiOutlineUserCircle,
} from "react-icons/hi2";
import Logo from "./Logo";
import InputSearch from "./InputSearch";
import ButtonIcon from "./ButtonIcon";
import { BsArrowClockwise } from "react-icons/bs";
import { CiGrid41 } from "react-icons/ci";
import { useGlobal } from "../context/GlobalContext";
import { HiOutlineViewGrid } from "react-icons/hi";
function Header() {
  const { dispatch } = useGlobal();
  function handleClick() {
    dispatch({ type: "navOpen" });
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
          <ButtonIcon>
            <HiOutlineViewGrid />
          </ButtonIcon>
          <ButtonIcon>
            <HiOutlineCog8Tooth />
          </ButtonIcon>
        </div>
        <div className="flex gap-1">
          <ButtonIcon>
            <CiGrid41 />
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
