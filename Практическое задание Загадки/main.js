var riddle = {
    question: 'Висит груша нельзя скушать',
    correctAnswer: 'лампочка',
    hints: ['это съедобное', 'это фрукт'],
    tries: 3,
    checkAnswer(answer) {
        // TODO: написать логику проверки правильного ответа
        // alert для пользователя, console.log()
        if (answer.toLowerCase() === riddle.correctAnswer) return alert('Правильный ответ');
        this.tries--;
        if (this.tries === 0) return alert('Игра окончена');

        return alert(`Неправильный ответ. Подсказка: ${this.hints.pop()}`);
    },
}

window.onload = function() {
    document.getElementById('riddle').innerText = riddle.question;
}

function check() {
    var input = document.getElementsByTagName('input')[0];

    var guessedAnswer = input.value;

    if (guessedAnswer) {
        // TODO: вызвать функцию checkAnswer у объекта загадки, передав туда ответ
        riddle.checkAnswer(guessedAnswer);
    }
}