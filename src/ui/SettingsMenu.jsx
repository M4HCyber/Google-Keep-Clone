import Menu from "./Menu";

function SettingsMenu() {
  return (
    <Menu type="noPadding">
      <div className="text-sm">
        <p className="cursor-pointer px-3 py-2 hover:bg-gray-200">Settings</p>
        <p className="cursor-pointer px-3 py-2 hover:bg-gray-200">
          Enable dark theme
        </p>
        <p className="cursor-pointer px-3 py-2 hover:bg-gray-200">
          Send feedback
        </p>
        <p className="cursor-pointer px-3 py-2 hover:bg-gray-200">Help</p>
        <p className="cursor-pointer px-3 py-2 hover:bg-gray-200">
          App dowloads
        </p>
        <p className="cursor-pointer px-3 py-2 hover:bg-gray-200">
          Keyboard shortcuts
        </p>
      </div>
    </Menu>
  );
}

export default SettingsMenu;
