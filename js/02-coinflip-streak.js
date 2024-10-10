let coinFlip;
let inf;

do {
    coinFlip = Math.round(Math.random());
    console.log(coinFlip);
    if (coinFlip == 0){
        alert("heads");
        inf++;
    }
}
while (coinFlip === 0) {
        alert("tails, game over.");
}