console.log('-------------------------------------------------------------')
// инструкция IF с оператором отрицания
const person = {
    age: 20
}

if (!person.name) {         // !undefined === true
    console.log('Имя не указано')
}
console.log('-------------------------------------------------------------')

// иструкция IF-ELSE
let value = 10

if (value <5) {
    value += 20
} else {
    value -= 20
}

console.log('value = ', value)
console.log('-------------------------------------------------------------')

// инструкция IF-ELSE IF-IF
let age = 10

if (age >= 18) {
    console.log("Is adult")
} else if (age >= 12) {
    console.log('Is teenager')
} else {
    console.log('Is child')
}
console.log('-------------------------------------------------------------')

// IF-ELSE IF-IF  --> IF // Более предпочтительный, более читабельный
age = 25
if (age >= 18) {
    console.log(`The age is ${age} - Is adult`)
} 

if (age >= 12 && age <18) {
    console.log(`The age is ${age} - Is teenager`)
} 

if (age < 12) {
    console.log(`The age is ${age} - Is child`)
}
console.log('-------------------------------------------------------------')

// Использование IF в функциях
const printAge = (age) => {
    if (age >= 18) {
        console.log(`The age is ${age} - Is adult`)
    } 
    
    if (age >= 12 && age <18) {
        console.log(`The age is ${age} - Is teenager`)
    } 
    
    if (age < 12) {
        console.log(`The age is ${age} - Is child`)
    }
}

printAge(10)
printAge(15)
printAge(25)
console.log('-------------------------------------------------------------')

// скдладываение позитивных чисел
const sumPositiveNumbers = (a, b) => {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return 'One of the arguments is not a number'
    }
    
    if (a <= 0 || b <= 0) {
        return 'Numbers are not positive'
    }
    
    return a + b
}
console.log(sumPositiveNumbers('abc', 3))
console.log(sumPositiveNumbers(2, -3))
console.log(sumPositiveNumbers(2, 3))
console.log('-------------------------------------------------------------')

const getMonth = (month) => {
    switch (month) {
        case 1:
            console.log('It is January')
            break
        case 2:
            console.log('It is February')
            break
        case 3:
            console.log('It is March')
            break
        case 4:
            console.log('It is April')
            break
        case 5:
            console.log('It is May')
            break
        case 6:
            console.log('It is June')
            break
        case 7:
            console.log('It is Juli')
            break
        case 8:
            console.log('It is August')
            break
        case 9:
            console.log('It is September')
            break
        case 10:
            console.log('It is October')
            break
        case 11:
            console.log('It is November')
            break
        case 12:
            console.log('It is December')
            break
        default:
            console.log('Wrong month number')
    }
}

getMonth(1)
getMonth(2)
getMonth(3)
getMonth(4)
getMonth(5)
getMonth(6)
getMonth(7)
getMonth(8)
getMonth(9)
getMonth(10)
getMonth(11)
getMonth(12)
getMonth(13)
console.log('-------------------------------------------------------------')

// тернарный оператор
let a = 5
let b = 8
// в одной строке
a > b ? console.log('a > b, a - b = ', a - b) : console.log('a < b, b - a = ', b - a)
console.log('-------------------------------------------------------------')
// на нескольких строках, вариант 1
a > b 
? console.log('a > b, a - b = ', a - b) 
: console.log('a < b, b - a = ', b - a)
console.log('-------------------------------------------------------------')

// на нескольких строках, вариант 2
a
? console.log('Условие истинно')
: console.log('Условие ложно')
console.log('-------------------------------------------------------------')