
function testa_form(){
   var aluno = document.forms ["formalunos"]["aluno"].value;

   var cpf = document.forms ["formalunos"]["cpf"].value;

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


   }





