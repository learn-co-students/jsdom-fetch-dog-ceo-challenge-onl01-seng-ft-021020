console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

function fetchContent() {
    return (fetch(imgUrl)
      .then(resp => resp.json())
      .then(json => renderContent(json["message"])));
  
  }

  function renderContent(json) {
    const main = document.querySelector('#dog-image-container')
    json.forEach(img => {
      const h2 = document.createElement('h2')
      h2.innerHTML = `<img src=${img}>`
      main.appendChild(h2)
    })
  }

  function fetchBreed() {
    return (fetch(breedUrl)
      .then(resp => resp.json())
      .then(json => renderBreeds(json)));
  
  }

  function renderBreeds(json) {

    const main = document.querySelector('#dog-breeds')
    main.innerHTML = ""
    let letter = document.querySelector('#breed-dropdown').value

    for (const [key, value] of Object.entries(json["message"])) {
        
        if(key[0] != letter){
            continue
        }

        
   
        const h2 = document.createElement('h1')
        h2.innerHTML = `<li>${key}<ul>`

        

        value.forEach(val => {
            h2.innerHTML += `<li>${val}</li>`


        })

        h2.innerHTML += `</ui></li>`
        main.appendChild(h2)
        h2.addEventListener("onClick", () => {
            h2.style.color = "magenta";
            console.log("hey")
        })


        
      }
  }

  function changeColor(){
    var list = document.getElementsByTagName("li");
    console.log(list.length)
    for (var i = 0; i < list.length; i++) {
        console.log(list[i]); 
    }
    for (const [key, value] of Object.entries(list)) {
        console.log(key)
        console.log(value)
        value.addEventListener("onClick", () => {
            value.style.color = "magenta";
        })
    }
   

  }

document.addEventListener('DOMContentLoaded', function() {
    
    fetchBreed()
    changeColor()
    fetchContent()
    document.querySelector('#breed-dropdown').addEventListener("change", () => {
        console.log( document.querySelector('#breed-dropdown').value)
        fetchBreed()
    });
   
  })

