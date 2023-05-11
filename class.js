// создание класса, экземпляра класса

// создание класса
class Comment {
    constructor(text) {
        this.text = text
        this.votesQty = 0
    }

    upvote() {
        this.votesQty += 1
    }

    // статический метод. Не наследуется экземплярами класса !!!
    static mergeComments(first, second) {
        return `${first} ${second}`
    }
}
console.log('-------------------------------------------------------------')

// создание экземпляра класса
console.log('Создание экземпляра класса')
console.log("const firstComment = new Comment('First cooment')")
const firstComment = new Comment('First cooment')
console.log('-------------------------------------------------------------')

// вызываем метод класса upvote()
console.log(firstComment)
console.log('-------------------------------------------------------------')

firstComment.upvote()
firstComment.upvote()
firstComment.upvote()
firstComment.upvote()
firstComment.upvote()
console.log('Вызов 5 раз метода: firstComment.upvote()')

console.log(firstComment)
console.table(firstComment)
console.log('-------------------------------------------------------------')

//вызываем статический метод
console.log(Comment.mergeComments('First comment.', 'Second comment.'))
console.log('-------------------------------------------------------------')

// проверка принадлежности 
console.log('firstComment instanceof Comment - ', firstComment instanceof Comment)
console.log('firstComment instanceof Object  - ', firstComment instanceof Object)
console.log('firstComment instanceof Array   - ', firstComment instanceof Array)
console.log('-------------------------------------------------------------')

// проверка принадлежности свойств экземпляру объекта
console.log("firstComment.hasOwnProperty('text')          - ", firstComment.hasOwnProperty('text')) // свойство
console.log("firstComment.hasOwnProperty('votesQty')      - ", firstComment.hasOwnProperty('votesQty')) // свойство
console.log("firstComment.hasOwnProperty('upvote')        - ", firstComment.hasOwnProperty('upvote')) // метод
console.log("firstComment.hasOwnProperty('mergeComments') - ", firstComment.hasOwnProperty('mergeComments')) // метод
console.log('-------------------------------------------------------------')


// расширение других классов
class NumbersArray extends Array {
    sum() {
        return this.reduce((el, acc) => acc += el, 0)
    }
}

// Инициализация нового экземпляра класа
const myArray = new NumbersArray(2, 5, 7)
console.log(myArray)

// вызов метода .sum(), расширяющего стандартный класс
console.log(myArray.sum())
console.log('-------------------------------------------------------------')