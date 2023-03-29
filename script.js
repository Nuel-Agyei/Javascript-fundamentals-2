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


function calcAge1 (birthYear) {
    const age = 2023 - birthYear;
    return age;
}
 const age1 = calcAge1(2004);

 const calcAge2 = function (birthYear) {
    return 2023 - birthYear;
 }
 const age2 = calcAge2(2003);
 console.log(age1, age2);



 //arrow function
 const  calcAge3 = birthYear => 2037 - birthYear;
 const age3 = calcAge3(2003)
 console.log(age3);

 const retirementYear = birthYear =>{
    const age = 2023 - birthYear;
    const retirement = 60 - age;
    return retirement;
 }

 console.log(retirementYear(2003));
