import React from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { useState } from "react";

import { CATEGORIES, TASKS } from "../data";

// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });

function App() {
  // const [categories, setCategories] = useState(CATEGORIES);

  const [task, setTask] = useState(TASKS);

  const [selectedCatBtn, setSelectedCatBtn] = useState("ALL");

  const displayedItem = task.filter((item) => {
    if (selectedCatBtn === "All") return true;
    return selectedCatBtn === item.category;
  });

  const addNewItem = (newItem) => setTask([...task, newItem]);

  const deleteButton = (deleted) =>
    setTask(task.filter((item) => item.text !== deleted));

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        selectedBtn={setSelectedCatBtn}
        onBtn={selectedCatBtn}
      />

      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={addNewItem} />

      <TaskList tasks={displayedItem} deletedItem={deleteButton} />
    </div>
  );
}
export default App;