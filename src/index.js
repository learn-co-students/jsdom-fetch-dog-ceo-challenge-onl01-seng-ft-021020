console.log("%c HI", "color: firebrick");

document.addEventListener("DOMContentLoaded", function () {
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
  const breedUrl = "https://dog.ceo/api/breeds/list/all";
  const targetDiv = document.getElementById("dog-image-container");
  const targetUl = document.getElementById("dog-breeds");
  const select = document.getElementById("breed-dropdown");

  fetch(imgUrl)
    .then((response) => response.json())
    .then((json) => addImageToDom(json));

 let allBreedsObject;
  fetch(breedUrl)
    .then((response) => response.json())
    .then((json) => {
      listAllBreeds(json);
      allBreedsObject = json;
    });

  select.addEventListener("change", function selectDogsByLetter() {
    targetUl.innerHTML = "";
    Object.keys(allBreedsObject.message)
      .filter((breed) => breed[0] == this.value)
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
    imgArray.forEach((element) => {
      let img = document.createElement("img");
      img.src = element;
      img.alt = "a dog image";
      img.width = 300;
      targetDiv.appendChild(img);
    });
  }
});
