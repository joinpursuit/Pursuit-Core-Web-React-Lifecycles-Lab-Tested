import { Component } from 'react'



class Todo extends Component {
    constructor(props){
        super(props)  
   
    }

    componentDidMount() {
        console.log(`${this.props.id} DID MOUNT`);
        this.props.toast.success(`New todo created: ${this.props.toDo}`);
        console.log("---------------------");
      }
    
    //   componentDidUpdate(prevProps, prevState) {
    //     console.log(`${this.props.id} DID UPDATE
    //     ${prevProps.toDoList} -> ${this.props.toDoList}`);
    //   }

    componentWillUnmount() {
        console.log(`${this.props.id} WILL UNMOUNT`);
        
      }


    render() {
        const {toDo, removeTask,toast} = this.props
        return (

            <li>
                <h1>{toDo}</h1><button onClick={()=>removeTask(this.props.id)}>-</button>
            </li>

        )
    }
}

export default Todo
