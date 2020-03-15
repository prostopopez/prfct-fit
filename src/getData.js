const requestURL = "http://dev-test-black.ru/testTask/data.json";

function sendRequest(method, url, body = null){
    return fetch(url).then(response => {
        if(response.ok) {
            return response.json();
        }
        return response.json().then( error => {
            const e = new Error("Ошибка");
            e.data = error;
            throw e;
        });
    });
}

let serverResponse = [];
let userData = {};
let articleData = [];

sendRequest("GET", requestURL)
    .then(function(data) {
        for(let i in Object.values(data)) {
            serverResponse.push(Object.values(data)[i]);
        }

        for (let j in serverResponse[0]) {
            userData[j] = serverResponse[0][j];
        };

        articleData = serverResponse[1].slice();
    })
    .catch(error => console.log(error));

console.log(serverResponse, userData, articleData);