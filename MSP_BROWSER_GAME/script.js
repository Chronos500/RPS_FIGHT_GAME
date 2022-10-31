//define global variables pointing to divs//

let bottomRow = document.getElementsByClassName('bottomRow');

let stats = document.getElementsByClassName('stats');

let fighter1_Stat = document.getElementById('fighter1_Stat');

let fighter2_Stat = document.getElementById('fighter2_Stat');

let fighter1_HP = document.getElementById('fighter1_HP');

let fighter2_HP = document.getElementById('fighter2_HP');

let fighting = document.getElementById('fighting');

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
        h2.innerHTML = "TIMES UP!";
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
        fighter2_HP.style.width = roHPBarWidth + "px";
        p.innerHTML += ' fighter1_ attacks fighter2_ with ' + damage + 'xp The fighter2_ now has ' + roHP + "hp " + "\n";
    } else{
        p.innerHTML +=' YOU MISSED!!! '+ "\n";
    }if (roHP == 0){
       return  p.innerHTML += " you win! " + "\n";
     
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
        fighter2_HP.style.width = roHPBarWidth + "px";
        p.innerHTML += ' fighter1_ attacks fighter2_ with ' + damage + 'xp The fighter2_ now has ' + roHP + "hp "+ "\n";
    } else{
        p.innerHTML +=' YOU MISSED!!! '+ "\n";
    }if (roHP == 0){
        var r=confirm("YOU WIN");
        if (r==true)
          {
          x="You pressed OK!";
          }
         else
          {
          x="You pressed Cancel!";
          }
     
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
        fighter2_HP.style.width = roHPBarWidth + "px";
        p.innerHTML += ' fighter1_ attacks fighter2_ with ' + damage + 'xp The fighter2_ now has ' + roHP + "hp "+ "\n";
    } else{
        p.innerHTML +=' YOU MISSED!!! '+ "\n";
    }if (roHP == 0){
        p.innerHTML += " you win! "+ "\n";
     
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
        fighter1_HP.style.width = papHPBarWidth + "px";
        p.innerHTML += ' fighter1_ attacks fighter2_ with ' + damage + 'xp The fighter2_ now has ' + papHP + "hp "+ "\n";
    } else{
        p.innerHTML +=' YOU MISSED!!! '+ "\n";
    }if (roHP == 0){
        p.innerHTML += " you win! "+ "\n";
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
        fighter1_HP.style.width = papHPBarWidth + "px";
        p.innerHTML += ' fighter1_ attacks fighter2_ with ' + damage + 'xp The fighter2_ now has ' + papHP + "hp "+ "\n";
    } else{
        p.innerHTML +=' YOU MISSED!!! '+ "\n";
    }if (roHP == 0){
        p.innerHTML += " you win! "+ "\n";
     
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
        fighter1_HP.style.width = papHPBarWidth + "px";
        p.innerHTML += ' fighter1_ attacks fighter2_ with ' + damage + 'xp The fighter2_ now has ' + papHP + "hp "+ "\n";
    } else{
        p.innerHTML +=' YOU MISSED!!! '+ "\n";
    }if (roHP == 0){
        alert(" you win! "+ "\n");
     
    }
}



/*character selection options*/

function hinata(){
    document.getElementsByClassName("row").style.backgroundImage = url("images/hinata.PNG");
}

function sasuke(){
    document.getElementsByClassName("row").style.backgroundImage = url("images/sasuke.PNG");
}

function sakura(){
    document.getElementsByClassName("row").style.backgroundImage = url("images/sakura.PNG");
}

function kakashi(){
    document.getElementsByClassName("row").style.backgroundImage = url("images/kakashi.PNG");
}

function naruto(){
    document.getElementsByClassName("row").style.backgroundImage = url("images/naruto.PNG");
}

function fighter2_Lee(){
    document.getElementsByClassName("row").style.backgroundImage = url("images/fighter2_lee.PNG");
}
