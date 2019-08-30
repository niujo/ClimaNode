const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');


const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obterner el clima',
        demand: true
    }
}).argv;

/* console.log(argv.direccion);

lugar.getLugarLat(argv.direccion)
    .then( console.log); */

/* clima.getClima (-42.480000,-73.769997)
    .then(console.log)
    .catch(console.log); */
    const  getInfo = async (direccion) => {
        try {
           
            const coords = await lugar.getLugarLat(direccion);
            const temp = await clima.getClima(coords.lat, coords.lng);
            return `El clima de ${coords.direccion} es de ${temp}.`;
            
        } catch (e) {
            return `No se pudo determinar el clima de ${direccion}`;
        }    
    }

    getInfo(argv.direccion)
        .then(console.log)
        .catch(console.log)
