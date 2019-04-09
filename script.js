var url = 'https://restcountries.eu/rest/v1/name/';
var countriesList = document.getElementById('countries');
var currencyURL = 'https://restcountries.eu/rest/v2/currency/';
var currencyList = document.getElementById('currency');

document.getElementById('search').addEventListener('click', searchCountries);
document.getElementById('search-currency').addEventListener('click', searchCurrency);

function searchCountries() {
  var countryName = document.getElementById('country-name').value;
  if(!countryName.length) {
    countryName = 'Poland';
  }

  fetch(url + countryName, { cache: "no-store" })
  .then(function(resp) {
    return resp.json();
  })
  .then(showCountriesList); 

}

function showCountriesList(resp) {
  countriesList.innerHTML = '';
  resp.forEach(function(item) {
    var liEl = document.createElement('li');
    liEl.innerText = item.name;
    countriesList.appendChild(liEl);
  });
}

function searchCurrency() {
  var currencyName = document.getElementById('currency-name').value;
  if(!currencyName.length) {
    currencyName = 'PLN';
  }

  fetch(currencyURL + currencyName, { cache: "no-store" })

    .then(function(resp) {
      return resp.json();
    })
    .then(showCurrencyList)
    .catch(error => {
      wrongInputStatement();
    })
}

var liSecEl = document.createElement('li');

  function showCurrencyList(resp) {
    currencyList.innerHTML = '';
    resp.forEach(function(item) {
      liSecEl.innerText = item.name;
      currencyList.appendChild(liSecEl);
    });
  }

  function wrongInputStatement() {
    currencyList.innerHTML = '';
    liSecEl.innerText = 'You had just written bullshit here. Please try again';
    currencyList.appendChild(liSecEl);
  }
  


