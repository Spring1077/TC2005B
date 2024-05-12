// Variables
function variables(){
    let miString = "Hello World"
    let miNumero = 42;
    let miBooleano = false
    let miNull = null
    let miUndefined
    let miBigInt = BigInt(123)
    
    console.log(typeof miString)
    console.log(typeof miNumero)
    console.log(typeof miBooleano)
    console.log(typeof miNull)
    console.log(typeof miUndefined)
    console.log(typeof miBigInt)
  }
  variables()
  
  // Tipos de Datos
  function tiposDatos(){
    let valor = prompt("Introduce un dato")
    if(!isNaN(valor)){
      console.log("Es un numero")
    }
    else if(valor === "true" || valor === "false"){
      console.log("Es un boleano")
    }
    else{
      console.log("Es un string")
    }
  }