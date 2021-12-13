import React from "react";
import { useRef } from "react";
import { BiEditAlt } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { GiCheckMark } from "react-icons/gi";
import { motion } from "framer-motion";

const TodosItem = (props) => {
  const inputRef = useRef(true);

  const { todo, updateTodo, removeTodo, completeTodo } = props;

  const update = (id, value, e) => {
    if (e.keyCode === 13) {
      updateTodo({ id, item: value });
      inputRef.current.disabled = true;
    }
  };
  const changeFocus = () => {
    inputRef.current.disabled = false;
    inputRef.current.focus();
  };
  return (
    <motion.li
      initial={{ x: "150vw", transition: { duration: 2, type: "spring" } }}
      animate={{ x: 0, transition: { duration: 2, type: "spring" } }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      exit={{ x: "-150vw", transition: { duration: 2, type: "spring" } }}
      key={todo.id}
      className="card"
    >
      <textarea
        ref={inputRef}
        disabled={inputRef}
        onKeyDown={(e) => update(todo.id, inputRef.current.value, e)}
        // defaultValue={todo.item}
      >
        {todo.item}
      </textarea>
      <div className="btns">
        <button onClick={() => changeFocus()}>
          <BiEditAlt />
        </button>
        {todo.completed === false && (
          <button onClick={() => completeTodo(todo.id)}>
            <GiCheckMark />
          </button>
        )}
        <button onClick={() => removeTodo(todo.id)}>
          <AiFillDelete />
        </button>
      </div>

      {todo.completed && <span className="todo-completed">Done</span>}
    </motion.li>
  );
};

export default TodosItem;
