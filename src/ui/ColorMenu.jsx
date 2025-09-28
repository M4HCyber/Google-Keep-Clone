import { HiOutlineNoSymbol } from "react-icons/hi2";
import ButtonIcon from "./ButtonIcon";
import Menu from "./Menu";

const colors = [
  { color: "#F5D3C4", id: crypto.randomUUID() },
  { color: "#FA9884", id: crypto.randomUUID() },
  { color: "#69779B", id: crypto.randomUUID() },
  { color: "#00CAFF", id: crypto.randomUUID() },
  { color: "#D1D3D4", id: crypto.randomUUID() },
  { color: "#DDC3C3", id: crypto.randomUUID() },
  { color: "#F5F093", id: crypto.randomUUID() },
  { color: "#BFF8D4", id: crypto.randomUUID() },
  { color: "#F5D3C4", id: crypto.randomUUID() },
  { color: "#A0DEFF", id: crypto.randomUUID() },
  { color: "#D1F0F0", id: crypto.randomUUID() },
];
const gradientColors = [
  {
    color: "linear-gradient(to right, #f3904f, #3b4371)",
    name: "Dawn",
    id: crypto.randomUUID(),
  },
  {
    color: "linear-gradient(to right, #ee0979, #ff6a00)",
    name: "Ibiza Sunset",
    id: crypto.randomUUID(),
  },
  {
    color: "linear-gradient(to right, #a770ef, #cf8bf3, #fdb99b)",
    name: "radar",
    id: crypto.randomUUID(),
  },
  {
    color: "linear-gradient(to right, #41295a, #2f0743)",
    name: "80s Purple",
    id: crypto.randomUUID(),
  },
  {
    color: "linear-gradient(to right, #f4c4f3, #fc67fa)",
    name: "Black Rose",
    id: crypto.randomUUID(),
  },
  {
    color: "linear-gradient(to right, #00c3ff, #ffff1c)",
    name: "Brady Fun",
    id: crypto.randomUUID(),
  },
  {
    color: "linear-gradient(to right, #ff00cc, #333399)",
    name: "Cosmic Fusion",
    id: crypto.randomUUID(),
  },
  {
    color: "linear-gradient(to right, #3a6186, #89253e)",
    name: "Love Couple",
    id: crypto.randomUUID(),
  },
  {
    color: " linear-gradient(to right, #4ecdc4, #556270)",
    name: "Disco",
    id: crypto.randomUUID(),
  },
  {
    color: "linear-gradient(to right, #f85032, #e73827)",
    name: "Blood Red",
    id: crypto.randomUUID(),
  },
  {
    color: "linear-gradient(to right, #f79d00, #64f38c)",
    name: "Sherbert",
    id: crypto.randomUUID(),
  },
];

function ColorMenu({ dispatch }) {
  function handleClick(color) {
    dispatch({ type: "changeBackgroundColor", payload: color });
  }
  return (
    <Menu>
      <div className="flex gap-2">
        <ButtonIcon
          size="small"
          onClick={() => {
            handleClick("white");
          }}
        >
          <HiOutlineNoSymbol />
        </ButtonIcon>
        {colors.map((color) => (
          <div
            onClick={() => handleClick(color.color)}
            key={color.id}
            className={`rounded-round h-8 w-8 cursor-pointer p-1 hover:border-[2px]`}
            style={{ backgroundColor: `${color.color}` }}
          ></div>
        ))}
      </div>
      <div className="my-2 border-b-[2px] border-gray-100"></div>
      <div className="flex gap-2">
        <ButtonIcon
          size="small"
          onClick={() => {
            handleClick("white");
          }}
        >
          <HiOutlineNoSymbol />
        </ButtonIcon>
        {gradientColors.map((gradientColor) => (
          <div
            onClick={() => handleClick(gradientColor.color)}
            key={gradientColor.id}
            className={`rounded-round h-8 w-8 cursor-pointer p-1 hover:border-[2px]`}
            style={{ background: `${gradientColor.color}` }}
          ></div>
        ))}
      </div>
    </Menu>
  );
}

export default ColorMenu;
