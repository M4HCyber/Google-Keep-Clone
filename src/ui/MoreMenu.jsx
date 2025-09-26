import Menu from "./Menu";

function MoreMenu() {
  return (
    <Menu type="noPadding">
      <div className="text-sm">
        <p className="cursor-pointer px-3 py-2 hover:bg-gray-200">Add label</p>
        <p className="cursor-pointer px-3 py-2 hover:bg-gray-200">
          Add drawing
        </p>
        <p className="cursor-pointer px-3 py-2 hover:bg-gray-200">
          Show tick boxes
        </p>
        <p className="disabled cursor-pointer px-3 py-2 hover:bg-gray-200">
          Version History
        </p>
      </div>
    </Menu>
  );
}

export default MoreMenu;
