const divRootEl = document.getElementById("root");
const fetchButtonEl = document.createElement("button");
const listEl = document.createElement("ul");
const listItemEl = document.createElement("li");
const imageEl = document.createElement("img");

const getData = () => {
  const URL = `https://dog.ceo/api/breeds/image/random`;
  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      const imageSource = data.message;
      setImageAttribute(imageSource);
    })
    .catch((err) => alert(err));
};

const setImageAttribute = (src) => {
  imageEl.setAttribute("src", src);
  imageEl.setAttribute("alt", "Image of a dog");
  imageEl.setAttribute("width", 350);
  imageEl.setAttribute("height", 350);
};

fetchButtonEl.innerText = "Change Image";
fetchButtonEl.addEventListener("click", () => {
  getData();
});

listItemEl.appendChild(imageEl);
listEl.appendChild(listItemEl);
divRootEl.appendChild(listEl);
divRootEl.append(fetchButtonEl);

window.onload = getData();
