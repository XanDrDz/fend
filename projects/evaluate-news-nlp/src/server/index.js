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

/*app.get('/', function (req, res) {
     res.sendFile('dist/index.html')*/
    //res.sendFile(path.resolve('src/client/views/index.html'))
//})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

/*app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})*/

console.log(`Your API key is ${process.env.API_KEY}`);

//GET MEANINGCLOUD DATA
/*const getCloud = async (url = "") => {
    const response = await fetch(url);
    try {
        const newData = await response.json();
        return newData;
    } catch(error) {
        console.log("error", error);
    }
}*/

/*app.post('/meaningCloud', backMeaningCloudData);
async function backMeaningCloudData(req, res){
    const link = req.body.url;
    const url = `https://api.meaningcloud.com/sentiment-2.1?key=${process.env.API_KEY}&lang=en&url=${link}`;
    console.log(url);
    const newData = await getCloud(url);
    const newObj = {
        model : newData.model,
        score_tag : newData.score_tag,
        agreement : newData.agreement,
        subjectivity : newData.subjectivity,
        confidence : newData.confidence,
        irony : newData.irony
    }
    console.log(newObj);
    res.send(newObj);
}*/

/*app.get('/meaningCloud', backMeaningCloudData);
async function backMeaningCloudData(req, res) {
    // Construct URL
    const link = "https://www.linkedin.com/pulse/20-year-olds-journal-oluwarotimi-adesina/";
    const url = `https://api.meaningcloud.com/sentiment-2.1?key=${process.env.API_KEY}&lang=en&url=${link}`;
    console.log(url);
    const newData = await getCloud(url);
    console.log(newData);
    res.send(newData);
}*/


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