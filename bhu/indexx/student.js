let student={
    name:"Haritha",
    usn:"ABCD522",
    age:19,
    marks:[85,50,70,60]
};
console.log("student object",student);
let jsonString=JSON.stringify(student);
console.log("json formate",jsonString);
let stringObject=JSON.parse(jsonString)
console.log("parse object",stringObject)


let book=[
    {title:"abv",aut:"abc",price:100},
    {title:"ysh",aut:"abc",price:100},
    {title:"gbl",aut:"abc",price:100}
]
console.log("Book Title",book.map(b=>b.title))

