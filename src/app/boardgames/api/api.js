export function get(url) {
    return fetch(url)
        .then(response => response.text())
        .then(text => new window.DOMParser().parseFromString(text, 'text/xml'))
}