import React,{useState} from 'react';
import EditInput from '../edit-place';

import './TodoListItem.css';

const TodoListItem =({task,onDeleted,onEdit,id,impHandler,doneHandler,done,important}) =>{


const [checkEdit,setCheckEdit] = useState(false);

const onTaskClick = ()=>{
    doneHandler(id);
}

const onImportantClick = ()=>{
       impHandler(id);
    }
const onEditClick = ()=>{
       
        setCheckEdit(true);
}

    let TaskTextClassName = "taskText";
    let  TaskClassName = "task";
     let TaskButton = "task-button";
      if(done){
          TaskTextClassName += ' done';
      }
      if(important){
         TaskClassName += ' important';
         TaskButton+= ' imp';
      }   


       

       
    return (
     <span>
         {checkEdit ||
        <span className={TaskClassName}>
         <span
         className={TaskTextClassName}
         onClick = {onTaskClick}>
             {task}
             
             </span>
         
   
        
       
        <span className="task-buttons">
    <button 
    className={TaskButton}
    onClick={onImportantClick}><i className="fa fa-exclamation"></i>
    </button>
    <button
    className={TaskButton}
    onClick={onEditClick}
    ><i className="fa fa-pen"></i>
    </button>
    <button className={TaskButton}
    onClick={onDeleted}
   ><i className="fa fa-trash"></i></button>
    </span>

    </span>
}
    {checkEdit && <EditInput taskId={id}
        taskText = {task} 
        onEdited={onEdit} 
         editShow={setCheckEdit}
        />}
  
    </span>
    );
}

export default TodoListItem;

