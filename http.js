// format of a typical API call, http request

const httpRequest = {
    // describe destination server
    host: 'localhosot',
    port: 8080,
    // describe purpose of requests
    method: 'POST', //GET(retrieve from server), POST(provide data to server) DELETE, ect
    // domain/RESOURCES/parameters
    path: '/payments',
    // collection of key-value pairs - defines body as json 
    headers: {
        'content-type': 'application/json',
        'content-length': 51,
    },
    // data request is sending to server
    body: '{"data": "This is a piece of data in JSON format."}'
}

const httpResponse = {
    statusCode: 200, //404 means not found 
    headers: {
        'acess-control-allow-origin': "https://www.algoexpert.io",
        'content-type': 'application/json'
    },
    body: '{}'
}
