import React from "react";
import "./Todos.css";

const Todos = ({ list, removeToDo, completedToDo }) => {
  return (
    <ul>
      {list.map((toDo) => {
        return (
          <li
            onClick={() => completedToDo(toDo.id)}
            className={toDo.completed ? "strikeThrough" : ""}
            key={toDo.id}
          >
            {toDo.text}
            <button onClick={() => removeToDo(toDo.id)}>Remove To Do</button>
          </li>
        );
      })}
    </ul>
  );
};

export default Todos;
