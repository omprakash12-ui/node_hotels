const ages =[23,45,14,15,34];
const result = ages.filter(checkAges)

function checkAges(age){
    return  age <=18 
}
console.log(result)