import "../Styles/style.css";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { roster } from "../Javascript/menu.js";
AOS.init();
import "../Javascript/menu.js";

const DOMselectors = {
  colorChange: document.querySelector(".btn1"),
  allBtn: document.querySelector(".btn2"),
  floatyBtn: document.querySelector(".btn3"),
  parent: document.querySelector("#parentContainer"),
  child: document.querySelector(".child"),
};

DOMselectors.colorChange.addEventListener(`click`, function () {
  if (document.body.classList.contains("hotPink")) {
    document.body.classList.add("light-Blue");
    document.body.classList.remove("hotPink");
  } else {
    document.body.classList.contains("light-Blue");
    document.body.classList.add("hotPink");
    document.body.classList.remove("light-Blue");
  }
});

const myFunctions = {
  filtered: function () {
    roster.Row1.filter((character) =>
      character.series.includes("Super Mario Bros")
    ).forEach((character) => {
      console.log(character.name);
    });
  },
  makeCards: function () {
    roster.Row1.forEach((character) => {
      DOMselectors.parent.insertAdjacentHTML(
        "beforeend",
        `<div class="child"><p>${character.name}</p> <p ><img class="imgs"src= ${character.img}></p><p>${character.price}</p></div> `
      );
    });
  },
  filterFloaties: DOMselectors.floatyBtn.addEventListener("click", function () {
    roster.Row1.filter((character) =>
      character.properties.includes(`Floaty`)
    ).forEach((character) => {
      console.log(character.name);
      alert("this is an alert");
    });
  }),
};

myFunctions.makeCards();

/* roster.forEach((row) => {
  row.forEach((character) => {
    console.log(character.name);
  });
}); */

// const myFunctions = {
//   inject: function () {
//     roster.Row1.filter((character) =>
//       character.series.includes("Super Mario Bros").forEach((character) => {
//         console.log(character.name);
//       })
//     );
//   },
// };

// myFunctions.inject();

/* roster.Row1.forEach((e) => console.log(e.series.includes("Super Mario Bros"))); */
