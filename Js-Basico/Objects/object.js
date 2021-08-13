var miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    annio: 2020,
    detalleDelAuto: function(){
        console.log(`Auto ${this.modelo} ${this.annio}`);
    } //this hace referencia la objeto global "miAuto"
};
miAuto
// {marca: "Toyota", modelo: "Corolla", annio: 2020}


miAuto.marca
// "Toyota"

miAuto.annio
// 2020

miAuto.modelo
// "Corolla"

miAuto.detalleDelAuto();
// Auto Corolla 2020
