// import React, { Component } from "react";
// import { toast } from "react-toastify";

// export default class Todo extends Component {
//   componentDidMount() {
//     toast.success(`New todo added: ${this.props.todo}`);
//   }

//   componentWillUnmount() {
//     toast.error(`Todo deleted: ${this.props.todo}`);
//   }

//   render() {
//     const { todo, handleDelete, i } = this.props;
//     return (
//       <div>
//         <li>
//           {todo}
//           <button onClick={() => handleDelete(i)}>-</button>
//         </li>
//       </div>
//     );
//   }
// }

import React, { useEffect } from "react";
import { toast } from "react-toastify";

export default function Todo(props) {
  useEffect(() => {
    toast.success(`New todo added: ${props.todo}`);
    return () => {
      toast.error(`Todo deleted: ${props.todo}`);
    };
  });
  return (
    <div>
      <li>
        {props.todo}
        <button onClick={() => props.handleDelete(props.i)}>-</button>
      </li>
    </div>
  );
}
