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

let turn;
let winner;
let gameboard;

/*----- cached element references -----*/
// squares, reset button, gameboard (section tag) --> "view"

const $squares = $(".square");
const $resetBtn = $("button");
const $gameboardElement = $("section");

/*
$gameboardEl will utilize bubbling --> whenever a div inside
the section tag is clicked, the same event listener will be fired
*/

/*----- event listeners -----*/
// squares (gameboard), reset button

$gameboardElement.on("click", ".square", handleClick);
$resetBtn.on("click", handleStart);


/*----- functions -----*/

handleStart();

function handleStart() {
    // set turn value to a default (X or O)
    turn = 1;
    // set the winner to false
    winner = false;
    // set the gameboard to a starting state -> all spaces are available
    gameboard = [null, null, null,
                 null, null, null,
                 null, null, null];
    // an alternative way to define an array
    // gameboard = new Array(9).fill(null);
};

function handleClick() {
    // capture user selection
    const userSelection = this.dataset.index;

    // place value in corresponding position
    gameboard[userSelection] = turn;

    // toggle turn
    console.log(gameboard);
    turn *= -1;
    render();
};

// handle square click --> "controller"
// 1.) first identify which square was clicked
// 2.) check if that square is available

// handle a reset button click

// check for winner

// updates DOM whenever square is clicked / rendering to DOM --> "view"

function render() {
    gameboard.forEach(function(key, index) {
        $squares[index].textContent = players[key]; // value --> X, O, or ""
    })
};
