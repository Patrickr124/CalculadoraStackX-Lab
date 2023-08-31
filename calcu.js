function inserir(num){
let numero=document.getElementById('resultado').innerHTML;
document.getElementById('resultado').innerHTML=numero+num;
limitar(15);
}

function limpar(){
document.getElementById('resultado').innerHTML="";
document.getElementById('historico2').innerHTML="";
}


function apagar(){
    let resultado=document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML=resultado.substring(0,resultado.length-1);
}


function calcular(){
    let resultado=document.getElementById('resultado').innerHTML;
    if(resultado){

let resultadoFinal=eval(resultado);
document.getElementById('resultado').innerHTML=resultadoFinal;
let operacao=resultado;
historico(operacao,resultadoFinal);   
}

}

function historico(operacao,resultadoFinal){
    let agora=new Date().toLocaleString();

    let historico=agora+"  "+operacao.toString()+" = "+resultadoFinal.toString();
document.getElementById('tabelaHistorico').innerHTML=historico+"<br>"+document.getElementById('tabelaHistorico').innerHTML;
    
let tabela=document.getElementById("historico2");
let linha=tabela.insertRow(-1);
let celulaOperacao=linha.insertCell(0);
let celulaResultado=linha.insertCell(1);

celulaOperacao.innerHTML=operacao;
celulaResultado.innerHTML=resultadoFinal;

}


function limitar(max){
    let resultado=document.getElementById('resultado').innerHTML;
    if(resultado.length>max){
    resultado=resultado.substring(0,max);
    document.getElementById('resultado').innerHTML=resultado;
    }
    }



