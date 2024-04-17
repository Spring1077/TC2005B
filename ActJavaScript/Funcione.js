function suma(x,y,z){
    console.log(x+y+z)
  }
  
  suma(1,2,3)
  
  function multiplica(x,y,z){
    console.log(x*y*z)
  }
  
  multiplica(4,5,6)
  
  function esString(x,y,z){
    console.log(typeof (x)==="string" && typeof (y) === "string" && typeof (z) === "string")
  }
  
  esString("h","m","b")
  
  function verficaVocales(x){
    const esVocal = /^[aeiou]$.test(x)
    if(esVocal){
      console.log("es una vocal")
    }
    else{
      console.log("No es vocal")
    }
  }
  
  verficaVocales("a")