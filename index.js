const renderQuestionNumbers = () => {
  clearInput();
  for (let i = 0; i < questionsAnswers.length; i++) {
    let opt = document.createElement("option");
    opt.value = i;
    opt.innerHTML = i + 1;
    dropdown.appendChild(opt);
  }
  dropdown.options[0].selected = true;
};

const optionSelected = () => {
  const selectedValue = document.getElementById("questionNum").value;
  currQuestionNumber = parseInt(selectedValue);
  clearInput();
};

const submitForm = () => {
  checkAnswer(answerBox.value.trim().toLowerCase());
};

const checkAnswer = (answer) => {
  const currQuestion = questionsAnswers[currQuestionNumber];

  if (currQuestion.check(answer)) {
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
};

const clearInput = () => {
  answerBox.value = "";
};

const pubquizQuestion = (answer) => {
  let matching = 0;

  if (answer.includes("smoke")) {
    matching++;
  }

  if (answer.includes("tęczowa") || answer.includes("nocny targ")) {
    matching++;
  }

  if (answer.includes("prosto") || answer.includes("z mostu")) {
    matching++;
  }

  if (answer.includes("lewitacja")) {
    matching++;
  }

  if (answer.includes("pinta")) {
    matching++;
  }

  if (answer.includes("padbar") || answer.includes("pad bar")) {
    matching++;
  }

  return matching >= 3;
};

let currQuestionNumber = 0;
const questionsAnswers = [
  {
    check: (answer) => answer === "trzeba mi wielkiej wody",
    book: "Mistrz i Małgorzata",
  },
  {
    check: (answer) => answer === "koń" || answer === "kon",
    book: "O sztuce",
  },
  {
    check: (answer) => answer.includes("2460"),
    book: "Kolekcja nietypowych zdarzeń",
  },
  {
    check: (answer) => answer === "c",
    book: "Słownik polsko-angielski",
  },
  {
    check: (answer) =>
      (answer.includes("jedz") &&
        answer.includes("módl") &&
        answer.includes("kochaj")) ||
      (answer.includes("eat") &&
        answer.includes("pray") &&
        answer.includes("love")),
    book: "To",
  },
  {
    check: (answer) =>
      (answer.includes("1a") || answer.includes("a1")) &&
      (answer.includes("2c") || answer.includes("c2")) &&
      (answer.includes("3b") || answer.includes("b3")) &&
      (answer.includes("4d") || answer.includes("d4")) &&
      (answer.includes("5e") || answer.includes("e5")) &&
      (answer.includes("6f") || answer.includes("f6")),
    book: "Don Kichote 2",
  },
  {
    check: pubquizQuestion,
    book: "Dzieci Hurina",
  },
  {
    check: (answer) =>
      !answer.includes("a") &&
      !answer.includes("b") &&
      answer.includes("c") &&
      !answer.includes("d") &&
      answer.includes("e") &&
      !answer.includes("f") &&
      !answer.includes("g") &&
      !answer.includes("h") &&
      !answer.includes("i") &&
      !answer.includes("j") &&
      answer.includes("k"),
    book: "Rumunia i Mołdawia",
  },
  {
    check: (answer) => answer === "kiszona cebula",
    book: "89 wierszy",
  },
  {
    check: (answer) => answer === "c",
    book: "Bestiariusz słowiański",
  },
  {
    check: (answer) => answer === "nessun dorma",
    book: "Idiota",
  },
  {
    check: (answer) => answer === "60",
    book: "Cierpliwość wobec Boga",
  },
  {
    check: (answer) => answer === "15",
    book: "Jak mniej myśleć",
  },
  {
    check: (answer) => answer === "b",
    book: "Dzieje sześciu pojęć",
  },
  {
    check: (answer) => answer.replace(/,/g, '').replace(/\s+/g, '') === 'dbac',
    book: "Kobiety",
  },
];
const failMsg = "Niepoprawna odpowiedź, spróbujcie jeszcze raz";
const dropdown = document.getElementById("questionNum");
const answerBox = document.getElementById("inputAnswer");
renderQuestionNumbers();
