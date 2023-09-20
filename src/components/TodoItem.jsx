import React from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { GrTrash } from "react-icons/gr";
import "/src/index.css";
const TodoItem = (props) => {
  const style = {
    fontSize: "2rem",
  };

  return (
    <li style={style} className="p-2">
      <span className={`${props.completed && "active"}`} onClick={props.onComplete} >
        <AiOutlineCheck />
      </span>
      <span className={`${props.completed && "tarea"}`}>{props.tarea}</span>
      <span className="p-2" onClick={props.onDelete}>
        <GrTrash />
      </span>
    </li>
  );
};

export default TodoItem;
