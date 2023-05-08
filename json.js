const user = {
    userId: 1,
    id: 1,
    title: 'Test title',
    status: {
        completed: false
    },
}
console.log(user)

// конвертация объекта в JSON
jsonData = JSON.stringify(user)
console.log(jsonData)

// конвертация JSON в объект
objectData = JSON.parse(jsonData)
console.log(objectData)