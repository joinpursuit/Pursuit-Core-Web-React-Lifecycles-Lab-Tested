//React Hooks Lab: refactored to Hooks
import Todo from "./Todo";

const Todos = ({ todos, deleteToDo }) => {

  return (
    <ul id="todos">
      {todos.map((todo) => {
        return <Todo todo={todo} deleteToDo={deleteToDo} key={todo.text} />;
      })}
    </ul>
  );
};

export default Todos;
