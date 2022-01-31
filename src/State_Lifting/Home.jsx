import React, { useState } from "react";

import Todos from "./Todos";
import Newtodo from "./Newtodo";
const Home = (props) => {
  const dummyTodos = ["todoone", "todotwo"];
  const [todos, setTodos] = useState(dummyTodos);
  const handleNewTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };
  return (
    <div>
      <Newtodo onTodo={handleNewTodo} />
      <Todos todos={todos} />
    </div>
  );
};
export default Home;
