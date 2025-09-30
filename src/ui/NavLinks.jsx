import {
  HiOutlineArchiveBoxArrowDown,
  HiOutlineBell,
  HiOutlineLightBulb,
  HiOutlinePencil,
  HiOutlineTag,
  HiOutlineTrash,
  HiTag,
} from "react-icons/hi2";
import StyledNavLink from "./StyledNavLink";
import { useGlobal } from "../context/GlobalContext";

function NavLinks({ onClick }) {
  const { isNavOpen, dispatch, labels } = useGlobal();
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
      {labels.map((label) => (
        <StyledNavLink
          key={label.id}
          to={`/${label.label}`}
          icon={<HiOutlineTag />}
        >
          {label.label}
        </StyledNavLink>
      ))}
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
