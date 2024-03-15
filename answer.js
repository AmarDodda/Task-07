
//a.) Get all the countries from Asia continent /region using Filter function

var request = new XMLHttpRequest();

request.open("GET","https://restcountries.com/v3.1/all")

request.send();

request.onload = function(){

var res = JSON.parse(request.response)

console.log(res)


const asiaCountries = res.filter(country => country.region === 'Asia');


const asiaCountryNames = asiaCountries.map(country => country.name.common);
console.log(asiaCountryNames);

}


// b.) Get all the countries with a population of less than 2 lakhs using Filter function

var request = new XMLHttpRequest();

request.open("GET", "https://restcountries.com/v3.1/all");

request.send();

request.onload = function(){

    var res = JSON.parse(request.response)
    
    
    const population = res.filter(country => country.population < 200000);
      
    const countryNames = population.map(country => country.name.common);
    console.log(countryNames);
    
}



//c.) Print the following details name, capital, flag, using forEach function

var request = new XMLHttpRequest();

request.open("GET", "https://restcountries.com/v3.1/all");

request.send();

request.onload = function() {
  var res = JSON.parse(request.response);

  res.forEach(country => {
    console.log("Name:", country.name.common);
    console.log("Capital:", country.capital);
    console.log("Flag:", country.flags.png); // Assuming you want the URL of the flag image
    console.log("------------------------");
  });
}


//d.) Print the total population of countries using reduce function

var request = new XMLHttpRequest();

request.open("GET", "https://restcountries.com/v3.1/all");

request.send();

request.onload = function() {
  var res = JSON.parse(request.response);


  var totalPopulation = res.reduce((accumulator, country) => accumulator + country.population, 0);

  console.log("Total population of countries:", totalPopulation);
}


//e.) Print the country that uses US dollars as currency.


var request = new XMLHttpRequest();

request.open("GET", "https://restcountries.com/v3.1/all");

request.send();

request.onload = function() {
  var res = JSON.parse(request.response);

 
  var countriesWithUSD = res.filter(country => country.currencies && country.currencies.hasOwnProperty('USD'));

  if (countriesWithUSD.length > 0) {
    console.log("Countries that use US dollars as currency:", countriesWithUSD.map(country => country.name.common));
  } else {
    console.log("No country uses US dollars as currency.");
  }
}



