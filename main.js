/*INPUTS*/
let data = document.querySelectorAll('.inputs'); /*0 - DIA, 1 - MES, 2 - ANO*/
/*ERROS*/
const erroFalta = document.querySelectorAll('.input__erro_falta'); /*0 - DIA, 1 - MES, 2 - ANO*/
const erroInvalido = document.querySelectorAll('.input__erro_invalido'); /*0 - DIA, 1 - MES, 2 - ANO*/
/*IMAGEM*/
const imgResult = document.querySelector('.divisao__imagem_resultado');
/*MOSTRADOR RESULTADOS*/
let resultados = document.querySelectorAll('.resultado__mostrador'); /*0 - ANOS, 1 - MESES, 2 - DIAS*/



imgResult.addEventListener('click', () =>{
    /*VALOR DAS DATAS*/
    let dia = data[0].value;
    let mes = data[1].value;
    let ano = data[2].value;
    /*ZERA RESULTADOS*/
    for (let resultado = 0; resultado < resultados.length; resultado++){
        resultados[resultado].textContent = '--'
    };
    /*APAGA MENSAGENS DE ERRO POR FALTA*/
    for (let erroF = 0; erroF < erroFalta.length; erroF++){
        erroFalta[erroF].style.display = 'none';
    };
    /*APAGA MENSAGENS DE ERRO POR INVALIDEZ*/
    for (let erroI = 0; erroI < erroInvalido.length; erroI++){
        erroInvalido[erroI].style.display = 'none';
    };

    if (dia < 0 || dia >= 32){
        erroInvalido[0].style.display = 'block'
    }
    else if (dia == 0){
        erroFalta[0].style.display = 'block'
    }
    else{
        resultados[2].textContent = dia; //TESTE
    }
});

function zeraResultados(){

}

function mostraErroInvalido(){

}

function mostraErroNecessario(){

}

function removeErroInvalido(){

}

function removeErroNecessario(){

}