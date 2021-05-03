import React, { Component } from "react";

export default class Form extends Component {
  render() {
    const { handleInput, handleDisplayList } = this.props;
    return (
      <div>
        <form onSubmit={handleDisplayList}>
          <input onChange={handleInput} />
        </form>
      </div>
    );
  }
}
