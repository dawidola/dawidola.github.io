const renderQuestionNumbers = () => {
    clearInput();
    for (let i = 0; i < questionsAnswers.length; i++) {
        let opt = document.createElement('option');
        opt.value = i;
        opt.innerHTML = i + 1;
        dropdown.appendChild(opt);
    }
    dropdown.options[0].selected = true;
}

const optionSelected = () => {
    const selectedValue = document.getElementById("questionNum").value;
    currQuestionNumber = parseInt(selectedValue);
    clearInput();
}

const submitForm = () => {
    checkAnswer(answerBox.value);
}

const checkAnswer = (answer) => {
    const currQuestion = questionsAnswers[currQuestionNumber];

    if (currQuestion.answer === answer) {
        confirm(currQuestion.book);
        debugger;
        if (currQuestionNumber < questionsAnswers.length - 1) {
            dropdown.options[currQuestionNumber].selected = false;
            currQuestionNumber = currQuestionNumber + 1;
            dropdown.options[currQuestionNumber].selected = true;
        }
    } else {
        confirm(failMsg);
    }
    clearInput();
}

const clearInput = () => {
    answerBox.value = '';
}

let currQuestionNumber = 0;
const questionsAnswers = [
    {
        answer: 'asd',
        book: 'Kobiety'
    },
    {
        answer: '123',
        book: 'Władca pierścieni'
    },
];
const failMsg = 'Niepoprawna odpowiedź, spróbujcie jeszcze raz';
const dropdown = document.getElementById("questionNum");
const answerBox = document.getElementById("inputAnswer");
renderQuestionNumbers();