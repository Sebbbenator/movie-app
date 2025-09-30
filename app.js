"use strict";
// ========== MOVIE OBJECTS ==========

// Movie 1: Barbie
const barbieMovie = {
  id: 1,
  title: "Barbie",
  year: 2023,
  genre: ["Adventure", "Comedy", "Fantasy"],
  rating: 7.0,
  director: "Greta Gerwig",
  image:
    "https://upload.wikimedia.org/wikipedia/en/0/0b/Barbie_2023_poster.jpg",
  actors: ["Margot Robbie", "Ryan Gosling", "America Ferrera"],
  description:
    "Barbie and Ken embark on a journey of self-discovery after leaving the utopian Barbie Land for the real world.",
};

console.log("Barbie movie object:", barbieMovie);

// Movie 2: Dune
const duneMovie = {
  id: 2,
  title: "Dune",
  year: 2021,
  genre: ["Adventure", "Drama", "Sci-Fi"],
  rating: 8.0,
  director: "Denis Villeneuve",
  image:
    "https://upload.wikimedia.org/wikipedia/en/8/8e/Dune_%282021_film%29.jpg",
  actors: ["Timothée Chalamet", "Rebecca Ferguson", "Oscar Isaac"],
  description:
    "Paul Atreides leads nomadic tribes in a battle to control the desert planet Arrakis and its valuable spice.",
};

console.log("Dune movie object:", duneMovie);

// Movie 3: Dune: Part Two
const duneTwoMovie = {
  id: 3,
  title: "Dune: Part Two",
  year: 2024,
  genre: ["Action", "Adventure", "Drama"],
  rating: 8.7,
  director: "Denis Villeneuve",
  image:
    "https://m.media-amazon.com/images/M/MV5BNTc0YmQxMjEtODI5MC00NjFiLTlkMWUtOGQ5NjFmYWUyZGJhXkEyXkFqcGc@._V1_.jpg",
  actors: ["Timothée Chalamet", "Zendaya", "Rebecca Ferguson"],
  description:
    "Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family.",
};

console.log("Dune: Part Two movie object:", duneTwoMovie);

// Movie 4: Everything Everywhere All at Once
const everythingEverywhereAllatOnce = {
  id: 4, // Unikt nummer for filmen
  title: "Everything Everywhere All at Once",
  year: 2022, // Number, ikke string!
  genre: ["Action", "Adventure", "Comedy"],
  rating: 7.8,
  director: ["Daniel Kwan", "Daniel Scheinert"],
  image:
    "https://m.media-amazon.com/images/M/MV5BOWNmMzAzZmQtNDQ1NC00Nzk5LTkyMmUtNGI2N2NkOWM4MzEyXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
  actors: ["Michelle Yeoh", "Stephanie Hsu", "Ke Huy Quan"],
  description:
    "An aging Chinese immigrant is swept up in an insane adventure, where she alone can save the world by exploring other universes.",
};

console.log(
  "Everything Everywhere All at Once:",
  everythingEverywhereAllatOnce
);

// Movie 5: Fight Club
const fightClub = {
  id: 5,
  title: "Fight Club",
  year: 1999,
  genre: ["Drama"],
  rating: 8.8,
  director: "David Fincher",
  image: "https://m.media-amazon.com/images/I/51v5ZpFyaFL._AC_.jpg",
  actors: ["Brad Pitt", "Edward Norton", "Helena Bonham Carter"],
  description:
    "An insomniac office worker and a soap maker form an underground fight club that evolves into something much more.",
};

console.log("Fight Club:", fightClub);

// Movie 6: Forrest Gump
const forrestGump = {
  id: 6,
  title: "Forrest Gump",
  year: 1994,
  rating: 8.8,
  director: "Robert Zemeckis",
  image:
    "https://upload.wikimedia.org/wikipedia/en/6/67/Forrest_Gump_poster.jpg",
  actors: ["Tom Hanks", "Robin Wright", "Gary Sinise"],
  genre: ["Drama", "Romance"],
  description:
    "The presidencies of Kennedy and Johnson, the Vietnam War, and other historical events unfold from the perspective of an Alabama man with an IQ of 75.",
};

console.log("Forrest Gump:", forrestGump);

// Movie 7: Goodfellas
const goodFellas = {
  id: 7,
  title: "Goodfellas",
  year: 1990,
  genre: ["Biography", "Crime", "Drama"],
  rating: 8.7,
  director: "Martin Scorsese",
  image: "https://upload.wikimedia.org/wikipedia/en/7/7b/Goodfellas.jpg",
  actors: ["Robert De Niro", "Ray Liotta", "Joe Pesci"],
  description:
    "The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito in the Italian-American crime syndicate.",
};

console.log("Goodfellas:", goodFellas);

// Movie 8: Inception
const inception = {
  id: 8,
  title: "Inception",
  year: 2010,
  rating: 8.8,
  director: "Christopher Nolan",
  image:
    "https://m.media-amazon.com/images/M/MV5BMjExMjkwNTQ0Nl5BMl5BanBnXkFtZTcwNTY0OTk1Mw@@._V1_.jpg",
  actors: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Ellen Page"],
  description:
    "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
  genre: ["Action", "Adventure", "Sci-Fi"],
};

console.log("Inception:", inception);
