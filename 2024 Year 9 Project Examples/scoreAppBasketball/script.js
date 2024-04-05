const teamAScoreOutput = document.getElementById("teamAScoreOutput");
const teamBScoreOutput = document.getElementById("teamBScoreOutput");
const teamATable = document.getElementById("teamATable");
const teamBTable = document.getElementById("teamBTable");


teamAScore = 0;
teamBScore = 0;

var teamA = [
    { no: 1, name: "Fred", fouls: 0, notifications: "" },
    { no: 2, name: "Tom", fouls: 0, notifications: "" }
];

var teamB = [
    { no: 1, name: "Sarah", fouls: 0, notifications: "" },
    { no: 2, name: "Maya", fouls: 0, notifications: "" }
];

makeScoreSheets();

//will update points for team or team b
function addPoint(team) {
    if (team == "a") {
        teamAScore++;
        teamAScoreOutput.innerHTML = teamAScore;
    } else if (team == "b") {
        teamBScore++;
        teamBScoreOutput.innerHTML = teamBScore;
    }
}

function addFoul(team, id) {
    if (team == "a") {
        teamA[id].fouls += 1;
        if (teamA[id].fouls > 4) {
            teamA[id].notifications = "Foul Out";
        }
    } else if (team == "b") {
        teamB[id].fouls += 1;
        if (teamB[id].fouls > 4) {
            teamB[id].notifications = "Foul Out";
        }
    }
    makeScoreSheets();
}

//loop over each team and make the score sheet in a table
function makeScoreSheets() {
    teamATable.innerHTML = "<tr><th>Number</th><th>Name</th><th>Foul</th><th>Foul Control</th><th>Notifications</th></tr>"

    for (var i = 0; i < teamA.length; i++) {
        row = teamATable.insertRow(-1); //add a new row to end of table. -1 means go to end of table
        row.insertCell(0).innerHTML = teamA[i].no; //add new value to cell 1
        row.insertCell(1).innerHTML = teamA[i].name; //add new value to cell 2
        row.insertCell(2).innerHTML = teamA[i].fouls;
        row.insertCell(3).innerHTML = `<button onclick="addFoul('a',${i})">Foul +</button>`; //add new value to cell 3
        row.insertCell(4).innerHTML = teamA[i].notifications;
    }
}