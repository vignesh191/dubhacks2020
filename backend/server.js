const express = require('express');
const fetch = require("node-fetch");
const app = express();

// http://localhost:8000
const PORT = process.env.PORT || 8000;

app.listen(PORT);


app.get('/domestic', (req, res) => {
    const results = fetch('https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=domestic%20violence%20service&inputtype=textquery&fields=formatted_address,name,opening_hours&locationbias=ipbias&key=AIzaSyBTy4elZc3vmAeYUOKVKbORdUAzNba3pY4')
        .then(response => response.json())
        .then(jsonResponse => {
            if (jsonResponse.candidates) {
                console.log(jsonResponse);
                return jsonResponse.candidates.map(candidate => {
                    return {
                        address: candidate.formatted_address,
                        name: candidate.name,
                        hours: candidate.opening_hours
                    }
                })
            }
        })
    res.send(results);
});


fetch('http://localhost:8000/domestic')
    .then(response => {
        if (response.ok) {
            return response.json();
        }
    })
    .then(response => {
        console.log(response);
    })
