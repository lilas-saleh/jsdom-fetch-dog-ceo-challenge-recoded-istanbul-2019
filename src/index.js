console.log('%c HI', 'color: firebrick')

window.addEventListener("DOMContentLoaded", (event) => {
    getImg();
    getString();
    generateAlphabet();
    filterText();
});


function getImg() {
    fetch('https://dog.ceo/api/breeds/image/random/4')
        .then(function (response) {
            return response.json();
        }).then(function (json) {
            for (let i = 0; i < json["message"].length; i++) {
                const dogImages = document.getElementById("dog-image-container");
                const newImage = document.createElement("img");
                newImage.width = "320";
                newImage.height = "320";
                newImage.type = "text/javascript";
                newImage.src = json["message"][i];
                dogImages.appendChild(newImage);
            }
        });
}

function getString() {
    fetch('https://dog.ceo/api/breeds/list/all')
        .then(function (response) {
            return response.json();
        }).then(function (json) {
            for (const key in json["message"]) {
                const dogBreed = document.getElementById("dog-breeds");
                const newListItem = document.createElement("li");
                newListItem.textContent = key;
                newListItem.className = "links";
                newListItem.addEventListener("click", () => {
                    newListItem.style.color = "gray";
                });
                dogBreed.append(newListItem);
            }
        });
}

function generateAlphabet() {
    const dropdown = document.getElementById("breed-dropdown");
    const alpabet = ["e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    for (let z = 0; z < alpabet.length; z++) {
        const newOption = document.createElement("option");
        newOption.value = alpabet[z];
        newOption.textContent = alpabet[z];
        dropdown.appendChild(newOption);


    }
}
function filterText() {
    const listItem = document.getElementsByClassName("links");
    let listItemArray = Array.from(listItem);
    for (let i = 0; i < listItem.length; i++) {
        arrayWords = [];
        let firstLetters = listItem[i].textContent.charAt(0);
        let words = listItem[i].textContent;
        console.log(listItem[i].textContent);
    }
}

