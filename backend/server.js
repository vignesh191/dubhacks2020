const express = require('express');
const fetch = require("node-fetch");
const app = express();

// http://localhost:8000
const PORT = process.env.PORT || 8000;

app.listen(PORT);


app.get('/domestic', async(req, res) => {
    const response = await fetch('https://maps.googleapis.com/maps/api/place/textsearch/json?query=domestic+violence&key=AIzaSyBTy4elZc3vmAeYUOKVKbORdUAzNba3pY4')
    const jsonResponse = await response.json();
    console.log(jsonResponse);

    res.send(jsonResponse);
})

fetch('http://localhost:8000/domestic')
    .then(response => {
        if (response.ok) {
            return response.json();
        }
    })
    .then(response => {
        console.log(response);
    })
