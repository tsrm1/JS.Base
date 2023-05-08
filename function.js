function a() {
    console.log('[f(a)] Hi there')
}

a()         // вызов функции a

a = 10      // переопределяем тип 
console.log(a)

// a()         // будет ошибка, т.к. а - это уже переменная, а не функция


// решение: использование const
// вместо 'function' можно использовать 'стрелочная функция'

const b = () => {
    console.log('[f(b)] Hi there')
}

b()         // вызов функции b

console.log('-------------------------------------------------------------')
// стрелочная функция
const myFunction = (a,b) => {
    let c
    c = a + b
    return c
}

console.log(myFunction(2,5))

console.log('-------------------------------------------------------------')

// метод 'cityGreeting' объекта
const myCity_ = {
    city: 'New York',
    cityGreeting: function () {
        console.log('[1] Greetings!!!')
    }
}

myCity_.cityGreeting()


// метод 'cityGreeting' объекта с использованием стрелочной функции
const myCity = {
    city: 'New York',
    cityGreeting() {
        console.log('[2] Greetings!!!')
    }
}

myCity.cityGreeting()

console.log('-------------------------------------------------------------')

// свойства функции  как объекта
function myFn(a, b) {
    let c
    a = a + 1
    c = a + b
    return c
}


console.log(myFn(10, 3))  // вызов функции
console.dir(myFn)  // отобразить свойства функции как объекта

console.log('-------------------------------------------------------------')

// самая короткая функция, результат 'undefined'
function smallFunc () {}

console.log(smallFunc())

console.log('-------------------------------------------------------------')

// передача объектов в качестве аргументов функции
const personOne = {
    name: 'Roman',
    age: 40,
}

function increasePersonAge(person) {
    const updatePerson = Object.assign({}, person)  // создаём новы объект и копируем в него данные с искомого объекта 
    updatePerson.age += 4
    return updatePerson
}

const updatePersonOne = increasePersonAge(personOne)
console.log(personOne.age)
console.log(updatePersonOne.age)

console.log('-------------------------------------------------------------')

// значение параметров функции по умолчанию 
function multByFactor(value, multiplier = 1) {
    return value * multiplier
}

const multiplyByFactor = (value, multiplier = 1) => {
    return value * multiplier
}

console.log('multByFactor(10, 2):', multByFactor(10, 2))
console.log('multByFactor(10):', multByFactor(10))

console.log('multiplyByFactor(10, 2):', multiplyByFactor(10, 2))
console.log('multiplyByFactor(10):', multiplyByFactor(10))

console.log('-------------------------------------------------------------')

// функция с неявным возвратом объекта
const newPost1 = (post, addedAt = Date()) => ({
    ...post,
    addedAt
})

// ({   }) - вернуть неявно объект  === return

// функция с явным возвратом объекта
const newPost2 = (post, addedAt = Date()) => {
    return {...post,
    addedAt}
}

const firstPost = {
    id: 1,
    author: 'Roman'
}

postInfo1 = newPost1(firstPost)
console.table(postInfo1)
postInfo2 = newPost1(firstPost)
console.table(postInfo2)

console.log('-------------------------------------------------------------')


// CallBack Function

function printMyName() {
    console.log('Roman')
}

setTimeout(printMyName, 1000)   // вызов функции printMyName через 1000 мс


// вызов стрелочной функции в другой функции

setTimeout(()=> {
    console.log('-------------------------------------------------------------')
}, 1000)                        // вызов анонимной стрелочной функции через 1000 мс

