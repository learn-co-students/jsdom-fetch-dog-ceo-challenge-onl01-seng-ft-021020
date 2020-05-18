console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = "https://dog.ceo/api/breeds/list/all";

let allBreeds = [];
let filteredBreeds = [];

function getDogImages() {
    return fetch(imgUrl).then(resp => resp.json()).then(json => addImageElements(json));
}

function addImageElements(json) {
    let imagesDiv = document.getElementById("dog-image-container");
    json.message.forEach(image => {
        let newImageElement = document.createElement("img");
        newImageElement.src = image;
        imagesDiv.appendChild(newImageElement);
    });
}

function getDogBreeds() {
    return fetch(breedUrl).then(resp => resp.json()).then(json => createBreedsArray(json));
}

function createBreedsArray(json) {
    allBreeds = Object.keys(json.message);
    listBreeds(allBreeds);
}

function listBreeds(breeds) {
    let dogBreedList = document.getElementById("dog-breeds");
    breeds.forEach(breed => {
        let newLi = document.createElement("li");
        newLi.textContent = breed;
        newLi.addEventListener("click", changeColor);
        dogBreedList.appendChild(newLi);
    })
}

function changeColor(event) {
    event.target.style.color = "blue";
}

function dropdownFiltering() {
    const dropDown = document.getElementById("breed-dropdown");
    const dogBreedList = document.getElementById("dog-breeds");
    dropDown.addEventListener("change", function(){
        while (dogBreedList.firstChild) dogBreedList.removeChild(dogBreedList.firstChild);
        filterBreeds(this.value);
    })
}

function filterBreeds(letter) {
    filteredBreeds = [];
    filteredBreeds = allBreeds.filter(breed => breed[0] === letter);
    listBreeds(filteredBreeds);
}

document.addEventListener("DOMContentLoaded", function(){
    getDogImages();
    getDogBreeds();
    dropdownFiltering();
})