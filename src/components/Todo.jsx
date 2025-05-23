import React, { useEffect, useState } from "react";
import "./Todo.css";
import ListTask from "./ListTask";
import AddTask from "./AddTask";
import { AnimatePresence } from "framer-motion";

const Todo = () => {
  // Load from localStorage initially
  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
  });

  useEffect(() => {
    document.title = `You have ${tasks.length} pending task(s)`;
  }, [tasks]);

  // Save tasks to localStorage when they change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (title) => {
    const newTask = [...tasks, { title }];
    setTasks(newTask);
  };

  const removeTask = (index) => {
    const newTask = [...tasks];
    newTask.splice(index, 1);
    setTasks(newTask);
  };

  return (
    <div className="todo-container">
      <h1>📝My ToDo</h1>

      <div className="input-selection">
        <AddTask addTask={addTask} />
      </div>

      <ul className="todo-list">
        <AnimatePresence>
          {tasks.map((task, index) => (
            <ListTask
              task={task}
              removeTask={removeTask}
              index={index}
              key={index}
            />
          ))}
        </AnimatePresence>
      </ul>
    </div>
  );
};

export default Todo;
