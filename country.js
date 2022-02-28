
const loadCountry = () => {
    console.log('Function connected')
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountry(data))
}

const displayCountry = countries => {

    console.log('anik')
    for (const country of countries) {
        console.log(countries);
        const displayId = document.getElementById('display-area');
        const div = document.createElement('div');
        div.classList.add('display-country')
        div.innerHTML = `              
        <h2>${country.name.common}</h2>
        <p>${country.capital}</p>
        <p>${country.population}</p>
        `
        displayId.appendChild(div)
    }
}

const loadCountryBySearchName = () => {
    const searchId = document.getElementById('search-feild');
    const searchText = searchId.value;
    const url = `https://restcountries.com/v3.1/name/${searchText}`
    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchCountry(data[0]))

}
const displaySearchCountry = country => {
    console.log(country)
    const displayId = document.getElementById('display-area');
    document.getElementById('display-area').textContent = '';
    const div = document.createElement('div');
    div.classList.add('display-country')
    div.innerHTML = `              
        <h2>${country.name.common}</h2>
        <p>${country.capital}</p>
        <p>${country.population}</p>
        <button onclick="displayDetails()" type="button" class="btn btn-info">Show details</button>
        `
    displayId.appendChild(div)
}
