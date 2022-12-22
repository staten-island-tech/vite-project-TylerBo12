import { DOMselectors } from "./DOMselectors.js";
import { roster } from "./array.js";
import "./DOMselectors.js";
import "../Styles/style.css";
import "../Styles/Variables.css";
import "./array.js";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles=
AOS.init();

const createFilters = {
  Floaties: function () {
    roster.Row1.filter((character) =>
      character.properties.includes(`Floaty`)
    ).forEach((character) => {
      DOMselectors.parent.insertAdjacentHTML(
        "beforeend",
        `<div class="child"><p>${character.name}</p> <p ><img class="imgs"src= ${character.img}></p> <p>$${character.price}</p></div>`
      );
    });
  },
  Projectiles: function () {
    roster.Row1.filter((character) =>
      character.properties.includes(`Projectiles`)
    ).forEach((character) => {
      DOMselectors.parent.insertAdjacentHTML(
        "beforeend",
        `<div class="child"><p>${character.name}</p> <p ><img class="imgs"src= ${character.img}></p> <p>$${character.price}</p></div>`
      );
    });
  },
  Smb: function () {
    roster.Row1.filter((character) =>
      character.series.includes(`Super Mario Bros`)
    ).forEach((character) => {
      DOMselectors.parent.insertAdjacentHTML(
        "beforeend",
        `<div class="child"><p>${character.name}</p> <p ><img class="imgs"src= ${character.img}></p> <p>$${character.price}</p></div>`
      );
    });
  },
};

const myFunctions = {
  makeCards: function () {
    roster.Row1.forEach((character) => {
      DOMselectors.parent.insertAdjacentHTML(
        "beforeend",
        `<div class="child"><p>${character.name}</p> <p ><img class="imgs"src= ${character.img}></p><p>$${character.price}</p></div> `
      );
    });
  },

  removeCards: function () {
    const cards = document.querySelectorAll(".child");
    const cardsArray = Array.from(cards);
    cardsArray.forEach((cards) => {
      cards.remove();
    });
  },
  filterSMB: DOMselectors.smbBtn.addEventListener("click", function () {
    myFunctions.removeCards();
    createFilters.Smb();
  }),
  filterProjectiles: DOMselectors.projectileBtn.addEventListener(
    "click",
    function () {
      myFunctions.removeCards();
      createFilters.Projectiles();
    }
  ),
  filterFloaties: DOMselectors.floatyBtn.addEventListener("click", function () {
    myFunctions.removeCards();
    createFilters.Floaties();
  }),

  filterAll: DOMselectors.allBtn.addEventListener("click", function () {
    myFunctions.removeCards();
    myFunctions.makeCards();
  }),
  BaccoChange: DOMselectors.colorChange.addEventListener("click", function () {
    if (document.body.classList.contains("defaultTheme")) {
      document.body.classList.add("alternateTheme");
      document.body.classList.remove("defaultTheme");
    } else {
      document.body.classList.add("defaultTheme");
      document.body.classList.remove("alternateTheme");
    }
  }),
};

myFunctions.makeCards();
