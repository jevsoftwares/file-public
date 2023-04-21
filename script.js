function funcao1()
{
    alert("Eu sou um alert!");
}

// Celular
let campo_celular = document.querySelector('#campo_celular');

campo_celular.addEventListener("blur", function(e) {
   //Remove tudo o que não é dígito
   let celular = this.value.replace( /\D/g , "");

   if (celular.length==11){
    celular = celular.replace(/^(\d{2})(\d)/g,"($1) $2");
    resultado_celular = celular.replace(/(\d)(\d{4})$/,"$1-$2");
    document.getElementById('campo_celular').value = resultado_celular;
  } else {
    alert("Digite 11 números.");
  }
})
// Telefone Fixo
document.querySelector('#campo_fixo').addEventListener("blur", function(e) {
   let telefone = this.value.replace( /\D/g , "");
   if (telefone.length==10){
    telefone = telefone.replace(/^(\d{2})(\d)/g,"($1) $2");
    resultado_telefone = telefone.replace(/(\d)(\d{4})$/,"$1-$2");
    document.getElementById('campo_fixo').value = resultado_telefone;
   } else {
    alert("Digite 10 números.");
   }
})