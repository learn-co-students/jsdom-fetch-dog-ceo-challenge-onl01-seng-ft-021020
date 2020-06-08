console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
let allBreeds = []

document.addEventListener('DOMContentLoaded', function(){
    fetchDogs()
    fetchBreeds()
})

function fetchDogs(){
    return fetch(imgUrl).then(resp => resp.json()).then(json => addImageElements(json))
}

function addImageElements(json) {
    let imagesDiv = document.querySelector("#dog-image-container");
    json.message.forEach(image => {
      let newImageElem = document.createElement('img');
      newImageElem.src = image;
      imagesDiv.appendChild(newImageElem);
    });   
}


function fetchBreeds(){
    return fetch(breedUrl).then(resp => resp.json()).then(json => createBreedsArray(json))
}

function createBreedsArray(json) {
    allBreeds = Object.keys(json.message)
    listBreeds(allBreeds);
  }
  
  function listBreeds(breeds) {
    let dogBreedList = document.getElementById("dog-breeds");
    breeds.forEach(breed => {
      let newLiElem = document.createElement('li');
      newLiElem.textContent = breed;
      newLiElem.addEventListener("click", changeColor)
    
      dogBreedList.appendChild(newLiElem);
    })
  }

  function changeColor(event){
    event.target.style.color = 'red'
  }

  function filterBreed (){
      
  }