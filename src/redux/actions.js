import { CHANGETHEME, DECREMENT, INCREMENT } from "./types";

//actionCreater  это функции которые создают action
export function increment(){
  return{
    type: INCREMENT
  }
}
export function decrement(){
  return{
    type: DECREMENT
  }
}

export function changeTheme(newTheme){
  return{ 
    type: CHANGETHEME, 
    payload: newTheme

  }
}
export function asyncIncrement(){
  return function(dispatch){
    setTimeout(()=>{
      dispatch(increment())
    }, 1500)
    
  }
}