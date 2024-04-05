var resultsTable = document.getElementById('resultsTable');
var searchInput = document.getElementById("searchInput");
var projects = [

    { name: "Side Table", materials: ["2m timber", "glue", "nails"], time: 6 },
    { name: "Play Kitchen", materials: ["8m timber", "glue", "screws"], time: 6 },
    { name: "Play Table", materials: ["8m timber", "glue", "screws"], time: 6 }
];


function search() {
    var searchTerm = searchInput.value;
    if (searchTerm == "") {
        printTable(projects);
    } else {
        var foundItems = [];
        foundItems = projects.filter(word => word.name.includes(searchTerm));
        for (var i = 0; i < projects.length; i++) {
            if (projects[i].name.toLowerCase().includes(searchTerm.toLowerCase())) {
                foundItems.push(projects[i]);
            }
        }

        if (foundItems.length > 0) {
            printTable(foundItems);
        } else {
            resultsTable.innerHTML = "<tr><th>Project Name</th><th>Time</th><th>Materials List</th></tr><tr><td>No Results</td></tr>";
        }
    }
}
//this function will print contents to table of the same type
printTable(projects);
//print results into a table
function printTable(arr) {
    resultsTable.innerHTML = "<tr><th>Project Name</th><th>Time</th><th>Materials List</th></tr>";
    for (var i = 0; i < arr.length; i++) {
        row = resultsTable.insertRow(-1); //add a new row to end of table. -1 means go to end of table
        row.insertCell(0).innerHTML = arr[i].name //add new value to cell 1
        row.insertCell(1).innerHTML = arr[i].time; //add new value to cell 2
        row.insertCell(2).innerHTML = arr[i].materials
    }

}