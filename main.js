const form = document.getElementById('numberForm');
const mensagem = document.getElementById('mensagem');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário padrão

    const campoA = Number(document.getElementById('campoA').value);
    const campoB = Number(document.getElementById('campoB').value);

    if (campoB > campoA) {
        mensagem.textContent = 'Formulário válido! Campo B é maior que Campo A.';
        mensagem.className = 'success';
    } else {
        mensagem.textContent = 'Formulário inválido! Campo B deve ser maior que Campo A.';
        mensagem.className = 'error';
    }
});
