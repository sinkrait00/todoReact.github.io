import React from 'react';

import TodoListItem from '../todo-list-item';


const TodoList = ({info,onDeleted,onEdit,impHandler,doneHandler})=>{
const elements = info.map((item)=>{
    const {...items} = item;
    const {id}=item;
    return (
        <li key={id} className="">
            <TodoListItem {...items} 
            onDeleted = {()=>onDeleted(id)}
            onEdit = {onEdit}
            impHandler={impHandler}
            doneHandler={doneHandler}
            />
           
            </li>
    )
})

    return (
       <div>
            <ul>
                {elements}
            </ul>
        </div>
    )
}

export default TodoList;