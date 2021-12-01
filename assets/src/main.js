import { vitrine } from "./vitrine.js";
const listaDeProdutos = [
    {titulo: "produto 1", descricao: "descrição do produto 1"},
    {titulo: "produto 2", descricao: "descrição do produto 2"},
    {titulo: "produto 3", descricao: "descrição do produto 3"},
    {titulo: "produto 4", descricao: "descrição do produto 4"},
]
const vitrineHTML = document.querySelector(".vitrine")
const componenteVitrine = vitrine()
const lista = componenteVitrine.modeloLista( componenteVitrine.modeloItem, listaDeProdutos )
vitrineHTML.innerHTML = lista 