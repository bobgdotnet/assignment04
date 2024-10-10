
let i = 1;
while (i < 101) {
    if (i % 3 == 0 && i % 5 == 0){
        console.log("Marco! Polo!");   
    }else if (i % 5 == 0){
        console.log("Polo!");
    } else if (i % 3 == 0){
        console.log("Marco!"); 
    } else {
        console.log(i);
    }
  i++;
}