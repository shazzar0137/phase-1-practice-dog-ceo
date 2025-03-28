console.log('%c HI', 'color: firebrick')
document.addEventListener("DOMContentLoaded", () => {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    const breedUrl = "https://dog.ceo/api/breeds/list/all";
    const dogImageContainer = document.getElementById("dog-image-container");
    const dogBreedsList = document.getElementById("dog-breeds");
    const breedDropdown = document.getElementById("breed-dropdown");
  
    // Challenge 1: Fetch and display dog images
    fetch(imgUrl)
      .then((response) => response.json())
      .then((data) => {
        data.message.forEach((imageUrl) => {
          const img = document.createElement("img");
          img.src = imageUrl;
          img.style.width = "200px";
          img.style.margin = "10px";
          dogImageContainer.appendChild(img);
        });
      });
  
    // Challenge 2: Fetch and display dog breeds
    fetch(breedUrl)
      .then((response) => response.json())
      .then((data) => {
        const breeds = Object.keys(data.message);
        renderBreeds(breeds);
      });
  
    function renderBreeds(breeds) {
      dogBreedsList.innerHTML = "";
      breeds.forEach((breed) => {
        const li = document.createElement("li");
        li.textContent = breed;
        li.style.cursor = "pointer";
        li.addEventListener("click", () => {
          li.style.color = "blue";
        });
        dogBreedsList.appendChild(li);
      });
    }
  
    // Challenge 4: Filter breeds based on selected letter
    breedDropdown.addEventListener("change", (event) => {
      const selectedLetter = event.target.value;
      fetch(breedUrl)
        .then((response) => response.json())
        .then((data) => {
          const breeds = Object.keys(data.message);
          const filteredBreeds = breeds.filter((breed) =>
            breed.startsWith(selectedLetter)
          );
          renderBreeds(filteredBreeds);
        });
    });
  });
  