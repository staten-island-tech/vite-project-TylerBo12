import "../Styles/style.css";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();
import "../Javascript/menu.js";
/* import javascriptLogo from "../JavaScript/javascript.svg";
import { setupCounter } from "../JavaScript/counter.js";
 
setupCounter(document.querySelector("#counter"));*/

const DOMselectors = {
  buttons: document.querySelector(".btn1"),
};

DOMselectors.buttons.addEventListener(`click`, function () {
  if (document.body.classList.contains("storeFront")) {
    document.body.classList.add("light-Blue");
    document.body.classList.remove("storeFront");
  } else {
    document.body.classList.contains("light-Blue");
    document.body.classList.add("storeFront");
    document.body.classList.remove("light-Blue");
  }
});
