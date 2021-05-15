import TodoItem from "./TodoItem";

const Todo = ({ todoList, removeTodo, toast }) => {
  return (
    <div>
      <ul id="todos">
        {todoList.map((todoItem) => {
          return (
            <TodoItem
              key={todoItem.id}
              toast={toast}
              todoItem={todoItem}
              removeTodo={removeTodo}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Todo;
