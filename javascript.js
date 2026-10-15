
const questions = [
    {
        que: "Which of the following is a markup language?",
        a: "HTML",
        b: "CSS",
        c: "JavaScript",
        d: "PHP",
        correct: "a"
    },
    {
        que: "In which year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "None of the above",
        correct: "b"
    },
    {
        que: "What does CSS stand for?",
        a: "Computer Style Sheets",
        b: "Cascading Style Sheets",
        c: "Creative Style System",
        d: "Colorful Style Sheets",
        correct: "b"
    }
];

let index = 0;
let right = 0;

const quesBox = document.getElementById("quesbox");
const options = document.querySelectorAll('input[name="option"]');
const nextBtn = document.getElementById("nextBtn");
const feedback = document.getElementById("feedback");
const quiz = document.getElementById("quiz");
const result = document.getElementById("result");
const score = document.getElementById("score");
const restartBtn = document.getElementById("restartBtn");

function loadQuestion() {
    const data = questions[index];

    quesBox.innerText =
        `${index + 1}) ${data.que}`;

    document.getElementById("label1").innerText = data.a;
    document.getElementById("label2").innerText = data.b;
    document.getElementById("label3").innerText = data.c;
    document.getElementById("label4").innerText = data.d;

    options.forEach(option => {
        option.checked = false;
    });

    feedback.innerText = "";

    nextBtn.innerText =
        index === questions.length - 1 ? "Submit" : "Next";
}

function submitQuiz() {
    const selected = document.querySelector(
        'input[name="option"]:checked'
    );

    if (!selected) {
        feedback.innerText = "Please select an answer!";
        feedback.style.color = "red";
        return;
    }

    if (selected.value === questions[index].correct) {
        right++;
    }

    index++;

    if (index < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    quiz.hidden = true;
    result.hidden = false;

    score.innerText =
        `Your score: ${right} / ${questions.length}`;
}

function restartQuiz() {
    index = 0;
    right = 0;

    result.hidden = true;
    quiz.hidden = false;

    loadQuestion();
}

nextBtn.addEventListener("click", submitQuiz);
restartBtn.addEventListener("click", restartQuiz);

// Start the quiz
loadQuestion();
