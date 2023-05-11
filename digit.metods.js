// методы чисел
const digit = 17

// .toExponential() - возвращает строку (число в виде экспоненты)
console.log('digit.toExponential()  = ', digit.toExponential())
console.log('digit.toExponential(1) = ', digit.toExponential(1))
console.log('digit.toExponential(2) = ', digit.toExponential(2))
console.log('digit.toExponential(3) = ', digit.toExponential(3))
console.log('-------------------------------------------------------------')

// digit.toFixed() - возвращает строку (число в скобках = количество знаков после запятой)
console.log('digit.toFixed()   = ', digit.toFixed())
console.log('digit.toFixed(1)  = ', digit.toFixed(1))
console.log('digit.toFixed(2)  = ', digit.toFixed(2))
console.log('digit.toFixed(3)  = ', digit.toFixed(3))
console.log('-------------------------------------------------------------')

// digit.toLocaleString() - возвращает строку (число преобразуеться в строку)
console.log('digit.toLocaleString()   = ', digit.toLocaleString())
console.log('-------------------------------------------------------------')

// digit.toPrecision() - возвращает строку (число в скобках = общее количество знаков)
console.log('digit.toPrecision()   = ', digit.toPrecision())
console.log('digit.toPrecision(1)   = ', digit.toPrecision(1))
console.log('digit.toPrecision(2)   = ', digit.toPrecision(2))
console.log('digit.toPrecision(3)   = ', digit.toPrecision(3))
console.log('digit.toPrecision(4)   = ', digit.toPrecision(4))
console.log('digit.toPrecision(5)   = ', digit.toPrecision(5))
console.log('-------------------------------------------------------------')

// digit.toString() - возвращает строку (число в скобках = системе исчисления, основание)
console.log('digit.toString()   = ', digit.toString())
console.log('digit.toString(2)   = ', digit.toString(2))
console.log('digit.toString(4)   = ', digit.toString(4))
console.log('digit.toString(8)   = ', digit.toString(8))
console.log('digit.toString(10)   = ', digit.toString(10))
console.log('digit.toString(16)   = ', digit.toString(16))
console.log('-------------------------------------------------------------')

// digit.valueOf() - возвращает число, значение переменной
console.log('digit.valueOf()   = ', digit.valueOf())
console.log('-------------------------------------------------------------')