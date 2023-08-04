


var quizContainer = document.getElementById("quiz");
var prevButton = document.getElementById("prevBtn");
var nextButton = document.getElementById("nextBtn");
var submitButton = document.getElementById("submitBtn");
var resultContainer = document.getElementById("result");

var quizData = [
 
    {
        question: "What is the capital city of France?",
        options: ["Paris", "London", "Rome", "Madrid"],
        answer: "Paris"
    },
    {
        question: "Which is the largest planet in our solar system?",
        options: ["Jupiter", "Saturn", "Mars", "Earth"],
        answer: "Jupiter"
    },
    {
        question: "What is the chemical symbol for gold?",
        options: ["Au", "Ag", "Fe", "Hg"],
        answer: "Au"
    },
    {
        question: "Which country is famous for the Great Wall?",
        options: ["China", "India", "Brazil", "USA"],
        answer: "China"
    },
    {
        question: "Who painted the Mona Lisa?",
        options: ["Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh", "Michelangelo"],
        answer: "Leonardo da Vinci"
    },
    {
        question: "What is the largest ocean on Earth?",
        options: ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Arctic Ocean"],
        answer: "Pacific Ocean"
    },
    {
        question: "Which is the highest mountain in the world?",
        options: ["Mount Everest", "K2", "Kangchenjunga", "Makalu"],
        answer: "Mount Everest"
    },
    {
        question: "Who wrote the play 'Romeo and Juliet'?",
        options: ["William Shakespeare", "Jane Austen", "Charles Dickens", "F. Scott Fitzgerald"],
        answer: "William Shakespeare"
    },
    {
        question: "What is the symbol for the chemical element oxygen?",
        options: ["O", "C", "H", "N"],
        answer: "O"
    },
    {
        question: "Which country is known for producing the most coffee in the world?",
        options: ["Brazil", "Colombia", "Vietnam", "Ethiopia"],
        answer: "Brazil"
    },
    {
        question: "Who is the author of the Harry Potter book series?",
        options: ["J.K. Rowling", "Stephen King", "George R.R. Martin", "Dan Brown"],
        answer: "J.K. Rowling"
    },
    {
        question: "What is the largest desert in the world?",
        options: ["Sahara Desert", "Gobi Desert", "Arabian Desert", "Antarctic Desert"],
        answer: "Sahara Desert"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Mars", "Venus", "Mercury", "Neptune"],
        answer: "Mars"
    },
    {
        question: "Who is the Greek god of thunder?",
        options: ["Zeus", "Poseidon", "Hades", "Apollo"],
        answer: "Zeus"
    },
    {
        question: "What is the largest bird in the world?",
        options: ["Ostrich", "Emu", "Albatross", "Eagle"],
        answer: "Ostrich"
    },
    {
        question: "Who painted the famous artwork 'The Starry Night'?",
        options: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Claude Monet"],
        answer: "Vincent van Gogh"
    },
    {
        question: "Which country is famous for the Taj Mahal?",
        options: ["India", "Egypt", "China", "Italy"],
        answer: "India"
    },
    {
        question: "What is the chemical symbol for silver?",
        options: ["Ag", "Au", "Pt", "Cu"],
        answer: "Ag"
    },
    {
        question: "Who wrote the play 'Hamlet'?",
        options: ["William Shakespeare", "Jane Austen", "Charles Dickens", "F. Scott Fitzgerald"],
        answer: "William Shakespeare"
    },
    {
        question: "What is the tallest mammal in the world?",
        options: ["Giraffe", "Elephant", "Horse", "Kangaroo"],
        answer: "Giraffe"
    },
    {
        question: "Which country is known as the Land of the Rising Sun?",
        options: ["Japan", "China", "South Korea", "Thailand"],
        answer: "Japan"
    },
    {
        question: "Who is the main protagonist in the 'Lord of the Rings' trilogy?",
        options: ["Frodo Baggins", "Gandalf", "Aragorn", "Sauron"],
        answer: "Frodo Baggins"
    },
    {
        question: "What is the symbol for the chemical element carbon?",
        options: ["C", "O", "H", "N"],
        answer: "C"
    },
    {
        question: "Which is the longest river in the world?",
        options: ["Nile River", "Amazon River", "Yangtze River", "Mississippi River"],
        answer: "Nile River"
    },
    {
        question: "Who painted the famous artwork 'The Last Supper'?",
        options: ["Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh", "Michelangelo"],
        answer: "Leonardo da Vinci"
    },
    {
        question: "What is the largest continent in the world?",
        options: ["Asia", "Africa", "North America", "Europe"],
        answer: "Asia"
    },
    {
        question: "Which is the coldest continent on Earth?",
        options: ["Antarctica", "Asia", "Australia", "South America"],
        answer: "Antarctica"
    },
    {
        question: "Who is the author of the 'Pride and Prejudice' novel?",
        options: ["Jane Austen", "George Orwell", "Charles Dickens", "Emily Bronte"],
        answer: "Jane Austen"
    },
    {
        question: "What is the symbol for the chemical element hydrogen?",
        options: ["H", "C", "O", "N"],
        answer: "H"
    },
    {
        question: "Which country is famous for the Eiffel Tower?",
        options: ["France", "Italy", "Spain", "Germany"],
        answer: "France"
    }


];

var currentPage = 0;
var questionsPerPage = 10;
var userAnswers = [];

function buildQuiz() {
    var output = "";

    var start = currentPage * questionsPerPage;
    var end = start + questionsPerPage;
    var questions = quizData.slice(start, end);

    questions.forEach(function (question, index) {
        var options = "";

        question.options.forEach(function (option) {
            options += `<label><input type="radio" name="question${index}" value="${option}" ${getUserAnswer(index) === option ? "checked" : ""}> ${option}</label><br>`;
        });

        output += `
            <div class="question">
                <h3>${question.question}</h3>
                ${options}
            </div>
        `;
    });

    quizContainer.innerHTML = output;
}

function getUserAnswer(questionIndex) {
    return userAnswers[questionIndex];
}

function setUserAnswer(questionIndex, answer) {
    userAnswers[questionIndex] = answer;
}

function showResult() {
    var score = 0;

    quizData.forEach(function (question, index) {
        var selectedOption = getUserAnswer(index);

        if (selectedOption && selectedOption === question.answer) {
            score++;
        }
    });

    var resultText = `You scored ${score} out of ${quizData.length}!`;
    resultContainer.textContent = resultText;
}

function updatePageButtons() {
    prevButton.disabled = currentPage === 0;
    nextButton.disabled = currentPage === Math.ceil(quizData.length / questionsPerPage) - 1;
    submitButton.style.display = currentPage === Math.ceil(quizData.length / questionsPerPage) - 1 ? "inline-block" : "none";
}

prevButton.addEventListener("click", function () {
    currentPage--;
    buildQuiz();
    updatePageButtons();
});

nextButton.addEventListener("click", function () {
    currentPage++;
    buildQuiz();
    updatePageButtons();
});

submitButton.addEventListener("click", function () {
    showResult();
});

quizContainer.addEventListener("change", function (event) {
    var selectedOption = event.target.value;
    var questionIndex = event.target.name.substring(8);

    setUserAnswer(questionIndex, selectedOption);
});

buildQuiz();
updatePageButtons();







