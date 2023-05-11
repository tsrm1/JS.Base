// методы строк
const str = 'Hello Roman'
const str2 = new String('Hello WORLD.')

// toString() - перевод числа в строку
let number = 12345
console.log('number.toString()      = ', number.toString())
console.log('-------------------------------------------------------------')

// LENGTH - длина строки
console.log("str = 'Hello Roman'    = ", str)
console.log('str.length()           = ', str.length)
console.log('-------------------------------------------------------------')

// slice(start, end) - Вырезает интервал С и ДО. First position is 0
console.log('str.slice(3, 9)        ', str.slice(3, 9)) // от и до
console.log('str.slice(7)           ', str.slice(7))    // оставить начиная с ..
console.log('str.slice(-5)          ', str.slice(-5))   // .. с конца
console.log('str.slice(-8, -5)      ', str.slice(-8, -2))   // .. с конца
console.log('-------------------------------------------------------------')

// substring(start, end) - Вырезает интервал С и ДО. First position is 0
console.log('str.substring(3, 9)    ', str.substring(3, 9))
console.log('-------------------------------------------------------------')

// substr(start, length) - Вырезает интервал С, длиной ... . First position is 0
console.log('str.substr(3, 5)       ', str.substr(3, 5))
console.log('str.substr(-5)         ', str.substr(-5))
console.log('-------------------------------------------------------------')

// concat() - объединение строк
let text = str.concat(' ', str2)
console.log("str.concat(' ', str2)          ", text)
console.log("'Hello'.concat(' ', 'World!')  ", 'Hello'.concat(' ', 'World!'))
console.log('-------------------------------------------------------------')

// charAt() - возвращает символ, стоящий на позиции () в строке. Начало = 0
console.log("str.charAt(0)                  ", str.charAt(0))
console.log("str.charAt(1)                  ", str.charAt(1))
console.log("str.charAt(2)                  ", str.charAt(2))
console.log("str.charAt(3)                  ", str.charAt(3))
console.log("str.charAt(4)                  ", str.charAt(4))
console.log('-------------------------------------------------------------')

// charCodeAt() - возвращает код символа в таблице UTF-16 (0..65535), стоящий на позиции () в строке. Начало = 0
console.log("str.charCodeAt(0)                  ", str.charCodeAt(0))
console.log("str.charCodeAt(1)                  ", str.charCodeAt(1))
console.log("str.charCodeAt(2)                  ", str.charCodeAt(2))
console.log("str.charCodeAt(3)                  ", str.charCodeAt(3))
console.log("str.charCodeAt(4)                  ", str.charCodeAt(4))
console.log('-------------------------------------------------------------')

// STRING = ARRAY, строки ведут себя как массив
for (const pos in str) {
    console.log(`Цикл FOR: Element [${pos}]: ${str[pos]}`)
}
console.log('-------------------------------------------------------------')

// split() - конвертирует строку в массив, разделитель символ в скобках
console.log("str.split(' ')                     ", str.split(' '))
console.log('-------------------------------------------------------------')

// split() - конвертирует строку в массив, разделитель символ в скобках
// если разделитель '' (пустая строка) - вся строка будет переведена в массив посимвольно
console.log("str.split('')                      ", str.split(''))
console.log('-------------------------------------------------------------')

// trim() - удаление пробелов до и после
console.log("'   Hello World   '.trim()         ", '   Hello World   '.trim())
console.log('-------------------------------------------------------------')

// trimStart() - удаление пробелов в начале
console.log("'   Hello World   '.trimStart()    ", '   Hello World   '.trimStart())
console.log('-------------------------------------------------------------')

// trimEnd() - удаление пробелов в конце
console.log("'   Hello World   '.trimEnd()      ", '   Hello World   '.trimEnd())
console.log('-------------------------------------------------------------')

// padStart() - .. вначале
console.log("str.padStart(4, 'x')       ", str.padStart(4, 'x'))
console.log('-------------------------------------------------------------')

// padEnd() - .. вконце
console.log("str.padEnd(4, 'x')       ", str.padEnd(4, 'x'))
console.log('-------------------------------------------------------------')



// replace()
console.log("str.replace('Hallo', 'Hi') ", str.replace('Hallo', 'Hi'))
console.log("str.replace('HALLO', 'Hi') ", str.replace('HALLO', 'Hi'))  // необх. отслеживать регистр

console.log("str.replace('a', 'A') ", str.replace('a', 'A')) // замена только первого вхождения
console.log("str.replace('a', 'A') ", str.replace(/a/g, 'A')) // замена всех вхождений
console.log('-------------------------------------------------------------')
// global flag (g)

// replaceAll()
console.log("str.replaceAll('a', 'A') ", str.replaceAll('a', 'A')) // замена всех вхождений
console.log("str.replaceAll('a', 'A') ", str.replaceAll(/a/g, 'A')) // замена всех вхождений
console.log('-------------------------------------------------------------')

// toUpperCase() - перевод в верхний регистр
console.log('str.toUpperCase()    = ', str.toUpperCase())
console.log('-------------------------------------------------------------')

// toLowerCase() - перевод в нижний регистр
console.log('str.toLowerCase()    = ', str.toLowerCase())
console.log('-------------------------------------------------------------')
