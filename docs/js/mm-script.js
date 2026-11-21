function processar(){
    let inputNum1 = document.getElementById("mm-n1");
    let inputNum2 = document.getElementById("mm-n2");
    let inputNum3 = document.getElementById("mm-n3");

    let num1 = parseInt(inputNum1.value);
    let num2 = parseInt(inputNum2.value);
    let num3 = parseInt(inputNum3.value);

    if(isNaN(num1) || isNaN(num2) || isNaN(num3)){
        alert("Informe um valor!");
        return;
    }

    let maior = Math.max(num1, num2, num3);
    let menor = Math.min(num1, num2, num3);

    document.getElementById("mm-maior").textContent = maior;
    document.getElementById("mm-menor").textContent = menor;
}   