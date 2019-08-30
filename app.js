const lugar = require('./lugar/lugar');
const axios = require('axios');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obterner el clima',
        demand: true
    }
}).argv;

console.log(argv.direccion);

lugar.getLugarLat(argv.direccion)
    .then

