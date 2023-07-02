var gameBoard = (function () {
    Board = [['' , '' , ''] , 
             ['' , '' , ''] ,
             ['' , '' , '']]

    //cache dom 
    const cardContainer = document.querySelector('.grid-container');
    const cards = document.querySelectorAll('.card');


    // A function just to display this Board On screen this will later have DOM elements included
    function render() {
        for(let i =0; i < 3; i++) {
            for(let j = 0 ; j < 3 ; j++) {
                let card = document.querySelector(`[data-row = "${i}"][data-col = "${j}"]`)
                card.textContent = Board[i][j]
            } 
        }
    }

    return {render , Board , cards}
})() 