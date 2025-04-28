function adicionar() {
    let elemProduto = document.getElementById("produto").value.split(" - R$");
    let qtd = parseInt(document.getElementById('quantidade').value);
    let descProduto = elemProduto[0];
    let preco = parseInt(elemProduto[1]);
    let precoSubTotal = quantidade * preco
    console.log(preco); 
    let elemCarrinho = document.getElementById('lista-produtos');

    if (qtd > 0) {
        elemCarrinho.innerHTML += `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${qtd}x</span> ${descProduto} <span class="texto-azul">R$${precoSubTotal}</span>
        </section>`;
    
    
    }
} 