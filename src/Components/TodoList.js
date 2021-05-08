import Todo from './Todo';
import React from 'react'

const TodoList = (props) => {
    const { todoList, removeTodo } = props
        const listTodos = todoList.map(todo =>{
            return (
                <Todo todo={todo} removeTodo={removeTodo} key={todo.id}/>
            )
    })
    return (
        <ul id="todos">
            {listTodos}
        </ul>
    )
}
export default TodoList;

// export default class TodoList extends Component {
//     render() {
//         const { todoList, removeTodo } = this.props
//         const listTodos = todoList.map(todo =>{
//             return (
//                 <Todo todo={todo} removeTodo={removeTodo} key={todo.id}/>
//             )
//         })
//         return (
//             <ul id="todos">
//                 {listTodos}
//             </ul>
//         )
//     }
// }
