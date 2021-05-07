import React from "react";
import TodoItem from "./TodoItem"



const TodoList = ({todos, removeTodo}) => {
    
    return(
        <section>

        <ul id="todos">
            {todos.map((todo) => {
                return <TodoItem 
                        todo={todo}
                        // id={todo.id} 
                        // todo={todo.text} 
                        removeTodo={removeTodo} />
                
            })}
            
        </ul>
        </section>
    )
}

export default TodoList;