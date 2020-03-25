import React from 'react';
import './AppTitle.css';

const AppTitle = ({imp,done})=>{
    return (
        <div className="title">
            <h1>TodoList</h1>
            <div className="title_info"><p>{imp} important</p>
    <p>{done} done</p></div>
            
        </div>
    );
}

export default AppTitle;