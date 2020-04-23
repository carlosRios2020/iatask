"use strict"


var TraerDato = document.querySelector('#btn');

    TraerDato.addEventListener('click', event =>{

        var n = "";
        var m = "";
        var c = "";

        var datoN = document.querySelector('#n').value;
        var datoM = document.querySelector('#m').value;

        var resultado = document.querySelector('#mostrarRes');

            if(datoN == 1){
                 n = "a";
            }
            else if(datoN ==2){
                n = "aa"
            }
            else if(datoN == 3){
                n = "aaa"
            }
            else if(datoN == 4){
                n = "aaaa"
            }

            if(datoM == 1){
                m= 'b'
            } else if(datoM == 2) {
                m= 'bb'
            }
            else if(datoM==3){
                m = 'bbb'

            }
            else if(datoM==4){
                m = 'bbb'
            }

            var ValorC =  parseInt(datoN * 2 + m);

            if(ValorC == 1){
                c = 'c'
            }else if(ValorC ==2){
                c = 'cc'
            }else if(ValorC == 3){
                c = 'ccc'
            }else if(ValorC==4){
                c = 'cccc'
            }
            else if(ValorC==5){
                c = 'ccccc'
            }
            else if(ValorC==6){
                c = 'cccccc'
            }
            else if(ValorC==7){
                c = 'cccccc'
            }

        return  resultado.innerHTML = "el valor N es: " + datoN + " y  M : " + datoM + "<br>" +"la cadena construida es: " + ( n + m + c)
        

    });

        
        var cadena = document.querySelector('#btn2');

         cadena.addEventListener('click', event =>{

                var cadena = document.querySelector('#cadena').value;
                
                var arreglo = Array.from(cadena)
                var i = 0;
                while(i>=arreglo[i].length){

                    if(arreglo[0]!= "a"){
                       alert("la cadena debe empezar por a");

                    }
                    else if(arreglo[0] == "a"){
                        alert("la cadena"+ arreglo + "es valida par este lenguaje");
                    }
                    console.log(arreglo[i]);
                }
            
                var result =  document.querySelector('#resultadoCadena');
                return  result.innerHTML = "la cadena digitada es:" + "<br>"+ arreglo;


        });

    
