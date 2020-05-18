const imgsUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedsUrl = 'https://dog.ceo/api/breeds/list/all'

let allBreeds = []


function fetchDogs() {
    return fetch(imgsUrl)
    .then(resp => resp.json())
    .then(json => renderDogs(json))
  };
  

function renderDogs(json) {
    const dogContainer = document.getElementById("dog-image-container")
    json.message.forEach(imgUrl => {
        const dogImg = document.createElement(`img`)
        dogImg.src = imgUrl
        dogContainer.appendChild(dogImg)
    })
};
 
function fetchDogBreeds() {
    return fetch(breedsUrl)
    .then(resp => resp.json())
    .then(json => addDogBreeds(json))
  };

function addDogBreeds(json) {
    const breedUl = document.getElementById("dog-image-container")
    Object.keys(json.message).forEach(breed => {
        const li = document.createElement("li")
        li.innerText = breed
        li.addEventListener(`click`, colorChange)
        breedUl.appendChild(li)
    });
};

function colorChange(event) { 
    event.target.style.color = "purple";
}

// add event listener to drop down
// sort through li's to find first letter 
// match first letter with chosen letter
// only show those matching

  
document.addEventListener('DOMContentLoaded', function () {
    fetchDogs()
    fetchDogBreeds()
});