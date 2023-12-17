document.querySelector('.buttonImg').addEventListener('click', function(event) {
    var answerElement = document.getElementById('answer');
    var buttonPlusElement = document.getElementById('buttonPlus');
    var buttonMinusElement = document.getElementById('buttonMinus');

    if (answerElement.style.display === 'none') {
        answerElement.style.display = 'block';
        buttonPlusElement.style.display = 'none';
        buttonMinusElement.style.display = 'block';
    } else {
        answerElement.style.display = 'none';
        buttonPlusElement.style.display = 'block';
        buttonMinusElement.style.display = 'none';
    }
});