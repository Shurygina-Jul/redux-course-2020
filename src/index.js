import { applyMiddleware, createStore, compose } from 'redux'
import {composeWhithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { asyncIncrement, changeTheme, decrement, increment } from './redux/actions'
import { rootReducer } from './redux/rootReducer'
import './styles.css'

const counter = document.getElementById('counter')
const addBtn = document.getElementById('add')
const subBtn = document.getElementById('sub')
const asyncBtn = document.getElementById('async')
const themeBtn = document.getElementById('theme')
//0 это начальное состояние

// redux devtools через фунцию compose 
const store = createStore(
  rootReducer, 
  compose(
applyMiddleware(thunk,logger),
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))
//redux dev tools через установку библиотеки
// const store = createStore(
//   rootReducer, 
//   composeWhithDevTools(
// applyMiddleware(thunk,logger)

// ))
///можно в консоли посмтреть state
//window.store = store

//если произошел клик, меняем модель напрямую и рендерим 
addBtn.addEventListener('click', () =>{
  store.dispatch(increment())
 
})

subBtn.addEventListener('click', () =>{
  store.dispatch(decrement())
})
//через 2 секунды счетчик увеличивается на 1
asyncBtn.addEventListener('click', () =>{
 store.dispatch(asyncIncrement())
})

  store.subscribe(()=>{
    const state = store.getState()
    counter.textContent = state.counter
    document.body.className = state.theme.value
  }) 
  store.dispatch({type:'INIT_APP'})
//смена темы на dark
themeBtn.addEventListener('click', () =>{
  const newTheme = document.body.classList.contains('light')
   ? 'dark'
   : 'light'
  store.dispatch(changeTheme(newTheme))

 })





