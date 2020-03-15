const requestURL = "http://dev-test-black.ru/testTask/data.json";

function sendRequest(method, url){
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

let i = 0;

sendRequest("GET", requestURL)
    .then(function(data) {
        for (i in Object.values(data))
            serverResponse.push(Object.values(data)[i]);
        for (i in serverResponse[0])
            userData[i] = serverResponse[0][i];
        for (i in serverResponse[1])
            articleData[i] = serverResponse[1][i];
        return userData;
    })
    .catch(error => console.log(error));

console.log(sendRequest("GET", requestURL));