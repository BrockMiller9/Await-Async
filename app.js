// async function sayHi() {
//   return "Hello!!";
// } //returns a promise

// function sayHi() {
//   return new Promise((resolve, reject) => {
//     resolve("Hello!!");
//   });
// }

// sayHi()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// async function shortens up code and makes it easier to read
// async function getStarWarsData() {
//   try {
//     const response = await axios.get("https://swapi.dev/api/planets/1/");
//     console.log(response.data);
//   } catch (e) {
//     console.log("In catch block");
//     console.log(e);
//   }
// }

// getStarWarsData();

// const h1 = document.querySelector("h1");

// function changeColor(color, delay) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       h1.style.color = color;
//       resolve();
//     }, delay);
//   });
// }

// changeColor("red", 1000)
//   .then(() => changeColor("orange", 1000))
//   .then(() => changeColor("yellow", 1000))
//   .then(() => changeColor("green", 1000))
//   .then(() => changeColor("blue", 1000))
//   .then(() => changeColor("indigo", 1000))
//   .then(() => changeColor("violet", 1000))
//   .then(() => changeColor("black", 1000));

// async function rainbow(el) {
//   const colors = [
//     "red",
//     "orange",
//     "yellow",
//     "green",
//     "blue",
//     "indigo",
//     "violet",
//     "black",
//   ];
//   for (let color of colors) {
//     await changeColor(color, 1000);
//   }
// }

// rainbow(h1);

// let url = "https://deckofcardsapi.com/api/deck/new";

// const deck = {
//   async init() {
//     response = await axios.get(`${url}/shuffle/?deck_count=1`);
//     this.deckID = response.data.deck_id;
//   },
//   async shuffle() {
//     response = await axios.get(
//       `"https://deckofcardsapi.com/api/deck/${this.deckID}/shuffle/`
//     );
//     console.log(response.data);
//   },
//   async drawCard() {
//     response = await axios.get(
//       `https://deckofcardsapi.com/api/deck/${this.deckID}/draw/?count=1`
//     );
//     console.log(response.data);
//   },
// };

// class Pokemon {
//   constructor(id) {
//     this.id = id;
//   }
//   async getInfo() {
//     const response = await axios.get(
//       `https://pokeapi.co/api/v2/pokemon/${this.id}`
//     );
//     this.name = response.data.name;
//     this.types = response.data.types.map((type) => type.type.name);
//   }
// }

// const pika = new Pokemon(25);

// async function shortens up code and makes it easier to read
// async function getStarWarsData() {
//   try {
//     const response = await axios.get("https://swapi.dev/api/planets/1/");
//     console.log(response.data);
//   } catch (e) {
//     console.log("In catch block");
//     console.log(e);
//   }
// }

// getStarWarsData();

// async function getUser(user) {
//   try {
//     const response = await axios.get(`https://api.github.com/users/${user}`);
//     console.log(response.data);
//   } catch (e) {
//     console.log("User not found");
//     console.log(e);
//   }
// }

// getUser("BrockMiller9");

// async function get3Pokemon() {
//   const poke1 = await axios.get("https://pokeapi.co/api/v2/pokemon/1");
//   const poke2 = await axios.get("https://pokeapi.co/api/v2/pokemon/2");
//   const poke3 = await axios.get("https://pokeapi.co/api/v2/pokemon/3");
//   console.log(poke1.data.name);
//   console.log(poke2.data.name);
//   console.log(poke3.data.name);
// }

// async function get3Pokemon() {
//   let baseURL = "https://pokeapi.co/api/v2/pokemon/";
//   const poke1 = axios.get(baseURL + "1");
//   const poke2 = axios.get(baseURL + "2");
//   const poke3 = axios.get(baseURL + "3");

//   const results = await Promise.all([poke1, poke2, poke3]);

//   console.log(results);
// }

// get3Pokemon();

// async function numberFact(num) {
//   const response = await axios.get(`http://numbersapi.com/${num}`);
//   console.log(response.data);
// }

// async function multipleNumberFacts() {
//   const response = await axios.get(`http://numbersapi.com/1,2,3,4,5`, {
//     params: { json: true },
//   });
//   console.log(response.data);
// }

// async function fourFacts(num) {
//   const facts = await Promise.all([
//     axios.get(`http://numbersapi.com/${num}`),
//     axios.get(`http://numbersapi.com/${num}`),
//     axios.get(`http://numbersapi.com/${num}`),
//     axios.get(`http://numbersapi.com/${num}`),
//   ]);
//   facts.forEach((fact) => console.log(fact.data));
// }

// // numberFact(42);
// // multipleNumberFacts();
// fourFacts(42);

let url = "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1";

async function getCard() {
  const response = await axios.get(url);
  let deckID = response.data.deck_id;
  const card = await axios.get(
    `https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=1`
  );
  console.log(card.data.cards[0].value + " of " + card.data.cards[0].suit);
  const card2 = await axios.get(
    `https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=1`
  );
  console.log(card2.data.cards[0].value + " of " + card2.data.cards[0].suit);
}

const button = document.querySelector("button");
const cardArea = document.querySelector("#results");

button.addEventListener("click", async function () {
  const response = await axios.get(url);
  let deckID = response.data.deck_id;
  const card = await axios.get(
    `https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=1`
  );
  const img = document.createElement("img");
  img.src = card.data.cards[0].image;
  img.classList.add("card");
  cardArea.appendChild(img);
});

getCard();
