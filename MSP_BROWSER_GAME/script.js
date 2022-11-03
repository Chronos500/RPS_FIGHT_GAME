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



let sound = document.getElementById('sound');
let on = "on";

function fightButton() {
   
        sound.play();
        sound.volume = 0.2;
}


function fightButtonPause(){
    sound.pause();
}
  


//timer
let seconds = 30;

timer.innerHTML = seconds;
timer.innerHTML = `00:${seconds}`;
const countDown = setInterval(() =>{
    seconds--;
    timer.innerHTML = `00:${seconds}`;
    if(seconds <=0 || seconds <1){
        h2.innerHTML = "YOU LOSE!";
        fighting.style.visibility = 'hidden';
        losses.innerHTML =1;
    }
        if (roHP == 0){
            clearInterval(countDown);
        }
        if (papHP == 0){
            clearInterval(countDown);
           
        }
       
       
    },1000)
   
 
//health

let papHP = 100;
let roHP = 100;


//winner loser count//


let wins = document.getElementById("wins")
let losses = document.getElementById("losses")

const winSound = new Audio('SOUNDFX/you-win-voice-sound-effect.mp3')
const lossSound = new Audio('SOUNDFX/you-lose-sound-effect.mp3')
const sadSound = new Audio('SOUNDFX/sad-meme-audio.mp3')

//-------------------------------------FIGHTER 1 attack -------------------------------------moves//


let punching = document.getElementById("punch");
let kicking = document.getElementById("kick");
let specialMove = document.getElementById("spMove"); 
let characterImg = document.getElementById("characterImg")
let characterImg2 = document.getElementById("characterImg2");
let i = 0;

//KICK//

const kickSound = new Audio('SOUNDFX/karate-chop-6357.mp3')


function kick() {
    if( i==0 ){
        characterImg.src="images/narutoKick.GIF"; 
        i=1;
     }
    else if( i==1 ){
       characterImg.src="images/narutoStance.GIF";
       i=0;
    }
    let impact = Math.round(Math.random()*10);
    if (impact <= 6){
        let damage = Math.round(Math.random()*10)+3;
        roHP -= damage;
        if (roHP < 0){
            roHP = 0;
        }
        let roHPBarWidth = (roHP /100)*650;    /* damage divided by a hundred = % of pixel width lost  */ 
        fighter2_HP.style.width = roHPBarWidth + "px";;
        p.innerHTML += '<span class="fighter_highlight2">Naruto Uzumaki!!</span> kicked <span class="fighter_highlight">Sasuke Uchiha</span> with ' + damage + 'xp <span class="fighter_highlight">Sasuke Uchiha</span> now has ' + roHP + "hp " + "\n";
        kickSound.play();
        kickSound.volume = 0.1;
        } else{
        p.innerHTML +=' YOU MISSED!!! '+ "\n";
    }if (roHP == 0){
      p.innerHTML = "you win!" + "\n" ;
   fighting.style.visibility = 'hidden';
   wins.innerHTML +=1;
   winSound.play();
   winSound.volume =0.3;
   
} else{
    cpuAttack()
    p.scrollTop = p.scrollHeight;
}
}


//PUNCH//
const punchSound = new Audio('SOUNDFX/punch-2-37333.mp3')
function punch() {
    if( i==0 ){
        characterImg.src="images/narutoSM.GIF"; 
        i=1;
     }
    else if( i==1 ){
       characterImg.src="images/narutoStance.GIF";
       i=0;
    }
    let impact = Math.round(Math.random()*10);
    if (impact <= 7){
        let damage = Math.round(Math.random()*10)+2;
        roHP -= damage;
        if (roHP < 0){
            roHP = 0;
        }
        let roHPBarWidth = (roHP /100)*650; /* damage divided by a hundred = % of pixel width lost  */ 
        fighter2_HP.style.width = roHPBarWidth + "px";
        p.innerHTML += ' <span class="fighter_highlight2">Naruto Uzumaki!!</span> punched <span class="fighter_highlight">Sasuke Uchiha</span> with ' + damage + 'xp <span class="fighter_highlight">Sasuke Uchiha</span> now has ' + roHP + "hp "+ "\n";
        punchSound.play();
        punchSound.volume = 0.1;
        
    } else{
        p.innerHTML +=' YOU MISSED!!! '+ "\n";
    }if (roHP == 0){
        p.innerHTML = " you win! " + "\n";
        fighting.style.visibility = 'hidden';
        wins.innerHTML +=1;
        winSound.play();
        winSound.volume =0.3;
     
    }else{
        cpuAttack()
        p.scrollTop = p.scrollHeight;
    }
  
}


