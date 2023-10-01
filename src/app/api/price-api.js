export const exchangeRate = () => {
    return fetch('https://api.exchangerate.host/latest?symbols=EUR,USD')
        .then(response => response.json())
        .then(response => response.rates.USD)
        .catch(error => console.error(error))
}