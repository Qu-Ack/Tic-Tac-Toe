const Player =  (choice)  => {

    function makeChoice() {
        // player would be able to choose his weapon.
    }


    function changeBoard() {
        let rows = 2
        let cols = 1
        if (gameBoard.Board[rows][cols] == '') {
            gameBoard.Board[rows][cols] = choice
            gameBoard.render();
        } else {
            console.log("not free !!")
        }
    }

    return {changeBoard , makeChoice }
}


var P1 = Player("O");
var P2 = Player("X")


var Handler = (function (player1 , player2) {
    var turn = true;
  
    function game() {
      if (turn) {
          player1.changeBoard();
          turn = false;
      }
      else {
          player2.changeBoard();
          turn = true;
      }
    }

    return {game}
  
})(P1, P2)

Handler.game()