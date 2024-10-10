let coinFlip;
let userPick = prompt("how many flips?");


for (let i = 0; i < userPick; i++) {

    coinFlip = Math.round(Math.random());
    console.log(" ");
    if (coinFlip == 0){
        console.log("heads");
    } else if (coinFlip != 0){
        console.log("tails");
    }
  }