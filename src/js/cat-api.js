export const fetchCountries = name => {
  const BASE_URL = 'https://api.thecatapi.com/v1/images/search';
  const properties = {
    id,
    url,
    breeds,
    favourite
    };
    const API_Key = { 'x-api-key' : 'live_qX3jDfl6LZPHo4tDqz6q5vYSj5jz1oaxYAyuWKQJvqhuR1sOgNl1Mq09li2F8LNh' };
  return fetch(`${BASE_URL}${name}?${API_Key}${properties}`).then(response => {
     console.log(response)
     if (!response.ok) {
         throw new Error(response.status);
     }
     return response.json();
 });
};
