import { useGlobal } from "../context/GlobalContext";
import Button from "./Button";
import Overlay from "./Overlay";

function DeleteAlert({ children }) {
  const { dispatch, labels, deleteLabelOpen } = useGlobal();
  function handleDelete(id) {
    labels.filter((label) => id === label.id);
  }

  return (
    <Overlay type="delete">
      <div className="flex w-[500px] flex-col gap-8 rounded-xl bg-white px-10 py-5 text-sm font-medium shadow-md/5">
        <div>
          <p className="text-sm">{children}</p>
        </div>
        <div className="flex justify-end">
          <Button
            onClick={() =>
              dispatch({ type: "deleteLabelAlert", payload: false })
            }
          >
            Cancel
          </Button>
          <Button
            color="text-blue-500"
            onClick={() => handleDelete(deleteLabelOpen)}
          >
            Delete
          </Button>
        </div>
      </div>
    </Overlay>
  );
}

export default DeleteAlert;
