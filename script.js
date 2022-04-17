function corrigir(){

    document.querySelector(".hide").style.display = "block";

    let text1 = document.getElementById("texto").value;
    document.getElementById("campotexto").innerHTML = ("resposta QUESTÃO 01:" +text1);

    let octal = document.getElementById("check1").checked;  

    if(octal){
        document.getElementById("campocheck1").innerHTML = "resposta QUESTÃO 02: Sistema Octal"
    }

    let binario = document.getElementById("check2").checked;  

    if(binario){
        document.getElementById("campocheck2").innerHTML = "resposta QUESTÃO 02: Sistema Binário"
    }

    let decimal = document.getElementById("check3").checked;  

    if(decimal){
        document.getElementById("campocheck3").innerHTML = "resposta QUESTÃO 02: Sistema Decimal"
    }

    let hexa = document.getElementById("check4").checked;  

    if(hexa){
        document.getElementById("campocheck4").innerHTML = "resposta QUESTÃO 02: Sistema Hexadecimal"
    }


  let limpeza = document.getElementById("iso").checked;
  if(limpeza){
  	document.getElementById("campoiso").innerHTML = "resposta QUESTÃO 03: Alcool Isopropílico "
  }

  let limpeza2 = document.getElementById("con").checked;
  if(limpeza2){
  	document.getElementById("campocon").innerHTML = "resposta QUESTÃO 03: Limpa Contato "
  }

   let limpeza3 = document.getElementById("alc").checked;
  if(limpeza3){
  	document.getElementById("campoalc").innerHTML = "resposta QUESTÃO 03: Alcool 70%"
  }

   let limpeza4 = document.getElementById("agu").checked;
  if(limpeza4){
  	document.getElementById("campoagu").innerHTML = "resposta QUESTÃO 03: Água "
  }
  
    let V = document.getElementById("ver").checked;
    if(V){
    	document.getElementById("campover").innerHTML  = "resposta QUESTÃO 04: Verdadeira"
    }

    let F = document.getElementById("fal").checked;
    if(F){
    	document.getElementById("campofal").innerHTML  = "resposta QUESTÃO 04: Falsa"
    }






   

}