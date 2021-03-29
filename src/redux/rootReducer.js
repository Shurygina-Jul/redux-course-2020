import { ASYNC_INCREMENT, DECREMENT, INCREMENT } from "./types"
//Редюсер пробегает по action.type
//если есть совпадения,то изменяет state И возвращает его
export function rootReducer(state, action ){
  if (action.type ===INCREMENT) {
    return state + 1
  }else if (action.type === DECREMENT){
    return state - 1
  }
    //если if не найден, возвращает старый state
  return state
}