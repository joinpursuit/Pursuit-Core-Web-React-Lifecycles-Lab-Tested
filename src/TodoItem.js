import { useEffect } from "react";
import { toast } from "react-toastify";

const TodoItem = ({ todos, removeTodo, todo, removeToast, todoID }) => {
  useEffect(() => {
    if (todo.content !== undefined && removeToast === false) {
      toast.success(`New todo added: ${todo.content}`);
      // debugger;
    } else if (todo.content !== undefined && removeToast === true) {
      debugger
      toast.error(`Todo deleted: ${todoID}`);
      // debugger;
    }
  });

  return (
    <ul id="todos">
      {todos.map((todo) => {
        let id = todo.content;
        return (
          <li>
            {todo.content}
            <button onClick={() => removeTodo(id)}>x</button>
          </li>
        );
      })}
    </ul>
  );
};

export default TodoItem;
