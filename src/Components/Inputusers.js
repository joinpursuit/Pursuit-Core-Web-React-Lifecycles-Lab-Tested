import React from 'react'
import Todos from "./Todos"
export default function Inputusers(props) {
    return (
        <ul id='todos'>
            {props.value.map((todo, i)=>{
                return(
                    <Todos 
                    remove={props.remove} 
                    todo={todo} 
                    key={todo} 
                    id={i}/>
                )
            })}
        </ul>
    )
}
