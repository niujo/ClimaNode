const axios = require('axios');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obterner el clima',
        demand: true
    }
}).argv;

console.log(argv.direccion);

const encodeUrl = encodeURI(argv.direccion);

const instance = axios.create({
    baseURL : ` https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
    headers : {"x-rapidapi-key" : "6c8fe1661fmsh5816f81c1f71f12p1b4598jsncc028dd1278a"}
});
instance.get()
        .then(resp=>{
            console.log(resp.data.Results[0]);
        })
        .catch(err =>{
            console.log("error",err);
        });