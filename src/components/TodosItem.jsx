import React from "react";
import { useRef } from "react";

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
    <li key={todo.id}>
      <textarea
        ref={inputRef}
        disabled={inputRef}
        onKeyDown={(e) => update(todo.id, inputRef.current.value, e)}
        // defaultValue={todo.item}
      >
        {todo.item}
      </textarea>
      <div>
        <button onClick={() => changeFocus()}>Edit</button>
        <button onClick={() => completeTodo(todo.id)}>Complete</button>
        <button onClick={() => removeTodo(todo.id)}>Delete</button>
      </div>

      {todo.completed && <span>Done</span>}
    </li>
  );
};

export default TodosItem;
