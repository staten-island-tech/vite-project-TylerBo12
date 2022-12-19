import { DOMselectors } from "./main";
import { roster } from "./array";

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
    roster.Row1.filter((character) =>
      character.series.includes(`Super Mario Bros`)
    ).forEach((character) => {
      myFunctions.removeCards();
      createFilters.Smb();
    });
  }),
  filterProjectiles: DOMselectors.projectileBtn.addEventListener(
    "click",
    function () {
      roster.Row1.filter((character) =>
        character.properties.includes(`Projectiles`)
      ).forEach((character) => {
        myFunctions.removeCards();
        createFilters.Projectiles();
      });
    }
  ),
  filterFloaties: DOMselectors.floatyBtn.addEventListener("click", function () {
    roster.Row1.filter((character) =>
      character.properties.includes(`Floaty`)
    ).forEach((character) => {
      myFunctions.removeCards();
      createFilters.Floaties();
    });
  }),

  filterAll: DOMselectors.allBtn.addEventListener("click", function () {
    roster.Row1.filter((character) =>
      character.properties.includes(`All`)
    ).forEach((character) => {
      myFunctions.removeCards();
      myFunctions.makeCards();
    });
  }),
};

myFunctions.makeCards();
