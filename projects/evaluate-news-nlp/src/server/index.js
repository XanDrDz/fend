const dotenv = require('dotenv');
dotenv.config();
var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const cors = require('cors')
const fetch = require('node-fetch')
const bodyParser = require('body-parser');

dotenv.config();

const app = express()

app.use(cors())

app.use(express.static('dist'))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));


console.log(__dirname)



// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})


console.log(`Your API key is ${process.env.API_KEY}`);




app.post("/test", async function (req, res) {
    const app_key = process.env.API_KEY
    const apiUrl = `https://api.meaningcloud.com/sentiment-2.1?key=${app_key}&url=${req.body.url}&lang=en`
    let response = await fetch(apiUrl)
    let data = await response.json()
    
    const superdata = {}
    superdata.polarity = data.score_tag
    superdata.agreement = data.agreement
    superdata.irony = data.irony
    superdata.subjectivity = data.subjectivity
    superdata.confidence = data.confidence
    res.send(superdata)
})