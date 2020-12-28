import * as axios from "axios";

const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?';

export const weatherAPI = {
  getDataWeather(nameCity) {

    return axios.get(`${baseUrl}q=${nameCity}&appid=442f6e3271a1bc3301208a41a7c40755`)
      .then(response => response.data)
  }
}