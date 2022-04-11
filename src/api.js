const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://wft-geo-db.p.rapidapi.com/v1/geo/adminDivisions',
  headers: {
    'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com',
    'X-RapidAPI-Key': '5d3f1a3a2cmshb469c642d3673d7p12b180jsn0d123e041afb'
  }
};


export function getCities(prefix) {
    let options_mod = options;
    options_mod.params = {namePrefix: prefix}
    // console.log("options", options_mod)
    return axios.request(options).then(function (response) {
        // console.log(response.data);
        return response.data;
    }).catch(function (error) {
        console.error(error);
    });
}