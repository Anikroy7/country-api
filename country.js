
const loadCountry = () => {
    console.log('Function connected')
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountry(data))
}

const displayCountry = countries => {

    for (const country of countries) {
        console.log(country);

    }
}