//SPECIAL MOVE//
const spMoveSound = new Audio('SOUNDFX/laserrocket2-6284.mp3')
function spMove() {
    if( i==0 ){
        characterImg.src="images/jinchuriki.GIF"; 
        i=1;
     }
    else if( i==1 ){
       characterImg.src="images/narutoStance.GIF";
       i=0;
    }
    let impact = Math.round(Math.random()*10);
    if (impact <= 1){
        let damage = Math.round(Math.random()*10)+10;
        roHP -= damage;
        if (roHP < 0){
            roHP = 0;
        }
        let roHPBarWidth = (roHP /100)*650; /* damage divided by a hundred = % of pixel width lost  */ 
        fighter2_HP.style.width = roHPBarWidth + "px";
        p.innerHTML += ' <span class="fighter_highlight2">Naruto Uzumaki!!</span> used SPECIAL MOVE!!! on <span class="fighter_highlight">Sasuke Uchiha</span> with ' + damage + 'xp <span class="fighter_highlight">Sasuke Uchiha</span> now has ' + roHP + "hp "+ "\n";
        spMoveSound.play();
        spMoveSound.volume = 0.1;
      
    } else{
        p.innerHTML +=' YOU MISSED!!! '+ "\n";
    }if (roHP == 0){
       p.innerHTML = " you win! " + "\n";
       fighting.style.visibility = 'hidden';
       wins.innerHTML +=1;
       winSound.play();
       winSound.volume =0.3;
    } else{
        cpuAttack()
        p.scrollTop = p.scrollHeight;
    }
  
}



//---------------------------------FIGHTER 2 attack moves------------------------------//

//KICK//


