function calcular(forma) {
    // 1. Captura os valores dos campos de entrada
    const precoProduto = parseFloat(document.getElementById('produto').value) || 0;
    const valorFrete = parseFloat(document.getElementById('frete').value) || 0;

    // 2. Calcula a base (Produto + Frete)
    let total = precoProduto + valorFrete;

    // 3. Aplica as regras de negócio baseadas na forma de pagamento
    switch (forma) {
        case 'PIX':
            total = total * 0.90; // Desconto de 10%
            break;
        case 'Dinheiro':
            total = total * 0.95; // Desconto de 5%
            break;
        case 'Cartão à vista':
            // Mantém o valor original (sem alteração)
            break;
        case 'Parcelado':
            total = total * 1.05; // Acréscimo de 5%
            break;
        default:
            alert('Forma de pagamento inválida');
            return;
    }

    // 4. Atualiza a tela com os resultados formatados em moeda brasileira (R\$)
    document.getElementById('forma').innerText = `Forma: ${forma}`;
    document.getElementById('total').innerText = `Total: R$ ${total.toFixed(2).replace('.', ',')}`;
}
