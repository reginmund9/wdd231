document.addEventListener("DOMContentLoaded", function() {
    // Get the current date
    var currentDate = new Date();
    // Get the last visit date from localStorage
    var lastVisitDate = localStorage.getItem("lastVisitDate");
    // If this is the first visit
    if (!lastVisitDate) {
        // Display a welcome message
        document.getElementById("sidebar-content").innerHTML = "Welcome! Let us know if you have any questions.";
    } else {
        // Convert last visit date to a Date object
        lastVisitDate = new Date(lastVisitDate);
        // Calculate the difference in milliseconds between current visit and last visit
        var timeDifference = currentDate.getTime() - lastVisitDate.getTime();
        // Calculate the difference in days
        var daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        // Display different messages based on the time difference
        if (daysDifference === 0) {
            document.getElementById("sidebar-content").innerHTML = "Back so soon! Awesome!";
        } else {
            if (daysDifference === 1) {
                document.getElementById("sidebar-content").innerHTML = "You last visited 1 day ago.";
            } else {
                document.getElementById("sidebar-content").innerHTML = "You last visited " + daysDifference + " days ago.";
            }
        }
    }
    // Store the current visit date in localStorage
    localStorage.setItem("lastVisitDate", currentDate);
});

