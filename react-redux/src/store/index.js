import {createStore} from "redux";
const INITIAL_VALUE={
  counter:0
}

const reducer= (state=INITIAL_VALUE,action) => {
  let newState=state;
  if(action.type==='INCREMENT') {
    newState = {counter:state.counter+1};
  }
  else if(action.type==='DECREMENT') {
    newState = {counter:state.counter-1};
  }
  else if(action.type==='ADD') {
    newState={counter:state.counter+action.payload.number};
  }
  else if(action.type==='SUBTRACT') {
    newState={counter:state.counter-action.payload.number};
  }
  return newState;
  
}
const store = createStore(reducer);
export default store;