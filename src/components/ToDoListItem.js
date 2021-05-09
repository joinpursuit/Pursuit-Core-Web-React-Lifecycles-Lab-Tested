import React, { useEffect } from "react";

const ToDoListItem = ({toast, toDo, removeToDos}) => {
  useEffect(() => {
    toast.success(`New todo added: ${toDo.text}`);
    toast.error(`Todo deleted: ${toDo.text}`);
    return () => {
    }
  }, [])

  return (
      <li>
        {toDo.text}
        <button onClick={() => removeToDos(toDo.id)}>X</button>
      </li>
  );

}

export default ToDoListItem;


// class ToDoListItem extends Component {
//   constructor(props) {
//     super(props);
//   }

//   componentDidMount() {
//     const { toast, toDo } = this.props;
//     toast.success(`New todo added: ${toDo.text}`);
//   }

//   componentWillUnmount() {
//     const { toast, toDo } = this.props;
//     toast.error(`Todo deleted: ${toDo.text}`);
//   }

//   render() {
//     const { toDo, removeToDos } = this.props;
//     return (
//         <li>
//           {toDo.text}
//           <button onClick={() => removeToDos(toDo.id)}>X</button>
//         </li>
//     );
//   }
// }