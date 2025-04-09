function colorirDia(){

    //pegar valor de campo de dia
    let days = document.getElementById('day').value;
    //pegar valor do campor de cor
    let color = document.getElementById('color').value;
    //pega os elementos da tabela calendario
    let calendar = document.getElementById('calendar');

    //verifica se o campo de dia foi preenchido
    if(!days){

        alert('favor informar o dia!');
   
    }else if((days >0) && (days < 31)){
       
            //se o numero de dias esta no intervalo 
            //aplicara a cor na celula do calendario 
            let td = calendar.getElementsByTagName('td')[parseInt(days)+1];
            td.style.backgroundColor = color;

    }else if(days > 31)
    {

        alert('favor informar um dia valido!');

    }

    //guarda  a celula da tabela
    let elementos = document.querySelectorAll('td');
    //declara e inicializa contadores
    let contadorAzul = 0, contadorVerde = 0, contadorRosa = 0, contadorRoxo = 0;

    //loop para verificar o estilo de cada celula e contar quantas tem cor e qual cor 
    for(let i = 0; i < elementos.length; i++){
        
        var estilo = window.getComputedStyle(elementos[i]);

        //obtem a cor de fundo atual da celula
        var corEstilo = estilo.backgroundColor;

        //verifica a cor e incrementa contador correspondente
        if(corEstilo === 'rgb(173, 216, 230)' || corEstilo === 'lightblue'){
            contadorAzul++;
            console.log("Azul: "+contadorAzul);
        }else if(corEstilo === 'rgb(152, 215, 152)' || corEstilo === 'palegreen'){
            contadorVerde++;
            console.log(contadorVerde);
        }else if(corEstilo === 'rgb(255, 182, 193)' || corEstilo === 'lightpink'){
            contadorRosa++;
            console.log(contadorRosa);
        }else if(corEstilo === 'rgb(106, 90, 205)' || corEstilo === 'slateblue'){
            contadorRoxo++;
            console.log(contadorRoxo);
        }        

        
    }



}