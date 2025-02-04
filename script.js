const options=["rock","paper","scissors"];

function playGame(){

    // getuserchoice fuction call krav lagel
     let tempUserChoice =prompt ("enter your choice");
     let userChoice = tempUserChoice.trim().toLowerCase();  
     console.log(tempUserChoice);
      
     //!null-->(!tempUserChoice) asa pn taku skto
     if(tempUserChoice==null||tempUserChoice==""){
        alert("enter invalid input");
        playGame();
     }
     //for any invalid input-->
    if(
        userChoice!="rock"&&
        userChoice!="paper"&&
        userChoice!="scissors"
    ){
         alert("enter invalid input");
         playGame();
         return;
    }


     //computer choice-->getcomputer choice
    let randomIndex = Math.floor(Math.random() * options.length);//options like 0,1,2
    const computerChoice = options[randomIndex];
    console.log("user choice=",userChoice);
    console.log("computer choice=",computerChoice);


    //check who won
    //when user and computer choice will win
    if(
        (userChoice==="rock" && computerChoice==="scissors")||
        (userChoice==="paper" && computerChoice==="rock")||
        (userChoice==="scissors" && computerChoice==="paper")
    ){
        alert("congrats..YOU won 🤩");
    }else if(
        (computerChoice === "rock" && userChoice === "scissors")||
        (computerChoice === "paper" && userChoice === "rock")||
        (computerChoice === "scissors" && userChoice === "paper")
    ){
        alert("ohh...COMPUTER won 🤦‍♀️");
    }
    else{
        alert("nice try, play again. It's draw 🤷‍♀️");
    }
 }
//capital asel tr toLowerCase() use krich..only for string
//toUpperCase() use krich
//toCase()--> use krich
//trim()-->space sathi ahe te
 