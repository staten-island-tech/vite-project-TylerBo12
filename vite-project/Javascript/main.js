import "../Styles/style.css";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();
import "../Javascript/menu.js";
import javascriptLogo from "../JavaScript/javascript.svg";
import { setupCounter } from "../JavaScript/counter.js";

setupCounter(document.querySelector("#counter"));
