console.log("%c HI", "color: firebrick");

document.addEventListener("DOMContentLoaded", function () {
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
  const breedUrl = "https://dog.ceo/api/breeds/list/all";
  const targetDiv = document.getElementById("dog-image-container");
  const targetUl = document.getElementById("dog-breeds");
  const select = document.getElementById("breed-dropdown");
  let allBreedsObject;

  fetch(imgUrl)
    .then((response) => response.json())
    .then((json) => addImageToDom(json));

 
  fetch(breedUrl)
    .then((response) => response.json())
    .then((json) => {
      listAllBreeds(json);
      allBreedsObject = json;
    });

  select.addEventListener("change", function selectDogsByLetter() {
    targetUl.innerHTML = "";
    Object.keys(allBreedsObject.message)
      .filter((breed) =>{
        return this.value ? (breed[0] == this.value) : true //if this value is the placeholder option return all dogs
      })
      .forEach(createDogLi);
  });

  function listAllBreeds({ message: objectOfDogs } = {}) {
    Object.keys(objectOfDogs).forEach(createDogLi);
  }

  function createDogLi(breed) {
    let li = document.createElement("li");
    li.innerText = breed;
    li.style.cursor = "pointer";
    li.addEventListener("click", changeColor);
    targetUl.appendChild(li);
  }

  function changeColor() {
    this.style.color = this.style.color == "red" ? "black" : "red";
  }

  function addImageToDom({ message: imgArray } = {}) {
    imgArray.forEach((url) => {
      let img = document.createElement("img");
      img.src = url;
      img.alt = "a dog image";
      img.width = 300;
      targetDiv.appendChild(img);
    });
  }
});
