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
  if (document.body.classList.contains("btn1")) {
    document.body.classList.add("btn2");
    document.body.classList.remove("btn1");
  } else (document.body.classList.contains("btn2")){
    document.body.classList.add("btn1");
    document.body.classList.remove("btn2");
  };
});
