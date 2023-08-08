let button = document.querySelector("#click-btn");
let jokeDiv = document.querySelector("#joke-div")

button.onclick = function(event) {
    event.preventDefault();

    let url = "https://v2.jokeapi.dev/joke/Any?safe-mode";

    fetch(url)
    .then(function(response){
        console.log(response);
        return response.json()
    })
    .then(function(jokeJSON){
    console.log(jokeJSON)

    let jokeContainer = document.createElement("div");
    jokeDiv.appendChild(jokeContainer);

    let joke = document.createElement("p");
    joke.innerHTML = jokeJSON.joke +jokeJSON.setup + jokeJSON.delivery
    jokeContainer.appendChild(joke);

    })
}