const Todo =({todoList,removeTodo}) => {

    

    return(
        <ul id="todos">
        {todoList.map((todoItem)=>{
            return <li key={todoItem.id}>{todoItem.type}
            <button onClick={()=> removeTodo(todoItem.id)}>x</button>
            </li>
        })}
    </ul>
    )
    }
    
    export default Todo;