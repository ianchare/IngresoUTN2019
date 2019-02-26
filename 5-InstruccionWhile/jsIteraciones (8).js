function Mostrar()
{

  var positivo = 0;
  var negativo = 1;
	var flag=true;
	var numero;
  var respuesta;

   do{
   numero = parseInt(prompt("ingrese un numero" ));

   while(isNaN(numero)){
   numero = parseInt(prompt("Esto no es numero.ingrese un numero" ));
   }

   if(numero >=0){

   positivo += numero;

   }
   else {
    flag = false;
    negativo  *= numero;

   }

   respuesta = confirm( "desea continuar?)");
  }while(respuesta);


   document.getElementById("suma").value=positivo;

   if(flag){
  negativo = 0;

}


  document.getElementById("producto").value=negativo;

}
