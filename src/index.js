import jsLogo from "@/images/js-logo.svg";
import webpackLogo from "@/images/webpack-logo.svg";

//Test import of styles. You can import Sass here if you use
import "@/styles/style.css";

// Heading
const heading = document.createElement("h2");
heading.innerHTML = "Vanilla JS Webpack Boilerplate";

const description = document.createElement("p");
description.innerHTML =
  "A VanillaJS Boilerplate configured using Webpack, Babel, PostCSS. It supports Sass also";

// Logo element
const logoSection = document.createElement("div");

const webPackLogo = document.createElement("img");
webPackLogo.src = webpackLogo;
webPackLogo.classList.add("logo");

const javascriptLogo = document.createElement("img");
javascriptLogo.src = jsLogo;
javascriptLogo.classList.add("logo");

logoSection.append(webPackLogo, javascriptLogo);
logoSection.classList.add("logo-section");

const app = document.querySelector("#root");
app.append(heading, description, logoSection);
