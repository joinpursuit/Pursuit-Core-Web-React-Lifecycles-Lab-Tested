import React from "react";

const ToDo = ({ input }) => {
  return (
    <ul>
      <li>{input}</li>
      <button>x</button>
    </ul>
  );
};

export default ToDo;
