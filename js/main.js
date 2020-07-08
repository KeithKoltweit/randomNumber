function randomNum () {
    var randomNum = Math.floor((Math.random() * 100) + 1);
    document.getElementById('number').value = randomNum;
}