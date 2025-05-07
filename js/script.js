//----------all dom -----------//

let button1 = document.querySelector ('.button1')
let button2 = document.querySelector ('.button2')
let button3 = document.querySelector ('.button3')
let button4 = document.querySelector ('.button4')
let button5 = document.querySelector ('.button5')
let main    = document.querySelector ('.main')

button1.addEventListener('click' , ()=>{
    main.style ='background:yellow'
})
button2.addEventListener('click',()=>{
    main.style = 'background:green'
})
button3.addEventListener('click',()=>{
    main.style ='background:pink'
})
button4.addEventListener('click',()=>{
    main.style ='background:purple'
})
button5.addEventListener('click', ()=>{
    console.log(window.location.reload())
})