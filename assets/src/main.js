function  mostraNome (nome) {
    console.log(`meu nome é: ${nome}`)
}

const item = ""
const botao = document.querySelector("button")
botao.addEventListener('click', function(event) {
    const campoDeTexto = document.querySelector('input')
    const lista = document.querySelector('ul')
    const modelo = `<li>${campoDeTexto.value}</li>`
    lista.insertAdjacentHTML('beforeend', modelo)
 })