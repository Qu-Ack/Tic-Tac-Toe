var gameBoard = (function () {
    Board = [['' , '' , ''] , 
             ['' , '' , ''] ,
             ['' , '' , '']]
    
    function render() {
        console.log(Board);
    }

    return {render , Board}
})()