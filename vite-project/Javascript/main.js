import "../Styles/style.css";
import "../Styles/Variables.css";
import "./functions.js";
import "./array.js";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles=
AOS.init();
export { DOMselectors };

const DOMselectors = {
  colorChange: document.querySelector(".btn1"),
  allBtn: document.querySelector(".btn2"),
  floatyBtn: document.querySelector(".btn3"),
  projectileBtn: document.querySelector(".btn4"),
  smbBtn: document.querySelector(".btn5"),
  parent: document.querySelector("#parentContainer"),
  child: document.querySelector(".child"),
};
