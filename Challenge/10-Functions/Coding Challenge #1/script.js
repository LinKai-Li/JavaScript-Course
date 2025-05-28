"use strict";

const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
  // 1.
  registerNewAnswer() {
    let index = prompt(
      `${this.question}\n${this.options.join("\n")}\n(Write option number)`
    );
    if (!isNaN(index)) {
      index = Number(index);
      if (index < 0 && index > 3) {
        alert("Invalid range");
      } else {
        this.answers[index]++;
      }
    } else {
      alert("You should input a number!");
    }
    // 4.
    this.displayResults();
    this.displayResults("string");
  },
  // 3.
  displayResults(type = "array") {
    if (type === "string") {
      console.log(`Poll results are ${this.answers.join(", ")}`);
    } else if (type === "array") {
      console.log(this.answers);
    }
  },
};

// 2.
const button = document.querySelector(".poll");
button.addEventListener("click", poll.registerNewAnswer.bind(poll));

// 5.
const poll1 = {
  answers: [5, 2, 3],
};
const poll2 = {
  answers: [1, 5, 3, 9, 6, 1],
};

poll.displayResults.call({ answers: [5, 2, 3] });
poll.displayResults.call({ answers: [5, 2, 3] }, "string");
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, "string");
