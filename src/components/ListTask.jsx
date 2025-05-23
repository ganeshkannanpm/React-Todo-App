import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const ListTask = ({ task, index, removeTask }) => {
  return (
    <motion.li
      className="todo-item"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: 50 }}
      layout
    >
      <span>{task.title}</span>
      <button onClick={() => removeTask(index)} className="delete-btn">
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </motion.li>
  );
};

export default ListTask;
