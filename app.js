let gameSeq=[];
let userSeq=[];

let btns = ["red","purple","green","yellow"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started == false){
        console.log("Game Started");
        started = true;
        levelUp();
    }
});

function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    // random btn 
    let randIdx = Math.floor(Math.random()*4);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    console.log(randBtn);
    console.log(randIdx);

    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);

};

function gameFlash(btn){ // white color
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
};

function userBtnFlash(btn){ // green color
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },250);
};

function checkAns(idx){
    console.log("Current Level " + level);
   
    if(userSeq[idx] == gameSeq[idx]){
        console.log("Same Color")
        if(userSeq.length == gameSeq.length){
           setTimeout(levelUp,1000);
        }
    }
    else{
        h2.innerHTML = `Game Over !! Your Score was <b>${level}</b> <br> Press any Key to Start`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function (){
        document.querySelector("body").style.backgroundColor = "white";
        },500);
        reset();

    }

};

function btnPress(){
    let btn = this;
    userBtnFlash(btn);
    userColor = btn.getAttribute("id");
    console.log(userColor);
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");

for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}