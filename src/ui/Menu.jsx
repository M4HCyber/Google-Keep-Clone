import { useGlobal } from "../context/GlobalContext";

function Menu({ children, type }) {
  const { menuPosition } = useGlobal();
  console.log(menuPosition);
  const x = Math.round(menuPosition?.x);
  const y = Math.round(menuPosition?.y);
  if (type === "noPadding")
    return (
      <div
        className={`absolute z-10 h-fit w-fit rounded-[5px] bg-white shadow-sm/35`}
        style={{ top: `${y}px`, left: `${x}px` }}
      >
        {children}
      </div>
    );

  return (
    <div
      className={`absolute z-10 h-fit w-fit rounded-[5px] bg-white px-3 py-1 shadow-sm/35`}
      style={{ top: `${y}px`, left: `${x}px` }}
    >
      {children}
    </div>
  );
}

export default Menu;
