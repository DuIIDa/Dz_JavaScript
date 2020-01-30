'use strict'

const isNumber = (n) => {
    return !isNaN(parseFloat(n)) && isFinite(n) && n > 0 && n <= 100;
};

const errorInput = (data) => {
    data = prompt('Введите число от 1 до 100!)');
    return !isNumber(data) ? errorInput() : data;
};

const random = (max, min) => {
    return Math.floor(Math.random() * (max - min)) + min;
};

const game = () => {
    let gussedNumber = random(100, 1);

    const gameProc = () => {
        let replay;
        let guessableNumber = prompt('Угадайте число от 1 до  100!)');

        if(!guessableNumber){
            return 0;
        }

        if(!isNumber(guessableNumber)){
            guessableNumber = errorInput();
        }

        if(guessableNumber > gussedNumber) {
            alert('Загаданное число меньше!');
            gameProc();
        }else if(guessableNumber < gussedNumber) {
            alert('Загаданное число больше!');
            gameProc();
        }else {
            replay = confirm('Поздравляем, вы угодали число, хотите продолжить?!)))');
            if(replay){
                game();
            }
        }


    };

    gameProc();

};

game();