/*----- constants -----*/
// Data that doesn't change -> Players -> Winning Combos -> Rules

const players = {
    "1": "X",
    "-1": "O",
    "null": "",
};

// console.log(players[1]);

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
// console.log($squares);
const $resetBtn = $("button");
const $gameboardElement = $("section");
// console.log($gameboardElement);
const $messageEl = $("h2");

/*
$gameboardElement will utilize bubbling --> whenever a div inside
the section tag is clicked, the same event listener will be fired
*/

/*----- event listeners -----*/
// squares (gameboard), reset button

$gameboardElement.on("click", ".square", handleClick);
$resetBtn.on("click", handleStart);


/*----- functions -----*/

/*
IMPORTANT: call handleStart() function at page load (not just when reset button is clicked)
so board is clear when game first starts
*/

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

    if (gameboard[userSelection] === null) {
        // place value in corresponding position
        gameboard[userSelection] = turn;
        // toggle turn
        turn *= -1;
        render();
    }
};

// handle square click --> "controller"
// 1.) first identify which square was clicked
// 2.) check if that square is available

// handle a reset button click

// check for winner

// updates DOM whenever square is clicked / rendering to DOM --> "view"

function render() {
    gameboard.forEach(function(value, index) {
        $squares[index].textContent = players[value]; // value --> X, O, or ""
    })

    // we can update our message element here
    $messageEl.text(`${players[turn]}'s turn`)
};

/*

render(): called to update the DOM with the changes we made to the gameboard via JS

Steps of render():

1.) Loop through the gameboard array (JS representation of gameboard w/ index #s)
2.) Grabs the current value of each array element + index of each array element
(callback function parameters)
3.) $squares is a jQuery object (returns an array of DOM elements -> each div with
    a class of "square")
    a.) Each div in the array $squares contains has an index number parallel to the index
    numbers in the gameboard array
4.) When we get to the first array element in gameboard, it's value is either null, 1, or -1
    a.) The first element in the gameboard array has an index of 0
    b.) We are passing the value and index of each gameboard array's element to the second
    line of code in this forEach method
    c.) $square[index] -> takes the current index of the gameboard array element and passes it
    to the $square jQuery object via square bracket notation
        - Each element within the array that $squares has also has an index number (each div is 
            an element within this array, so it has an index number)
        - We are now accessing the div in that index position of the $squares array
    d.) players[value] -> takes the current value of the gameboard array element and passes
    it to the players object via square bracket notation
        - Each value within the gameboard array starts at null, so for each square that has
        not been clicked on, it's value will be null (see handleClick() function above)
        - If the square was clicked on, it's value is either 1 or -1 (see handleStart() and handleClick() functions above)
        - players[null] would equal an empty string, leaving the squares that were
        not clicked on empty
        - players[1] would equal to "X" -> this accesses the key of "1" the players
        object, which has a value of "X"
        - players[-1] would equal to "O" -> this accesses the key of "-1" in the players
        object, which has a value of "O"
    e.) Overall, for each element in the gameboard array, whatever it's value and index
    are will determine which div in the $squares array will be accessed and will determine
    which value will be placed into that div via the DOM (X, O or null) based on which player's
    turn it is and where they chose to click.

*/

