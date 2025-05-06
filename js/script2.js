async function getNewsData(keyword) {
  const apiKey = "5630ede2dcc84440b83c80e862ca6e99";
  const url = `https://newsapi.org/v2/everything?q=${keyword}&apiKey=${apiKey}&pageSize=5`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const json = await response.json();
    //console.log("Fetched articles:", articles);
    //return arti
    console.log(json);
    return json;
    // Assuming the articles are in a ‘articles’ array
  } catch (error) {
    console.error("Could not fetch news data:", error);
    return null;
  }
}
// Example usage:
//getNewsData(keyword);
// let articles = getNewsData(keyword)
async function renderData() {
  let keyword = "technology";
  const blogData = await getNewsData(keyword);
  const articles = blogData.articles;
  console.log(blogData.articles);
  let section = document.querySelector("#articles");
  articles.forEach((article) => {
    /** 3a create Tags */
    let ulTag = document.createElement("ul");
    /*title, author,content, description, url, urltoimage */
    let liTag = document.createElement("li");
    let h2Tag = document.createElement("h2"); // title
    let strongTag = document.createElement("strong"); //author
    let h3Tag = document.createElement("h3"); // content
    let pTag = document.createElement("p"); // description
    let imgTag = document.createElement("img"); //urltoimage
    /**  add data */
    h2Tag.innerText = article.title;
    strongTag.textContent = article.author;
    h3Tag.innerText = article.content;
    pTag.textContent = article.description;
    imgTag.setAttribute("src", article.urlToImage);
    /*appending tags*/
    liTag.append(h2Tag, strongTag, h3Tag, pTag, imgTag);
    ulTag.appendChild(liTag);
    console.log(section);
    section.appendChild(ulTag);
  });
}
renderData();