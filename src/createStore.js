//3 базовых метода,паттерн наблюдатель
export function createStore(rootReducer, initialState){
  //то что внутр самой функции приватно
  let state = rootReducer(initialState, {type: '__INIT'})
  //слушатели событий
  const subscribers = []
  
  //внутри return методы публичные
  return {
    dispatch(action){
      //получаем объект,прогоняя что то через редюсер
      //получаем новый стейт
     state = rootReducer(state, action)
     //уведомить всех слушателей об изменении состояния
     subscribers.forEach(sub => sub())
    },
    subscribe(callback){
      subscribers.push(callback)
    },
    getState(){
      return state
    }
  }
}