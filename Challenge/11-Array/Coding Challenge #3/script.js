'use strict';

const data = [5, 2, 4, 1, 15, 8, 3];

function calcAverageHumanAge(ages) {
  const avgHumanAges = ages
    .map(age => (age <= 2 ? age * 2 : 16 + age * 4))
    .filter(age => age >= 18)
    .reduce(
      (acc, cur, index) => acc + (cur - acc) / (index + 1),
      filteredHumanAges[0]
    );

  return avgHumanAges;
}

console.log(calcAverageHumanAge(data));
