import React,{useState} from 'react';
import ErrorPlace from '../error-place';

import './AddListItemButton.css';

const AddListItemButton = ({onAddItem})=>{
    const [inputValue, setInputValue] = useState("");
    const [errorShow,setErrorShow] = useState(false);
    const changeValue = (e)=>{
      setInputValue(e.target.value);
    }
    const onSubmit = (e)=>{
        e.preventDefault();
        if(inputValue.length<3){
          setErrorShow(true);
          return
        }
        onAddItem(inputValue);
        setInputValue(""); 
        setErrorShow(false);
    }
            return(
   
            <form className="input_task" onSubmit={onSubmit}>
            
            
            <input type="text" placeholder="enter name of task" autoFocus onChange={changeValue} value={inputValue} />  
            <button id="addTask">Add Task</button> 
            {errorShow &&
             <ErrorPlace  errorText={"You need type 3 letters or more*"}/>}  
           
            </form>
            )
        
}
export default AddListItemButton;