function calculadora()
    {
    const operacao = Number(prompt("escolha uma operação:\n 1 - Soma (+)\n 2 - Subtração (-) \n 3 - Multiplicação(*) \n 4 - Divisão real(/) \n 5 - Divisão inteira (%) \n 6 - Potenciação (**)"));
    
    if( operacao<=0||operacao >=7 ||!operacao ){
        alert ("operação Invalida");
        calculadora();
    }else {

        let n1 = Number(prompt ("Insira o Primeiro valor"));
        let n2 = Number(prompt ("Insira o Segunfo valor"));
        let resultado;

        if (!n1 || !n2){
            alert("parametros invalidos");
            calculadora();
        }else{
            function soma(){
                resultado = n1 + n2;
                alert(`${n1} + ${n2} = ${resultado}`);
                novaoperacao();
            }
            function subtracao(){
                resultado = n1 - n2;
                alert(`${n1} - ${n2} = ${resultado}`);
                novaoperacao();
            }
            function multiplicacao(){
                resultado = n1 * n2;
                alert(`${n1} * ${n2} = ${resultado}`);
                novaoperacao();
            }
            function DivisaoR(){
                resultado = n1 / n2;
                alert(`${n1} / ${n2} = ${resultado}`);
                novaoperacao();
            }
            function DivisaoI(){
                if(n1<n2){
                    alert("Ivalido");
                    novaoperacao();
                }else{
                    resultado = n1 % n2;
                    alert(`O resto da divisão entre ${n1} e ${n2} é : ${resultado}`);
                    novaoperacao();
                }
            }
            function Potenciacao(){
                resultado = n1 ** n2;
                alert(`${n1} elevado a ${n2} = ${resultado}`);
                novaoperacao();
            }
            function novaoperacao(){
                let opcao = prompt('Deseja fazer outra operação ?\n 1 - sim \n 2 -não');
                if(opcao == 1){
                    calculadora();
                }else if (opcao ==2){
                    alert("Até mais");
                }else{
                    alert("Invalido");
                }
            }
            /* 
            if (operacao == 1){
                soma();
                novaoperacao();
            }else if(operacao == 2){
                subtracao();
                novaoperacao();
            }else if (operacao == 3){
                multiplicacao();
                novaoperacao();
            }else if(operacao == 4){
                DivisaoR();
                novaoperacao();
            }else if(operacao == 5){
                DivisaoI();
                novaoperacao();
            }else if(operacao == 6){
                Potenciacao();
                novaoperacao();
            } */
            switch(operacao){
                case 1:
                    soma();
                    break;
                 case 2:
                     subtracao();
                     break;
                case 3:
                    multiplicacao();
                     break;
                case 4:
                    DivisaoR();
                    break;
                case 5:
                    DivisaoI();
                    break;
                case 6:
                    Potenciacao();
                     break;

            }
        } 
    }
}
calculadora();

