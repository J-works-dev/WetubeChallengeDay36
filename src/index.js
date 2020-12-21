import "./styles.css";

const API_URL = "https://api.coinpaprika.com/v1/tickers";

const progress = document.querySelector(".progress");

progress.innerHTML = "Finding coins.....";
// let coins = {};

fetch(API_URL)
  .then((response) => response.json())
  .then((data) => {
    const { name, quotes } = data;
  })
  .then((data) => {
    const { USD } = data;
  })
  .then((data) => {
    const { price } = data;
    progress.innerHTML = `Name: ${name}, Price: ${price}`;
  })
  .catch((e) => {
    console.log(e);
    progress.innerHTML = "Can't find coins!";
  });
