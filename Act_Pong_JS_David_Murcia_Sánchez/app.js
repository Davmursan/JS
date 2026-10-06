/* BEHAVIOR .... CODING - JAVASCRIPT PROGRAMING LANGUAGE */
// Creating constants (const) and variables (let) with no type

const gameBoard = document.querySelector("gameBoard")
const ctx = gameBoard.getContext("2d")
const scoreText = document.querySelector("escoreText")
const resetBtn = gameBoard.Width
const gameWith = gameBoard.height
const boardBackground = "forestgreen"
const paddle1Color = "lightblue"
const paddle2Color = "red"
const paddleBorder = "black"
const ballColor = "yellow"
const ballBorderColor = "black"
const ballRadius = 12.5 // Ball size
const paddleSpeed = 50

let intervalID
let ballSpeed
let ballX = gameWith / 2
let ballY = gameHeight / 2
let ballXDirection = 0
let ballYDirection = 0
let player1Score = 0
let player2Score = 0
let paddle1 = { // Object in JS
    width: 25,
    height: 100,
    x: 0,
    y: 0,
}

let paddle2 = {
    width: 25,
    height: 100,
    x: gameWith - 25,
    y: gameHeight - 100,
}

//EVENTS

window.addEventListener("keydown", changeDirection)
resetBtn.addEventListener("click", resetGame)

gameStart()

// FUNCTIONS - A piece of code you can execute several times a program

function gameStart(){
    intervalID = setTimeout(()=>{
        clearBoard()
        drawPaddles()
        moveBall()
        drawBall(ballX, ballY)
        checkCollision()
        nextTick()
    }, 10)//This code is executed every 10 millisecond
}

function clearBoard(){
    ctx.fillStyle = boardBackground
    ctx.fillRect(0,0, gameWith, gameHeight)
}

function drawPaddles() {
    ctx.strokeStyle = boardBackground

    ctx.fillStyle = paddle1Color
    ctx.fillRect(paddle1.x, paddle1.y, paddle1.width, paddle1.height)
    ctx.strokeRect(paddle1.x, paddle1.y, paddle1.width, paddle1.height)

    ctx.fillStyle = paddle1Color
    ctx.fillRect(paddle2.x, paddle2.y, paddle2.width, paddle2.height)
    ctx.strokeRect(paddle2.x, paddle2.y, paddle2.width, paddle2.height)
}

// Going on implementing functions
function createBall() {
    ballSpeed = 1
    if(Math.round(Math.random)==1)
}


