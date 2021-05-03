import React from 'react'
import AddTo from './AddTo'

export default function Todo(props) {
    const {todos, handleDelete} = props
    const list = todos.map((input,i)=> {
        return <AddTo input={input} key={i} handleDelete={handleDelete} idx={i}/>
    })
    return (
        <div>
            <ul id='todos'>
                {list}
            </ul>
        </div>
    )
}
