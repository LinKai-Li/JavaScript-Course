"use strict";

const container = document.querySelector(".images");

const wait = function (second) {
  return new Promise((resolve) => {
    setTimeout(resolve, second * 1000);
  });
};

const createImage = function (imgPath) {
  return new Promise((resolve, reject) => {
    const img = document.createElement("img");
    img.src = imgPath;

    img.addEventListener("load", function () {
      container.append(img);

      resolve(img);
    });

    img.addEventListener("error", function () {
      reject(new Error("Image not found"));
    });
  });
};

let currentImg;

createImage("img/img-1.jpg")
  .then((imgEl) => {
    currentImg = imgEl;
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = "none";

    return createImage("img/img-2.jpg");
  })
  .then((imgEl) => {
    currentImg = imgEl;
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = "none";
  })
  .catch((err) => console.error(err));
