const arr1 = [17, 21, 23];
const arr2 = [12, 5, -5, 0, 4];

function printForecast(arr) {
  let output = "... ";
  for (let i = 0; i < arr.length; i++) {
    output += `${arr[i]}C in ${i + 1} days ... `;
  }
  console.log(output);
}

// printForecast(arr1);
printForecast(arr2);
