import React from "react";
import datos from "../assets/js/datos";
import TodoItem from "./TodoItem";

const TodoList = ({ searchedTodos, dato, setdato }) => {
  const completeTodo = (tarea) => {
    const newTodos = [...dato];
    // const todoIndex = newTodos.findIndex((dato) => dato.tarea == tarea);
    // newTodos[todoIndex].completed = true
    // setdato(newTodos);
    const todoIndex = newTodos.findIndex((dato) => dato.tarea == tarea);
    if (dato[todoIndex].completed === false) {
      newTodos[todoIndex].completed = true;
      setdato(newTodos);
    } else {
      newTodos[todoIndex].completed = false;
      setdato(newTodos);
    }
  };

  const deleteTodo = (tarea) => {
    const newTodos = [...dato];
    const todoIndex = newTodos.findIndex((dato) => dato.tarea == tarea);
    newTodos.splice(todoIndex, 1);
    setdato(newTodos);
  };

  const style = {
    listStyle: "none",
  };
  return (
    <>
      <ul style={style}>
        {searchedTodos.map((dato) => (
          <TodoItem
            key={dato.tarea}
            tarea={dato.tarea}
            completed={dato.completed}
            onComplete={() => completeTodo(dato.tarea)}
            onDelete={() => deleteTodo(dato.tarea)}
          />
        ))}
      </ul>
    </>
  );
};

export default TodoList;
