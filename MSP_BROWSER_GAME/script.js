//define global variables pointing to divs//

let bottomRow = document.getElementsByClassName('bottomRow');

let stats = document.getElementsByClassName('stats');

let paperStat = document.getElementById('paperStat');

let paperHP = document.getElementById('paperHP');

let rockHP = document.getElementById('rockHP');

let moveButtons = document.getElementById('moveButtons');

const timer = document.querySelector('h2');

const p = document.getElementById("p");

let h2 = document.getElementById("h2")



//music

let music = document.getElementById('music');

let sound = document.getElementById('sound');

let soundOn = "0";

function fightButton() {
    sound.play();
sound.volume = 0.2;


}

function mute(){
    if (soundOn == "0"){
        soundOn = "1";
        music.innerHTML ="<img src='images/mute_sound.png'>";
        sound.play();
    } else{
        soundOn = "0";
        music.innerHTML ="<img src='images/sound_on.png'>";
        sound.pause();
    } 
}

    
    

//timer
let seconds = 99;

timer.innerHTML = seconds;
timer.innerHTML = `${seconds}`;
const countDown = setInterval(() =>{
    seconds--;
    timer.innerHTML = `${seconds}`;
    if(seconds <=0 || seconds <1){
        h2.innerText += "TIMES UP!";
    }
    
},1000)


//health

let papHP = 100;
let roHP = 100;

//-------------------------------------FIGHTER 1 attack -------------------------------------moves//

//KICK//
function kick() {
    let impact = Math.round(Math.random()*10);
    if (impact <= 6){
        let damage = Math.round(Math.random()*10)+5;
        roHP -= damage;
        if (roHP < 0){
            roHP = 0;
        }
        let roHPBarWidth = (roHP /100)*650;    /* damage divided by a hundred = % of pixel width lost  */ 
        rockHP.style.width = roHPBarWidth + "px";
        p.innerText += ' paper attacks rock with ' + damage + 'xp The Rock now has ' + roHP + "hp " + "\n";
    } else{
        p.innerText +=' YOU MISSED!!! '+ "\n";
    }if (roHP == 0){
        p.innerText += " you win! " + "\n";
     
    }
  
}


//PUNCH//
function punch() {
    let impact = Math.round(Math.random()*10);
    if (impact <= 7){
        let damage = Math.round(Math.random()*10)+3;
        roHP -= damage;
        if (roHP < 0){
            roHP = 0;
        }
        let roHPBarWidth = (roHP /100)*650; /* damage divided by a hundred = % of pixel width lost  */ 
        rockHP.style.width = roHPBarWidth + "px";
        p.innerText += ' paper attacks rock with ' + damage + 'xp The Rock now has ' + roHP + "hp "+ "\n";
    } else{
        p.innerText +=' YOU MISSED!!! '+ "\n";
    }if (roHP == 0){
        p.innerText = " you win! "+ "\n";
     
    }
  
}


//SPECIAL MOVE//
function spMove() {
    let impact = Math.round(Math.random()*10);
    if (impact <= 1){
        let damage = Math.round(Math.random()*10)+25;
        roHP -= damage;
        if (roHP < 0){
            roHP = 0;
        }
        let roHPBarWidth = (roHP /100)*650; /* damage divided by a hundred = % of pixel width lost  */ 
        rockHP.style.width = roHPBarWidth + "px";
        p.innerText += ' paper attacks rock with ' + damage + 'xp The Rock now has ' + roHP + "hp "+ "\n";
    } else{
        p.innerText +=' YOU MISSED!!! '+ "\n";
    }if (roHP == 0){
        p.innerText += " you win! "+ "\n";
     
    }
  
}



//---------------------------------FIGHTER 2 attack moves------------------------------//

//KICK//
function kick1() {
    let impact = Math.round(Math.random()*10);
    if (impact <= 6){
        let damage = Math.round(Math.random()*10)+5;
        papHP -= damage;
        if (papHP < 0){
            papHP = 0;
        }
        let papHPBarWidth = (papHP /100)*650; /* damage divided by a hundred = % of pixel width lost  */ 
        paperHP.style.width = papHPBarWidth + "px";
        p.innerText += ' paper attacks rock with ' + damage + 'xp The Rock now has ' + papHP + "hp "+ "\n";
    } else{
        p.innerText +=' YOU MISSED!!! '+ "\n";
    }if (roHP == 0){
        p.innerText += " you win! "+ "\n";
    }
    }


//PUNCH//
function punch1() {
    let impact = Math.round(Math.random()*10);
    if (impact <= 7){
        let damage = Math.round(Math.random()*10)+3;
        papHP -= damage;
        if (papHP < 0){
            papHP = 0;
        }
        let papHPBarWidth = (papHP /100)*650; /* damage divided by a hundred = % of pixel width lost  */ 
        paperHP.style.width = papHPBarWidth + "px";
        p.innerText += ' paper attacks rock with ' + damage + 'xp The Rock now has ' + papHP + "hp "+ "\n";
    } else{
        p.innerText +=' YOU MISSED!!! '+ "\n";
    }if (roHP == 0){
        p.innerText += " you win! "+ "\n";
     
    }
  
}


//SPECIAL MOVE//
function spMove1() {
    let impact = Math.round(Math.random()*10);
    if (impact <= 1){
        let damage = Math.round(Math.random()*10)+25;
        papHP -= damage;
        if (papHP < 0){
            papHP = 0;
        }
        let papHPBarWidth = (papHP /100)*650; /* damage divided by a hundred = % of pixel width lost  */ 
        paperHP.style.width = papHPBarWidth + "px";
        p.innerText += ' paper attacks rock with ' + damage + 'xp The Rock now has ' + papHP + "hp "+ "\n";
    } else{
        p.innerText +=' YOU MISSED!!! '+ "\n";
    }if (roHP == 0){
        p.innerText += " you win! "+ "\n";
     
    }
}



