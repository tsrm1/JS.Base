// функция, которая ожидает результат какого-то промиса
// await
const timerPromise = () =>
    new Promise((resolve, reject) =>
        setTimeout( () => resolve(), 3000))

const asyncFn = async () => {
    console.log('Timer starts!')
    const startTime = performance.now()
    await timerPromise()                    // ожидаем ответа от промиса timerPromise()
    const endTime = performance.now()
    console.log('Timer ended.', endTime - startTime)
}

asyncFn()
console.log('-------------------------------------------------------------')

