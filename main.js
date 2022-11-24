const articles = [
  {
    id: 1,
    title: "Umar na śmierć",
    body: "Umar na śmierć poniewaz udławiił się mydłem",
    likesCount: 0,
  },
  {
    id: 2,
    title: "2",
    body: "dwa",
    likesCount: 0,
  },
  {
    id: 3,
    title: "3",
    body: "trzy",
    likesCount: 0,
  },
  {
    id: 4,
    title: "4",
    body: "cztery",
    likesCount: 0,
  },
  {
    id: 5,
    title: "5",
    body: "piec",
    likesCount: 0,
  },
];

function render() {
  const rootElement = document.querySelector("#root");
  rootElement.innerHTML = "";

  const addPostsFromOutside = document.createElement("input");
  addPostsFromOutside.setAttribute("type", "button");
  addPostsFromOutside.setAttribute("value", "Dodaj posty");

  addPostsFromOutside.onclick = async () => {
    const result = await fetch(
      "https://jsonplaceholder.typicode.com/posts?userId=1"
    );
    const data = await result.json();

    data.forEach((el) => {
      articles.push({
        id: articles.length + 1,
        title: el.title,
        body: el.body,
        likesCount: 0,
      });
      render();
    });
  };

  const numberOfPosts = document.createElement("div");
  numberOfPosts.innerText =
    "Ilość postów na stronie wynosi: " + articles.length;

  const addArticleTitle = document.createElement("input");
  addArticleTitle.setAttribute("type", "text");
  addArticleTitle.setAttribute("id", "articleTitle-input");

  const addArticleBody = document.createElement("input");
  addArticleBody.setAttribute("type", "text");
  addArticleBody.setAttribute("id", "articleBody-input");

  const addArticleButton = document.createElement("input");
  addArticleButton.setAttribute("type", "button");
  addArticleButton.setAttribute("value", "Dodaj");

  addArticleButton.onclick = () => {
    const newArticleTitle = addArticleTitle.value;
    const newArticleBody = addArticleBody.value;
    articles.push({
      id: articles.length + 1,
      title: newArticleTitle,
      body: newArticleBody,
      likesCount: 0,
    });
    render();
  };

  const tableElement = document.createElement("table");
  tableElement.setAttribute("class", "table table-bordered table-primary");
  const tbElement = document.createElement("tbody");
  const trElement = document.createElement("tr");
  const th1Element = document.createElement("th");
  const th2Element = document.createElement("th");
  const th3Element = document.createElement("th");
  const th4Element = document.createElement("th");
  th1Element.textContent = "id";
  th2Element.textContent = "title";
  th3Element.textContent = "body";
  th4Element.textContent = "likesCount";
  tbElement.appendChild(trElement);
  trElement.appendChild(th1Element);
  trElement.appendChild(th2Element);
  trElement.appendChild(th3Element);
  trElement.appendChild(th4Element);
  tableElement.appendChild(trElement);

  articles.forEach((article, index) => {
    const tbArticleElement = document.createElement("tbody");
    const trArticleElement = document.createElement("tr");
    const tdIdArticleElement = document.createElement("td");
    const tdTitleArticleElement = document.createElement("td");
    const tdBodyArticleElement = document.createElement("td");
    const tdLikesCountArticleElement = document.createElement("td");

    const tdDeleteElement = document.createElement("input");
    tdDeleteElement.setAttribute("type", "button");
    tdDeleteElement.setAttribute("value", "Usun");
    tdDeleteElement.setAttribute("id", "delete");

    tdDeleteElement.onclick = () => {
      articles.splice(index, 1);
      render();
    };

    tdIdArticleElement.textContent = article.id;
    tdTitleArticleElement.textContent = article.title;
    tdBodyArticleElement.textContent = article.body;
    tdLikesCountArticleElement.textContent = article.likesCount;

    const tdPlusLikesCountArticleElement = document.createElement("input");
    tdPlusLikesCountArticleElement.setAttribute("type", "button");
    tdPlusLikesCountArticleElement.setAttribute("value", "Plus");
    const tdMinusLikesCountArticleElement = document.createElement("input");
    tdMinusLikesCountArticleElement.setAttribute("type", "button");
    tdMinusLikesCountArticleElement.setAttribute("value", "Minus");

    tdPlusLikesCountArticleElement.onclick = () => {
      article.likesCount++;
      render();
      alert("Zalajkowales");
    };

    tdMinusLikesCountArticleElement.onclick = () => {
      article.likesCount--;
      render();
      alert("Odlajkowales");
    };

    trArticleElement.appendChild(tdIdArticleElement);
    trArticleElement.appendChild(tdTitleArticleElement);
    trArticleElement.appendChild(tdBodyArticleElement);
    trArticleElement.appendChild(tdLikesCountArticleElement);
    trArticleElement.appendChild(tdPlusLikesCountArticleElement);
    trArticleElement.appendChild(tdMinusLikesCountArticleElement);
    trArticleElement.appendChild(tdDeleteElement);
    tbArticleElement.appendChild(trArticleElement);
    tableElement.appendChild(tbArticleElement);
  });

  rootElement.appendChild(addArticleTitle);
  rootElement.appendChild(addArticleBody);
  rootElement.appendChild(addArticleButton);
  rootElement.appendChild(addPostsFromOutside);
  rootElement.appendChild(numberOfPosts);
  rootElement.appendChild(tableElement);
}

render();
