'use strict'

console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

let submitbtn = document.getElementById('submit');

submitbtn.addEventListener('click', () => {
  let apiImage = document.getElementById('gif');
  let userInput = document.getElementById("type-of-gif").value;
  let apiKey = 'F3PJP0CSLafPf720AJMNpaqYSL3T4oAA';

  fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${apiKey}&s=${userInput}`, { mode: "cors" })
    .then((res) => {return res.json()})
    .then((response) => {
      console.log(response);
      apiImage.src = response.data.images.original.url;
    }).catch((err) => {
    console.log(err);
    });
});