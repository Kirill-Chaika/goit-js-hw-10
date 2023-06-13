
const API_KEY =
  "live_qX3jDfl6LZPHo4tDqz6q5vYSj5jz1oaxYAyuWKQJvqhuR1sOgNl1Mq09li2F8LNh";
// export const fetchBreeds = () => {
//   return fetch("https://api.thecatapi.com/v1/breeds", {
//     headers: {
//       "x-api-key": API_KEY,
//     },
//   })
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error("Failed to fetch breeds");
//       }
//       return response.json();
//     })
//     .then((data) => data.map((breed) => ({ id: breed.id, name: breed.name })));
// };

// export const fetchCatByBreed = (breedId) => {
//   return fetch(
//     `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`,
//     {
//       headers: {
//         "x-api-key": API_KEY,
//       },
//     }
//   )
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error("Failed to fetch cat");
//       }
//       return response.json();
//     })
//     .then((data) => {
//       const cat = data[0];
//       const { url } = cat;
//       const { name, description, temperament } = cat.breeds[0];
//       return { url, name, description, temperament };
//     });
// };
// export default {
//   fetchBreeds,
//   fetchCatByBreed
// };
// const razm = `<li class="link"><img src="${{url}}" alt="${{id}}" width="60" height="40"> <p class = "list-name";>${{id}}</p></li>`;
const refs = {
  cardContainer: document.querySelector('.container-cat')
}


const alarm =  fetch(`https://api.thecatapi.com/v1/images/search?limit=10?${API_KEY}`).then(response => {
  console.log(response);  
return response.json();
  
}).then(cat => {
  console.log(cat);
  
}).catch(error => {
  console.log(error)
} );

export { alarm }