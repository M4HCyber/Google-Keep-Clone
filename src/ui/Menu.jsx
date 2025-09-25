import { useGlobal } from "../context/GlobalContext";

function Menu({ children }) {
  const { menuPosition } = useGlobal();
  console.log(menuPosition);
  const x = Math.round(menuPosition?.x);
  const y = Math.round(menuPosition?.y);
  return (
    <div
      className={`bg-white absolute w-fit h-fit px-3 py-1 shadow-sm/35`}
      style={{ top: `${y}px`, left: `${x}px` }}
    >
      {children}
    </div>
  );
}

export default Menu;
