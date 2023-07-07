function enviar() {
    var nome = document.getElementById("nome").value;
    var sobrenome = document.getElementById("sobrenome").value;
  }


function validarCPF(cpf) {
    cpf = cpf.replace(/[^\d]+/g,'');
    if(cpf == '') return false; 
    if(cpf.length != 11) return false;
    // Validar CPF
    var soma = 0;
    var resto;
    for (var i = 1; i <= 9; i++) soma = soma + parseInt(cpf.substring(i-1, i)) * (11 - i);
    resto = (soma * 10) % 11;
    if ((resto == 10) || (resto == 11)) resto = 0;
    if (resto != parseInt(cpf.substring(9, 10))) return false;
    soma = 0;
    for (var i = 1; i <= 10; i++) soma = soma + parseInt(cpf.substring(i-1, i)) * (12 - i);
    resto = (soma * 10) % 11;
    if ((resto == 10) || (resto == 11)) resto = 0;
    if (resto != parseInt(cpf.substring(10, 11))) return false;
    return true;
  }
  
  function validar() {
    var cpf = document.getElementById("cpf").value;
    if (!validarCPF(cpf)) {
      alert("CPF inválido. Por favor, digite um CPF válido.");
      return false;
    }
    return true;
  }
  