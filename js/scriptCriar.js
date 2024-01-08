// Adicione isso ao seu scriptCriar.js

document.addEventListener("DOMContentLoaded", function () {
    // Adiciona eventos de escuta de input a cada campo
    var emailInput = document.getElementById("email");
    var usernameInput = document.getElementById("username");
    var passwordInput = document.getElementById("password");
    var confirmPasswordInput = document.getElementById("confirm-password");
    var numberInput = document.getElementById("number");
    var signupButton = document.getElementById("signup-button");
  
    var inputs = [emailInput, usernameInput, passwordInput, confirmPasswordInput, numberInput];
  
    function checkInputs() {
      // Verifica se todos os campos estão preenchidos
      var allFilled = inputs.every(function (input) {
        return input.value.trim() !== "";
      });
  
      // Habilita ou desabilita o botão com base no preenchimento dos campos
      signupButton.disabled = !allFilled;
  
      // Atualiza a cor do botão conforme o estado
      signupButton.style.backgroundColor = allFilled ? "#8c46b8" : "#ccc";
    }
  
    inputs.forEach(function (input) {
      input.addEventListener("input", checkInputs);
    });
  
    // Chama a função de verificação inicial
    checkInputs();
  
    function handleSignup() {
      var email = emailInput.value;
      var username = usernameInput.value;
      var password = passwordInput.value;
      var confirmPassword = confirmPasswordInput.value;
      var number = numberInput.value;
  
      // Verifica se todos os campos estão preenchidos
      var allFilled = inputs.every(function (input) {
        return input.value.trim() !== "";
      });
  
      // Se todos os campos estão preenchidos, navega para a página "Home.html"
      if (allFilled) {
        // Adicione aqui a lógica de redirecionamento para a página "Home.html"
        window.location.href = 'Home.html';
      } else {
        // Adicione aqui uma lógica para lidar com o caso em que nem todos os campos estão preenchidos
        console.log("Preencha todos os campos antes de criar a conta.");
      }
  
      // Adicione a lógica de validação ou envio de dados ao servidor aqui
      // Por exemplo, você pode verificar se a senha e a confirmação de senha coincidem
  
      // Se tudo estiver correto, você pode redirecionar ou realizar outras ações
      console.log("Dados de cadastro:", email, username, password, confirmPassword, number);
    }
  });
  
  