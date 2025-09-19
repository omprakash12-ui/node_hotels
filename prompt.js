 var prompt = require('prompt-sync')();
 const age= prompt("please enter your age:");
if(age < 18){
    console.log("you get 20% discount")
}else{
    console.log("you get 30% senior discount")
}