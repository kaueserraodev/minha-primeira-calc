let visor = document.getElementById("visor");

let historico = [];


function adicionarNumero(numero) {

    if (visor.value === "0") {

        visor.value = numero;

    } else {

        visor.value += numero;

    }

}


function adicionarOperador(operador) {

    visor.value += operador;

}


function apagar() {

    visor.value = visor.value.slice(0, -1);

    if (visor.value === "") {

        visor.value = "0";

    }

}


function limpar() {

    visor.value = "0";

}


function calcular() {

    try {

        let expressao = visor.value;

        let resultado = eval(expressao);

        visor.value = resultado;

        adicionarHistorico(expressao, resultado);

    } catch (erro) {

        visor.value = "Erro";

    }

}


function adicionarHistorico(expressao, resultado) {

    historico.push({

        conta: expressao,
        resultado: resultado

    });

    mostrarHistorico();

}


function mostrarHistorico() {

    let lista = document.getElementById("listaHistorico");

    lista.innerHTML = "";

    historico.forEach(function(item) {

        let li = document.createElement("li");

        li.textContent = item.conta + " = " + item.resultado;

        lista.appendChild(li);

    });

}


function limparHistorico() {

    historico = [];

    mostrarHistorico();

}
