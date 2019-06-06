import React from 'react';
import ReactDOM from 'react-dom'
import './App.css';
import { relative } from 'path';
import {connect} from 'react-redux'
import {Box} from '../components/Box'
import {InputBox}  from '../components/InputBox'

//react
class App extends React.Component{
 constructor() {
 super();
 this.state = {quoteInput:"",authorInput:""};
 this.handleQ = this.handleQ.bind(this);
 this.handleA = this.handleA.bind(this);
 }
  handleQ(event){
      this.setState({quoteInput:event.target.value});
  }
  handleA(event){
      this.setState({authorInput:event.target.value});
      
  }
  render() {

  return (
    <div className="App">
      <header className="App-header">
       
       <Box author = {this.props.messages[this.props.index][0]} //handled by redux
            quote = {this.props.messages[this.props.index][1]}
            randIndex = {this.props.randIndex}
       />
       <InputBox quoteInp = {this.state.quoteInput}             //handled by local state 
                 authorInp = {this.state.authorInput}
                 authorChangeHandle = {this.handleA}
                 quoteChangeHandle = {this.handleQ}
                 submit = {() => this.props.submitMsg([this.state.quoteInput,this.state.authorInput])}
       />
       
      </header>
    </div>
  );
}
}

//react-redux


function mapStateToProps(state) {
  return{
    index:state.index,
    messages:state.messages
      }
}

function matchDispatchToProps(dispatch){
  return (
    {
      randIndex:function(){
        dispatch({type:"RANDOM"});
      },
      submitMsg:function(input){
        dispatch({type:"SUBMIT",payload:input});

      }
    }
  );
}
export default connect(mapStateToProps,matchDispatchToProps)(App);


