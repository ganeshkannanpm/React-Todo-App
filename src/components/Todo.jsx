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

  //For Date & Time
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); // update every second

    return () => clearInterval(timer); // cleanup
  }, []);

  useEffect(() => {
    document.title = `You have ${tasks.length} pending task(s)`;
  }, [tasks]);

  // Save tasks to localStorage when they change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (title) => {
    const now = new Date();

    const formattedTime = new Intl.DateTimeFormat("en-GB", {
      weekday: "long",
      day: "2-digit",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    }).format(now);

    const newTask = [...tasks, { title, time: formattedTime }];
    setTasks(newTask);
  };

  const removeTask = (index) => {
    const newTask = [...tasks];
    newTask.splice(index, 1);
    setTasks(newTask);
  };

  // Format current time for display at top
  const formattedCurrentTime = new Intl.DateTimeFormat("en-GB", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  }).format(currentTime);

  return (
    <div className="todo-container">
      <h1>📝My ToDo</h1>
      <p className="date-time">
        {formattedCurrentTime}
      </p>

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
