class Ator {
    constructor(id, nome) {
        this.nome = nome;
        this.id = id;
    }
}

class Diretor {
    constructor(id, nome) {
        this.nome = nome;
        this.id = id;
    }
}

class Filme {
    constructor(id, titulo, ano, genero, duracao, cartaz, sinopse, direcao, elenco, classificacao, avaliacao) {
        this.id = id;
        this.ano = ano;
        this.genero = genero;
        this.titulo = titulo;
        this.duracao = duracao;
        this.sinopse = sinopse;
        this.cartaz = cartaz;
        this.direcao = direcao;
        this.elenco = elenco;
        this.classificacao - classificacao;
        this.avaliacao = avaliacao;
    }
    setBtnDetalhes = () => {
        this.btnDetalhes = document.createElement('button');
        this.btnDetalhes.appendChild(document.createTextNode("Detalhes"));
        this.btnDetalhes.setAttribute("id", this.id);
        this.btnDetalhes.setAttribute("class", "btnDetalhesFilme");
    }
    getBtnDetalhes = () => {
        return this.btnDetalhes;
    }
    getCard = /*async*/ () => {
        let card = document.createElement("div");
        card.setAttribute("class", "card");
        let imgCartaz = document.createElement("img");
        imgCartaz.setAttribute("class", "card-img-topz");
        imgCartaz.setAttribute("src", this.cartaz);
        let cardBody = document.createElement("div");
        cardBody.setAttribute("class", "card-title");
        let hCardTitle = document.createElement("h5");
        hCardTitle.setAttribute("class", "card-title");
        let divDetalhes = document.createElement("div");
        divDetalhes.setAttribute("style", "display:flex; justify-content:space-around;");
        let divGenero = document.createElement("div");
        divGenero.setAttribute("style", "flex-grow:1;");
        let divAnoProducao = document.createElement("div");
        divAnoProducao.setAttribute("style", "flex-grow:1;");
        let divClassificacao = document.createElement("div");
        divClassificacao.setAttribute("style", "flex-grow:1;");
        hCardTitle.appendChild(document.createTextNode(this.titulo));
        divGenero.appendChild(document.createTextNode(this.genero));
        divAnoProducao.appendChild(document.createTextNode(this.ano));
        divClassificacao.appendChild(document.createTextNode(this.classificacao));
        divDetalhes.appendChild(divGenero);
        divDetalhes.appendChild(divAnoProducao);
        divDetalhes.appendChild(divClassificacao);
        card.appendChild(imgCartaz);
        card.appendChild(cardBody);
        cardBody.appendChild(hCardTitle);
        cardBody.appendChild(divDetalhes);

        this.setBtnDetalhes();
        cardBody.appendChild(this.getBtnDetalhes());

        return card;
        getDetalhesFilme = () => {
            return this.getDetalhesFilme
        }
    }
}
.then((resp) => {
    console.log(resp);
    let filme = new Filme(
        resp.imdbID,
        resp.Title,
        resp.Year,
        resp.Genre.split(","),
        resp.Runtime,
        resp.Poster,
        resp.plot,
        resp.Director,
        resp.Actors.split(","),
        resp.Awards,
        resp.imdbRating
    )
    console.log(filme);
}