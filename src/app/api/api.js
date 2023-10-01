export function get(url) {
    if (url.includes("?")) {
        url += "&"
    } else {
        url += "?"
    }
    url += "client_id=64PIOBTa2g"

    return fetch(url)
        .then(response => response.json())
        .catch(error => console.error(error))
}