// exercise1

// const change = ('uzgaruvchi')
//     console.log(change);

// exercise2

// let goo = ('what`s up')
//     console.log(goo);

// exercise3

// var went = ('are you okey')
//  console.log(went);

// exercise4

// let x=5
// let y=11

// let natija = x + y
// console.log(natija);

// exercise5

// let x = 20
// let y = 2

// let result = 20/2
// console.log(result);

// exercise6

// let q = 11
// let s = 5

// let love = 11 % 5

// console.log(love);  

// exercise7

// let s = 11
// let q = 5

// let family = s ** q
// console.log(family);

// exercise8


// let q = 5
// console.log(q);

// exercise9

// let q = 50
// q += 25

// console.log(q);

// exercise10

// let q = 58
// let s = 59

// console.log(q == s);

// exercise11


// let q = 58
// let s = 58

// console.log(q === s);

// exercise12

// let change = 45
// let change2 = 54

// console.log(change != change2);

// exercise13

// let change = 45
// let change2 = 54
// exercise 14

// let change = 45
// let change2 = 54

// let num = 32
// let hasID = true

// console.log(num <= 33 && hasID);.

// let isRainy = true
// let hasDalse = false

// console.log(isRainy || hasDalse);

// let goOn = true

// console.log(!goOn);

// let surname = 'jhgfd'

// console.log(typeof surname);

// console.log(change <= change2);

// console.log(change !== change2);



// const va let farqi 

// constda qiymat o'zgarmaydi, doimiy
// let zamonavi usul o‘zgaruvchi qiymati keyin o‘zgarishi mumkin

// function 

// function uzgartir (nimagap, chyooo) {
//     console.log(nimagap + chyooo);
//     return nimagap + chyooo
//     console.log('this code never work');
// }

// const result = uzgartir(20, 56);
// console.log(result);

// let a = 2;
// let b = 10;

// let natija = a * b; // arifmetik operator: *
// console.log("Ko‘paytma:", natija);

// let javob = (natija < 100 && a < 0 && b < 0); // taqqoslash va mantiqiy operatorlar
// console.log("Natija 100 dan katta va musbat sonlarmi?", javob);


// let s = 20

// let q = 23

// let result = s*q
// console.log('what result', result);

// let okay = (result < 100 && s < 0 && q < 0)
// console.log('100 dan balandmi?', okay);

// Array

// const names = ['aziz', 'laziz', 'begzod', 'jasur']

// console.log(names);

// const numbers = ['5', '6', '7', '8']

// console.log(numbers);

// const texts  = ['gono', 'what', 'privet', 'interest']

// console.log(texts);

// const mixedArray = ['java', '25', false, null]

// console.log(mixedArray);
// let age = 18;

// if (age >= 18) {
//     console.log("Siz voyaga yetgansiz!");
// } else {
//     console.log("Siz hali voyaga yetmagansiz!");
// }

// let age = 18;

// if (age >= 21 ) {
//     console.log('are you okay');
// } else {
//     console.log('when you come to uzbekistan');
// }

// let number = 12;

// if (number > 10) {
//     console.log("Bu son 10 dan katta");
// } else {
//     console.log("Bu son 10 dan kichik yoki teng");
// }

function getFullName() {
  const name = prompt('Enter your name') || 'default';
  const surname = prompt('Enter your surname') || 'default';
  return { name, surname };  
}

function toUpperCase(fullName) {
  return {
    name: fullName.name.toUpperCase(),
    surname: fullName.surname.toUpperCase()
  };
}

const Java = getFullName();
const upperJava = toUpperCase(Java);

console.log(upperJava);
