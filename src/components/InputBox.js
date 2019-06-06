import React from 'react'


export const InputBox = (props) =>{
  
    return (
      <div id = "quote-box" className ="Quote-Box"> 
     <input type ="text" onChange = {props.quoteChangeHandle} value = {props.quoteInp} />
     <input type = "text" onChange = {props.authorChangeHandle} value = {props.authorInp}  />
    <button id = "submitBtn" onClick = {props.submit} >Submit </button>
      </div>
    );
  }