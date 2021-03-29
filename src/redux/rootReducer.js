import { combineReducers } from "redux"
import { ASYNC_INCREMENT, CHANGETHEME, DECREMENT, INCREMENT } from "./types"
//Редюсер пробегает по action.type
//если есть совпадения,то изменяет state И возвращает его
 function countertReducer(state = 0, action ){
  if (action.type ===INCREMENT) {
    return state + 1
  }else if (action.type === DECREMENT){
    return state - 1
  }
    //если if не найден, возвращает старый state
  return state
}
const initialThemeState = {
  value: 'light'
}
 function themeReducer(state = initialThemeState, action){
  switch(action.type){
    case CHANGETHEME:
      return {...state, value: action.payload}
    default: return state

  }
  }
export const rootReducer = combineReducers({
  counter: countertReducer,
  theme: themeReducer
})