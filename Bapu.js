let btn = document.querySelector("button");
let checkclr = "light";
btn.addEventListener("click", () => {
  if (checkclr == "light") {
    checkclr = "dark";
    document.body.style.background = "#2a2a2a";
    document.body.style.color = "white";
    console.log(checkclr);
  } else {
    checkclr = "light";
    console.log(checkclr);
    document.body.style.background = "#9e9e9e";
    document.body.style.color = "black";
  }
})

let userscore = 0;
let compscore = 0;
const msgp=document.querySelector(".msgp");
const msg=document.querySelector(".msg");
const choices = document.querySelectorAll(".game");
const userscorepara=document.querySelector(".uwin");
const compscorepara=document.querySelector(".cwin");

const generatechoice = () => {
  const option = ["rock", "paper", "scisor"];
  const randidx = Math.floor(Math.random() * 3);
  return option[randidx];
}

// Added 'userwin' parameter so the function receives the result
const showwinner = (userwin) => {
  // Changed '=' to '===' to compare rather than assign
  if (userwin === true) {
    console.log("you win");
    msgp.innerText="you win";
    msg.style.background="green";
    userscore++;
    userscorepara.innerText=userscore;
  } else {
    console.log("you lose");
    msgp.innerText="you lose";
    compscore++;
    compscorepara.innerText=compscore;
    msg.style.background="red";
  }
}

let playgame = (userchoice) => {
  console.log("userchoice is ", userchoice);
  const compchoice = generatechoice();
  console.log("Comp choice is ", compchoice);

  // MOVED: The following logic was moved inside this function 
  // so it runs every time a choice is clicked.
  if (userchoice == compchoice) {
    console.log("The game is draw");
    msgp.innerText="draw";
    msg.style.background="yellow";
  } else {
    let userwin = true;
    if (userchoice == "rock") {
      userwin = compchoice == "paper" ? false : true;
      
    } else if (userchoice == "paper") {
      userwin = compchoice == "scisor" ? false : true;
    } else {
      userwin = compchoice == "rock" ? false : true;
    }
    // Added userwin argument here to pass the result to showwinner
    showwinner(userwin);
  }
}

choices.forEach(choice => {
  choice.addEventListener("click", () => {
    const userchoice = choice.getAttribute("id");
    playgame(userchoice);
  })
})

