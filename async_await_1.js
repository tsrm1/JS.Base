// пример ассинхронной функции, которая сразу возвращает результат (строку 'Success!')
const asyncFn = async => {
    return 'Success!'
}
console.log('-------------------------------------------------------------')

// вызов асинхронной функции (которая не возвращает ошибки)
console.log(asyncFn())
console.log('-------------------------------------------------------------')

// вызов асинхронной функции
// asyncFn()
//     .then(value => console.log(value))
// console.log('-------------------------------------------------------------')


// пример ассинхронной функции, которая сразу возвращает ошибку
const asyncFn2 = async () => {
    throw new Error('There was an error!')
}
console.log('-------------------------------------------------------------')

// вызов асинхронной функции (которая возвращает ошибку)
console.log(asyncFn2())
console.log('-------------------------------------------------------------')

// asyncFn2()
//     .then(value => console.log(value))
//     .catch(error => console.log(error.message))
// console.log('-------------------------------------------------------------')

///////////////////////////////////////////////////////////////////////////

// функция, которая ожидает результата какого-то промиса
// await
const timerPromise = () =>
    new Promise((resolve, reject) =>
        setTimeout( () => resolve(), 2000))

const asyncFn3 = async () => {
    console.log('Timer starts!')
    await timerPromise()
    console.log('Timer ended.')
}

asyncFn3()
