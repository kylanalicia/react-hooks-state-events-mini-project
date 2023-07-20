import React from "react";

function Task(props) {
  // console.log(props);
  const { text, category, deletedItem } = props;

  function handleDelete() {
    deletedItem(text);
  }

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={handleDelete}>
        X
      </button>
    </div>
  );
}

export default Task;
