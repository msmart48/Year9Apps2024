const jobNameInput = document.getElementById("jobNameInput");
const dueDateInput = document.getElementById("dueDateInput");
const catInput = document.getElementById("catInput");
const taskOutput = document.getElementById("taskOutput");

var tasks = [];

//get job details and add to jobs array
function addTask() {
    var task = jobNameInput.value;
    var date = dueDateInput.value;

    var category = catInput.value;
    tasks.push(
        {
            task: task,
            date: Date.parse(date),
            category: category
        }
    )
    //convert date object to formatted date
    console.log(new Date(date).toLocaleDateString('en-au', { weekday: "long", year: "numeric", month: "short", day: "numeric" }))

    selectTasks('all');
}

//this function will create a duplicate task list ready to print to screen based on users needs and order options.
function selectTasks(type) {
    if (type == "all") {
        //sort from earliest to latest
        var list = tasks.sort((a, b) => a.date - b.date);
    }

    //send list the to display list function
    showTasks(list);
}

//send a date to format into common format for reading
function formatDate(date) {
    var formattedDate = new Date(date).toLocaleDateString('en-au', { weekday: "long", year: "numeric", month: "short", day: "numeric" });
    return formattedDate;
}

function showTasks(list) {
    var text = "";
    for (var i = 0; i < list.length; i++) {
        text += `<div class="box">${formatDate(list[i].date)}<br>${list[i].task}<br>${list[i].category}</div>`;
    }
    taskOutput.innerHTML = text;
}

