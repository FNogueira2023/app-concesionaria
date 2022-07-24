const autos = require('./autos');

const concesionaria = {

    autos: autos,

    buscarAuto: function (patente) {
        let auto;
        const autoElegido = this.autos.filter(auto => auto.patente == patente);
        auto = autoElegido[0]

        if (autoElegido != 0) {
            return auto;
        } else return null;
    },

    venderAuto: function (patente) {
        const autoElegido = this.buscarAuto(patente);
        autoElegido.vendido = true;

    },

    autosParaLaVenta: function () {
        const autosVenta = this.autos.filter(auto => auto.vendido == false);
        return autosVenta
    },

    autosNuevos: function () {
        const autosNuevos = this.autosParaLaVenta();
        return autosNuevos.filter(auto => auto.km < 100);

    },

    listaDeVentas: function () {
        const autosVendidos = this.autos.filter(auto => auto.vendido == true);
        const precios = autosVendidos.map(auto => auto.precio);
        return precios;
    },

    totalDeVentas: function () {
        const preciosDeVendidos = this.listaDeVentas();
        const total = preciosDeVendidos.reduce((sum, precio) => sum + precio, 0)
        return total;
    },

    // puedeComprar: function (auto, persona) {
    //      const precioCuota = (auto.precio / auto.cuotas);
    //     (persona.capacidadDePagoEnCuotas > precioCuota && persona.capacidadDePagoTotal > auto.precio) ? true : false;
    // }
};

console.log(concesionaria.listaDeVentas())




