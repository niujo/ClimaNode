const axios = require('axios');

const getClima = async (lat, lng) => {

    resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=9515dcffde1bbd21d3af13072095febd&units=metric`);

    return resp.data.main.temp;

}

module.exports = {
    getClima
}