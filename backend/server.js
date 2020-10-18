const express = require('express');
const fetch = require("node-fetch");
const app = express();
const cors = require('cors');
// http://localhost:8000
const PORT = process.env.PORT || 8000;

app.listen(PORT);
app.use(cors());

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

app.get('/substanceabuse', async(req, res) => {
    const response = await fetch('https://maps.googleapis.com/maps/api/place/textsearch/json?query=substance+abuse&key=AIzaSyBTy4elZc3vmAeYUOKVKbORdUAzNba3pY4')
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
    console.log(response);
    res.send(results);
})

app.get('/sexualassault', async(req, res) => {
    const response = await fetch('https://maps.googleapis.com/maps/api/place/textsearch/json?query=sexual+assault&key=AIzaSyBTy4elZc3vmAeYUOKVKbORdUAzNba3pY4')
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

app.get('/homelessness/homelessoutreach', async(req, res) => {
    const response = await fetch('https://maps.googleapis.com/maps/api/place/textsearch/json?query=homeless+outreach&key=AIzaSyBTy4elZc3vmAeYUOKVKbORdUAzNba3pY4')
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

app.get('/homelessness/homelessshelters', async(req, res) => {
    const response = await fetch('https://maps.googleapis.com/maps/api/place/textsearch/json?query=homeless+shelters&key=AIzaSyBTy4elZc3vmAeYUOKVKbORdUAzNba3pY4')
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

app.get('/childabuse', async(req, res) => {
    const response = await fetch('https://maps.googleapis.com/maps/api/place/textsearch/json?query=child+abuse&key=AIzaSyBTy4elZc3vmAeYUOKVKbORdUAzNba3pY4')
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

app.get('/mentalhealth/depression', async(req, res) => {
    const response = await fetch('https://maps.googleapis.com/maps/api/place/textsearch/json?query=depression+therapist&key=AIzaSyBTy4elZc3vmAeYUOKVKbORdUAzNba3pY4')
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

app.get('/mentalhealth/selfharm', async(req, res) => {
    const response = await fetch('https://maps.googleapis.com/maps/api/place/textsearch/json?query=depression+therapist&key=AIzaSyBTy4elZc3vmAeYUOKVKbORdUAzNba3pY4')
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

/*fetch('http://localhost:8000/domestic')
    .then(response => {
        if (response.ok) {
            return response.json();
        }
    })
    .then(response => {
        console.log(response);
    })*/
