const questionOutput = document.getElementById("questionOutput");
const responseOutputs = document.getElementById("responseOutputs");

var questionCount = 0;

var sport = 0;          //1
var reading = 0;        //2
var diy = 0;            //3


var questions = [
    { q: "Do you like being outdoors?", a: "Yes", b: "No", cat: 1 },
    { q: "Do you like being indoors?", a: "Yes", b: "No", cat: 1 },
    { q: "Do you like sitting in peace?", a: "Yes", b: "No", cat: 2 },
];

loadQuestion();

function loadQuestion() {
    questionOutput.innerHTML = questions[questionCount].q;
    responseOutputs.innerHTML =
        `<button onclick="getResponse(${questions[questionCount].cat},'y')">Yes</button>
        <button onclick="getResponse(${questions[questionCount].cat},'n')">No</button>`;
}

function getResponse(cat, option) {
    if (option == 'y') {
        if (cat == 1) {
            sport++;
        } else if (cat == 2) {
            reading++;
        } else if (cat == 3) {
            diy++;
        }
    }
    if (questionCount < questions.length - 1) {
        questionCount++;
        loadQuestion();
    } else {
        calcResults();
    }
}

function calcResults() {
    responseOutputs.innerHTML = "";
    questionOutput.innerHTML = `You have finished the quiz and the results show that you are interested in: <br> 
        Sport: ${sport} <br></br>
        Reading: ${reading} <br></br>
        DIY: ${diy} <br></br>`;
}