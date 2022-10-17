const container = document.querySelector('.container');
const sizeEl = document.querySelector('.size');
const color = document.querySelector('.color');
const resetBtn = document.querySelector('.rstbtn');

//Value of size input
let size = sizeEl.value

//we will only color our pixel if draw is set to true
let draw = false

//for populate grid
function populate(size){
    //updating the --size CSS variable
    container.style.setProperty('--size',size)
    for(let i = 0; i < size*size; i++){
        const div = document.createElement('div')
        div.classList.add('pixel')

        div.addEventListener('mouseover',function(){
            if(!draw) return
            div.style.backgroundColor = color.value
        })
        div.addEventListener('mousedown',function(){
            //we dont need to check if draw is true
            //because if we click on a pixel that means we want to draw
            div.style.backgroundColor = color.value
        })
        container.appendChild(div)
    }
}

window.addEventListener("mousedown",function(){
    draw = true
})

window.addEventListener("mouseup",function(){
    draw = false
})

function reset(){
    container.innerHTML = ''
    populate(size)
}

resetBtn.addEventListener('click',reset)

sizeEl.addEventListener('keyup',function(){
    size = sizeEl.value
    reset()
})

populate(size);