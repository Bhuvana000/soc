

// console.log("==JSON BASICS==");

// let student=
// {
//     "Name":"Bhuvana Reddy",
//     "Age":19,
//    "Marks":[97,98,99],
// };
// let jsString=JSON.stringify(student);
// console.log("JSON STRING",jsString);

// let jsObject=JSON.parse(jsString);   
// console.log("PARSED OBJECT",jsObject);
// let books=
// {
//     "title":"The Alchemist,al about dreams",
//     "author":"Paulo Coelhore,nowned author",
//     "book name":"Fiction,adventure",
// }
// let BOOKS=JSON.stringify(books);
// console.log("JSON STRING",BOOKS);
// let boo=
// [
//     {title:"The Alchemist",author:"Paulo Coelho",bookname:"Fiction"},
//     {title:"Wings of Fire",author:"A.P.J Abdul Kalam",bookname:"Autobiography"},
//     {title:"Rich Dad Poor Dad",author:"Robert Kiyosaki",bookname:"Finance"},
// ]   
// let BOOK=JSON.stringify(boo);
// console.log("JSON STRING",BOOK);
// fetch("https://jsonplaceholder.typicode.com/posts")
//     .then((response)=>response.json())
//     .then((data)=>console.log("FETCHED DATA",data))
//     .catch((error)=>console.log("ERROR",error));
//  fetch("https://jsonplaceholder.typicode.com/users") 
//   .then(res => res.json())  
//   .then(users => {
//     let output = "<h3>USERS LISTS</h3><ul>";
//     users.forEach(user => {
//       output += `<li>${user.name} (${user.email})</li>`;
//     });
//     output += "</ul>";
//     document.body.innerHTML += output;
//   });
// console.log("==WEATHER INFOO FETCHER PROJECT==")
// const cityCoords=
// {
//     "chennai": { lat: 13.0827, lon: 80.2707 },
//     "bangalore": { lat: 12.9716, lon: 77.5946 },
//     "hyderabad": { lat: 17.3850, lon: 78.4867 },
//     "mumbai": { lat: 19.0760, lon: 72.8777 },
//     "delhi": { lat: 28.7041, lon: 77.1025 }
// };

// document.getElementById("fetchWeatherBtn").addEventListener("click",()=>{
//     let city=document.getElementById("cityInput").value.toLowerCase();

//     if(!cityCoords[city])
//     {
//         document.getElementById("weather").innerText=" City not in list!"; 
//         return;
//     }
//      let coords=cityCoords[city];
//     let url=`https://api.open-meteo.com/v1/forecast?latitude=${coords.lat}&longitude=${coords.lon}&current_weather=true`;
//     //AJAX FECTH
//     fetch(url)
//     .then(res=>res.json())
//     .then(data =>
//          {
//     if(data.current_weather)    
//     {
//         document.getElementById("weather").innerHTML=`
//         <h3>Weather in ${city}</h3>
//         <p>Temp: ${data.current_weather.temperature}°C</p>
//         <p>Wind: ${data.current_weather.windspeed} km/h</p>
//         <p>Time:${data.current_weather.time}</p>
//         `;
//     }
//         else
//         {
//             document.getElementById("weather").innerText=" data not available";
//         }
//     })
//     .catch(error=>
//         {
//         console.error(error);
//         document.getElementById("weather").innerText=" error fetching data";
//     });
// });

// //https://newsapi.org/v2/everything?q=tesla&from=2023-10-10&sortBy=publishedAt&apiKey=
// //https://api.open-meteo.com/v1/forecast?latitude=${coords.lat}&longitude=${coords.lon}&current_weather=true`
console.log("=== Random Joke Generator ===");
document.getElementById("jokeBtn").addEventListener("click", ()=> {
    let url = "https://official-joke-api.appspot.com/random_joke";
    fetch(url)
        .then(res => res.json())
        .then(data => {
            document.getElementById("jokeDisplay").innerHTML = ` 
                <h3>Here's a Joke for You!</h3>
                <p>🤣 ${data.setup}</p
                <p>😂 ${data.punchline}</p>
            `;
        })
        .catch(error => {
            console.error(error);
            document.getElementById("jokeDisplay").innerHTML = "Couldnot fetch a joke, try again!";
});
});
 