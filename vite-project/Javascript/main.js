import "../Styles/style.css";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { roster } from "../Javascript/menu.js";
AOS.init();
import "../Javascript/menu.js";

const DOMselectors = {
  buttons: document.querySelector(".btn1"),
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

const myFunctions = {
  inject: function () {
    roster.Row1.filter((character) =>
      character.series.includes("Super Mario Bros").forEach((character) => {
        console.log(character.name);
      })
    );
  },
};

myFunctions.inject();
