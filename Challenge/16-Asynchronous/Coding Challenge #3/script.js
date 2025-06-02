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

// (async function () {
//   try {
//     const imgEl1 = await createImage("img/img-1.jpg");
//     currentImg = imgEl1;
//     await wait(2);
//     currentImg.style.display = "none";
//     const imgEl2 = await createImage("img/img-2.jpg");
//     currentImg = imgEl2;
//     await wait(2);
//     currentImg.style.display = "none";
//   } catch (err) {
//     console.error(err);
//   }
// })();

const loadAll = async function (imgArr) {
  const imgs = await imgArr.map((img) => createImage(img));
  console.log(imgs);
  const data = await Promise.all(imgs);
  console.log(data);
  data.forEach((img) => img.classList.add("parallel"));
};

loadAll(["img/img-1.jpg", "img/img-2.jpg", "img/img-3.jpg"]);
