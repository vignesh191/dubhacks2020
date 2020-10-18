const express = require('express');
const fetch = require("node-fetch");
const app = express();
const cors = require('cors');

// http://localhost:8000
const PORT = process.env.PORT || 8000;

app.use(cors());

app.listen(PORT);


app.get('/domestic', async(req, res) => {
    const response = await fetch('https://maps.googleapis.com/maps/api/place/textsearch/json?query=domestic+violence&key=AIzaSyBTy4elZc3vmAeYUOKVKbORdUAzNba3pY4')
    const jsonResponse = await response.json();
    let results;

    if (jsonResponse.results) {
        results = jsonResponse.results.map(place => {
            return {
                name: place.name,
                hours: place.opening_hours,
                address: place.formatted_address
            }
        })

        for (let i = 0; i < jsonResponse.results.length; i++) {
            const placeId = jsonResponse.results[i].place_id;
            const detailResponse = await fetch(`https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=formatted_phone_number,website&key=AIzaSyBTy4elZc3vmAeYUOKVKbORdUAzNba3pY4`);
            const jsonDetailResponse = await detailResponse.json();

            if (jsonDetailResponse.result) {
                results[i].phone = jsonDetailResponse.result.formatted_phone_number;
                results[i].website = jsonDetailResponse.result.website;
            }
        }
    
    }

    res.send(results);
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
