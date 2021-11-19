import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "../JS/Actions/actions";

const Add = () => {
  const dispatch = useDispatch();
  const handleAdd = () => {
    dispatch(add({ id: Math.random(), content: description, check: false }));
    setDescription("");
  };
  const [description, setDescription] = useState("");
  return (
    <div style={{ paddingTop: "20px" }}>
      <input
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Enter the New Task"
        value={description}
        style={{ borderRadius: "4px", border: "2px solid red" }}
      ></input>{" "}
      <button onClick={handleAdd} style={{ backgroundColor: "#f44336" }}>
        Add
      </button>
    </div>
  );
};

export default Add;