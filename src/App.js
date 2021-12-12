import "./css/styles.css";
import DisplayTodos from "./components/DisplayTodos";
import Todo from "./components/Todo";

function App() {
  return (
    <div className="App">
      <h1 className="todo-heading">Todo App</h1>
      <Todo />
      <DisplayTodos />
    </div>
  );
}

export default App;
