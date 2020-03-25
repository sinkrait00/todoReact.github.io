import React from 'react';
import './errorPlace.css';

const ErrorPlace = ({errorText})=>{
    return(
    <div className="errorPlace">{errorText}</div>   
    )
}
export default ErrorPlace;