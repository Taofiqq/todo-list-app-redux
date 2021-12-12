import { useState } from "react";
import { connect } from "react-redux";
import { addTodo } from "../reduxStore/reducer";

const mapStateToProps = (state) => {
  return {
    todos: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (obj) => dispatch(addTodo(obj)),
  };
};
const Todo = (props) => {
  const [todo, setTodos] = useState("");

  const handleChange = (e) => {
    setTodos(e.target.value);
  };

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      props.addTodo({
        id: Math.floor(Math.random() * 1000),
        item: todo,
        completed: false,
      });
    }
  };
  return (
    <div>
      <input
        type="text"
        onChange={handleChange}
        className="todo-input"
        onKeyDown={onKeyDown}
      />
      <button
        className="add -btn"
        onClick={() =>
          props.addTodo({
            id: Math.floor(Math.random() * 1000),
            item: todo,
            completed: false,
          })
        }
      >
        Add
      </button>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
