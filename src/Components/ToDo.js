import React, { useEffect } from "react";
import { toast } from "react-toastify";

const ToDo = ({ todo, handleDeleteListItem }) => {
  
  
  useEffect(() => {
    toast.success(`New todo added: ${todo}`)
    return () => {
      toast.error(`Todo deleted: ${todo}`);
    };
  },[todo]);



  

  return (
    <li>
      {todo}{" "}
      <button name={todo} onClick={handleDeleteListItem}>
        -
      </button>{" "}
    </li>
  );
};

// class ToDo extends React.Component {

//     componentDidMount(){
//         const { todo } = this.props;
//             toast(`New todo added: ${todo}`)
//     }
//     componentWillUnmount(){
//         const { todo } = this.props;
//             toast(`${todo}`)
//     }
//   render() {
//     const { todo, handleDeleteListItem } = this.props;
//     return (

//               <li id="todos">
//                 {todo}{" "}
//                 <button name={todo} onClick={handleDeleteListItem}>
//                   -
//                 </button>{" "}
//               </li>
//     );
//   }
// }

export default ToDo;
