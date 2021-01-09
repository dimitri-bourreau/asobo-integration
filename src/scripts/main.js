import { fadeInBody } from "./body/fade-in-body.js";
import { listenToNavBarClicks } from "./header/listen-to-navbar-clicks.js";

window.onload = () => {
  fadeInBody(document.body);
  listenToNavBarClicks(document.getElementsByTagName("header")[0]);
};
