import React, { useState } from "react";

const AddTask = ({ addTask }) => {
  const [value, setValue] = useState("");
  const addItem = () => {
    addTask(value);
    setValue("");
  };

  return (
    <>
      <div>
        <div className="input-selection">
          <input
            type="text"
            className="todo-input"
            placeholder="Enter a new Task"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />
          <button onClick={addItem} className="add-btn">
            ADD
          </button>
        </div>
      </div>
    </>
  );
};

export default AddTask;
