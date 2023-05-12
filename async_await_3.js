const getData = async (url) => {
    const res = await fetch(url)
    const json = await res.json()
    return json 
}

const url = 'http://jsonplaceholder.typicode.com/todos/5'

// try {
//     const data = await getData(url)
//     console.log(data)
// } catch (error) {
//     console.log(error.message)
// }
// console.log('-------------------------------------------------------------')

getData(url)
    .then(value => console.log(value))
    .catch(error => console.log(error.message))
console.log('-------------------------------------------------------------')