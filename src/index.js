console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
let breedList = document.getElementById("dog-breeds")


function getDogImages() {
    fetch(imgUrl)
    .then(resp => resp.json())
    .then(json => {
        json.message.forEach(image => renderDogImage(image))
    });
}

function renderDogImage(json) {
    let dogImgContainer = document.getElementById("dog-image-container")
    let newImg = document.createElement('img');
    newImg.src = json
    dogImgContainer.appendChild(newImg);
}

function getDogBreeds() {
    fetch(breedUrl)
    .then(resp => resp.json())
    .then(json => {
        breeds = Object.keys(json.message);
        renderDogBreed(breeds)
    });
}

function renderDogBreed(breeds) {
    let breedList = document.getElementById("dog-breeds")
    removeAllBreeds(breedList)
    breeds.forEach(breed => addBreed(breed))
}

function removeAllBreeds(el) {
    let child = el.lastElementChild
    while (child) {
        el.removeChild(child)
        child = el.lastElementChild
    }
}

function addBreed(breed) {
    let breedItem = document.createElement('li')
    let breedList = document.getElementById("dog-breeds")
    breedItem.innerText = breed
    breedList.appendChild(breedItem)
    breedItem.addEventListener('click', changeColor)
}

function changeColor(event) {
    event.target.style.color = 'purple';
}

function  breedLetterListener() {
    let breedSelector = document.getElementById("breed-dropdown")
    breedSelector.addEventListener('change', function(event) {
        filterBreeds(event.target.value)
    })
}

function filterBreeds(letter) {
    renderDogBreed(breeds.filter(breed => breed.startsWith(letter)))
}

document.addEventListener('DOMContentLoaded', function() {
    getDogImages()
    getDogBreeds()
    breedLetterListener()
  })