/*let numberOfFilms;
function start() {
  numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

  while (
    numberOfFilms === "" ||
    numberOfFilms === null ||
    isNaN(numberOfFilms)
  ) {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
  }
}
start();

const personalMovieDB = {
  count: "Сколько фильмов вы уже посмотрели?",
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

const c = prompt("Один из последних просмотренных фильмов?", ""),
  d = prompt("Hа сколько оцените его?", "");

personalMovieDB.movies[c] = d;

function detectPerconalLevel() {
  if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Вы классический зритель");
  } else if (personalMovieDB.count >= 30) {
    console.log("Вы киноман");
  } else {
    console.log("Произошла ошибка");
  }
}
detectPerconalLevel();

console.log(personalMovieDB);

function rememberMyFilms() {
  for (let i; i < 2; i++) {
    const a = prompt("Один из последних просмотренных фильмов?", ""),
      b = prompt("Hа сколько оцените его?", "");

    if (a != null && b != null && a != "" && b != "" && a.length < 50) {
      personalMovieDB.movies[a] = b;
      console.log("done");
    } else {
      console.log("Error");
      i - 1;
    }
  }
}
rememberMyFilms();

function showMyDB(hidden) {
  if (!hidden) {
    console.log(personalMovieDB);
  }
}
showMyDB(personalMovieDB.privat);

function writeYouGenres() {
  for (let i = 1; i <= 3; i++) {
    const genere = prompt(`Ваш любимый жанр под номером ${i}`, "");
    personalMovieDB.genres[i - 1] = genere;
  }
}
writeYouGenres();*/

/*function first() {
  setTimeout(function () {
    console.log(1);
  }, 500);
}

function second() {
  console.log(2);
}
first();
second();

function learnJS(lang, callback) {
  console.log(`I lerning ${lang}`);
  callback();
}
learnJS("JS", function () {
  console.log("Hello world");
});*/

/*const users = [
    { name: "John Doe", accessLevel: "admin" },
    { name: "Jane Smith", accessLevel: "user" },
    { name: "Bob Johnson", accessLevel: "user" },
    { name: "Alice Brown", accessLevel: "admin" },
  ];
  
  const admins = users.filter((user) => user.accessLevel === "admin");
  const person = users.filter((user) => user.accessLevel === "user");
  
  console.log({ admins, person });
  
  const lengthAdmin = admins;
  console.log(lengthAdmin.length);
  const lengthUser = person;
  console.log(lengthUser.length);*/

const btnPlus = document.querySelector(".counter__btn-plus");
const btnMinus = document.querySelector(".counter__btn-minus");
const counter = document.querySelector(".counter");

let count = 0;

btnPlus.addEventListener("click", (e) => {
  btnPlus.textContent = ++count;
});

btnMinus.addEventListener("click", (e) => {
  btnMinus.textContent = ++count;
});
