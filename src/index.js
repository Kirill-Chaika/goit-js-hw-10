// import { fetchBreeds, fetchCatByBreed } from "./js/cat-api";
// import catApi from "./js/cat-api";

// const { fetchBreeds, fetchCatByBreed } = catApi;


const breedSelect = document.getElementById("breed-select");
const catInfoContainer = document.querySelector(".cat-info");
const catImage = document.getElementById("cat-image");
const catInfo = document.getElementById("cat-info");
const loader = document.querySelector(".loader");
const error = document.querySelector(".error");

const showLoader = () => {
  loader.style.display = "block";
};

const hideLoader = () => {
  loader.style.display = "none";
};

const showError = (message) => {
  error.textContent = message;
  error.style.display = "block";
};

const hideError = () => {
  error.style.display = "none";
};

const populateBreedSelect = (breeds) => {
  breeds.forEach((breed) => {
    const option = document.createElement("option");
    option.value = breed.id;
    option.textContent = breed.name;
    breedSelect.appendChild(option);
  });
};

const showCatInfo = (cat) => {
  catImage.src = cat.url;
  catImage.alt = `Image of ${cat.name}`;
  catInfo.innerHTML = `
    <h2>${cat.name}</h2>
    <p>Description: ${cat.description}</p>
    <p>Temperament: ${cat.temperament}</p>
  `;
};

const handleBreedSelectChange = () => {
  const selectedBreedId = breedSelect.value;
  if (selectedBreedId) {
    showLoader();
    hideError();
    fetchCatByBreed(selectedBreedId)
      .then((cat) => {
        showCatInfo(cat);
        hideLoader();
      })
      .catch((error) => {
        showError("Failed to fetch cat");
        hideLoader();
      });
  } else {
    catInfoContainer.style.display = "none";
  }
};

breedSelect.addEventListener("change", handleBreedSelectChange);

// Fetch breeds on page load
showLoader();
fetchBreeds()
  .then((breeds) => {
    populateBreedSelect(breeds);
    hideLoader();
  })
  .catch((error) => {
    showError("Failed to fetch breeds");
    hideLoader();
  });
