
function testa_form(){
   var aluno = document.forms ["formalunos"]["aluno"].value;

   var cpf = document.forms ["formalunos"]["cpf"].value;
   var endereco = document.forms["formalunos"]["endereco"].value;
   var cep = document.forms["formalunos"]["cep"].value;
   var telefone = document.forms["formalunos"]["telefone"].value;


   //verifica se o campo "aluno" esta vazio

   if (aluno == ""){
         alert("Nome do aluno precisa ser informado");

         document.forms["formalunos"]["aluno"].focus();
        return false;}

        //verifica se o campo "cpf" esta vazio

   if (cpf == ""){
            alert("cpf do aluno precisa ser informado");

            document.forms["formalunos"]["cpf"].focus();

           return false;}

     if (endereco == ""){
            alert("endereco do aluno precisa ser informado");

            document.forms["formalunos"]["endereco"].focus();

           return false;}
          
     if (cep == ""){
            alert("cep do aluno precisa ser informado");

            document.forms["formalunos"]["cep"].focus();

           return false;}
     
      if (telefone ==""){
            alert("telefone obrigatorio");

            document.forms["formalunos"]["telefone"].focus();     
      }

     

   }

  
   function mascara(input) {
      var v = input.value;
  
      // Remover o último caractere se não for número
      if (isNaN(v[v.length - 1])) { 
          input.value = v.substring(0, v.length - 1);
          return;
      }
  
      // Obter o tipo de máscara
      var tipo = input.getAttribute("data-mask");
  
      if (tipo === "cpf") {
          // Máscara de CPF (123.456.789-00)
          input.setAttribute("maxlength", "14");
          if (v.length === 3 || v.length === 7) input.value += ".";
          if (v.length === 11) input.value += "-";
      } else if (tipo === "cep") {
          // Máscara de CEP (12345-678)
          input.setAttribute("maxlength", "9");
          if (v.length === 5) input.value += "-";
      } else if (tipo === "telefone") {
          // Máscara de telefone (Ex.: (12) 34567-8901)
          input.setAttribute("maxlength", "15");
          if (v.length === 1) input.value = "(" + v;
          if (v.length === 3) input.value += ") ";
          if (v.length === 10) input.value += "-";
      }
  }
  