function cpuAttack() {
    
    let attack = Math.ceil(Math.random()*3);
    if (attack == 1){
        if( i==0 ){
            characterImg.src="images/sasukeKick.GIF"; 
            i=1;
         }
    else if( i==1 ){
       characterImg2.src="images/sasukeStance.GIF";
       i=0;
    }
    let impact = Math.round(Math.random()*10);
    if (impact <= 6){
        let damage = Math.round(Math.random()*10)+3;
        papHP -= damage;
        if (papHP < 0){
            papHP = 0;
        }
        let papHPBarWidth = (papHP /100)*650; /* damage divided by a hundred = % of pixel width lost  */ 
        fighter1_HP.style.width = papHPBarWidth + "px";
        p.innerHTML += ' <span class="fighter_highlight">Sasuke Uchiha</span> kicked <span class="fighter_highlight2">Naruto Uzumaki!!</span> with ' + damage + 'xp <span class="fighter_highlight2">Naruto Uzumaki!!</span> now has ' + papHP + "hp "+ "\n";
        kickSound.play();
        kickSound.volume = 0.1;
    } else{
        p.innerHTML +='<span class="fighter_highlight">Sasuke Uchiha</span> KICKS AND MISSED '+ "\n";
    }if (papHP == 0){
        p.innerHTML = " YOU LOSE! " + "\n";
        fighting.style.visibility = 'hidden';
        losses.innerHTML +=1;
        lossSound.play();
        lossSound.volume =0.3;
        sadSound.play();
        sadSound.volume =0.2;
        
    }
    }


//PUNCH//
if (attack == 2){
    if( i==0 ){
        characterImg2.src="images/sasukePunch.GIF"; 
        i=1;
     }
    else if( i==1 ){
       characterImg2.src="images/sasukeStance.GIF";
       i=0;
    }
   let impact = Math.round(Math.random()*10);
    if (impact <= 7){
        let damage = Math.round(Math.random()*10)+2;
        papHP -= damage;
        if (papHP < 0){
            papHP = 0;
        }
        let papHPBarWidth = (papHP /100)*650; /* damage divided by a hundred = % of pixel width lost  */ 
        fighter1_HP.style.width = papHPBarWidth + "px";
        p.innerHTML += ' <span class="fighter_highlight">Sasuke Uchiha</span> punched <span class="fighter_highlight2">Naruto Uzumaki!!</span> with ' + damage + 'xp <span class="fighter_highlight2">Naruto Uzumaki!!</span> now has ' + papHP + "hp "+ "\n";
        punchSound.play();
        punchSound.volume = 0.1;
    } else{
        p.innerHTML +=' <span class="fighter_highlight">Sasuke Uchiha</span> PUNCHED AND MISSED !!! '+ "\n";
    }if (papHP == 0){
        p.innerHTML = " YOU LOSE! " + "\n";
        fighting.style.visibility = 'hidden';
        losses.innerHTML +=1;
        lossSound.play();
        lossSound.volume =0.3;
        sadSound.play();
        sadSound.volume =0.2;
    }
}


//SPECIAL MOVE//

else{
    if( i==0 ){
        characterImg2.src="images/sasuke_SpMove.GIF"; 
        i=1;
     }
    else if( i==1 ){
       characterImg2.src="images/sasukeStance.GIF";
       i=0;
    }
    let impact = Math.round(Math.random()*10);
    if (impact <= 1){
        let damage = Math.round(Math.random()*10)+10;
        papHP -= damage;
        if (papHP < 0){
            papHP = 0;
        }
        let papHPBarWidth = (papHP /100)*650; /* damage divided by a hundred = % of pixel width lost  */ 
        fighter1_HP.style.width = papHPBarWidth + "px";
        p.innerHTML += ' <span class="fighter_highlight">Sasuke Uchiha</span> used SPECIAL MOVE on <span class="fighter_highlight2">Naruto Uzumaki!!</span> with ' + damage + 'xp <span class="fighter_highlight2">Naruto Uzumaki!!</span> now has ' + papHP + "hp "+ "\n";
        spMoveSound1.play();
        spMoveSound1.volume = 0.1;
    } else{
        p.innerHTML +=' <span class="fighter_highlight">Sasuke Uchiha</span> SPECIAL MOVE MISSED !!! '+ "\n";

}
if (papHP == 0){
    p.innerHTML = " YOU LOSE! " + "\n";
    fighting.style.visibility = 'hidden';
    losses.innerHTML +=1;
    lossSound.play();
    lossSound.volume =0.3;
    sadSound.play();
    sadSound.volume =0.2;
}
}
}


const spMoveSound1 = new Audio('SOUNDFX/power-on-39172.mp3')



let backgroundImg = document.getElementById('topRow');
    let counter = 0;
    let myPictures = [
        "images/bgImg1.JPG",
        "images/bgImg2.JPG",
        "images/bgImg3.JPG",
        "images/bgImg4.JPG",
    ];

    function nextPic() {
      counter += 1;
      if (counter > myPictures.length -1) {
        counter = 0;
      }
      backgroundImg.src = myPictures[counter];
    }


   
//saving currentScore count to browsers local storage//
const saveToLocalStorage = () => {
localStorage.setItem('player_1',wins.innerHTML)
}    
    
const storedWinsLoss = localStorage.getItem("player_1")

if(storedWinsLoss){
    player_1.innerHTML = storedWinsLoss
}





          
       










