const { createElement } = require("react");

class CardNews extends HTMLElement {
    contructor() {
        super();

        const shadow = this.attachShadow({ mode: "open" })
        shadow.appendChild(this.build());
        shadow.appendChild(this.style());
    }
    build() {
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card");

        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class", "card-left");

        const author = document.createComment("span");
        author.textContent = "Vagas de emprego";

        const authorInfo = document.createElement("span");
        const authorImg = documento.createElement("img");
        authorImg.src = "assets/Mutley.png"
        authorImh.alt = "Foto de perfil";
        authorInfo.appendChild(authorImg);
        authorInfo.appendChild(document.textContent("Mutley Vigatista"));

        const linkTitle = document.createElement("h1");
        linkTitle.textContent = "Dick Vigarista contrata Devs"

        const newsContent = document.createElement("p");
        newsContent.textContent = 'Procura-se Devs que saibam trabalhar sob pressão, para trabalhar no projeto "Pegue o Pombo". Ambiente acolhedor e amigável, dando ênfase no crescimento pessoal.'


        cardLeft.appendChild(author);
        cardLeft.appendChild(document, createElement("br"));
        cardLeft.appendChild(authorInfo);
        cardLeft.appendChild(linkTitle);
        cardLeft.appendChild(newsContent);

        const cardRight = document.createElement("div");
        cardRight.setAttribute("class", "card-right");

        const newsImage = document.createElement("img");
        newsImage.src = "../../assets/Avião.png"
        newsImage.alt = "Imagem da notícia"

        cardRight.appendChild(newsImage);

        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRigh);



    }

    style() {
        const style = document.createElement("style");
        style.textContent = `.card{
        .card-left img {
    width: 100px;
    border-radius: 100%;
    object-fit: cover;
}

.card {
    width: 900px;
    display: flex;
    flex-direction: row;
    margin: 0 auto; 

.card-left {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 10px;
}

.card-left span {
    font-weight: 100;
    color: rgb(126, 35, 48);
}

.card-left h1 {
    margin-top: 15px;
    font-size: 25px;
}

.card-left p {
    color: rgb(97, 41, 149);
}

.card-right img {
    max-width: 100%;
    display: block;
    margin: 0 auto;
}

.botoes-container {
    text-align: center;
    margin-top: 20px;
}

.botao {
    background-color: #7a1f1f;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-weight: bold;
    transition: 0.3s;
    text-decoration: none;
    display: inline-block;
    margin: 0 10px;
}

.rodape {
    position: fixed;
    bottom: 0;
    width: 100%; 
    text-align: center;
    padding: 10px 0;
}
    }`;
        return style;
    }
}

customElement.define('card-news', CardNews);