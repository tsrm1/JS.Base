// создание нового массива
const myArray = [1, 2, 3]
console.log('myArray = ', myArray)
console.log('-------------------------------------------------------------')

// создание нового массива
const myArray2 = new Array(1, 2, 3)
console.log('myArray2 = ', myArray2)
console.log('-------------------------------------------------------------')

// создание новой ссылки на массив
const myArray3 = myArray2
console.log('myArray3 = ', myArray3)
console.log('-------------------------------------------------------------')

// массивы myArray и myArray2 не равны, т.к. ссылаются на разные ячейки памяти
console.log('myArray === myArray2 :', myArray === myArray2)
console.log('-------------------------------------------------------------')

// массивы myArray2 и myArray3 равны, т.к. это две ссылки на один и тот же объект
console.log('myArray2 === myArray3 :', myArray2 === myArray3)
console.log('-------------------------------------------------------------')

// длина массива, свойство length
console.log('myArray2.length = ', myArray2.length)
console.log('-------------------------------------------------------------')

// доступ к эллементам массива
console.log('myArray2[0] = ', myArray2[0])
console.log('myArray2[1] = ', myArray2[1])
console.log('myArray2[2] = ', myArray2[2])
console.log('-------------------------------------------------------------')

// изменение и добавление значений элементов массива
myArray2[1] = 'abc'
myArray2[3] = true
console.log("myArray2[1] = 'abc'")
console.log("myArray2[3] = true")
console.log('myArray2 = ', myArray2)
console.log('myArray2.length = ', myArray2.length)
console.log('-------------------------------------------------------------')

// методы массивов Array
// PUSH - добавление нового элемента в конец массива
console.log('myArray2.push(10)', myArray2.push(10))
console.log('myArray2 = ', myArray2)
console.log('myArray2.length = ', myArray2.length)
console.log('-------------------------------------------------------------')

// POP - возвращает последний элемент массива и удаляет его из массива
console.log('myArray2.pop()', myArray2.pop())
console.log('myArray2 = ', myArray2)
console.log('myArray2.length = ', myArray2.length)
console.log('-------------------------------------------------------------')

// UNSHIFT - добавление нового элемента в начало массива
console.log("myArray2.unshift('Hello')", myArray2.unshift('Hello'))
console.log('myArray2 = ', myArray2)
console.log('myArray2.length = ', myArray2.length)
console.log('-------------------------------------------------------------')

// SHIFT - возвращает первый элемент массива и удаляет его из массива
console.log('myArray2.shift()', myArray2.shift())
console.log('myArray2 = ', myArray2)
console.log('myArray2.length = ', myArray2.length)
console.log('-------------------------------------------------------------')

// forEach - перебирает все элементы массива и подставляет их в стрелочную функцию
console.log('myArray2.forEach(el => console.log(el * 2))')
myArray2.forEach(el => console.log(el * 2))
console.log('-------------------------------------------------------------')

// MAP - перебирает все элементы массива и подставляет их в стрелочную функцию
// из результатов действия стрелочной функции возвращается новый массив
console.log('myArray2.map(el => el * 3)')
// короткая запись
const newArray = myArray2.map(el => el * 3)
// длинная (более понятная) запись с использованием стрелочной функуции
const newArray1 = myArray2.map((el) => {
    return el * 3
})
// длинная запись с использованием анонимной функции
const newArray2 = myArray2.map(function (el) {
    return el * 3
})

console.log('myArray2 = ', myArray2)
console.log('newArray = ', newArray)
console.log('-------------------------------------------------------------')

// REDUCE - перебирает все элементы массива, 
// можно производить действия с элементами массива используя аккумулятор
// можно посчитать сумму элементов числового масива
const sum = myArray.reduce((el, acc) => acc += el, 0)
console.log('myArray.reduce((el, acc) => acc += el, 0) = ', sum)

console.log('-------------------------------------------------------------')