class CardNews extends HTMLElements {
    contructor() {
        super ();

        const shadow = this.attachShadow ({mode: "open"})
        shadow.appenChild (this.build());
        shadow.appenChild (this.style());        
    }
    build() {
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card");
        
        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class", "card-left");

        const author = document.createComment ("span");
        author.textContent = "Vagas de emprego";

        const authorInfo = document.createElement ("span");
        const authorImg = documento.createElement ("img");
        authorImg.src = "assets/Mutley.png"
        authorImh.alt = "Foto de perfil";
        authorInfo.appendChild (authorImg);
        authorInfo.appendChild (document.textContent("Mutley Vigatista"));

        const linkTitle = document.createElement("h1");
        linkTitle.textContent = "Dick Vigarista contrata Devs"

        const newContent = document.createElement ("p");
        newContent.textContent = 'Procura-se Devs que saibam trabalhar sob pressão, para trabalhar no projeto "Pegue o Pombo". Ambiente acolhedor e amigável, dando ênfase no crescimento pessoal.'
    }   
}

customElements.define('card-news', CardNews)