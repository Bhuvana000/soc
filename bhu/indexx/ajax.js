fetch("https://jsonplaceholder.typicode.com/posts/1")
.then(response=>response.json())
.then(date=> console.log(date))
.catch(error=>console.log(error))


