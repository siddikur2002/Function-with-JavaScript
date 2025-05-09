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

let Minus       = document.querySelector('.Minus')
let QuantityTxt = document.querySelector('.QuantityTxt')
let Plus        = document.querySelector('.Plus')
let value = QuantityTxt.innerHTML = 1

Minus.addEventListener('click', ()=>{
    if(QuantityTxt.innerHTML == 1){

    }else{ 
      value--
      QuantityTxt.innerHTML = value
    }
})
Plus.addEventListener('click', ()=>{
    value++
    QuantityTxt.innerHTML = value
})

// Input Text Start-----
let TextInput   = document.querySelector('.TextInput')
let InputButton = document.querySelector('.InputButton')
let InputText   = document.querySelector('.InputText')
let InputError  = document.querySelector('.error')
let color_div   = document.querySelector('.color_div')
// Color button----
let AppearButton1 = document.querySelector('.AppearButton1')
let AppearButton2 = document.querySelector('.AppearButton2')
let AppearButton3 = document.querySelector('.AppearButton3')
let AppearButton4 = document.querySelector('.AppearButton4')

InputButton.addEventListener('click', ()=>{

    if(TextInput.value == ''){
        InputError.style = 'display:inline-block;'
        InputText.style = 'display:none;'
        color_div.style = 'display:none;'

    }else{
        InputText.innerHTML = TextInput.value
        InputText.style = 'display:block;'
        InputError.style = 'display:none;'
        color_div.style = 'display:block;'
    }
})
AppearButton1.addEventListener('click', ()=>{
    InputText.style = 'color:yellow; display:block;'
})
AppearButton2.addEventListener('click', ()=>{
    InputText.style = 'color:green; display:block;'
})
AppearButton3.addEventListener('click', ()=>{
    InputText.style = 'color:pink; display:block;'
})
AppearButton4.addEventListener('click', ()=>{
    InputText.style = 'color:purple; display:block;'
})





