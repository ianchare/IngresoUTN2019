function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta="si";


  do{

    numero = parseInt(prompt("ingrese numero"));
    while( isNaN(numero)){
      numero = numero = parseInt(prompt("No es un numero pendejo.ingrese un numero"));
    }

    acumulador = acumulador + numero;

    contador++;

    respuesta = confirm ("desea continuar? ");
  }while(respuesta);

promedio = acumulador/contador;

document.getElementById("suma").value=acumulador;
document.getElementById("promedio").value=acumulador/contador;

}//FIN DE LA FUNCIÓN
