function Mostrar()
{
//tomo la edad

  var edad;
  var estado;

  edad = document.getElementById("edad").value;
  estado =document.getElementById("estadoCivil").value;

  if(edad < 18){

    alert("Juan es muy pequeño para no ser " + estado);
  }


}//FIN DE LA FUNCIÓN
