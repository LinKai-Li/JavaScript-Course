'use strict';

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

const foodWarning = ({ curFood, recommendedFood }) => {
  if (curFood > recommendedFood * 1.1) {
    return 'Too Much';
  }
  if (curFood < recommendedFood * 0.9) {
    return 'Too Little';
  }
  return 'Normal';
};

// 1.
dogs.forEach(dog => (dog['recommendedFood'] = dog.weight ** 0.75 * 28));
console.log(dogs);

// 2.
const sarahDog = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(sarahDog);
console.log(foodWarning(sarahDog));

// 3.
const ownersEatTooMuch = dogs
  .filter(dog => foodWarning(dog) === 'Too Much')
  .flatMap(dog => dog.owners);
const ownersEatTooLittle = dogs
  .filter(dog => foodWarning(dog) === 'Too Little')
  .flatMap(dog => dog.owners);
console.log(ownersEatTooMuch);
console.log(ownersEatTooLittle);

// 4.
console.log(ownersEatTooMuch.join(' and ') + "'s dogs eat too much!");
console.log(ownersEatTooLittle.join(' and ') + "'s dogs eat too little!");

// 5.
console.log(dogs.some(dog => dog.curFood === dog.recommendedFood));

// 6.
console.log(dogs.some(dog => foodWarning(dog) === 'Normal'));

// 7.
const okayDogs = dogs.filter(dog => foodWarning(dog) === 'Normal');
console.log(okayDogs);

// 8.
const sortedDogs = dogs
  .slice()
  .sort((a, b) => a.recommendedFood - b.recommendedFood);
console.log(sortedDogs);
