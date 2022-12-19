import { DOMselectors } from "./main";
import { roster } from "./array";

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
  filterSMB: DOMselectors.smbBtn.addEventListener("click", function () {
    roster.Row1.filter((character) =>
      character.series.includes(`Super Mario Bros`)
    ).forEach((character) => {
      DOMselectors.parent.insertAdjacentHTML(
        "beforeend",
        `<div class="child"><p>${character.name}</p> <p ><img class="imgs"src= ${character.img}></p> <p>$${character.price}</p></div>`
      );
    });
  }),
  filterProjectiles: DOMselectors.projectileBtn.addEventListener(
    "click",
    function () {
      roster.Row1.filter((character) =>
        character.properties.includes(`Projectiles`)
      ).forEach((character) => {
        DOMselectors.parent.insertAdjacentHTML(
          "beforeend",
          `<div class="child"><p>${character.name}</p> <p ><img class="imgs"src= ${character.img}></p> <p>$${character.price}</p></div>`
        );
      });
    }
  ),
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
    const cards = document.querySelectorAll(".child");
    const cardsArray = Array.from(cards);
    cardsArray.forEach((cards) => {
      cards.remove();
    });
  }),
};

myFunctions.makeCards();
