function checkForName(inputText) {
    console.log("::: Running checkForName :::", inputText);
    let webAdress = document.getElementById('name').value

    if(webAdress === "") {
        alert("Welcome, Captain!")
        return false;
    } else {return true}
}

export { checkForName }
