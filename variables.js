// Вывод данных в консоль
console.log('Roman')

// Переменные:
const a = 5     // обьявление и присваивание константы
console.log(a)  
let  b          // обьявление переменной
console.log(b)
b = 6           // присваивание переменной
console.log(b)
b++
console.log(b)

// Примитивные типы
// string
let myName = 'Roman'
console.log(myName)

// boolean
let log = true
console.log(log)
log = false
console.log(log)

// number
b = -2
console.log(b)
b = b /3
console.log(b)

// null
let c = null
console.log(c)

// undefined
let d 
console.log(d)

// symbol
let s = 's'
console.log(s)


// Ссылочный тип - объект
const objectA = {
    a: 10,
    b: true
}
console.log(objectA)

const copyOfA = objectA
console.log(copyOfA)
copyOfA.a = 20
copyOfA.c = 50
console.log(copyOfA)
console.log(objectA)

delete objectA.a
console.log(objectA)

// добавление свойства с использованием [], внутри скобок - переменная
const countryName = 'country'
objectA[countryName] = 'USA'
console.log(objectA)

// вложенные свойства
const myCity = {
    city: 'New York',
    info: {
        isPopular: true,
        country: 'USA'
    }
}

console.log(myCity)
console.log(myCity.info.isPopular)

delete myCity.info['isPopular']
console.log(myCity)

// сокращённый формат заипси свойств
const firstName = 'Roman'
const age = 40

const userProfile = {
    firstName, 
    age,

    hasSignedAgreement: false
}
console.log(userProfile)

// копирование объектов (нет ссылок на объект, кроме вложенных объектов). ver.1
const userProfile1 = Object.assign({}, userProfile)
userProfile1.age = 44
console.log(userProfile)
console.log(userProfile1)

// копирование объектов (нет ссылок на объект, кроме вложенных объектов). ver.2
const userProfile2 = {...userProfile}
userProfile2.age = 46
console.log(userProfile)
console.log(userProfile2)

// копирование объектов (нет ссылок на объект, включая вложенные объекты). ver.3
const userProfile3 = JSON.parse(JSON.stringify(userProfile))
userProfile3.age = 48
console.log(userProfile)
console.log(userProfile3)