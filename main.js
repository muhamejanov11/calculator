import calculate from "./second.js"

let plus = document.getElementById('plus')
let minus = document.getElementById('minus')
let times = document.getElementById('times')
let divide = document.getElementById('divide')
let inp1 = document.getElementById('num1')
let inp2 = document.getElementById('num2')
let p = document.getElementById('result')


plus.addEventListener('click', () => {
    PlusFunction('+')
})
minus.addEventListener('click', () => {
    PlusFunction('-')
})
times.addEventListener('click', () => {
    PlusFunction('*')
})
divide.addEventListener('click', () => {
    PlusFunction(':')
})

function PlusFunction(operation) {
    let n1 = Number(inp1.value)
    let n2 = Number(inp2.value)

    let result = calculate(n1, n2, operation)
    p.innerHTML = `Результат: ${result}`
}