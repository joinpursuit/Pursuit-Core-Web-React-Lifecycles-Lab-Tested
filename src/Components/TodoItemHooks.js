import { useEffect } from "react";

const TodoItemHooks = ({ todoItem, removeTodo, toast }) => {

  useEffect(() => {
    toast.success(`New todo added: ${todoItem.type}`);
    return () => {
      toast.error(`Todo deleted: ${todoItem.type}`);
    };
  }, []);

  return (
    <li>
      {todoItem.type}
      <button onClick={() => removeTodo(todoItem.id)}>x</button>
    </li>
  );
};

export default TodoItemHooks;
