import { useGlobal } from "../context/GlobalContext";

export function useLabelAPI() {
  const { dispatch } = useGlobal();
  function addLabel([newLabel]) {
    fetch("http://localhost:800/labels", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newLabel),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Label added:", data);
        // update your React state so UI shows new Label
        dispatch({ type: "addLabel", payload: data });
      });
  }

  function deleteLabel(id) {
    //   const { dispatch } = useGlobal();
    fetch(`http://localhost:800/labels/${id}`, {
      method: "DELETE",
    }).then(() => {
      console.log("Label deleted:", id);
      // update state to remove it from UI
      // dispatch({ type: "deleteLabel", payload: id });
      // setLabels((prevLabels) => prevLabels.filter((Label) => Label.id !== id));
    });
  }

  return { addLabel, deleteLabel };
}
