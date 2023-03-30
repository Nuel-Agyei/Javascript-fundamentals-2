'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriverLicense = true;
// if (hasDriversLicense) console.log('I can drive ');

// const interface = 'Audio';

//Functions
// function logger() {
//     console.log('My name is chika chika slim shady');
// }

// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//     console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`
//     return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);
// console.log(fruitProcessor(5, 0));

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);


// function calcAge1 (birthYear) {
//     const age = 2023 - birthYear;
//     return age;
// }
//  const age1 = calcAge1(2004);

//  const calcAge2 = function (birthYear) {
//     return 2023 - birthYear;
//  }
//  const age2 = calcAge2(2003);
//  console.log(age1, age2);



//  //arrow function
//  const  calcAge3 = birthYear => 2037 - birthYear;
//  const age3 = calcAge3(2003)
//  console.log(age3);

//  const retirementYear = birthYear =>{
//     const age = 2023 - birthYear;
//     const retirement = 60 - age;
//     return retirement;
//  }

//  console.log(retirementYear(2003));
/*

function cutFruitPieces(fruit) {
   return fruit * 4;
}

function fruitProcessor(apples, oranges) {
   const applePieces = cutFruitPieces(apples);
   const orangePieces = cutFruitPieces(oranges);
       console.log(apples, oranges);
       const juice = `Juice with ${apples} apples and ${oranges} oranges.`
     return juice;
 }
 console.log(fruitProcessor(2, 3));
*/
// const calcAge = function (birthYear) {
//    return 2023 - birthYear;
// }

//  const retirementYear =  function(birthYear){
//      const age = calcAge(birthYear)
//     const retirement = 60 - age;
//     return retirement;
//   }

// console.log(retirementYear(2003));


//    const  calcAge3 = birthYear => 2037 - birthYear;
//    const age3 = calcAge3(2003)
//    console.log(age3);

//Challenge
let calcAvg = (num1, num2, num3)=> (num1 + num2 + num3)/3;

const avgDolphin = calcAvg(44, 23, 71);
const avgKoalas = calcAvg(65, 54, 49);
console.log(avgDolphin, avgKoalas);

if (avgDolphin >= 2*avgKoalas) {
   console.log('Dolphins win');
} else if(avgKoalas >= 2*avgDolphin){
   console.log('Koalas win');
} else{
   console.log('Draw');
}



