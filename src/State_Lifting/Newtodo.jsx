import React, { useState } from "react";
const Newtodo = (props) => {
  const [todo, setTodo] = useState("");
  const handleChange = (e) => {
    setTodo(e.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    props.onTodo(todo);
  };
  return (
    <div className="todoapp">
      <form className="todoform" onSubmit={handleSubmit}>
        <h1>Todo App</h1>
        <input
          type="text"
          id="todo"
          required
          onChange={handleChange}
          value={todo}
        />
        <button> + </button>
      </form>
    </div>
  );
};
export default Newtodo;
