import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, removeTodo } from "./Actions/action";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [todo, setTodo] = useState("");
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  const handleTodoSubmit = () => {
    if (todo) {
      dispatch(addTodo(counter, todo));
      setCounter(counter + 1);
      setTodo("");
    }
  };

  return (
    <>
      <h1>Ma liste de tâches</h1>
      <div className="todo">
        <input
          type="text"
          value={todo}
          placeholder="Entrez une tâche"
          onChange={e => setTodo(e.target.value)}
        />
      </div>
      <button onClick={handleTodoSubmit}>Ajouter</button>

      <div className="todos">
        <ul>
          {todos?.map(item => (
            <li key={item.id}>
              <input type="checkbox" />
              <p>{item.task}</p>
              <button onClick={() => dispatch(removeTodo(item.id))}>Supprimer</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
