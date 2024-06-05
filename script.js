var numOfTrials = +prompt("Ishlamoqchi bo'lgan misollar sonini kiriting:");
var correctAnswers = 0;

for (var i = 0; i < numOfTrials; i++) {
    var num1 = Math.floor(Math.random() * 10) + 1; // 1 dan 10 gacha tasodifiy sonni yarating
    var num2 = Math.floor(Math.random() * 10) + 1;
    var operation = ['+', '-', '*'][Math.floor(Math.random() * 3)]; // Tasodifiy operatsiyani tanlang

    var answer = +prompt("Сколько будет " + num1 + " " + operation + " " + num2 + "?");

    // To'g'ri javobni hisoblang
    var correctResult;
    switch (operation) {
        case '+':
            correctResult = num1 + num2;
            break;
        case '-':
            correctResult = num1 - num2;
            break;
        case '*':
            correctResult = num1 * num2;
            break;
    }

    if (answer === correctResult) {
        correctAnswers++;
        console.log("Sizning javobingiz to'g'ri!");
    } else {
        console.log("Sizning javobingiz noto'g'ri! To'g'ri javob: " + correctResult);
    }
}

console.log("O'yin tugadi! To'g'ri javoblar: " + correctAnswers + "dan" + numOfTrials);