import { HiSearch } from "react-icons/hi";
import { HiXMark } from "react-icons/hi2";
import ButtonIcon from "./ButtonIcon";
import { useEffect, useState } from "react";
import { useGlobal } from "../context/GlobalContext";

function InputSearch() {
  const { dispatch } = useGlobal();
  const [inputValue, setInputValue] = useState("");
  function handleChange(e) {
    setInputValue(e.target.value);
    dispatch({ type: "search", payload: inputValue });
  }

  useEffect(() => {
    if (!inputValue) dispatch({ type: "search", payload: "" });
  }, [inputValue]);
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="group relative w-[60%]"
    >
      <span className="absolute top-3.5 left-5 text-[1.4rem]">
        <HiSearch />
      </span>
      <input
        value={inputValue}
        onChange={handleChange}
        type="text"
        placeholder="Search"
        className="focus:bg-white-foreground placeholder:text-grey-900-primary bg-bg-grey-100 h-full w-full rounded-[5px] px-16 py-[0.9rem] outline-none focus:shadow-md"
      />
      <span className="absolute top-1 right-3 text-[1.4rem]">
        <ButtonIcon type="input-icon" onClick={() => setInputValue("")}>
          <HiXMark />
        </ButtonIcon>
      </span>
    </form>
  );
}

export default InputSearch;
