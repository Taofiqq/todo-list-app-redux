import "./css/styles.css";
import DisplayTodos from "./components/DisplayTodos";
import Todo from "./components/Todo";
import { motion } from "framer-motion";

function App() {
  return (
    <div className="App">
      <motion.h1
        initial={{ y: -200 }}
        animate={{ y: 0 }}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.5, type: "spring" }}
        className="todo-heading"
      >
        Todo App
      </motion.h1>

      <motion.div
        initial={{ y: -200 }}
        animate={{ y: 0 }}
        transition={{ duration: 1.5, type: "spring" }}
      >
        <Todo />
        <DisplayTodos />
      </motion.div>
    </div>
  );
}

export default App;
