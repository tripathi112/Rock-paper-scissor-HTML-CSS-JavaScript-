let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const User_score=document.querySelector("#user-score");
const comp_score=document.querySelector("#comp-score");

// **********************track the choice *****************************************************
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
    playgame(userChoice);
    });
});

const drawgame=()=>{
    console.log("game was draw");
}

// winner
const showWinner=(userWin,userChoice,comChoice)=>{
    if(userWin){
        console.log("you win");
        userScore++;
        User_score.innerText=userScore;
        msg.innerText=`You Win! Your ${userChoice} beats ${comChoice}`;
        msg.style.backgroundColor="green"
    }
    else{
        console.log("you loose");
        compScore++;
        comp_score.innerText=compScore
        msg.innerText=`You Lose! ${comChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}
// ****************************** store user and compueter schoice********************************
const playgame=(userChoice)=>{
console.log("user choice=", userChoice);
const comChoice=genCompChoice();

console.log("computer choice=", comChoice);

//------- track winner --------
if(userChoice===comChoice){
    // game draw
  drawgame();
  msg.innerText="Game was Draw!";
  msg.style.backgroundColor="#081b31"
}

else{
    //user win
    let userWin=true;
    if(userChoice==="rock"){
        userWin=comChoice==="paper"?false:true;
    }
    else if(userChoice==="paper"){
        userWin=comChoice==="scissors"?false:true;
    }
    else{
      userWin=comChoice==="rock"?false:true;
    }

    // show winner
   showWinner(userWin,userChoice,comChoice);
}
};

// *********************** generate computer choice *****************************************
const genCompChoice=()=>{
    //rock,paper,scissors
    const options=["rock","paper","scissors"];
   const randomIdx= Math.floor(Math.random()*3);
   return options[randomIdx];
}




