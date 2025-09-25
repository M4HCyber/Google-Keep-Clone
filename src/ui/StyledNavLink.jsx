import { NavLink } from "react-router-dom";
import useToggleNav from "../hooks/useToggleNav";
import { useGlobal } from "../context/GlobalContext";

function StyledNavLink({ to, children, icon }) {
  const { isNavOpen, dispatch } = useGlobal();
  function handleClick() {
    dispatch({ type: "navOpen" });
  }
  if (isNavOpen)
    return (
      <NavLink
        to={to}
        className="flex gap-8 items-center rounded-r-xl px-8 py-4 hover:bg-bg-grey-100 font-medium text-black text-sm"
      >
        <span className="text-[1.4rem]">{icon}</span>
        {children}
      </NavLink>
    );
  if (!isNavOpen)
    return (
      <NavLink
        onMouseOver={handleClick}
        onClick={handleClick}
        to={to}
        className="flex w-fit gap-8 items-center rounded-round ml-4 px-4 py-4 hover:bg-bg-grey-100 font-medium text-black text-sm"
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
