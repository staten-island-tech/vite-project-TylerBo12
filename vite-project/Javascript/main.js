import "../Styles/style.css";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import "./functions.js";
AOS.init();
import "./array.js";

const DOMselectors = {
  colorChange: document.querySelector(".btn1"),
  allBtn: document.querySelector(".btn2"),
  floatyBtn: document.querySelector(".btn3"),
  projectileBtn: document.querySelector(".btn4"),
  smbBtn: document.querySelector(".btn5"),
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

export { DOMselectors };
