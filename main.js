/*INPUTS (0 - DIA, 1 - MES, 2 - ANO)*/
let inputsData = document.querySelectorAll('.inputs'); 
let inputsLabel = document.querySelectorAll('.form__label');
/*ERROS (0 - DIA, 1 - MES, 2 - ANO)*/
const erroFalta = document.querySelectorAll('.input__erro_falta'); 
const erroInvalido = document.querySelectorAll('.input__erro_invalido'); 
/*IMAGEM*/
const imgResult = document.querySelector('.divisao__imagem_resultado');
/*MOSTRADOR RESULTADOS (0 - DIA, 1 - MES, 2 - ANO)*/
let resultados = document.querySelectorAll('.resultado__mostrador');



imgResult.addEventListener('click', () =>{
    /*VALOR DAS DATAS*/
    let dia = inputsData[0].value;
    let mes = inputsData[1].value;
    let ano = inputsData[2].value;

});

function zeraResultados(){ //CHAMADO AO CLICAR NO BOTÃO PARA ZERAR OS VALORES E AO TER ALGUM ERRO PARA TRAVAR OS VALORES
    for(let i = 0; i < resultados.length; i++){
        resultados[i].textContent = '--';
    };
};

function estiloErro(){ //CHAMADO SEMPRE QUE HOUVER UM ERRO PARA ESTILIZAR COM O PADRÃO DE ERRO TODOS OS ELEMENTOS
    for(let i = 0; i < inputsData.length; i++){
        inputsData[i].classList.add = 'erro';
    };
};

function removeEstiloErro(){ //CHAMADO AO CLICAR NO BOTÃO PARA REMOVER O ESTILO DE ERRO DOS INPUTS
    for(let i = 0; i < inputsData.length; i++){
        inputsData[i].classList.remove = 'erro'
    };
};

function verificaErro(){
    for(let idxInput = 0; idxInput < inputsData.length; idxInput++){
        if(idxInput === 0){ //VERIFICAÇÃO DO DIA
            if(inputsData[0].value < 0 || inputsData[0].value > 31){

            }
        }
        else if(idxInput === 1){ //VERIFICAÇÃO DO MES

        }
        else{ //VERIFICAÇÃO DO ANO

        };
    };
};

function mostraErri(idxErro){
    
};

function removeErro(){ //CHAMADO AO CLICAR NO BOTÃO PARA REMOVER AS MENSAGENS DE ERRO POR INVALIDEZ
    for(let i = 0; i < inputsData.length; i++){
        erroInvalido[i].style.display = 'none';
        erroFalta[i].style.display = 'none';
    };
};