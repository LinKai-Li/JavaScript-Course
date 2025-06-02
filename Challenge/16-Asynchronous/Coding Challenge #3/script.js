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

const loadNPause = async function () {
  try {
    let img = await createImage("img/img-1.jpg");
    await wait(2);
    img.style.display = "none";

    img = await createImage("img/img-2.jpg");
    await wait(2);
    img.style.display = "none";
  } catch (err) {
    console.error(err);
  }
};

// loadNPause();

const loadAll = async function (imgArr) {
  try {
    const imgs = imgArr.map(createImage);
    console.log(imgs);
    const data = await Promise.all(imgs);
    console.log(data);
    data.forEach((img) => img.classList.add("parallel"));
  } catch (err) {
    console.error(err);
  }
};

loadAll(["img/img-1.jpg", "img/img-2.jpg", "img/img-3.jpg"]);
