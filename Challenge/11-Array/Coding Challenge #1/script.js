'use strict';

const julia = [3, 5, 2, 12, 7];
const kate = [4, 1, 15, 8, 3];

function checkDogs(dogsJulia, dogsKate) {
  const julia = [...dogsJulia];
  julia.splice(0, 1);
  julia.splice(-2);

  const combinedDogs = julia.concat(dogsKate);

  combinedDogs.forEach(function (age, index) {
    const type =
      age >= 3 ? `an adult, and is ${age} years old` : 'still a puppy 🐶';
    console.log(`Dog number ${index + 1} is ${type}`);
  });
}

checkDogs(julia, kate);
