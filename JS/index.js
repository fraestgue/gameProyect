// elementos de DOM & variables globales
const preGrameScreenNode = document.querySelector("#pre-game");
const gameSreenNode = document.querySelector("#game-screen");
const gameOverScreenNode = document.querySelector("#gameover-screen")
const starBtnNode = document.querySelector("#start-btn")
const gameBoxNode = document.querySelector("#game-box")
const reStartBtnNode = document.querySelector("#restart-btn")
const music = new Audio("./sonidos/bsos.mp3")
music.volume = 0.1;
const playBtn = document.querySelector("#playerBtn")
const pauseBtn = document.querySelector("#pauseBtn")
let gameObj; // en la pantalla inicial el juego no existe aun 
const disparoM = new Audio("./sonidos/disparo1.mp3")
disparoM.volume = 0.05;
const scoreNode = document.querySelector("#score span");
const livesNode = document.querySelector("#live span");
const groguSound = new Audio("./sonidos/grogu.mp3");
groguSound.volume = 0.1;
const dañoMando = new Audio("./sonidos/dañomando.mp3");
dañoMando.volume = 0.07;
const dañoAliado = new Audio("./sonidos/dañoaliado.mp3");
dañoAliado.volume = 0.07;


// FUNCION PRINCIPAL
function startGame () {
    // console.log("clicando")

    // ocultar pre-game screen
    preGrameScreenNode.style.display = "none";

    // mostrar pantalla de juego
    gameSreenNode.style.display = "flex";
    gameObj = new Game () // se liga la class Game

    gameObj.start()
    gameObj.enemysAppear()
    gameObj.disparoEnemigo()
    gameObj.aliadosAppear()
    gameObj.groguAppear()

    // command + shift + 7

    
}

function backToRestart () {
    gameOverScreenNode.style.display = "none";
    preGrameScreenNode.style.display = "flex";
}



// ADD EVENT LISTENER
starBtnNode.addEventListener("click", startGame)
// se pasa la funcion starGame como funcion de callback

playBtn.addEventListener("click", () => {
    music.play()
})

pauseBtn.addEventListener("click", () => {
    music.pause()
})


//gameBoxNode.gameObj.mandalorianObj.movimiento()
window.addEventListener("keydown", (event) => {
    if (event.key === "ArrowUp") {
       gameObj.mandalorianObj.movimientoHaciaArriba()
    } else if (event.key === "ArrowDown") {
        gameObj.mandalorianObj.movimientoHaciaAbajo()
    }
   if (event.key === " ") {
        gameObj.disparar() 
        disparoM.play()
    }
})

reStartBtnNode.addEventListener("click", backToRestart)







// DOS funciones para el personaje: 

// la primera mover hacia arriba (lineas 35 y 36)
// la segunda el movimiento hacia abajo (38 y 39)
    


