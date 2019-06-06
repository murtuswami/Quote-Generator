import React from 'react'
export const Box = (props) =>{
    return (
      <div id = "quote-box" className ="Quote-Box"> 
      <p id = "text">{props.quote}</p> <br />
      <p id = "author">{props.author} </p>
      <button id = "new-quote" onClick = {props.randIndex} className="myButton" >New Quote </button>
      </div>
    );
  }