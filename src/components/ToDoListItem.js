import { useEffect } from "react";

const ToDoListItem = ({ toast, toDo, removeToDos }) => {

  useEffect(() => {
    toast.success(`New todo added: ${toDo.text}`);
    return () => {
      toast.error(`Todo deleted: ${toDo.text}`);
    };
  }, []);

  return (
    <li>
      {toDo.text}
      <button onClick={() => removeToDos(toDo.id)}>X</button>
    </li>
  );
};

export default ToDoListItem;
