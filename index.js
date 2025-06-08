const movie = document.getElementById("inputmovie");
const mySubmit = document.getElementById("submitButton");
const outputscreen = document.getElementById("output");

mySubmit.addEventListener("click", () => {
  const movieName = movie.value.trim();

  if (!movieName) {
    outputscreen.innerHTML = "❗Please enter a movie name.";
    return;
  }

   fetch(`https://cors-anywhere.herokuapp.com/http://www.omdbapi.com/?t=${movieName}&apikey=b9531fb4`)
    .then(response => response.json())
    .then(data => {
      if (data.Response === "False") {
        outputscreen.innerHTML = "🚫 Movie not found!";
      } else {
        outputscreen.innerHTML = `
          <h2>${data.Title} (${data.Year})</h2>
          <img src="${data.Poster}" alt="Poster" height="200"><br>
          <strong>Rating:</strong> ⭐ ${data.imdbRating}<br>
          <strong>Genre:</strong> ${data.Genre}<br>
          <strong>Plot:</strong> ${data.Plot}
        `;
      }
    })
    .catch(error => {
      console.error("Error fetching movie:", error);
      outputscreen.innerHTML = "⚠️ Something went wrong. Try again.";
    });
});
