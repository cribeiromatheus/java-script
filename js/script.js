

function somar(){
//pegando dados a partir do id dos inputs html//
    let pegar1 = parseFloat(document.getElementById("somajava").value);
    let pegar2 = parseFloat(document.getElementById("soma2java").value);
    //Realizando o cálculo e adicionando-o a div selecionada//
    document.getElementById("resultsoma").innerHTML = "<span style='color: black; font-weight: bold; background-color: rgb(255, 217, 0);'>O resultado é: " + (pegar1 + pegar2) + "</span><hr>";
}

function subtrair() {
    //Pegando dados inseridos nos inputs de maneira resumida criando um array//
    let pegar3 = [parseFloat(document.getElementById('subtracaojava').value), parseFloat(document.getElementById('subtracao2java').value)];    
    document.getElementById("resultsubtracao").innerHTML = "<span style='color: black; font-weight: bold; background-color: rgb(255, 217, 0);'>O resultado é: " + (pegar3[0] - pegar3[1]) + "</span><hr>";
}

function divisao() {
    let pegar4 = [parseFloat(document.getElementById("divisaojava").value), parseFloat(document.getElementById("divisao2java").value)];
    document.getElementById("resultdivisao").innerHTML ="<span style='color: black; font-weight: bold; background-color: rgb(255, 217, 0);'>O resultado é: " + (pegar4[0] / pegar4[1]) + "</span><hr>";
}

function multiplicacao() {
    let pegar5 = [parseFloat(document.getElementById("multiplicacaojava").value), parseFloat(document.getElementById("multiplicacao2java").value)];
    document.getElementById("resultmultiplicacao").innerHTML = "<span style='color: black; font-weight: bold; background-color: rgb(255, 217, 0);'>O resultado é: " + (pegar5[0] * pegar5[1]) + "</span><hr>";
}

function restodivisao() {
    let pegar6 = [parseFloat(document.getElementById("restodivisaojava").value), parseFloat(document.getElementById("restodivisao2java").value)];
    document.getElementById("resultrestodivisao").innerHTML = "<span style='color: black; font-weight: bold; background-color: rgb(255, 217, 0);'>O resultado é: " + (pegar6[0] % pegar6[1]) + "</span><hr>";
}

function menorqr() {
    let pegar7 = [parseFloat(document.getElementById("menorqjava").value), parseFloat(document.getElementById("menorq2java").value)];
    document.getElementById("resultmenorq").innerHTML = "<span style='color: black; font-weight: bold; background-color: rgb(255, 217, 0);'>" + (pegar7[0] < pegar7[1] ? pegar7[0] + " É menor do que: " + pegar7[1] + " resultado é (verdadeiro)" : pegar7[0] + " Não é menor do que: " + pegar7[1]+ " resultado é (falso)")  + "</span> <hr>";
}

function maiorqr() {
    let pegar8 = [parseFloat(document.getElementById("maiorqjava").value), parseFloat(document.getElementById("maiorq2java").value)];
    document.getElementById("resultmaiorq").innerHTML = "<span style='color: black; font-weight: bold; background-color: rgb(255, 217, 0);'>" + (pegar8[0] > pegar8[1] ? pegar8[0] + " É maior do que: " + pegar8[1] + " resultado é (verdadeiro)" : pegar8[0] + " Não é maior do que: " + pegar8[1]+ " resultado é (falso)")  + "</span> <hr>";
}

function igual() {
    let pegar9 = [document.getElementById("igualjava").value, document.getElementById("igual2java").value];
    document.getElementById("resultigual").innerHTML = "<span style='color: black; font-weight: bold; background-color: rgb(255, 217, 0);'>" + (pegar9[0] == pegar9[1] ? pegar9[0] + " É igual a: " + pegar9[1] + " resultado é (verdadeiro)" : pegar9[0] + " É diferente de: " + pegar9[1]+ " resultado é (falso)")  + "</span> <hr>";
}

function raizquadrada() {
    let pegar10 = parseInt(document.getElementById("raizquadrada2").value);
    document.getElementById("resultraizquadrada").innerHTML = "<span style='color: black; font-weight: bold; background-color: rgb(255, 217, 0);'> O resultado é: " + Math.sqrt(pegar10) + "</span> <hr>";
}

function porcentagem() {
    let pegar11 = [parseInt(document.getElementById("porcentagemjava").value), parseInt(document.getElementById("porcentagem2java").value)];
    document.getElementById("resultporcentagem").innerHTML = "<span style='color: black; font-weight: bold; background-color: rgb(255, 217, 0);'>" + pegar11[1] + "% de " + pegar11[0] + " é: " + (pegar11[1] / 100) * pegar11[0] + "</span> <hr>";
}

function calcularMedia(notas) {
    let calculo = 0;
    let media;
    for(let i = 0; i < notas.length; i++) {
        calculo += notas[i];   
    }

    media = calculo / notas.length;
    let resultado;
    if(media >= 7){
        resultado = "Aprovado";
    }else if(media <=6.9 && media >=3){
       resultado = "Recuperação";
    }else {
       resultado = "Reprovado";
    }
    return "Média: " + media + "<br>" + resultado;

}



function calcula() {
    let notas= 0;
    let pegar12 = [parseFloat(document.getElementById("n1").value), parseFloat(document.getElementById("n2").value), parseFloat(document.getElementById("n3").value), parseFloat(document.getElementById("n4").value)];
    notas = pegar12;

    document.getElementById("resultmedia").innerHTML = calcularMedia(notas);
    
}
