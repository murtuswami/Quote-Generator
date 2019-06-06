import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App'
import * as serviceWorker from './serviceWorker';
import logger from 'redux-logger'
//import thunk from 'redux-thunk'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'




const RANDOM = "RANDOM";
const SUBMIT = "SUBMIT";
const initialState = {messages:[["Dr.Suess","“You know you’re in love when you can’t fall asleep because reality is finally better than your dreams.”"],["Stephen King","“Get busy living or get busy dying.”"],
["Mark Caine","The first step toward success is taken when you refuse to be a captive of the environment in which you first find yourself."],["Mark Twain","Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do."]],index:0}

const reducer = function (state = initialState ,action)
{ switch (action.type)
  {case RANDOM:
    var random = Math.floor(Math.random() * (state.messages.length- 0) + 0) // needs to be array length
    while(random === state)
        {random =Math.floor(Math.random() * (state.messages.length - 0) + 0);}
    return {...state,index:random};
  break;
  case SUBMIT:
    console.log("submit");
    return{...state,messages:[...state.messages,action.payload]};
  break;
  default:
    return state;
  }
}
//middleware prevents entries where either(inclusive) fields are blank
const detectBlanks = (store) => (next) => (action) => {
  if(action.type != "SUBMIT"){next(action);}
  else{
  if(action.payload[0]== "" || action.payload[1] =="")
  {
    alert("one of your fields is blank entry not added ");
  }
  else{
  alert("quote added")
  next(action);
  }
  }
};
const randomIndxCreator = ()=>{return {type:RANDOM};}
const store = createStore(reducer,initialState,applyMiddleware(logger,detectBlanks));
store.subscribe( () => {
  console.log("Store Updated",store.getState());
});



ReactDOM.render(<Provider store = {store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


