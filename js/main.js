import { packArticle } from "./articles.js";
import { renderArticles } from "./articles.js";
import { getArticles } from "./articles.js";


renderArticles();

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  packArticle();
  renderArticles();
  alert("Thank you for contributing!");
  form.reset();
  // testing area
  renderArticles();
});