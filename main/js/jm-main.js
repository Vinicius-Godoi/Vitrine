function iniciar()
{
    document.getElementById("jm-b1").style = "display:none;";
    let cont = 1;

    let ind = setInterval(()=>{

        if(cont > 7)
        {
            clearInterval(ind);
            document.getElementById("jm-i1").src = "img/jogo_memoria/default.png";
            document.getElementById("jm-d1").style = "display:inline-block";
            return;
        }
        document.getElementById("jm-i1").src = "img/jogo_memoria/" + cont + ".png";
        cont++;
    },1000);
}
function verificar()
{
    document.getElementById("jm-b2").style = "display:none";
    let acertos = 0;
    let radioSelecionadoI1 = document.querySelector('input[name="f1"]:checked');
        
    if(radioSelecionadoI1 && 
        radioSelecionadoI1.id == "jm-f1")
    {
        acertos++;
    }
    let radioSelecionadoI2 = document.querySelector('input[name="f2"]:checked');
        
    if(radioSelecionadoI2 && 
        radioSelecionadoI2.id == "jm-f4")
    {
        acertos++;
    }
    let radioSelecionadoI3 = document.querySelector('input[name="f3"]:checked');
        
    if(radioSelecionadoI3 && 
        radioSelecionadoI3.id == "jm-f8")
    {
        acertos++;
    }
    let radioSelecionadoI4 = document.querySelector('input[name="f4"]:checked');
        
    if(radioSelecionadoI4 && 
        radioSelecionadoI4.id == "jm-f11")
    {
        acertos++;
    }
    let radioSelecionadoI5 = document.querySelector('input[name="f5"]:checked');
        
    if(radioSelecionadoI5 && 
        radioSelecionadoI5.id == "jm-f14")
    {
        acertos++;
    }
    let radioSelecionadoI6 = document.querySelector('input[name="f6"]:checked');
        
    if(radioSelecionadoI6 && 
        radioSelecionadoI6.id == "jm-f18")
    {
        acertos++;
    }
    let radioSelecionadoI7 = document.querySelector('input[name="f7"]:checked');
        
    if(radioSelecionadoI7 && 
        radioSelecionadoI7.id == "jm-f19")
    {
        acertos++;
    }
    if(acertos > 1)
    {
        document.getElementById("jm-acertos").innerHTML = `Você acertou ${acertos} imagens`;
    }
    else
    {
        document.getElementById("jm-acertos").innerHTML = `Você acertou ${acertos} imagem`;
    }
}