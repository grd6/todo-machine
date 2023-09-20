import React from "react";
import Button from "react-bootstrap/Button";
const TodoAddButtom = () => {
  return <Button variant="outline-secondary" 
  onClick={()=>console.log("le diste click")
}>Agregar</Button>;
};

export default TodoAddButtom;
