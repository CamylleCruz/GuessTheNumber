var numeroParaEncontrar = 0;
var tentativas = 0;

function atualizar (){
    var elemento = document.
    getElementById('inputNumero');

    elemento.value = '';

    numeroParaEncontrar = parseInt(Math.random() * 100 );

     console.log('x ' + numeroParaEncontrar);

};

    atualizar();

    function verificarNumeros(){
        var elemento = document.
        getElementById('inputNumero');

        var numero = elemento.value

        if(numero > 100 || numero < 0){
            alert ('Aposta inválida!🎅');
            return;
        }

        if (numero > numeroParaEncontrar){
            alert('🚨 O n° é  MENOR!');
            tentativas++
        }

        else if (numero < numeroParaEncontrar){
            alert('🚨 O n° é  MAIOR!');
            tentativas++
        }

        else{
            alert('🏆 Parabéns, você é demais!! Foram ' + tentativas + ' tentativas')
        }


    }
   