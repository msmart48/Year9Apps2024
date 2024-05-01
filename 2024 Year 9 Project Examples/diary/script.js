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
            taskid: Date.now(),
            task: task,
            date: Date.parse(date),
            category: category,
            completed: false
        }
    )
    //convert date object to formatted date
    console.log(new Date(date).toLocaleDateString('en-au', { weekday: "long", year: "numeric", month: "short", day: "numeric" }))

    findTasks('all');
}

//this function will create a duplicate task list ready to print to screen based on users needs and order options.
function findTasks(type) {
    var list;
    if (type == "all") {
        //find all non-completed tasks
        list = tasks.filter(task => task.completed == false);
    } else if (type == "school") {
        list = tasks.filter(task => task.category == "School");
    } else if (type == "personal") {
        list = tasks.filter(task => task.category == "Personal");
    } else if (type == "ec") {
        list = tasks.filter(task => task.category == "EC");
    } else if (type == "week") {
        var now = new Date();
        var endDate = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000);
        list = tasks.filter(task =>
            task.date >= Date.parse(now) &&
            task.date <= Date.parse(endDate)
        );
    }

    //last step sort found tasks in order
    list.sort((a, b) => a.date - b.date);

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
        text += `<div class="box ${list[i].category}">${formatDate(list[i].date)}<br>${list[i].task}<br>${list[i].category}<br><button data-id=${list[i].taskid} onclick="completeTask(this)">Complete</button></div>`;
    }
    taskOutput.innerHTML = text;
}

//this function will get the button that was clicked and set the completed property to true based on the index in the data attribute
function completeTask(e) {
    //find the task in the tasks array and update the completed property to true using the found index
    let task = tasks.find(task => task.taskid == e.dataset.id);
    if (task) {
        task.completed = true;
    }
    e.parentNode.style.display = 'none';    //hide the element on view
}