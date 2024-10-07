// Gera um número aleatório entre 1 e 10
const randomNumber = Math.floor(Math.random() * 10) + 1;

// Limita o número de tentativas
let tentativas = 3;

document.getElementById('submit').addEventListener('click', function() {
  const guess = Number(document.getElementById('guess').value);
  const resultMessage = document.getElementById('resultMessage');
  const tentativasMensagem = document.getElementById('tentativasMensagem');

  // Verifica se ainda há tentativas
  if (tentativas > 0) {
    // Verifica se o palpite está correto, alto ou baixo
    if (guess === randomNumber) {
      resultMessage.textContent = "Parabéns! Você acertou!";
      resultMessage.style.color = "green";

      disableInput(); // Desabilita o jogo após acertar
    } else if (guess < randomNumber) {
      resultMessage.textContent = "Tente um número maior!";
      resultMessage.style.color =  "darkorange";


    } else {
      resultMessage.textContent = "Tente um número menor!";
      resultMessage.style.color =  "darkorange";

    }
    
    // Diminui o número de tentativas restantes
    tentativas--;
    tentativasMensagem.textContent = `Tentativas restantes: ${tentativas}`;
  }

  // Caso o jogador tenha esgotado todas as tentativas
  if (tentativas === 0 && guess !== randomNumber) {
    resultMessage.textContent = `Game Over! O número era ${randomNumber}`;
    resultMessage.style.color = "red";
    disableInput(); // Desabilita o jogo após acabar as tentativas
  }
});

// Função para desabilitar o input e o botão após o término do jogo
function disableInput() {
  document.getElementById('guess').disabled = true;
  document.getElementById('submit').disabled = true;
}
