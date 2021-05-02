import React from 'react'

class Todo extends React.Component {
  constructor (props) {
    super(props)
  }
  componentDidMount () {
    console.log('+++++++++++++++++++++++++++++++++')
    console.log(`${this.props.task} DID MOUNT`)
    this.props.toast.success(`New todo added: ${this.props.task}`, {
      position: this.props.toast.POSITION.BOTTOM_RIGHT
    });
    this.props.toast(`Remaining todos: ${this.props.toDoList.length}`, {
      position: this.props.toast.POSITION.BOTTOM_RIGHT
    });
    console.log('+++++++++++++++++++++++++++++++++')
  }

  componentWillUnmount () {
    console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx')
    console.log(`${this.props.task} WILL UNMOUNT`)
    this.props.toast.error(`Todo deleted: ${this.props.task}`, {
      position: this.props.toast.POSITION.BOTTOM_LEFT
    });
    this.props.toast(`Remaining todos: ${this.props.toDoList.length - 1}`, {
      position: this.props.toast.POSITION.BOTTOM_LEFT
    });
    console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx')
  }

  render () {
    const { task, removeTask, idx } = this.props
    return (
      <li>
        <div className="divCenter">
          <h1>{task}</h1>
          <br />
          <button onClick={() => {removeTask(idx)}}>x</button>
        </div>
      
      </li>
    )
  }
}

export default Todo
