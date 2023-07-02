// Factory function for our Player cause we have to make more than one player otherwise 
// I would have used an IIFE.

var choice = 'X';
const Player =  ()  => {


    

    function makeChoice() {
        // player would be able to choose his weapon. 
        // this would only happend once until the game ends
    }

    function win() { 
        alert(`${choice} wins`)
        location.reload()
    }


    function changeBoard(rows , cols) {
        // these also will be interactive and the user will be able select them. 

        // Empty or full logic in the board
        if (gameBoard.Board[rows][cols] == '') {
            gameBoard.Board[rows][cols] = choice
            gameBoard.render();
        } else {
            console.log("not free !!")
        }
    }

    return {makeChoice, win , changeBoard}
}

// can't access these inside my handler module due to scope reasons
// that is why have to create them globally the argument is just there for test purposes.
var P1 = Player();
var P2 = Player();



// This function is responsible for managing other Modules and objects.
// It will also be responsible for the basic flow of the game and I might add win logic here.
var Handler = (function (player1 , player2) {
    var turn = true;
  

    function game() {
        if (turn) {
            Listen(player1);
        }
        else {
            Listen(player2 );
        }
      }

    function Listen(player) {
        gameBoard.cards.forEach(card => {
            card.addEventListener('click' , function() {
                if(choice == "X") {
                    choice = "O"
                }  
                else if(choice == "O") {
                    choice = "X"

                } 
                console.log(player.choice)
                let row = card.getAttribute('data-row')
                let col = card.getAttribute('data-col')
                player.changeBoard(row , col)
                
                winLogic(player)
                turn = false;
               
            })
        })
    }


    


    function winLogic(winner) {
        for(let rows = 0 ; rows < gameBoard.Board.length ; rows++) {
            if((gameBoard.Board[rows][0] == gameBoard.Board[rows][1] && gameBoard.Board[rows][0] == gameBoard.Board[rows][2]) && gameBoard.Board[rows][0] == choice) {
                winner.win();
            }
        }

        for(let cols = 0; cols < 3; cols++) {
            if((gameBoard.Board[0][cols] == gameBoard.Board[1][cols] && gameBoard.Board[0][cols] == gameBoard.Board[2][cols]) && gameBoard.Board[0][cols] == choice) {
                winner.win();
            }
        }

        if(((gameBoard.Board[0][0] == gameBoard.Board[1][1] && gameBoard.Board[0][0] == gameBoard.Board[2][2]) && gameBoard.Board[0][0] == choice) || ((gameBoard.Board[0][2] == gameBoard.Board[1][1] && gameBoard.Board[0][2] == gameBoard.Board[2][0]) && gameBoard.Board[0][2] == choice)) {
            winner.win();
        }
    }

    return {game}
  
})(P1, P2)

Handler.game()