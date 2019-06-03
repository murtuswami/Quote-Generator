import React from 'react';

import './App.css';
import { relative } from 'path';



class App extends React.Component{
 constructor(props){
   super(props);
   this.state = {messages:[["Dr.Suess","“You know you’re in love when you can’t fall asleep because reality is finally better than your dreams.”"],["Stephen King","“Get busy living or get busy dying.”"],
   ["Mark Caine","The first step toward success is taken when you refuse to be a captive of the environment in which you first find yourself."],["Mark Twain","Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do."]],index:0};
   this.randomIndex = this.randomIndex.bind(this);
 }
 randomIndex(){
  
  var num =Math.floor(Math.random() * (this.state.messages.length - 0) + 0);
  while(num == this.state.input)
  {
    num =Math.floor(Math.random() * (this.state.messages.length - 0) + 0);
  }
  
  this.setState({index:num});
 }
 componentDidMount(){
  const script = document.createElement("script");
  script.src = "https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js";
  script.async = true;
  document.body.appendChild(script);
  }
  render() {
    
  return (
    <div className="App">
      <header className="App-header">
       
       <Box author = {this.state.messages[this.state.index][0]} 
            quote = {this.state.messages[this.state.index][1]}
            randIndex = {this.randomIndex}
       />
       
      </header>
    </div>
  );
}
}
function Box(props) {
  
  return (
    <div id = "quote-box" className ="Quote-Box"> 
    <div >
    <p id = "text">{props.quote}</p>
    <br />
    <p id = "author">{props.author} </p>
    </div>
    <button id = "new-quote" onClick = {props.randIndex} className="myButton" >New Quote </button>

    </div>
  );
}


export default App;
