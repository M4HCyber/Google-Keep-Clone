import {
  HiOutlineArchiveBoxArrowDown,
  HiOutlineBell,
  HiOutlineLightBulb,
  HiOutlinePencil,
  HiOutlineTrash,
} from "react-icons/hi2";
import StyledNavLink from "./StyledNavLink";

function NavLinks() {
  return (
    <nav className="flex flex-col py-3 hover:shadow-md/30  h-dvh">
      <StyledNavLink to="/notes" icon={<HiOutlineLightBulb />}>
        Notes
      </StyledNavLink>
      <StyledNavLink to="/reminders" icon={<HiOutlineBell />}>
        Reminders
      </StyledNavLink>
      <StyledNavLink to="/edit-labels" icon={<HiOutlinePencil />}>
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
