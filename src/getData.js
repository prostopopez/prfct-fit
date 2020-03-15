const requestURL = "http://dev-test-black.ru/testTask/data.json";

function sendRequest(method, url, body = null){
    return fetch(url);
}

sendRequest("GET", requestURL)
    .then(data => console.log(data))
    .catch(error => console.log(error));

const body = {
    name: "Gleb",
    age: 21
};