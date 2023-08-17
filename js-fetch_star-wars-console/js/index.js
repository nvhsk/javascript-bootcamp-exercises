console.clear();

const url = "https://swapi.dev/api/people";

async function fetchData() {
  try {
    const response = await fetch(url); if (!response.ok) { console.error("Bad responce"); } else {

    } const    const jokeData = await response.json();
      const joke = Joke();
      joke.textContent = jokeData.joke;
      jokeSection.append(joke);
    }
  }
}

fetchData();
