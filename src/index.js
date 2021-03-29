import { createStore } from './createStore'
import { rootReducer } from './redux/rootReducer'
import './styles.css'

const counter = document.getElementById('counter')
const addBtn = document.getElementById('add')
const subBtn = document.getElementById('sub')
const asyncBtn = document.getElementById('async')
const themeBtn = document.getElementById('theme')
//0 это начальное состояние
const store = createStore(rootReducer, 0)
///можно в консоли посмтреть state
//window.store = store

//если произошел клик, меняем модель напрямую и рендерим 
addBtn.addEventListener('click', () =>{
  store.dispatch({type:'INCREMENT'})
 
})

subBtn.addEventListener('click', () =>{
  store.dispatch({type:'DECREMENT'})
})
//через 2 секунды счетчик увеличивается на 1
asyncBtn.addEventListener('click', () =>{

})

  store.subscribe(()=>{
    const state = store.getState()
    counter.textContent =state
  }) 
  store.dispatch({type:'INIT_APP'})
//смена темы на dark
// themeBtn.addEventListener('click', () =>{
//   document.body.classList.toggle('dark')
// render()
// })





