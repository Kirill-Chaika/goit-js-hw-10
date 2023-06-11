

import { fetchBreeds } from './js/cat-api';

import { useEffect, useState } from 'react';
import SlimSelect from 'slim-select';


import { fetchBreeds, fetchCatByBreed } from './js/cat-api';

import 'slim-select/dist/slimselect.css';
import 'notiflix/dist/notiflix-3.2.6.min.css';
import './css/styles.css';

function App() {
  const [breeds, setBreeds] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState('');
  const [catInfo, setCatInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);

    fetchBreeds()
      .then((data) => {
        setBreeds(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching cat breeds:', error);
        setLoading(false);
        setError(true);
      });
  }, []);

  useEffect(() => {
    if (selectedBreed) {
      setLoading(true);
      setError(false);

      fetchCatByBreed(selectedBreed)
        .then((data) => {
          setCatInfo(data[0]);
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching cat by breed:', error);
          setLoading(false);
          setError(true);
        });
    } else {
      setCatInfo(null);
    }
  }, [selectedBreed]);

  useEffect(() => {
    new SlimSelect({
      select: '#breed-select',
    });
  }, [breeds]);

  const handleBreedChange = (event) => {
    const breedId = event.target.value;
    setSelectedBreed(breedId);
  };

  const handleRetry = () => {
    setError(false);
    setSelectedBreed('');
  };

  return (
    <div className="container">
      {loading && (
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      )}
      {error && (
        <div className="error-container">
          <p className="error">An error occurred. Please try again.</p>
          <button className="retry-button" onClick={handleRetry}>
            Retry
          </button>
        </div>
      )}

      <div className="select-container">
        <select id="breed-select" value={selectedBreed} onChange={handleBreedChange}>
          <option value="">Select a breed</option>
          {breeds.map((breed) => (
            <option key={breed.id} value={breed.id}>
              {breed.name}
            </option>
          ))}
        </select>
      </div>

      {catInfo && (
        <div className="cat-info">
          <img src={catInfo.url} alt="Cat" className="cat-image" />
          <h2 className="cat-name">{catInfo.breeds[0].name}</h2>
          <p className="cat-description">{catInfo.breeds[0].description}</p>
          <p className="cat-temperament">Temperament: {catInfo.breeds[0].temperament}</p>
        </div>
      )}
    </div>
  );
}

export default App;