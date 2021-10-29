function convert() {
    var userInput = document.querySelector('#user-input').value;

    const url = 'https://api.funtranslations.com/translate/pirate.json?text=';
    fetch(url + userInput)
        .then(response => response.json())
        .then(data => document.querySelector('#conversion-output').innerText = userInput);

}

function clearInput() {
    document.querySelector('#user-input').value = '';
    document.querySelector('#conversion-output').innerText = '';
}