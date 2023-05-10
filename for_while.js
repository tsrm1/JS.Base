console.log('-------------------------------------------------------------')

// цикл FOR
for (let i = 0; i < 5; i++) {
    console.log('Цикл FOR: ',i)
}
console.log('-------------------------------------------------------------')

// цикл FOR для массивов
const myArray = ['first', 'second', 'third', 10, true, null]

for (let i = 0; i < myArray.length; i++) {
    console.log('Цикл FOR: ',myArray[i])
}
console.log('-------------------------------------------------------------')

// метод forEach для массивов (получаем элемент и его индекс)
myArray.forEach((element, index) => {
    console.log(`Цикл forEach: Index [${index}], Element: ${element}`)
})
console.log('-------------------------------------------------------------')

// метод forEach для массивов (получаем только элемент)
myArray.forEach((element) => {
    console.log(`Цикл forEach: Element: ${element}`)
})
console.log('-------------------------------------------------------------')

// цикл WHILE
let i = 0
while (i < 5) {
    console.log('Цикл WHILE: ', i)
    i++
}
console.log('-------------------------------------------------------------')

// Цикл DO-WHILE (цикл виполняеться минимум 1 раз)
let j = 0
do {
    console.log(`Цикл DO-WHILE: ${j}`)
    j++
} while (j < 5)
console.log('-------------------------------------------------------------')

const myObject = {
    x: 10,
    y: true,
    z: 'abc'
}

// цикл FOR-IN для объектов
for (const key in myObject) {
    console.log(`Цикл FOR-IN для объектов: ${key}: ${myObject[key]}`)
}
console.log('-------------------------------------------------------------')

// цикл FOR-IN для массивов
for (const key in myArray) {
    console.log(`Цикл FOR-IN для массивов: Index [${key}], Element: ${myArray[key]}`)
}
console.log('-------------------------------------------------------------')

// цикл forEach для объектов. Object.keys(myObject)
Object.keys(myObject).forEach(key => {
    console.log(`Цикл forEach для объектов: ${key}: ${myObject[key]}`)
})
console.log('Object.keys(myObject) = ', Object.keys(myObject))
console.log('-------------------------------------------------------------')

// цикл forEach для объектов. Object.values(myObject)
Object.values(myObject).forEach(value => {
    console.log(`Цикл forEach для объектов: ${value}`)
})
console.log('Object.values(myObject) = ', Object.values(myObject))
console.log('-------------------------------------------------------------')

// метод forEach для массивов
myArray.forEach(element => {
    console.log(`Цикл forEach для массивов: ${element}`)
})

// цикл FOR OF для строк
const myString = 'Hello'

for (const letter of myString) {
    console.log('letter of myString is: ', letter)
}
console.log('-------------------------------------------------------------')

// цикл FOR OF для массивов
for (const element of myArray) {
    console.log('element of myArray is: ', element)
}
console.log('-------------------------------------------------------------')