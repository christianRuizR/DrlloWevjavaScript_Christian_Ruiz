var calculadora = {
  pantalla: document.getElementById("display"),
  suma:" ", resta: " ", multiplicacion:" ", divicion:" ",

  cambioStyle: function(){
    var hojaDeEstilo = document.createElement("style");
    hojaDeEstilo.innerHTML=".teclado img:active{padding:1.5px;}";
    document.head.appendChild(hojaDeEstilo);
  },

  cero: function(){
        this.pantalla.innerHTML="0";
  },

  masMenos: function(){
    var valorPantalla= this.pantalla.innerHTML;
    var valor = "-";
    var texto = document.createTextNode(valor);
    var valorCero="";
    var texto2 = document.createTextNode(valorCero);
    if (this.pantalla.innerHTML=="0"){

    }else if (valorPantalla.charAt(0)=="-" ){
      this.pantalla.replaceChild(texto2, this.pantalla.childNodes[0]);
    }else if (valorPantalla.length>=7) {

    }else {
      this.pantalla.insertBefore(texto, this.pantalla.childNodes[0]);
    }
  },

  punto: function(){
    var valorPantalla= this.pantalla.innerHTML;
     if (valorPantalla.includes(".")) {
     }else {
       var valor = ".";
       var texto = document.createTextNode(valor);
       this.pantalla.appendChild(texto);
     }
  },

  btn: function (event){
  var   tecla = event.target.id;
      if (tecla=="1" || tecla=="2" || tecla=="3" || tecla=="4" || tecla=="5" || tecla=="6" || tecla=="7" || tecla=="8" || tecla=="9" || tecla=="0" ) {
          if (this.pantalla.innerHTML=="0") {
            this.pantalla.innerHTML="";
          }
          var valor = event.target.id;
          var texto = document.createTextNode(valor);
          this.pantalla.appendChild(texto);
      }
  },

  // --------------------funcionnes aritmeticas-------------------------------->
      Operacion: function(event){
            operacion=event.target.id;
            if (operacion=="mas") {
              this.suma= parseFloat(this.pantalla.innerHTML);
              this.resta=0;
              this.multiplicacion=0;
              this.divicion=0;
              calculadora.pantalla.innerHTML="";
            }else if (operacion=="menos") {
              this.suma=0;
              this.resta=parseFloat(this.pantalla.innerHTML);
              this.multiplicacion=0;
              this.divicion=0;
              calculadora.pantalla.innerHTML="";
            }else if (operacion=="por"){
              this.suma=0;
              this.resta=0;
              this.multiplicacion=parseFloat(this.pantalla.innerHTML);
              this.divicion=0;
              calculadora.pantalla.innerHTML="";
            }else if (operacion=="dividido"){
              this.suma=0;
              this.resta=0;
              this.multiplicacion=0;
              this.divicion=parseFloat(this.pantalla.innerHTML);
              calculadora.pantalla.innerHTML="";
            }
      },

      Igual: function (){
         var y= parseFloat(this.pantalla.innerHTML);
        if (this.suma!=" "){
          resultado= this.suma + y;
        }else if (this.resta!=" "){
          resultado= this.resta - y;
        }else if (this.multiplicacion!=" ") {
          resultado= this.multiplicacion * y;
        }else if (this.divicion!=" ") {
          resultado= this.divicion / y;
        }
        this.igual(resultado);
        // alert(this.suma);
      },
        igual: function (valor){
          this.pantalla.innerHTML=valor;
      },

      limite: function(){
        var palabras=this.pantalla.innerHTML.length;
        if (palabras>=8) {
            var texto=this.pantalla.innerHTML;
             var res= texto.substring(0,8);
            document.getElementById("display").innerHTML = res;
        }
      }


};// ----------------------fin del objeto calculadora-------------------------->

calculadora.cambioStyle();

window.onload = function(){
    document.addEventListener("click", function(){
      calculadora.limite();
    });
};

document.addEventListener("click", function (event){
  var   tecla = event.target.id;
  if (tecla=="1" || tecla=="2" || tecla=="3" || tecla=="4" || tecla=="5" || tecla=="6" || tecla=="7" || tecla=="8" || tecla=="9" || tecla=="0") {
      calculadora.btn(event);
    }else if (tecla=="on") {
      calculadora.cero(event);
    }else if (tecla=="sign") {
      calculadora.masMenos(event);
    }else if (tecla=="punto") {
      calculadora.punto(event);
    }else if (tecla=="mas" || tecla=="menos" || tecla=="por" || tecla=="dividido") {
          calculadora.Operacion(event);
    }else if(tecla=="igual") {
      calculadora.Igual(event);
    }
});
