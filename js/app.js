let elemCarrinho = document.getElementById('lista-produtos');
let elemValorTotal = document.getElementById('valor-total');
let valorTotal = 0;

function adicionar() {
    let elemProduto = document.getElementById('produto').value.split(' - R$');
    let qtd = parseInt(document.getElementById('quantidade').value);
    let descProduto = elemProduto[0];
    let preco = parseFloat(elemProduto[1]);
    let precoSubTotal = qtd * preco;

    if (qtd > 0) {
        elemCarrinho.innerHTML += `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${qtd}x</span> ${descProduto} <span class="texto-azul">R$${precoSubTotal.toFixed(2)}</span>
        </section>`;
        
        valorTotal += precoSubTotal;
        elemValorTotal.textContent = `R$${valorTotal.toFixed(2)}`;
    }
} 

function limpar() {
    while (elemCarrinho.firstChild) {
        elemCarrinho.removeChild(elemCarrinho.firstChild);
    }
    valorTotal = 0;
    elemValorTotal.textContent = `R$${valorTotal.toFixed(2)}`;
    quantidade.value = '';
}