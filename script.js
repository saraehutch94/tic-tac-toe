/*----- constants -----*/
// Data that doesn't change -> Players -> Winning Combos -> Rules

const players = {
    "1": "X",
    "-1": "O",
    "null": "",
};

const combos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [0, 4, 8],
];

/*----- app's state (variables) -----*/
// Data that does change -> turn, winner, gameboard --> "model"


/*----- cached element references -----*/
// squares, reset button --> "view"


/*----- event listeners -----*/
// squares (gameboard), reset button


/*----- functions -----*/

// handle square click --> "controller"
// 1.) first identify which square was clicked
// 2.) check if that square is available

// handle a reset button click

// check for winner

// updates DOM whenever square is clicked --> "view"
