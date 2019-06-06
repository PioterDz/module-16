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
  .then(showCountriesList)
  .catch(error => {
    wrongInputStatementCountry();
  })
}

function showCountriesList(resp) {
  countriesList.innerHTML = '';
  console.log(item.name);
  var filteredArrayForCountries = resp.filter(item => item.name.includes(countryName));

  filteredArrayForCountries.forEach(function(item) {
    if (item.name.includes(countryName)) {
      var liEl = document.createElement('li');
      liEl.innerText = item.name;
      countriesList.appendChild(liEl);
    }
  });
}

//  DRUGI SPOSÓB

// function showCountriesList(resp) {
//   countriesList.innerHTML = '';

//   resp.forEach(function(item) {
//     if (item.name.includes(countryName)) {
//       var liEl = document.createElement('li');
//       liEl.innerText = item.name;
//       countriesList.appendChild(liEl);
//     }
//   });
// }

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
    wrongInputStatementCurrency();
  })
}

  function showCurrencyList(resp) {
    currencyList.innerHTML = '';
    var filteredArray = resp.filter(item => item.currencies.length === 1);

    filteredArray.forEach(function(item) {
      secLi = document.createElement('li');
      secLi.innerText = item.name;
      currencyList.appendChild(secLi);
    });
  }

  // SPOSÓB DRUGI

  // function showCurrencyList(resp) {
  //   currencyList.innerHTML = '';
    
  //   resp.forEach(function(item) {
  //     if (item.currencies.length === 1) {
  //       secLi = document.createElement('li');
  //       secLi.innerText = item.name;
  //       currencyList.appendChild(secLi);
  //     }

  //   });
  // }

  function wrongInputStatementCountry() {
    liEl = document.createElement('li');
    countriesList.innerHTML = '';
    liEl.innerText = 'Something went wrong. Try again.';
    countriesList.appendChild(liEl);
  }

  function wrongInputStatementCurrency() {
    secLi = document.createElement('li');
    currencyList.innerHTML = '';
    secLi.innerText = 'Something went wrong. Try again.';
    currencyList.appendChild(secLi);
  }
  


