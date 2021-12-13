import { useState } from "react";
import { connect } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";
import {
  addTodo,
  removeTodo,
  updateTodo,
  completeTodo,
} from "../reduxStore/reducer";
import TodosItem from "./TodosItem";

const mapStateToProps = (state) => {
  return {
    todos: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (obj) => dispatch(addTodo(obj)),
    removeTodo: (id) => dispatch(removeTodo(id)),
    updateTodo: (obj) => dispatch(updateTodo(obj)),
    completeTodo: (id) => dispatch(completeTodo(id)),
  };
};
const DisplayTodos = (props) => {
  const [sort, setSort] = useState("active");
  return (
    <div className="display-todos">
      <div className="buttons">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setSort("active")}
        >
          Active
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setSort("completed")}
        >
          Completed
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setSort("all")}
        >
          All
        </motion.button>
      </div>

      <ul className="display-item">
        {/* Active Items */}
        <AnimatePresence>
          {props.todos.length > 0 && sort === "active"
            ? props.todos.map((todo) => {
                return (
                  todo.completed === false && (
                    <TodosItem
                      key={todo.id}
                      todo={todo}
                      removeTodo={props.removeTodo}
                      updateTodo={props.updateTodo}
                      completeTodo={props.completeTodo}
                    />
                  )
                );
              })
            : null}
          {/* Completed Items */}
          {props.todos.length > 0 && sort === "completed"
            ? props.todos.map((todo) => {
                return (
                  todo.completed === true && (
                    <TodosItem
                      key={todo.id}
                      todo={todo}
                      removeTodo={props.removeTodo}
                      updateTodo={props.updateTodo}
                      completeTodo={props.completeTodo}
                    />
                  )
                );
              })
            : null}

          {/* All items */}
          {props.todos.length > 0 && sort === "all"
            ? props.todos.map((todo) => {
                return (
                  <TodosItem
                    key={todo.id}
                    todo={todo}
                    removeTodo={props.removeTodo}
                    updateTodo={props.updateTodo}
                    completeTodo={props.completeTodo}
                  />
                );
              })
            : null}
        </AnimatePresence>
      </ul>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(DisplayTodos);
