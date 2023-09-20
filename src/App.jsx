import TodoCounter from "./components/TodoCounter";
import TodoSearch from "./components/TodoSearch";
import TodoItem from "./components/TodoItem";
import TodoList from "./components/TodoList";
import TodoAddButtom from "./components/TodoAddButtom";
import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import datos from "./assets/js/datos";

function App() {
  const [dato, setdato] = useState(datos);
  const [searchValue, setsearchValue] = useState("");
  //const localStorageTodos = localStorage.getItem("TODOS_V1");
  console.log("desde app", searchValue);
  // let parsedTodos;

  // if (!localStorageTodos) {
  //   localStorage.setItem("TODOS_V1", JSON.stringify([]));
  //   parsedTodos = [];
  // } else {
  //   parsedTodos = JSON.parse(localStorageTodos);
  // }

  const searchedTodos = dato.filter((dato) => {
    return dato.tarea.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase());
  });

  // const saveTodos = (newTodos) => {
  //   localStorage.setItem("TODOS_V1", JSON.stringify(newTodos));
  //   setdato(newTodos);
  // };

  const completedTodos = dato.filter((dato) => !!dato.completed).length;
  const totalTodos = dato.length;

  return (
    <>
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch
        searchValue={searchValue}
        setsearchValue={setsearchValue}
        dato={dato}
        setdato={setdato}
      />
      <TodoList searchedTodos={searchedTodos} setdato={setdato} dato={dato} />
      <TodoAddButtom />
    </>
  );
}

export default App;
