// Iteration 1: Declare variables required for this game
let gameBody = document.getElementById("game-body")
let numberoflives = 4;
var timerBox = document.getElementById("timer")

var lives = document.getElementById("lives")
var maxLives = document.getElementById("max-lives")
// var timer = document.getElementById("timer")
var timeleft = 60;
const zombieContainer = document.getElementById('zombieContainer') 
// console.log(seconds);

// Iteration 1.2: Add shotgun sound
const shotgunSound = new Audio("./assets/shotgun.wav")
gameBody.onclick = () => {
    shotgunSound.pause();
    shotgunSound.currentTime = 0;
    shotgunSound.play();
}
// shotgunSound.loop = true;
shotgunSound.volume = 1;
// Iteration 1.3: Add background sound
const backgroundSound = new Audio("./assets/bgm.mp3");
backgroundSound.play();
backgroundSound.loop = true;

// Iteration 1.4: Add lives

// Iteration 2: Write a function to make a zombie
const img = [
    "zombie-1.png",
    "zombie-2.png",
    "zombie-3.png",
    "zombie-4.png",
    "zombie-5.png",
    "zombie-6.png",
];

function getRandomInt(min,max){
    min = Math.floor(min);
    max = Math.ceil(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

var zombieId = 0;
createZombie();
function createZombie(){
    let z = img[getRandomInt(0,img.length)];
    zombieContainer.innerHTML = `<img src="./assets/${z}" 
                            class = "zombie-image"
                            id="zombie${zombieId}" height="116px" width="123px">`

    let zombie = document.getElementById(`zombie${zombieId}`)
    zombie.style.transform = `translateX(${getRandomInt(15,75)}vw)`

    zombie.onclick =()=>{
        zombieKill(zombie)
    } 
}
// Iteration 3: Write a function to check if the player missed a zombie
function zombieMissed(zombie){

    if(zombie.getBoundingClientRect().top <= 0){
        numberoflives--;
        if (numberoflives == 4){maxLives.style.width = "100%"}
        else if (numberoflives == 3){maxLives.style.width = "75%"} 
        else if (numberoflives == 2){maxLives.style.width = "50%"} 
        else if (numberoflives == 1){maxLives.style.width = "25%"} 
        console.log(numberoflives)
        zombieKill(zombie)
        return true; 
        
    }
    return false;
    
}
 


// Iteration 4: Write a function to destroy a zombie when it is shot or missed

function zombieKill(zombie){
    zombie.style.display = "none";
    // zombieId++;
    createZombie();
}
// Iteration 5: Creating timer
var timer = setInterval(() => {
    timeleft--;

    let zombie = document.getElementById(`zombie${zombieId}`)

    if (zombieMissed(zombie) == true){
        zombieKill(zombie)
    if (numberoflives == 0){
        clearInterval(timer)
        location.href = "./game-over.html"
    }
    }

    else if (timeleft == 0){
        clearInterval(timer)
        location.href = "./win.html"
    }
    timerBox.innerHTML = timeleft

},1000)
// Iteration 6: Write a code to start the game by calling the first zombie

// Iteration 7: Write the helper function to get random integer
