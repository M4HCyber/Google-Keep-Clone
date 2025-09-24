import { HiSearch } from "react-icons/hi";
import { HiXMark } from "react-icons/hi2";
import ButtonIcon from "./ButtonIcon";

function InputSearch() {
  return (
    <div className="w-[60%] relative group">
      <span className="text-[1.4rem] absolute top-3.5 left-5">
        <HiSearch />
      </span>
      <input
        type="text"
        placeholder="Search"
        className="py-[0.9rem] focus:bg-white-foreground focus:shadow-md outline-none px-16 placeholder:text-grey-900-primary bg-bg-grey-100 h-full w-full rounded-[5px]"
      />
      <span className="text-[1.4rem] absolute top-1 right-3">
        <ButtonIcon type="input-icon">
          <HiXMark />
        </ButtonIcon>
      </span>
    </div>
  );
}

export default InputSearch;
