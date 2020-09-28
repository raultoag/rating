function cambioColor(estrella){
    var estrellaUno = document.getElementById("starUno");
    var estrellaDos = document.getElementById("starDos");
    var estrellaTres = document.getElementById("starTres");
    var estrellaCuatro = document.getElementById("starCuatro");
    var estrellaCinco = document.getElementById("starCinco");
    if (estrella == "uno") {
        if ( estrellaUno.classList.contains("check")) {
            estrellaUno.classList.remove("check");
            estrellaDos.classList.remove("check");
            estrellaTres.classList.remove("check");
            estrellaCuatro.classList.remove("check");
            estrellaCinco.classList.remove("check");
        }
        else{
            estrellaUno.classList.add("check");
        }
    }
    else if (estrella == "dos") {     
        if ( estrellaDos.classList.contains("check")) {
            estrellaDos.classList.remove("check");
            estrellaTres.classList.remove("check");
            estrellaCuatro.classList.remove("check");
            estrellaCinco.classList.remove("check");
        }
        else{
            estrellaUno.classList.add("check");
            estrellaDos.classList.add("check");
        }        
    }
    else if (estrella == "tres") {     
         if ( estrellaTres.classList.contains("check")) {
            estrellaTres.classList.remove("check");
            estrellaCuatro.classList.remove("check");
            estrellaCinco.classList.remove("check");
         }
        
        else{
            estrellaUno.classList.add("check");
            estrellaDos.classList.add("check");
            estrellaTres.classList.add("check");   
        }        
    }
    else if (estrella == "cuatro") {     
        if ( estrellaCuatro.classList.contains("check")) {
            estrellaCuatro.classList.remove("check");
            estrellaCinco.classList.remove("check");
        }
        else{
            estrellaUno.classList.add("check");
            estrellaDos.classList.add("check");
            estrellaTres.classList.add("check");
            estrellaCuatro.classList.add("check");    
        }        
    }
    else if (estrella == "cinco") {     
        if ( estrellaCinco.classList.contains("check")) {
            estrellaCinco.classList.remove("check");
        }
        else{
            estrellaUno.classList.add("check");
            estrellaDos.classList.add("check");
            estrellaTres.classList.add("check");
            estrellaCuatro.classList.add("check"); 
            estrellaCinco.classList.add("check");    
        }        
    }
}

function cambioColorPasar(estrella){
    var estrellaUno = document.getElementById("starUno");
    var estrellaDos = document.getElementById("starDos");
    var estrellaTres = document.getElementById("starTres");
    var estrellaCuatro = document.getElementById("starCuatro");
    var estrellaCinco = document.getElementById("starCinco");
    if (estrella == "seis") {
        if ( estrellaUno.classList.contains("check2")) {
            estrellaUno.classList.remove("check2");
            estrellaDos.classList.remove("check2");
            estrellaTres.classList.remove("check2");
            estrellaCuatro.classList.remove("check");
            estrellaCinco.classList.remove("check2");
        }
        else{
            estrellaUno.classList.add("check2");
        }
    }
    else if (estrella == "siete") {  
           
        if (estrellaDos.classList.contains("check2") ) {
            estrellaDos.classList.remove("check2");
            estrellaTres.classList.remove("check2");
            estrellaCuatro.classList.remove("check2");
            estrellaCinco.classList.remove("check2");
        }
        else{
            estrellaUno.classList.add("check2");
            estrellaDos.classList.add("check2");
        }        
    }
    else if (estrella == "ocho") {     
         if ( estrellaTres.classList.contains("check2")) {
             estrellaTres.classList.remove("check2");
            estrellaCuatro.classList.remove("check2");
            estrellaCinco.classList.remove("check2");
         }
        
        else{
            estrellaUno.classList.add("check2");
            estrellaDos.classList.add("check2");
            estrellaTres.classList.add("check2");   
        }        
    }
    else if (estrella == "nueve") {     
        if ( estrellaCuatro.classList.contains("check2")) {
            estrellaCuatro.classList.remove("check2");
            estrellaCinco.classList.remove("check2");
        }
        else{
            estrellaUno.classList.add("check2");
            estrellaDos.classList.add("check2");
            estrellaTres.classList.add("check2");
            estrellaCuatro.classList.add("check2");    
        }        
    }
    else if (estrella == "diez") {     
        if ( estrellaCinco.classList.contains("check2")) {
            
            estrellaCinco.classList.remove("check2");
        }
        else{
            estrellaUno.classList.add("check2");
            estrellaDos.classList.add("check2");
            estrellaTres.classList.add("check2");
            estrellaCuatro.classList.add("check2"); 
            estrellaCinco.classList.add("check2");    
        }        
    }
}

