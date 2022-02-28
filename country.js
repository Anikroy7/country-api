
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