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
import useToggleNav from "../hooks/useToggleNav";
import { useGlobal } from "../context/GlobalContext";
function Header() {
  const { isNavOpen, dispatch } = useGlobal();
  function handleClick() {
    dispatch({ type: "navOpen" });
  }

  return (
    <header className="flex py-2 px-5 border-b-[1px] border-border-subtle justify-between">
      <div className="flex gap-16 w-full">
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
          <ButtonIcon>
            <BsArrowClockwise />
          </ButtonIcon>{" "}
          <ButtonIcon>
            <HiOutlineViewColumns />
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
