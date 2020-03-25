import React,{useState} from 'react';
import ErrorPlace from '../error-place';

import './EditInput.css';
import '../todo-list-item/TodoListItem.css';

const EditInput = ({taskId,taskText,onEdited,editShow})=>{
    const [inputValue, setInputValue] = useState(taskText);
    const [errorShow,setErrorShow] = useState(false);
    const changeValue = (e)=>{
        setInputValue(e.target.value);
        console.log(inputValue);
      }
      const onSubmit = (e)=>{
          e.preventDefault();
          if(inputValue.length<3){
            setErrorShow(true);
            return
          }
          onEdited(taskId,inputValue);
          setInputValue(""); 
          setErrorShow(false);
          editShow(false);
      }
    return(
        <span className="task edit_task">
            <form className="edit_input" onSubmit={onSubmit}>
        <input value={inputValue} onChange={changeValue} autoFocus/>
        <button className="task-button imp"><i className="fa fa-check"></i></button>
        {errorShow &&
             <ErrorPlace  errorText={"Должно быть больше 3х символов*"}/>}  
        </form>
        </span>
    )
}

export default EditInput;