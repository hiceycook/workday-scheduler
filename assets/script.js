let now = moment();

//HAVE currentDay display the current day //

function updateTime() {
    currentTime = now.format("LLLL");
    $("#currentTime").html(currentTime);
};



// Function to check the current hour and change background color
// of task depending on hour
function hourColor() {
    // Run hourComparison for each hour of work day
    $(".time-block").each(hourCompare);
}

$(".time-block").each(function () {
    // selects the span of each child inside the hour class
    var scheduleTime = $(".hour span", this);
    let currentHour = now.hour();

    // converts the span into an integer
    var scheduleHour = parseInt(scheduleTime.text());

    // checks to see if the current hour is greater, less than, or equal to the schedule hour
    if (currentHour > scheduleHour) {
        // if the currentHour is greater than the scheduleHour adds the class of past to the time-block
        $(this).addClass("past");
    } else if (currentHour < scheduleHour) {
        // if the currentHour is less than the scheduleHour adds the class of future to the time-block
        $(this).addClass("future");
    } else {
        // otherwise if the times are equal it adds the class of present to the time-block
        $(this).addClass("present");
    };
});

// Function to save user input into localStorage //

function saveText() {
    let textContent = $(this).siblings(".text-content").val();
    let hour = $(this).parent().attr("id");

    // add the textcontent value and hour ID to local storage
    localStorage.setItem(hour, textContent);
};

// Call saveText on save button click
$(".saveBtn").on("click", saveText);

function getLocalStorage() {
    $("#hour8 .text-content").val(localStorage.getItem("hour8"));
    $("#hour9 .text-content").val(localStorage.getItem("hour9"));
    $("#hour10 .text-content").val(localStorage.getItem("hour10"));
    $("#hour11 .text-content").val(localStorage.getItem("hour11"));
    $("#hour12 .text-content").val(localStorage.getItem("hour12"));
    $("#hour13 .text-content").val(localStorage.getItem("hour13"));
    $("#hour14 .text-content").val(localStorage.getItem("hour14"));
    $("#hour15 .text-content").val(localStorage.getItem("hour15"));
    $("#hour16 .text-content").val(localStorage.getItem("hour16"));
    $("#hour17 .text-content").val(localStorage.getItem("hour17"));
};


// Call all the functions
getLocalStorage();
updateTime();
