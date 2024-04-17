//Objeto "coche" que tenga marca, modelo, año y metodos para cambiar estas propiedades
let coche = {
    marca: 'Ford',
    modelo: 'Fiesta',
    year: 2024,
    
    cambiarMarca: function(nuevaMarca){
      this.marca = nuevaMarca
    },
    cambiarModelo: function(nuevoModelo){
      this.modelo = nuevoModelo
    },
    cambiarYear: function(nuevoYear){
      this.year = nuevoYear
    },
      mostrarInformacion: function() {
      console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}, Año: ${this.año}`);
    }
  };
  
  console.log('Marca', coche.marca)
  console.log('Modelo', coche.modelo)
  console.log('Year', coche.year)
  
  coche.cambiarMarca('Honda')
  coche.cambiarYear(2022)
  
  console.log('Nueva marca:', coche.marca)
  console.log('Nuevo año', coche.year)
  
  