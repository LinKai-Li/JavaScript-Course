"use strict";

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1.
for (const [index, name] of game.scored.entries()) {
  console.log(`Goal ${index + 1}: ${name}`);
}

// 2.
let sum = 0;
for (const odd of Object.values(game.odds)) {
  sum += odd;
}

const average = sum / Object.keys(game.odds).length;
console.log(average);

// 3.
for (const [key, value] of Object.entries(game.odds)) {
  const teamStr = key === "x" ? "draw" : `victory ${game[key]}`;
  console.log(`Odd of ${teamStr}: ${value}`);
}

// 4.
const scorers = {};
for (const player of game.scored) {
  if (player in scorers) {
    scorers[player] += 1;
  } else {
    scorers[player] = 1;
  }
}
console.log(scorers);
