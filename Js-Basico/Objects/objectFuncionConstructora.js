function auto(marca, modelo, anio) {
    this.marca = marca;
    this.modelo = modelo;
    this.anio = anio;
}
var autoNuevo = new auto("Tesla", "Model 3", 2020);
autoNuevo
// auto {marca: "Tesla", modelo: "Model 3", anio: 2020}

var autoNuevo2 = new auto("Tesla", "Model X", 2018);
var autoNuevo3 = new auto("toyota", "Corolla", 2020);

autoNuevo2
// auto {marca: "Tesla", modelo: "Model X", anio: 2018}

autoNuevo3
// auto {marca: "toyota", modelo: "Corolla", anio: 2020}






// Ejemplo de objectfuncionconstrsuctora

var marca = [
    "Abarth",
    "Alfa Romeo",
    "Aston Martin",
    "Audi",
    "Bentley",
    "BMW",	
   "Cadillac",
    "Caterham",
    "Chevrolet",
    "Citroen",
    "Dacia",
    "Ferrari",
    "Fiat",
    "Ford",
    "Honda",
    "Infiniti",
    "Isuzu",
    "Iveco",
    "Jaguar"   	 	 
]

var modelo = [
    "C-Max",
    "Fiesta",
    "Focus",
    "Mondeo",
    "Ka",
    "S-MA",
   " B-MAX",
    "Grand C-Max",
    "Tourneo Custom",
    "Kuga",
    "Galaxy",
    "Grand Tourneo Connect",
    "Tourneo Connect",
    "EcoSport",
    "Tourneo Courier",
    "Mustang",
    "Transit Connect",
    "Edge",
    "Ka+"
]

var anio = [
    "1988",
    "1989",
    "1978",
    "1989",
    "1928",
    "1989",
    "1968",
    "1989",
    "1888",
    "1989",
    "1288",
    "1989",
    "1938",
    "1989",
    "1988",
    "1999",
    "1983",
    "1989",
    "1918"
]

function auto(marca, modelo, anio) {
    this.marca = marca;
    this.modelo = modelo;
    this.anio = anio;
}
for(var i = 0; marca.length > i && modelo.length > i && anio.length > i; i++){
    var nuevoAuto = new auto(marca[i], modelo[i], anio[i]);
    console.log(nuevoAuto)
}