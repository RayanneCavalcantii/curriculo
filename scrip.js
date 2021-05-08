let nome = window.document.getElementById("NOME")
let email = document.querySelector('#email')
let assunto = document.querySelector("#assunto")

NOME.style.width = '70%'
email.style.width ='70%'

function validaNome () {
let txtNome = document.querySelector('#txtnome')
    if(NOME.value.length < 3 ){
        
        txtNome.innerHTML = 'nome inválido'
        txtNome.style.color = 'red'
        txtNome.style.display = "block"

    }else {
        txtNome.innerHTML = 'NOME VÁLIDO!'
        txtNome.style.color = 'green'
        txtNome.style.display = "none"
    }
}
function validaEmail(){
    let txtEmail =  document.querySelector('#txtEmail')
    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){
        txtEmail.innerHTML = 'E-mail inválido'
        txtEmail.style.color = 'red'
        txtEmail.style.display = "block"
        

    }else{
        txtEmail.innerHTML = 'E-mail válido'
        txtEmail.style.color = 'green'
        txtEmail.style.display = "none"
  

    }


}
function validaAssunto(){
    let txtAssunto =  document.querySelector('#txtAssunto')
    if(assunto.value.length >=100 ){
        txtAssunto.innerHTML = 'Texto muito grande,digite no máximo 100 caracteres'
        txtAssunto.style.color = 'red'
        txtAssunto.style.display = 'block'

    }else{
       txtAssunto.style.display = 'none'
    }

}