// orari.js

// Function to add a class to all cells containing a specific subject
function addClassToCells(subject, className) {
    var cells = document.querySelectorAll('.subject-' + subject);
    cells.forEach(function(cell) {
        cell.classList.add(className);
    });
}

// Function to show a popup message
function showPopup(message) {
    alert(message); 
}

function submitForm() {
    var year = document.getElementById("year").value;
    var classSelection = document.getElementById("class").value;

    // Check if either dropdown is empty
    if (year === "" || classSelection === "") {
        showPopup("Ju lutem zgjidhni vitin dhe klasen.");
        return;
    }

    // Example data structure based on dropdown selections
    var timetableData = {
        "1A": [
            ["Matematika", "", "Anglishtja", "Historia", ""],
            ["Fizika", "", "Matematika", "Gjeografia", "Biologjia"],
            ["Anglishtja", "Historia", "Fizika", "Matematika", "Arti"],
            ["", "Biologjia", "Anglishtja", "Historia", "Fizika"],
            ["Arti", "Matematika", "Kimia", "Biologjia", ""],
            ["Historia", "Fizika", "", "Matematika", "Kimia"],
            ["Biologjia", "Anglishtja", "Historia", "Fizika", "Arti"]
        ],
        "1B": [
            ["Historia", "Fizika", "Arti", "Matematika", ""],
            ["Biologjia", "", "Historia", "Fizika", "Arti"],
            ["Matematika", "Kimia", "Biologjia", "Anglishtja", "Gjeografia"],
            ["Fizika", "Arti", "Matematika", "Kimia", "Biologjia"],
            ["Anglishtja", "Historia", "Fizika", "Arti", "Matematika"],
            ["Kimia", "Biologjia", "Anglishtja", "Historia", "Fizika"],
            ["Arti", "", "Kimia", "Biologjia", "Anglishtja"]
        ],
        "2A": [
            ["Anglishtja", "Historia", "Fizika", "Arti", "Matematika"],
            ["Kimia", "Biologjia", "Anglishtja", "Historia", "Fizika"],
            ["Arti", "Matematika", "Kimia", "Biologjia", "Anglishtja"],
            ["Historia", "Fizika", "Arti", "Matematika", "Kimia"],
            ["Biologjia", "Anglishtja", "Historia", "Fizika", "Arti"],
            ["Matematika", "Kimia", "Biologjia", "Anglishtja", "Gjeografia"],
            ["Fizika", "Arti", "Matematika", "Kimia", "Biologjia"]
        ],
        "2B": [
            ["Fizika", "Arti", "Matematika", "", "Biologjia"],
            ["Anglishtja", "Historia", "Fizika", "Arti", "Matematika"],
            ["Kimia", "Biologjia", "Anglishtja", "Historia", "Fizika"],
            ["Arti", "Matematika", "Kimia", "Biologjia", "Anglishtja"],
            ["Historia", "Fizika", "Arti", "Matematika", "Kimia"],
            ["Biologjia", "Anglishtja", "Historia", "Fizika", "Arti"],
            ["Matematika", "Kimia", "Biologjia", "Anglishtja", "Gjeografia"]
        ],
        "3A": [
            ["Kimia", "Biologjia", "Anglishtja", "Historia", "Fizika"],
            ["Arti", "Matematika", "Kimia", "Biologjia", "Anglishtja"],
            ["Historia", "Fizika", "Arti", "Matematika", "Kimia"],
            ["Biologjia", "Anglishtja", "Historia", "Fizika", "Arti"],
            ["Matematika", "Kimia", "Biologjia", "Anglishtja", "Gjeografia"],
            ["Fizika", "Arti", "Matematika", "Kimia", "Biologjia"],
            ["Anglishtja", "Historia", "Fizika", "Arti", "Matematika"]
        ],
        "3B": [
            ["Arti", "Matematika", "Kimia", "Biologjia", "Anglishtja"],
            ["Historia", "Fizika", "Arti", "Matematika", "Kimia"],
            ["Biologjia", "Anglishtja", "Historia", "Fizika", "Arti"],
            ["Matematika", "Kimia", "Biologjia", "Anglishtja", "Gjeografia"],
            ["Fizika", "Arti", "Matematika", "Kimia", "Biologjia"],
            ["Anglishtja", "Historia", "Fizika", "Arti", "Matematika"],
            ["Kimia", "Biologjia", "Anglishtja", "Historia", "Fizika"]
        ]
    };
    

    // Get the table
    var table = document.getElementById("timetable");

    // Loop through rows (excluding the first row which is the header)
    for (var i = 1; i <= 7; i++) {
        // Loop through cells (excluding the first cell in each row which is the hour)
        for (var j = 1; j <= 5; j++) {
            var cell = table.rows[i].cells[j];
            var subject = timetableData[year + classSelection][i-1][j-1];

            // Clear existing content
            cell.innerHTML = '';

            // Create div element with subject class if subject is not empty
            if (subject !== "") {
                var div = document.createElement('div');
                div.classList.add('subject-div');
                div.classList.add('subject-' + subject); // Add class based on subject
                div.textContent = subject;

                // Append div to cell
                cell.appendChild(div);
            }
        }
    }


}
