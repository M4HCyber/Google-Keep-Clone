import {
  BsType,
  BsTypeBold,
  BsTypeH1,
  BsTypeH2,
  BsTypeItalic,
  BsTypeUnderline,
} from "react-icons/bs";
import ButtonIcon from "./ButtonIcon";
import Menu from "./Menu";

function FontMenu() {
  return (
    <Menu>
      <div className="flex">
        <div className="flex gap-1 px-2 border-r-[1px] border-gray-100 ">
          <ButtonIcon size="small">
            <BsTypeH1 />
          </ButtonIcon>
          <ButtonIcon size="small">
            <BsTypeH2 />
          </ButtonIcon>
          <ButtonIcon size="small">
            <BsType />
          </ButtonIcon>
        </div>
        <div className="flex gap-1 px-2">
          <ButtonIcon size="small">
            <BsTypeBold />
          </ButtonIcon>
          <ButtonIcon size="small">
            <BsTypeItalic />
          </ButtonIcon>
          <ButtonIcon size="small">
            <BsTypeUnderline />
          </ButtonIcon>
        </div>
      </div>
    </Menu>
  );
}

export default FontMenu;
