import "../Styles/style.css";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { roster } from "../Javascript/menu.js";
AOS.init();
import "../Javascript/menu.js";

const DOMselectors = {
  buttons: document.querySelector(".btn1"),
  parent: document.querySelector("#parentContainer"),
};

DOMselectors.buttons.addEventListener(`click`, function () {
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
    DOMselectors.parent.insertAdjacentHTML("beforeend");
  },
};

myFunctions.filtered();
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
