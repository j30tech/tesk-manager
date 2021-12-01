export const vitrine = () => {

    const modeloLista = (modelo, listaProdutos) => {
       return /*html*/`
        <ul>
        ${
              listaProdutos.map((produto)=>{
                  return modelo(produto)
              }).join('')
        }
        </ul>
       `
    }

    const modeloItem = (produto) => {
        return /*html*/`
            <li>
                <div class="card">
                    <h2>
                       ${produto.titulo}
                    </h2>
                    <p>${produto.descricao}</p>
                    <button>Incluir no Carrinho</button>
                </div>
            </li>
        `
    }

    return {
        modeloLista,
        modeloItem
    }
}