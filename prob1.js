var prompt = require('prompt-sync')();
let age = prompt("please enter your age:");
age = Number(age);
if(age <18){
    console.log("you got a 20% discount");
}else if(age >=18 && age <=65){
    console.log("normal ticket price applies");
}else if (age >= 65){
    console.log("you got a senior discountof 30%");
} else{
    console.log("invalid age enter");
}