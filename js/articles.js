const ARTICLES_CONTAINER_ID = "articles-container";

export function renderArticles() {
  const articles = getArticles();

 
  articles.sort((a, b) => new Date(a.created_at) - new Date(b.created_at));

  const container = document.getElementById(ARTICLES_CONTAINER_ID);
  container.innerHTML = ""; // clear container before re-rendering
  console.log(articles);
  articles.forEach(article => {
    const articleElement = document.createElement("article");
    articleElement.className = "news-article";

    const title = document.createElement("h3");
    title.textContent = article.title;

    const author = document.createElement("p");
    author.innerHTML = `<strong>By:</strong> ${article.name}`;

    const content = document.createElement("p");
    content.textContent = article.content;

    const date = document.createElement("small");
    date.textContent = `Created at: ${new Date(article.created_at).toLocaleString()}`;

    articleElement.appendChild(title);
    articleElement.appendChild(author);
    articleElement.appendChild(content);
    articleElement.appendChild(date);

    container.appendChild(articleElement);
  });
}



export function packArticle() {
  const name = document.getElementById('name').value;
  const title = document.getElementById('title').value;
  const content = document.getElementById('content').value;
  const createdAt = new Date().toISOString();

  const article = {
    name,
    title,
    content,
    created_at: createdAt
  };

  const articles = getArticles();
  articles.push(article);
  localStorage.setItem("articles", JSON.stringify(articles));

  console.log("Article saved!");
}

  

export function getArticles() {
  const raw = localStorage.getItem("articles");
  if (!raw) {
    localStorage.setItem("articles", JSON.stringify([]));
    return [];
  }
  try {
    return JSON.parse(raw);
  } catch (e) {
    console.error("faild to read articles from localStorage:", e);
    return [];
  }
}
