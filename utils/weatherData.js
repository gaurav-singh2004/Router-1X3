const request = require('request'); 


const openWeatherMap ={
    BASE_URL: "https://api.openweathermap.org/data/2.5/weather?q=",
    SECRET_KEY: "e2a405fd88d9fe7c842760ee963d3d57"
}

const weatherData = (address, callback) => {
    const url = openWeatherMap.BASE_URL + 
    encodeURIComponent(address) + 
    "&APPID=" + 
    openWeatherMap.SECRET_KEY;
    console.log(url);
    request({url, json:true}, (error, data) => {
        if(error){
            callback(true, "Can't fetch data from the server" + error);
        }
        callback(false, data?.body);
    });
};


module.exports = weatherData;   
