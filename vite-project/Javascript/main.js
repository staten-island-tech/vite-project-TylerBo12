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
  if (document.body.classList.contains("defaultTheme")) {
    document.body.classList.add("alternateTheme");
    document.body.classList.remove("defaultTheme");
  } else {
    document.body.classList.contains("alternateTheme");
    document.body.classList.add("defaultTheme");
    document.body.classList.remove("alternateTheme");
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
        `<div class="child"><p>${character.name}</p> <p ><img class="imgs"src= ${character.img}></p><p>$${character.price}</p></div> `
      );
    });
  },
  filterFloaties: DOMselectors.floatyBtn.addEventListener("click", function () {
    roster.Row1.filter((character) =>
      character.properties.includes(`Floaty`)
    ).forEach((character) => {
      DOMselectors.parent.insertAdjacentHTML(
        "beforeend",
        `<div class="child"><p>${character.name}</p> <p ><img class="imgs"src= ${character.img}></p> <p>$${character.price}</p></div>`
      );
    });
  }),
  filterAll: DOMselectors.allBtn.addEventListener("click", function () {
    roster.Row1.filter((character) =>
      character.properties.includes(`All`)
    ).forEach((character) => {
      DOMselectors.parent.insertAdjacentHTML(
        "beforeend",
        `<div class="child"><p>${character.name}</p> <p ><img class="imgs"src= ${character.img}></p> <p> $${character.price}</p></div>`
      );
    });
  }),
};

myFunctions.makeCards();
