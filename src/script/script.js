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

createGrid()

let selectSnake = document.querySelector('.snakeHead');
let y = selectSnake.style.gridColumn;
let x = selectSnake.style.gridRow;

function arrowUp(){
    let selectSnake = document.querySelector('.snakeHead');
    let selectSnakeBodys = document.querySelectorAll('.snakeBody');
    if(parseInt(selectSnake.style.gridRow) > 1){
        selectSnake.setAttribute('style', `grid-column: ${y}; grid-row: ${parseInt(x)-1};`);
        x = selectSnake.style.gridRow;
    }else{
        selectSnake.setAttribute('style', `grid-column: ${y}; grid-row: 20;`);
        x = selectSnake.style.gridRow;
    }
    mouseEated()
    if(document.querySelector('.snakeBody')){
        let i=1;
        for(i=1 ; selectSnakeBodys.NodeList[i].style.gridRow == selectSnakeBodys.NodeList[i-1].style.gridRow; i++){
            console.log(selectSnakeBodys.NodeList[i].style.gridRow)
            console.log(selectSnakeBodys.NodeList[i-1].style.gridRow)
            //selectSnakeBodys.setAttribute('style', `grid-column: ${y}; grid-row: ${parseInt(selectSnakeBodys[i].style.gridRow)+1};`);
        }
    }
}

function arrowDown(){
    let selectSnake = document.querySelector('.snakeHead');
    let selectSnakeBodys = document.querySelectorAll('.snakeBody');
    if(parseInt(selectSnake.style.gridRow) < 20){
        selectSnake.setAttribute('style', `grid-column: ${y}; grid-row: ${parseInt(x)+1};`);
        x = selectSnake.style.gridRow;
    }else{
        selectSnake.setAttribute('style', `grid-column: ${y}; grid-row: 1;`);
        x = selectSnake.style.gridRow;
    }
    mouseEated()
    if(document.querySelector('.snakeBody')){
        for(let selectSnakeBody of selectSnakeBodys){
            selectSnakeBody.setAttribute('style', `grid-column: ${y}; grid-row: ${parseInt(x)-1};`);
        }
    }
}

function arrowLeft(){
    let selectSnake = document.querySelector('.snakeHead');
    let selectSnakeBodys = document.querySelectorAll('.snakeBody');
    if(parseInt(selectSnake.style.gridColumn) > 1){
        selectSnake.setAttribute('style', `grid-column: ${parseInt(y)-1}; grid-row: ${x};`);
        y = selectSnake.style.gridColumn;
    }else{
        selectSnake.setAttribute('style', `grid-column: 20; grid-row: ${x};`);
        y = selectSnake.style.gridColumn;
    }
    mouseEated()
    if(document.querySelector('.snakeBody')){
        for(let selectSnakeBody of selectSnakeBodys){
            selectSnakeBody.setAttribute('style', `grid-column: ${parseInt(y)+1}; grid-row: ${x};`);
        }
    }
}

function arrowRight(){
    let selectSnake = document.querySelector('.snakeHead');
    let selectSnakeBodys = document.querySelectorAll('.snakeBody');
    if(parseInt(selectSnake.style.gridColumn) < 20){
        selectSnake.setAttribute('style', `grid-column: ${parseInt(y)+1}; grid-row: ${x};`);
        y = selectSnake.style.gridColumn;
    }else{
        selectSnake.setAttribute('style', `grid-column: 1; grid-row: ${x};`);
        y = selectSnake.style.gridColumn;
    }
    mouseEated()
    if(document.querySelector('.snakeBody')){
        for(let selectSnakeBody of selectSnakeBodys){
            selectSnakeBody.setAttribute('style', `grid-column: ${parseInt(y)-1}; grid-row: ${x};`);
        }
    }
}

function arrUp(){
    let arrUp = setInterval(arrowUp, 300);
}

function arrDown(){
    let arrDown = setInterval(arrowDown, 300);
}

function arrLeft(){
    let arrLeft = setInterval(arrowLeft, 300);
}

function arrRight(){
    let arrRight = setInterval(arrowRight, 300);
}

window.addEventListener('keydown', event => {
    
    if (event.which === 38) {
        //up
        clearInterval(arrUp)
        clearInterval(arrDown)
        clearInterval(arrLeft)
        clearInterval(arrRight)
        arrUp = setInterval(arrowUp, 300);
    }
    else if(event.which === 40){
        //down
        clearInterval(arrUp)
        clearInterval(arrDown)
        clearInterval(arrLeft)
        clearInterval(arrRight)
        arrDown = setInterval(arrowDown, 300);
    }
    else if(event.which === 37){
        //left
        clearInterval(arrUp)
        clearInterval(arrDown)
        clearInterval(arrLeft)
        clearInterval(arrRight)
        arrLeft = setInterval(arrowLeft, 300);
    }
    else if(event.which === 39){
        //right
        clearInterval(arrUp)
        clearInterval(arrDown)
        clearInterval(arrLeft)
        clearInterval(arrRight)
        arrRight = setInterval(arrowRight, 300);
    }
})

function snakeBody(){
    let selectSnake = document.querySelector('.snakeHead');
    const createSqrSnakeBody = document.createElement('div')
    const selectContainer = document.querySelector('.main__container-surface')
    createSqrSnakeBody.setAttribute('class', 'snakeBody')
    createSqrSnakeBody.setAttribute('style', `grid-column: ${parseInt(selectSnake.style.gridColumn)}; grid-row: ${parseInt(selectSnake.style.gridRow)};`)
    selectContainer.appendChild(createSqrSnakeBody)
}

function removeSqr(){
    const removeSqr = document.querySelector('.main__surface-carre')
    removeSqr.remove()
}

function mouseEated(){
    let selectSnake = document.querySelector('.snakeHead');
    let selectMouse = document.querySelector('.mouse');

    if(parseInt(selectSnake.style.gridColumn) == parseInt(selectMouse.style.gridColumn) && parseInt(selectSnake.style.gridRow) == parseInt(selectMouse.style.gridRow)){
        mouse();
        snakeBody();
        removeSqr();
    }
}