import './styles.css'

const counter = document.getElementById('counter')
const addBtn = document.getElementById('add')
const subBtn = document.getElementById('sub')
const asyncBtn = document.getElementById('async')
const themeBtn = document.getElementById('theme')
//это модель
let state = 0

//рендерим модель в шаблон
function render(){
  counter.textContent=state.toString()
}
//если произошел клик, меняем модель напрямую и рендерим 
addBtn.addEventListener('click', () =>{
  state++
  render()
})

subBtn.addEventListener('click', () =>{
  state--
render()
})
//через 2 секунды счетчик увеличивается на 1
asyncBtn.addEventListener('click', () =>{
  setTimeout(()=>{
    state++
    render()
  },2000 )
 
})
//смена темы на dark
themeBtn.addEventListener('click', () =>{
  document.body.classList.toggle('dark')
render()
})
render()