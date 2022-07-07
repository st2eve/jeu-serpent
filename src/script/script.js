function createGrid(){
    for(let i=0; i < 398; i++){
        const createSqr = document.createElement('div')
        const selectContainer = document.querySelector('.main__container-surface')
        createSqr.setAttribute('class', 'main__surface-carre')
        selectContainer.appendChild(createSqr)
    }
    snakeHead()
    mouse()
}

function snakeHead(){
    const createSqrSnake = document.createElement('div')
    const selectContainer = document.querySelector('.main__container-surface')
    createSqrSnake.setAttribute('class', 'snakeHead')
    createSqrSnake.setAttribute('style', 'grid-column: 10; grid-row: 10;')
    selectContainer.appendChild(createSqrSnake)
    moveSnake()
    
}

function mouse(){
    if(document.querySelector('.mouse')){
        document.querySelector('.mouse').remove()
    }
    const createSqrMouse = document.createElement('div')
    const selectContainer = document.querySelector('.main__container-surface')
    createSqrMouse.setAttribute('class', 'mouse')
    createSqrMouse.setAttribute('style', `grid-column: ${getRandomInt(1, 20)}; grid-row: ${getRandomInt(1, 20)};`)
    selectContainer.appendChild(createSqrMouse)
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
}

function moveSnake(){
    const selectSnake = document.querySelector('.snakeHead');
}

createGrid()

const selectSnake = document.querySelector('.snakeHead');
let y = selectSnake.style.gridColumn;
let x = selectSnake.style.gridRow;

function arrowUp(){
    if(parseInt(selectSnake.style.gridRow) > 1){
        selectSnake.setAttribute('style', `grid-column: ${y}; grid-row: ${parseInt(x)-1};`);
        x = selectSnake.style.gridRow;
    }else{
        selectSnake.setAttribute('style', `grid-column: ${y}; grid-row: 20;`);
        x = selectSnake.style.gridRow;
    }
}

function arrowDown(){
    if(parseInt(selectSnake.style.gridRow) < 20){
        selectSnake.setAttribute('style', `grid-column: ${y}; grid-row: ${parseInt(x)+1};`);
        x = selectSnake.style.gridRow;
    }else{
        selectSnake.setAttribute('style', `grid-column: ${y}; grid-row: 1;`);
        x = selectSnake.style.gridRow;
    }
}

function arrowLeft(){
    if(parseInt(selectSnake.style.gridColumn) > 1){
        selectSnake.setAttribute('style', `grid-column: ${parseInt(y)-1}; grid-row: ${x};`);
        y = selectSnake.style.gridColumn;
    }else{
        selectSnake.setAttribute('style', `grid-column: 20; grid-row: ${x};`);
        y = selectSnake.style.gridColumn;
    }
}

function arrowRight(){
    if(parseInt(selectSnake.style.gridColumn) < 20){
        selectSnake.setAttribute('style', `grid-column: ${parseInt(y)+1}; grid-row: ${x};`);
        y = selectSnake.style.gridColumn;
    }else{
        selectSnake.setAttribute('style', `grid-column: 1; grid-row: ${x};`);
        y = selectSnake.style.gridColumn;
    }
}


let arrUp = setInterval(arrowUp, 300);
let arrDown = setInterval(arrowDown, 300);
let arrLeft = setInterval(arrowLeft, 300);
let arrRight = setInterval(arrowRight, 300);


window.addEventListener('keydown', event => {
    
    if (event.which === 38) {
        //up
        clearInterval(arrUp)
        clearInterval(arrDown)
        clearInterval(arrLeft)
        clearInterval(arrRight)
        arrUp = setInterval(arrowUp, 300);
        console.log('up');
    }
    else if(event.which === 40){
        //down
        clearInterval(arrUp)
        clearInterval(arrDown)
        clearInterval(arrLeft)
        clearInterval(arrRight)
        arrDown = setInterval(arrowDown, 300);
        console.log('down');
    }
    else if(event.which === 37){
        //left
        clearInterval(arrUp)
        clearInterval(arrDown)
        clearInterval(arrLeft)
        clearInterval(arrRight)
        arrLeft = setInterval(arrowLeft, 300);
        console.log('left');
    }
    else if(event.which === 39){
        //right
        clearInterval(arrUp)
        clearInterval(arrDown)
        clearInterval(arrLeft)
        clearInterval(arrRight)
        arrRight = setInterval(arrowRight, 300);
        console.log('right');
    }
})