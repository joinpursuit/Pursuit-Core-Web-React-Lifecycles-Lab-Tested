import React, {useEffect} from "react";
import { toast } from "react-toastify";
toast.configure();

const TodoItem = ({removeTodo, todo}) => {
  

  useEffect(() => {
    toast.success(`New todo added: ${todo.text} `)
    return () => toast.error(`Todo deleted: ${todo.text}`)
}, [todo])

  // componentDidMount() {
  //   const {todo} = this.props
  //   toast.success(`New todo added: ${todo.text} `);
  // }

  // componentWillUnmount() {
  //   const {todo} = this.props
  //   toast.error(`Todo deleted: ${todo.text}`)
  // }
  
  
    const { text, id } = todo;
    return (
      <div>
        <li className="userItem">{text}</li>
        <button onClick={() => removeTodo(id)}>-</button>
      </div>
    );
  }

export default TodoItem;
