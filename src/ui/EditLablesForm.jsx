import {
  HiCheck,
  HiPencil,
  HiPlus,
  HiSquare2Stack,
  HiTag,
  HiTrash,
  HiXMark,
} from "react-icons/hi2";
import ButtonIcon from "./ButtonIcon";
import Overlay from "./Overlay";
import Button from "./Button";
import { useRef, useState } from "react";
import { HiChartSquareBar } from "react-icons/hi";
import { useGlobal } from "../context/GlobalContext";

function EditLablesForm() {
  const [isNewLabel, setIsNewLabel] = useState({
    id: crypto.randomUUID(),
    label: "",
  });
  const { dispatch, labels } = useGlobal();
  const [label, setLabel] = useState(labels);
  const [isClicked, setIsClicked] = useState(false);
  const [isClickedLabel, setIsClickedLabel] = useState(false);
  const ref = useRef(null);
  function handleChange(e) {
    const { name, value } = e.target;
    setIsNewLabel((curr) => {
      return {
        ...curr,
        [name]: value,
      };
    });
  }

  function handleClick() {
    if (!isNewLabel.label) return;
    console.log(isNewLabel);
    setIsNewLabel({
      id: crypto.randomUUID(),
      label: "",
    });
    setLabel((curr) => [...curr, isNewLabel]);
  }

  return (
    <Overlay>
      <div className="bg-white text-sm font-medium shadow-md/5">
        <div className="">
          <h3 className="px-5 py-4 font-semibold">Edit Labels</h3>
        </div>
        <div className="flex gap-3 px-5 py-1">
          <ButtonIcon size="smaller">
            {isClicked ? <HiXMark /> : <HiPlus />}
          </ButtonIcon>
          <input
            type="text"
            placeholder="Creat new label"
            className="border-gray-300 text-sm outline-none focus:border-b-[1px]"
            name="label"
            value={isNewLabel.label}
            onChange={handleChange}
            onClick={() => setIsClicked(true)}
            onBlur={() => setIsClicked(false)}
          />
          <ButtonIcon size="smaller" onClick={handleClick}>
            <HiCheck />
          </ButtonIcon>
        </div>
        {label.map((label) => (
          <div
            className="flex items-center justify-between gap-3 px-5 py-1"
            key={label.id}
            onMouseOver={() => setIsClickedLabel(true)}
            onMouseOut={() => setIsClickedLabel(false)}
          >
            <ButtonIcon size="smaller">
              {isClickedLabel ? (
                <HiTrash
                  onClick={() =>
                    dispatch({ type: "deleteLabelAlert", payload: label.id })
                  }
                />
              ) : (
                <HiTag />
              )}
            </ButtonIcon>
            <input
              type="text"
              value={label.label}
              className="border-gray-300 py-1 outline-none focus:border-b-[1px]"
              ref={ref}
            />
            <ButtonIcon size="smaller" onClick={() => ref.current.select()}>
              <HiPencil />
            </ButtonIcon>
          </div>
        ))}
        <div className="flex justify-end border-t-[1px] border-gray-200 px-5 py-4">
          <Button>Done</Button>
        </div>
      </div>
    </Overlay>
  );
}

export default EditLablesForm;
