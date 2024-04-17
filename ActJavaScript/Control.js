function validarEdad(){
    let edad = prompt("Ingresa tu edad")
    if(edad >= 18){
      alert("Mayor de edad")
    }
    else{
      alert("Menor de edad")
    }
  }
  
  validarEdad(18)