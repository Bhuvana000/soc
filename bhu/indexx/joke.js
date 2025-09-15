async function getJoke() {
  try {
    let response = await fetch("https://official-joke-api.appspot.com/random_joke");
    if (!response.ok) {
      throw new Error("API Error");
    }
    let data = await response.json();
    displayJoke(data);
  } catch (error) {
    document.getElementById("setup").textContent = "Couldn't fetch a joke, try again!";
    document.getElementById("punchline").textContent = "";
  }
}

// Function to display the joke in the page
function displayJoke(joke) {
  document.getElementById("setup").textContent = joke.setup;
  document.getElementById("punchline").textContent = joke.punchline;