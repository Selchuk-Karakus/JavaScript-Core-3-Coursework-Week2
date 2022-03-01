const paragraphEl = document.getElementById("greeting-text");

const getData = () => {
  const URL = `https://codeyourfuture.herokuapp.com/api/greetings`;

  fetch(URL)
    .then(function (response) {
      return response.text();
    })
    .then(function (greeting) {
      paragraphEl.innerText = greeting;
    })
    .catch((err) => alert(err));
};

window.onload = getData();
