const Todos = (props) => {
  console.log(props.todos);
  return (
    <div className="container">
      {props.todos.map((items, index) => {
        return (
          <>
            <div className="listItems" key={index}>
              <p> {items} </p>
            </div>
            <div></div>
          </>
        );
      })}
    </div>
  );
};

export default Todos;
