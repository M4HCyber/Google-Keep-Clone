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

function FontMenu({ dispatch }) {
  function handleClick(e) {
    const name = e.currentTarget.name;
    console.log(name);
    dispatch({
      type: "changeDecoration",
      payload: {
        [name]: true,
      },
    });
  }

  return (
    <Menu>
      <div className="flex">
        <div className="flex gap-1 border-r-[1px] border-gray-100 px-2">
          <ButtonIcon
            size="small"
            onClick={() => dispatch({ type: "changeFont", payload: "20px" })}
          >
            <BsTypeH1 />
          </ButtonIcon>
          <ButtonIcon
            size="small"
            onClick={() => dispatch({ type: "changeFont", payload: "18px" })}
          >
            <BsTypeH2 />
          </ButtonIcon>
          <ButtonIcon
            size="small"
            onClick={() => dispatch({ type: "changeFont", payload: "16px" })}
          >
            <BsType />
          </ButtonIcon>
        </div>
        <div className="flex gap-1 px-2">
          <ButtonIcon size="small" name="bold" onClick={handleClick}>
            <BsTypeBold />
          </ButtonIcon>
          <ButtonIcon size="small" name="italic" onClick={handleClick}>
            <BsTypeItalic />
          </ButtonIcon>
          <ButtonIcon size="small" name="underline" onClick={handleClick}>
            <BsTypeUnderline />
          </ButtonIcon>
        </div>
      </div>
    </Menu>
  );
}

export default FontMenu;
