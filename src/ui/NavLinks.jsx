import {
  HiOutlineArchiveBoxArrowDown,
  HiOutlineBell,
  HiOutlineLightBulb,
  HiOutlinePencil,
  HiOutlineTrash,
} from "react-icons/hi2";
import StyledNavLink from "./StyledNavLink";
import { useGlobal } from "../context/GlobalContext";

function NavLinks({ onClick }) {
  const { isNavOpen, dispatch } = useGlobal();
  return (
    <nav
      className={`flex flex-col py-3 ${
        isNavOpen ? "hover:shadow-md/30" : ""
      } h-dvh`}
    >
      <StyledNavLink to="/notes" icon={<HiOutlineLightBulb />}>
        Notes
      </StyledNavLink>
      <StyledNavLink to="/reminders" icon={<HiOutlineBell />}>
        Reminders
      </StyledNavLink>
      <StyledNavLink
        to=""
        icon={<HiOutlinePencil />}
        onClick={() => dispatch({ type: "editLabelOpen" })}
      >
        Edit Labels
      </StyledNavLink>
      <StyledNavLink to="/archive" icon={<HiOutlineArchiveBoxArrowDown />}>
        Archive
      </StyledNavLink>
      <StyledNavLink to="/bin" icon={<HiOutlineTrash />}>
        Bin
      </StyledNavLink>
    </nav>
  );
}

export default NavLinks;
