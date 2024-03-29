/*INPUTS (0 - DIA, 1 - MES, 2 - ANO)*/
let inputsData = document.querySelectorAll('.inputs'); 
let inputsLabel = document.querySelectorAll('.form__label');
/*ERROS (0 - DIA, 1 - MES, 2 - ANO)*/
const erroFalta = document.querySelectorAll('.input__erro_falta'); 
const erroInvalido = document.querySelectorAll('.input__erro_invalido');
const erroDtInexistente = document.querySelector('.input__erro_inexistente');
const formInput = document.querySelector('.form__inputs');
/*IMAGEM*/
const imgResult = document.querySelector('.divisao__imagem_resultado');
/*MOSTRADOR RESULTADOS (0 - DIA, 1 - MES, 2 - ANO)*/
let resultados = document.querySelectorAll('.resultado__mostrador');
/*DATA ATUAL*/
let dataAtual = new Date(Date.now());


imgResult.addEventListener('click', () =>{
    /*VALOR DAS DATAS*/
    let dia = inputsData[0].value;
    let mes = inputsData[1].value;
    let ano = inputsData[2].value;
    /*RESETA A PÁGINA*/
    zeraResultados();
    removeEstiloErro();
    removeErro();
    verificaErro();
    verificaData(dia, mes, ano);
});

function zeraResultados(){ //CHAMADA AO CLICAR NO BOTÃO PARA ZERAR OS VALORES E AO TER ALGUM ERRO PARA TRAVAR OS VALORES
    for(let i = 0; i < resultados.length; i++){
        resultados[i].textContent = '--';
    };
};

function removeEstiloErro(){ //CHAMADA AO CLICAR NO BOTÃO PARA REMOVER O ESTILO DE ERRO DOS INPUTS
    for(let i = 0; i < inputsData.length; i++){
        inputsData[i].classList.remove('erro');
        formInput.classList.remove('form__inputs_erro');
    };
};

function removeErro(){ //CHAMADA AO CLICAR NO BOTÃO PARA REMOVER AS MENSAGENS DE ERRO POR INVALIDEZ
    for(let i = 0; i < inputsData.length; i++){
        erroInvalido[i].style.display = 'none';
        erroFalta[i].style.display = 'none';
    };
};

function verificaErro(){ //CHAMADA AO CLICAR NO BOTÃO PARA VERIFICAR SE HÁ ALGUM ERRO
    for(let idxInput = 0; idxInput < inputsData.length; idxInput++){
        if(idxInput === 0){ //VERIFICAÇÃO DO DIA
            if(inputsData[0].value < 0 || inputsData[0].value > 31){ //ERRO DE INVALIDEZ
                mostraErro(2, 0);
                estiloErro();
            }
            else if(inputsData[0].value == 0 || inputsData[0].value === ''){ //ERRO POR FALTA DE VALOR
                mostraErro(1, 0);
                estiloErro();
            };
        };
        if(idxInput === 1){ //VERIFICAÇÃO DO MES
            if(inputsData[1].value < 0 || inputsData[1].value > 12){ //ERRO DE INVALIDEZ
                mostraErro(2, 1);
                estiloErro();
            }
            else if(inputsData[1].value == 0 || inputsData[1].value === ''){ //ERRO POR FALTA DE VALOR
                mostraErro(1, 1);
                estiloErro();
            };
        };
        if(idxInput === 2){ //VERIFICAÇÃO DO ANO
            if(inputsData[2].value < 0 || inputsData[2].value < 1900 || inputsData[2].value > dataAtual.getFullYear()){ //ERRO DE INVALIDEZ
                mostraErro(2, 2);
                estiloErro();
            }
            else if(inputsData[2].value == 0 || inputsData[2].value === ''){
                mostraErro(1, 2);
                estiloErro();
            };
        };
    };
};

function verificaData(dd, mm, aa){
    let dtNascimento = new Date(aa, mm - 1, dd);
    let tempoRestante = Math.floor((dataAtual.getTime() - dtNascimento.getTime()) / (1000 * 60 * 60 * 24));
    /*ESPECIFICAÇÕES DAS DATAS*/
    let resultAno = Math.floor(tempoRestante / (365.24));
    let resultMes = Math.floor((tempoRestante % (365.24)) / (30.44));
    let resultDia = Math.floor((tempoRestante % (30.44)))
    /*ATRIBUI AS DATAS*/
    resultados[0].innerHTML = resultAno;
    resultados[1].innerHTML = resultMes;
    resultados[2].innerHTML = resultDia;
    console.log(dtNascimento.getTime(), dataAtual.getTime(),  tempoRestante);
}

function mostraErro(tpErro, idxErro){ //É CHAMADA NA FUNÇÃO 'verificaErro' PARA APRESENTAR A MENSAGEM DE ERRO CORRESPONDENTE
    // tpErro = 1 - Falta, 2 - Invalidez, 3 - Data inexistente
    if(tpErro === 1){
        erroFalta[idxErro].style.display = 'block';
    }
    else if(tpErro === 2){
        erroInvalido[idxErro].style.display = 'block';
    }
};

function estiloErro(){ //CHAMADA SEMPRE QUE HOUVER UM ERRO PARA ESTILIZAR COM O PADRÃO DE ERRO TODOS OS ELEMENTOS
    for(let i = 0; i < inputsData.length; i++){
        inputsData[i].classList.add('erro');
        formInput.classList.add('form__inputs_erro')
    };
};
