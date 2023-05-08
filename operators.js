let a = 10
let b = 'Roman'
let c = true
let d
let e = null

console.log('-------------------------------------------------------------')
console.log('a = ', a)
console.log('b = ', b)
console.log('c = ', c)
console.log('d = ', d)
console.log('e = ', e)
console.log('-------------------------------------------------------------')



// вывод типа переменной
console.log('typeof a = ', typeof a)
console.log('typeof b = ', typeof b)
console.log('typeof c = ', typeof c)
console.log('typeof d = ', typeof d)
console.log('typeof e = ', typeof e)
console.log('-------------------------------------------------------------')

// проверка типа переменной
console.log('typeof a === "number": ', typeof a === "number")
console.log('typeof b === "string": ', typeof b === "string")
console.log('typeof c === "boolean": ', typeof c === "boolean")
console.log('typeof d === "undefined": ', typeof d === "undefined")
console.log('typeof e === null: ', typeof e === null)
console.log('typeof e === object: ', typeof e === 'object')
console.log('-------------------------------------------------------------')


// операторы короткого замыкания. Очень часто используется вместо IF
// || - ИЛИ
console.log('a || console.log("Выполнено!"):', a || console.log('Выполнено!'))
console.log('-------------------------------------------------------------')

// && - И
console.log('a && console.log("Выполнено!"):', a && console.log('Выполнено!'))
console.log('-------------------------------------------------------------')
console.log('d && console.log("Выполнено!"):', d && console.log('Выполнено!'))
console.log('-------------------------------------------------------------')

// ... - разложение объекта на свойства
const button = {
    width: 200,
    text: 'Buy'
}

const redButton = {
    ...button,              // разделяем объект 'button' на свойства
    color: 'red'
}

console.table(redButton)    // вывод свойств объекта в консоль в виде таблицы
console.log('-------------------------------------------------------------')

// объединение объектов с помощью ... Одиннаковые свойства перезаписываются
const buttonStyle = {
    color: 'yellow',
    width: 300,
    height: 400
}

const buttonInfo = {
    ...redButton,
    ...buttonStyle
}
console.table(buttonInfo)    // вывод свойств объекта в консоль в виде таблицы
console.log('-------------------------------------------------------------')

// Template string literal - шаблонные строки
const firstName = 'Роман'
const city = 'Киев'
const myInfo = `Привет. Меня зовут ${firstName}. Я живу в городе ${city}.`
console.log(myInfo)
console.log('-------------------------------------------------------------')