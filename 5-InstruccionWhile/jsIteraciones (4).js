function Mostrar()
{

  var numero = parseInt(prompt("ingrese un número entre 0 y 10."));

  while(!(numero >= 0 && numero < 10)){

    numero = parseInt(prompt("el numero ingresado no sirve"));
  }

  alert("el numero sirve");

}//FIN DE LA FUNCIÓN
