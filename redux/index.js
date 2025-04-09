const redux=require('redux');
const INITIAL_VALUE = {
  counter:0
}

const reducer = (store=INITIAL_VALUE,action) => {
  let newCounter=store;
  if(action.type==='INCREMENT') {
    newCounter = {counter:store.counter+1};
  }
  else if(action.type==='ADDITION') {
    newCounter={counter:store.counter+action.payload.number};
  }
  return newCounter;
   
}

const store =redux.createStore(reducer);
const subscriber= () => {
  const value=store.getState();
  console.log(value);
}

store.subscribe(subscriber);
store.dispatch({type:'INCREMENT'});
store.dispatch({type:'ADDITION',payload:{number:10}});
