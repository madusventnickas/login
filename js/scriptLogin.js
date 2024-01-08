// Adicione esta função no seu scriptLogin.js

function redirectToCreateAccount() {
  // Redireciona para a página criar.html
  window.location.href = 'Criar.html';
}

// Modifique a função handleLogin para ajustar o estilo do botão ao clicar em "Criar uma conta"
function handleLogin() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var errorMessageElement = document.getElementById("error-message");

  // Limpa a mensagem de erro
  errorMessageElement.innerHTML = '';

  // Verifica se os campos estão vazios
  if (!username.trim() || !password.trim()) {
    errorMessageElement.innerHTML = 'Por favor, preencha ambos os campos.';
    return; // Impede a continuação do processo de login
  }

  // Simula uma verificação de usuário e senha (você deve implementar a lógica do servidor aqui)
  if (username === "seuUsuario" && password === "suaSenha") {
    // Redireciona para a página home
    window.location.href = 'Home.html';
    // Pode ser necessário ajustar o caminho do arquivo home.html conforme sua estrutura de pastas
  } else {
    // Exibe uma mensagem de erro se as credenciais estiverem incorretas
    errorMessageElement.innerHTML = 'Credenciais inválidas. Por favor, tente novamente.';
  }
}

function handleForgotPassword() {
  // Adicione aqui a lógica para lidar com a recuperação de senha
  var modal = document.getElementById("myModal");
  modal.style.display = "block";
}

function handleModalClose() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
}
