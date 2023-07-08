
import axios from "axios";

axios.defaults.headers.common["x-api-key"] = "live_qX3jDfl6LZPHo4tDqz6q5vYSj5jz1oaxYAyuWKQJvqhuR1sOgNl1Mq09li2F8LNh";
const BASE_URL = 'https://api.thecatapi.com/v1';

const axios = require('axios');


// Make a request for a user with a given ID
axios.get(`${BASE_URL}/breeds`)
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });

