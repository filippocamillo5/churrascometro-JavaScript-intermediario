let inputadultos = document.getElementById("adultos")
let inputcriancas = document.getElementById("criancas")
let inputduracao = document.getElementById("duracao")

let resultado = document.getElementById("resultado")

function calcular(){

    let adultos = inputadultos.value
    let criancas = inputcriancas.value
    let duracao = inputduracao.value

    let qtdTotalCarne = carnePP(duracao) * adultos +(carnePP(duracao) * criancas)

    let qtdTotalCerveja = cervejaPP(duracao) * adultos 
    
    let qtdTotalBebida = bebidaPP(duracao) * adultos +(carnePP(duracao) * criancas)

    resultado.innerHTML = `<p>${qtdTotalCarne/1000} Kg de carne</p>`
    resultado.innerHTML += `<p>${Math.ceil(qtdTotalCerveja/355)} Latas de cerveja</p>`
    resultado.innerHTML += `<p>${Math.ceil(qtdTotalBebida)/1000} Litros de refrigerante</p>`
}



function carnePP(duracao) {
    if(duracao >= 6) {
        return 650
    } else {
        return 400
    }
}

function cervejaPP(duracao) {
    if(duracao >= 6) {
        return 2000
    } else {
        return 1200
    }
}

function bebidaPP(duracao) {
    if(duracao >= 6) {
        return 1500
    } else {
        return 1000
    }
}