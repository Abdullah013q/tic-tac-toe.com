console.log('Welcome to Tic Tac Toe');
// let music = new Audio('music.mp3')
// let ting = new Audio('ting.mp3')
// let gameover = new Audio('gameover.mp3')
let turn = "X"

let Gameover = false

//function to change the turn
const changeTurn = () => {
    return turn === "X" ? "O" : "X"
}

//Function to check the winner player
const checkWin = () => {
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2, 2.5, 4.5, 0],
        [3, 4, 5, 2.5, 14.8, 0],
        [6, 7, 8, 2.5, 24.8, 0],
        [0, 3, 6, -7.5, 15, 90],
        [1, 4, 7, 2.5, 15, 90],
        [2, 5, 8, 12.6, 15, 90],
        [0, 4, 8, 3, 15, 45],
        [2, 4, 6, 3, 14, 135]
    ]
    wins.forEach(e => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")) {
            document.querySelector(".info").innerText = boxtext[e[0]].innerText + ' Won';
            Gameover = true;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "300px"
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.height = "250px"
            document.querySelector('.line').style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
            document.querySelector('.line').style.width = "25vw";
        }

    })
}

//Game Logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            // console.log('yes,')
            turn = changeTurn();
            // ting.play();
            checkWin();
            if (!Gameover) {
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;

            }

        }
    })

})
//add onclick listener
reset.addEventListener('click', () => {
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
    });
    turn = 'X'
    Gameover = false
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px"
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.height = "0px"
    document.querySelector('.line').style.width = "0vw";

})