const axios = require('axios');

const getLugarLat = async (dir)=>{
    const encodeUrl = encodeURI(dir);

    const instance = axios.create({
        baseURL : ` https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
        headers : {"x-rapidapi-key" : "6c8fe1661fmsh5816f81c1f71f12p1b4598jsncc028dd1278a"}
    });
    
    const resp = await instance.get();

    if (resp.data.Results.lenght === 0) {
        throw new Error(`No hay resultados para ${direccion}`);
    }
    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        direccion,
        lat,
        lng
    }
    
}   

module.exports = {
    getLugarLat
}

