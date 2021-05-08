import React, {useEffect} from 'react'
import { toast } from 'react-toastify'


const Todos = ({todo, removeTodo}) => {
    useEffect(() => {
                toast.success(`New todo added: ${todo}`)
                return () => {
                toast.error(`Todo deleted: ${todo}`)
                }
    }, [])
    
   
        return( 
            <div>
                <li>{todo}</li>
                <button onClick={() => removeTodo(todo)}>x</button>
            </div>
        )
    
}

export default Todos;
// class Todo extends React.Component {
//     componentDidMount() {
//         toast(`New todo added: ${this.props.children}`, { type: "success" });
//       }
    
//       componentWillUnmount() {
//         toast(`Todo deleted: ${this.props.children}`, { type: "error" });
//       }
    
//       render() {
//         return (
//           <div>
//             {this.props.children}
//             <button onClick={this.props.onClose}>x</button>
//           </div>
//         );
//       }
//     }






