

function somar(){
//pegando dados a partir do id dos inputs html//
    let pegar1 = Number(document.getElementById("somajava").value);
    let pegar2 = Number(document.getElementById("soma2java").value);
    //Realizando o cálculo e adicionando-o a div selecionada//
    document.getElementById("resultsoma").innerHTML = "O resultado é: " + (pegar1 + pegar2);
}

function subtrair() {
    //Pegando dados inseridos nos inputs de maneira resumida criando um array//
    let pegar3 = [parseInt(document.getElementById('subtracaojava').value), parseInt(document.getElementById('subtracao2java').value)];    
    document.getElementById("resultsubtracao").innerHTML = "O resultado é: " + (pegar3[0] - pegar3[1]);
}

function divisao() {
    let pegar4 = [parseInt(document.getElementById("divisaojava").value), parseInt(document.getElementById("divisao2java").value)];
    document.getElementById("resultdivisao").innerHTML ="O resultado é: " + (pegar4[0] / pegar4[1]);
}






/*
document.addEventListener('submit', function(evento) {
    evento.preventDefault();

    let meuFormulario = document.getElementById('form1');

    let dados = new FormData(meuFormulario);

    let objeto = {};

    let valores = 0;

    for(let key of dados.keys()) {
        objeto[key] = dados.get(key);
        valores += parseInt(dados.get(key));
    }

    console.log(valores);
    console.log(objeto);

});
*/