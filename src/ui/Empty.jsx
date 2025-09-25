import { HiOutlineLightBulb } from "react-icons/hi2";

function Empty() {
  return (
    <div className="flex flex-col items-center gap-5">
      <span className="text-8xl text-bg-grey-100">
        <HiOutlineLightBulb />
      </span>
      <h2 className="text-xl">Notes that you add appear hear</h2>
    </div>
  );
}

export default Empty;
