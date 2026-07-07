// script.js

// 1. SELECIONAR OS ELEMENTOS DO DOM
const modal = document.getElementById('booking-modal');
const btnFecharModal = document.querySelector('.close-modal');
// Seleciona TODOS os botões que têm a classe 'open-modal-btn' ou 'btn-select'
const botoesAgendar = document.querySelectorAll('.open-modal-btn, .btn-select');

// 2. FUNÇÃO PARA ABRIR O MODAL
function abrirModal() {
    // Muda o estilo do CSS para o modal aparecer na tela
    modal.style.display = 'flex';
    // Opcional: trava o scroll do fundo do site enquanto o modal está aberto
    document.body.style.overflow = 'hidden'; 
}

// 3. FUNÇÃO PARA FECHAR O MODAL
function fecharModal() {
    modal.style.display = 'none';
    // Devolve o scroll normal para a página
    document.body.style.overflow = 'auto';
}

// 4. ATRIBUIR EVENTOS AOS BOTÕES
// Como botoesAgendar é uma lista (NodeList), usamos o forEach para aplicar a regra em cada um deles
botoesAgendar.forEach(botao => {
    botao.addEventListener('click', abrirModal);
});

// Evento para fechar quando clica no "X"
btnFecharModal.addEventListener('click', fecharModal);

// Evento extra: fechar se o usuário clicar na área escura fora da caixinha do modal
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        fecharModal();
    }
});