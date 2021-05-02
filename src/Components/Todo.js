import React from 'react'
import Item from "./Item.js"
export default function Todo(props) {

    return <li id="itemListed">
            {props.listItem.map((item, i) => {
                return <Item item={item}  key={i} index={i} handleDelete={props.handleDelete}/>
            })}
            </li>
    
}

