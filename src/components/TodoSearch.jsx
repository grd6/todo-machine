import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

const TodoSearch = ({ searchValue, setsearchValue }) => {
  return (
    <>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Buscar"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          value={searchValue}
          onChange={(event) => {
            setsearchValue(event.target.value);
            console.log("todo search", event.target.value);
          }}
        />
        {/* <Button variant="outline-secondary" id="button-addon2">
          Buscar
        </Button> */}
      </InputGroup>
    </>
  );
};

export default TodoSearch;
