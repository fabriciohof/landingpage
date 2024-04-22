$(document).ready(function() {
    // Adiciona um evento de input ao campo de busca
    $('#searchInput').on('input', function() {
        // Obtém o termo de busca e converte para minúsculas
        var termoBusca = $(this).val().trim().toLowerCase();

        // Itera sobre cada produto
        $('.produto').each(function() {
            // Obtém o nome do produto e converte para minúsculas
            var nomeProduto = $(this).find('h3').text().toLowerCase();

            // Verifica se o nome do produto contém o termo de busca
            if (nomeProduto.includes(termoBusca)) {
                $(this).show(); // Exibe o produto
            } else {
                $(this).hide(); // Oculta o produto
            }
        });
    });
});