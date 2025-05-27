"use strict";

document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));

const button = document.querySelector("button");
button.addEventListener("click", function () {
  const text = document.querySelector("textarea").value;
  const textArray = text.split("\n");
  for (const [index, text] of textArray.entries()) {
    const lower_text = text.trim().toLowerCase();
    const [first_part, second_part] = lower_text.split("_");
    const camelCase = [first_part];
    camelCase.push(
      second_part.replace(second_part[0], second_part[0].toUpperCase())
    );
    const result = camelCase.join("");
    console.log(`${result.padEnd(20)}${"✅".repeat(index + 1)}`);
  }
});
