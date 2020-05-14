console.log('%c HI', 'color: firebrick')

const imgUrl = 'https://dog.ceo/api/breeds/image/random/4'
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

document.addEventListener('DOMContentLoaded', () => {
  fetch(imgUrl)
    .then(response => response.json())
    .then(json => attachImages(json))

  fetch(breedUrl)
    .then(response => response.json())
    .then(json => addBreeds(json))
 
  document.getElementById('breed-dropdown').addEventListener('change', (e) => {
    filterBreeds(e.target.value);
  })
})

function attachImages(urls) {
  urls.message.forEach((url) => {
    let img = document.createElement('img')
    img.src = url
    document.getElementById('dog-image-container').appendChild(img)
  }) 
}

function addBreeds(data) {
  for (const dog in data.message) {
    let li = document.createElement('li') 
    li.textContent = dog
    li.addEventListener('click', () => {
      li.style.color = 'cornflowerblue'
    })
    document.getElementById('dog-breeds').appendChild(li)
  }
}

function filterBreeds(letter) {
  breeds = document.querySelectorAll('#dog-breeds > li')
  breeds.forEach((breed) => {
    if (breed.textContent[0] != letter) {
      breed.style.display = 'none';
    } else {
      breed.style.display = '';
  }});
}
