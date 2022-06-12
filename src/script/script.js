const selectCarres = document.querySelectorAll('.main__surface-carre')


for(let selectCarre of selectCarres){
    const snakeHead = selectCarre.getAttribute('style')
    if(snakeHead.value = 'grid-area: 5/5'){
        snakeHead.setAttribute('style', 'background-color: red;')
    }
}