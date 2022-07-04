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


window.addEventListener('keydown', event => {
    const arrowUpInter = setInterval(arrowUp, 300);
    const arrowDownInter = setInterval(arrowDown, 300);
    const arrowLeftInter = setInterval(arrowLeft, 300);
    const arrowRightInter = setInterval(arrowRight, 300);
    if (event.which === 38) {
        //up
        event.preventDefault();
        clearInterval(arrowDownInter)
        clearInterval(arrowLeftInter)
        clearInterval(arrowRightInter)
        arrowUpInter;
    }
    else if(event.which === 40){
        //down
        event.preventDefault();
        clearInterval(arrowUpInter)
        clearInterval(arrowLeftInter)
        clearInterval(arrowRightInter)
        arrowDownInter;
    }
    else if(event.which === 37){
        //left
        event.preventDefault();
        clearInterval(arrowUpInter)
        clearInterval(arrowDownInter)
        clearInterval(arrowRightInter)
        arrowLeftInter;
    }
    else if(event.which === 39){
        //right
        event.preventDefault();
        clearInterval(arrowUpInter)
        clearInterval(arrowDownInter)
        clearInterval(arrowLeftInter)
        arrowRightInter;
    }
})