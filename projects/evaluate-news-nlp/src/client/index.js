import { checkForName } from './js/nameChecker'
import { handleSubmit } from './js/formHandler'

console.log(checkForName);

alert("I EXIST")
console.log("CHANGE!!");

export {
    checkForName,
    handleSubmit
   }

import './styles/resets.scss'
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'

/*const getCloud = async (url = "") => {
    const response = await fetch(url);
    try {
        const newData = await response.json();
        return newData;
    } catch(error) {
        console.log("error", error);
    }
}

app.post('/meaningCloud', backMeaningCloudData);
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