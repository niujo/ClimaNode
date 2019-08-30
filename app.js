const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');


const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obterner el clima',
        demand: true
    }
}).argv;

/* onsole.log(argv.direccion);

lugar.getLugarLat(argv.direccion)
    .then( console.log); */

clima.getClima (-42.480000,-73.769997)
    .then(console.log)
    .catch(console.log);