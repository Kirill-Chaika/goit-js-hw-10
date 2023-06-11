import axios from 'axios';

export const fetchBreeds = () => {
  return axios
    .get('https://api.thecatapi.com/v1/breeds')
    .then(response => response.data)
    .catch(error => {
      console.error('Error fetching cat breeds:', error);
      throw new Error('Failed to fetch cat breeds');
    });
};

export const fetchCatByBreed = (breedId) => {
    const url = `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`;
  
    return axios
      .get(url)
      .then((response) => response.data)
      .catch((error) => {
        console.error('Error fetching cat by breed:', error);
        throw new Error('Failed to fetch cat by breed');
      });
  };
