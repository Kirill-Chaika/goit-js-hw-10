
import axios from "axios";

axios.defaults.headers.common["x-api-key"] = "live_qX3jDfl6LZPHo4tDqz6q5vYSj5jz1oaxYAyuWKQJvqhuR1sOgNl1Mq09li2F8LNh";

const BASE_URL = 'https://api.thecatapi.com/v1';



fetch(`${BASE_URL}/breeds`)
.then(res => {
  if(!res.ok){
    throw new Error(res.status);
  }
  return res.json();
}).then(data => {
  console.log(data)
})
.catch(err => {
  console.log(err);
});