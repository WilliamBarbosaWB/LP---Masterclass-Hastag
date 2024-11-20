

//const myButton = document.querySelectorAll("button")[0].addEventListener////('click', function () {
    //document.body.classList.toggle("popup--aberto");
//})


//Código para adicionar a class de chamar o popup aberto quando os botões forem clicados. 

document.querySelectorAll("button").forEach(function(botao){
    botao.addEventListener("click", function(){
        document.body.classList.toggle("popup--aberto")
    })
})