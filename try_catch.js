// обработка ошибок

const fnWithError = () => {
    throw new Error('Some error catched.')  // генерируем ошибку
}

try {                                       // запускаем 'песочницу' для запуска 'кривого' кода
    fnWithError()
} catch (catchedError) {                    // улавливаем код ошибки
    console.error(catchedError)             // выводим полное сообщение об ошибке
    console.log(catchedError.message)       // выводим только название ошибки
}

console.log('Continue ...')                 // работа программы продолжается