import { NavLink } from "react-router-dom";
import useToggleNav from "../hooks/useToggleNav";
import { useGlobal } from "../context/GlobalContext";

function StyledNavLink({ to, children, icon, onClick }) {
  const { isNavOpen, dispatch } = useGlobal();
  function handleClick() {
    dispatch({ type: "navOpen" });
  }
  if (isNavOpen)
    return (
      <NavLink
        onClick={onClick}
        to={to}
        className="hover:bg-bg-grey-100 flex items-center gap-8 rounded-r-xl px-8 py-4 text-sm font-medium text-black"
      >
        <span className="text-[1.4rem]">{icon}</span>
        {children}
      </NavLink>
    );
  if (!isNavOpen)
    return (
      <NavLink
        onMouseOver={handleClick}
        onClick={(onClick, handleClick)}
        to={to}
        className="rounded-round hover:bg-bg-grey-100 ml-4 flex w-fit items-center gap-8 px-4 py-4 text-sm font-medium text-black"
      >
        <span className="text-[1.4rem]">{icon}</span>
      </NavLink>
    );
}

export default StyledNavLink;

{
  /* {isOpen ? (
        <span className="text-[1.4rem]">{icon}</span>
      ) : 
          {children}
        <span className="text-[1.4rem]">{icon}</span>
      } */
}
