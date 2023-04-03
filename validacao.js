
// script de validcao

window.onload = function(){
    console.log("pagina carregada..");



    function validarFormulario(){

        let erro = 0;
        if( document.getElementById("nome").value.length == 0){
             console.log("campo nome nao preenchido");   
             erro++;
        }

        
        if( document.getElementById("email").value.length == 0){            
            console.log("campo email nao preenchido") ;
            erro++;  
        }

        if( document.getElementById("comentario").value.length == 0){            
            console.log("campo comentario nao preenchido") ;
            erro++;  
        }


       if(erro > 0){
            alert("Por favor, preencha os campos obrigatórios!!!");
       } else{
            alert("Recebemos seu contato! Aguarde um retorno por e-mail.");
       }       
        
    }


    // vincular ao clicar no botao, funcao validar
    document.getElementById("enviar").onclick = function(){
            validarFormulario();
    }



}