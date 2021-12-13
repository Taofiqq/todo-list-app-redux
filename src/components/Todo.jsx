import { useState } from "react";
import { connect } from "react-redux";
import { addTodo } from "../reduxStore/reducer";
import { motion } from "framer-motion";
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
      setTodos("");
    }
  };

  const addTodo = () => {
    if (todo === "") {
      alert("Please enter a todo");
    } else {
      props.addTodo({
        id: Math.floor(Math.random() * 1000),
        item: todo,
        completed: false,
      });
      setTodos("");
    }
  };

  return (
    <div className="add-todos">
      <motion.input
        type="text"
        onChange={handleChange}
        className="todo-input"
        onKeyDown={onKeyDown}
        value={todo}
      />
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="add-btn"
        onClick={addTodo}
      >
        Add Task
      </motion.button>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
