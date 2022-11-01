import React, { useState } from "react";

const InputField = ({ onAddTask, onRemoveTask }) => {
  const [inputValue, setInputValue] = useState("");

  let inputFieldRef = React.createRef();

  const onSubmit = (text) => {
    onAddTask(text);
    setInputValue("");
  };

  return (
    <div>
      <input
        ref={inputFieldRef}
        placeholder="task name"
        value={inputValue}
        onChange={() => {
          setInputValue(inputFieldRef.current.value);
        }}
      ></input>
      <button
        onClick={() => {
          onSubmit(inputValue);
        }}
      >
        Add
      </button>
    </div>
  );
};

export default InputField;
