import { useGlobal } from "../context/GlobalContext";

function Menu({ children, type }) {
  const { menuPosition } = useGlobal();
  const x = Math.round(menuPosition?.x);
  const y = Math.round(menuPosition?.y);
  if (type === "google")
    return (
      <div
        className={`custom-scrollbar absolute z-10 h-[460px] w-fit overflow-scroll rounded-2xl bg-gray-200 shadow-sm/35`}
        style={{ top: `${y}px`, right: `${x}px` }}
      >
        <div></div>
        {children}
      </div>
    );
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
