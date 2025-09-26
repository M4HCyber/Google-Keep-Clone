import { HiOutlineUserAdd, HiUserAdd } from "react-icons/hi";
import Button from "./Button";

function CollaboratorMenu({ dispatch }) {
  return (
    <div className="flex justify-center">
      <div className="flex w-[600px] flex-col gap-10 rounded-sm shadow-sm/50">
        <div className="flex flex-col gap-2 px-6 py-4">
          <div className="border-b-[1px] border-gray-200 py-3">
            <h2 className="text-xl font-semibold">Collaborators</h2>
          </div>
          <div className="flex items-center gap-3">
            <div className="rounded-round w-[40px] border-[1px] border-gray-200 p-[1px]">
              <img
                src="img/square-passport.png"
                alt=""
                className="rounded-round"
              />
            </div>
            <div className="-space-y-1 text-sm">
              <p>
                <span className="font-semibold">Mahmoud Ibrahim Muhammad</span>
                <span className="italic">(Owner)</span>
              </p>
              <p className="">m4hcyber@gmail.com</p>
            </div>
          </div>

          <div className="flex cursor-pointer items-center gap-3 text-sm">
            <div className="rounded-round flex h-[40px] w-[40px] items-center justify-center border-[1.5px] border-gray-400 text-2xl text-gray-400">
              <HiUserAdd />
            </div>
            <div>
              <input
                type="text"
                placeholder="Person or email to share with"
                className="outline-none"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-end bg-gray-200 p-3">
          <Button
            onClick={() => {
              dispatch({ type: "openCollaboration", payload: false });
            }}
          >
            Cancel
          </Button>
          <Button
            onClick={() => {
              dispatch({ type: "openCollaboration", payload: false });
            }}
          >
            Save
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CollaboratorMenu;
