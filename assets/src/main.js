import { vitrine } from "./vitrine.js";
import { carrinho } from "./carrinho.js";

const listaDeProdutos = [
    {id:1, titulo: "produto 1", descricao: "descrição do produto 1"},
    {id:2, titulo: "produto 2", descricao: "descrição do produto 2"},
    {id:3, titulo: "produto 3", descricao: "descrição do produto 3"},
    {id:4, titulo: "produto 4", descricao: "descrição do produto 4"},
]

const produtosNoCarrinho = [
    {id:1, titulo: "produto 1", descricao: "descrição do produto 1"},
    {id:2, titulo: "produto 2", descricao: "descrição do produto 2"}
]

const vitrineHTML = document.querySelector(".vitrine")
const componenteVitrine = vitrine()
const lista = componenteVitrine.modeloLista( componenteVitrine.modeloItem, listaDeProdutos )
vitrineHTML.innerHTML = lista 

const appCarrinho = carrinho()
const carrinhoDeCompra = document.querySelector( ".carrinho")
const modeloDoCarrinho = appCarrinho.modeloLista(produtosNoCarrinho)
carrinhoDeCompra.innerHTML = modeloDoCarrinho