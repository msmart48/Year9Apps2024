const jobNameInput = document.getElementById("jobNameInput");
const dueDateInput = document.getElementById("dueDateInput");
const catInput = document.getElementById("catInput");

var jobs = [];

//get job details and add to jobs array
function addTask() {
    var job = jobNameInput.value;
    var date = dueDateInput.value;

    var category = catInput.value;
    jobs.push(
        {
            task: job,
            date: date,
            category: category
        }
    )
    //
}