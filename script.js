'use strict';

const countriesContainer = document.querySelector('.countries');

const renderCountry = function (data, className = '') {
  const html = `
  <article class="country ${className}">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)} people</p>
      <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
      <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
    </div>
  </article>`;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const getCountryData = async function (country) {
  const res = await fetch(`https://restcountries.eu/rest/v2/name/${country}`);
  const data1 = await res.json();
  renderCountry(data1[0]);
};

//getCountryData('Sri lanka');

document.querySelector('.check').addEventListener('click', function () {
  let co = document.querySelector('.Country').value;
  //console.log(co);
  getCountryData(co);
});
