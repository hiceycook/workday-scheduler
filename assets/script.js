let now = moment();

// HAVE currentTime DISPLAY THE CURRENT DAY AND TIME USING MOMENT.JS //

function updateTime() {
    currentTime = now.format("LLLL");
    $("#currentTime").html(currentTime);
};



// FUNCTION TO CHECK CURRENT TIME WITH SCHEDULE TIME, AND CHANGE COLOR ACCORDINGLY //
function hourColor() {
    // Run hourComparison for each hour of work day
    $(".time-block").each(hourCompare);
}

$(".time-block").each(function () {
    // SELECTS SPAN OF EACH .HOUR CLASS ELEMENT //
    var scheduleTime = $(".hour span", this);
    let currentHour = now.hour();

    //CONVERTS SPAN TO INTEGER FOR COMPARISON //
    var scheduleHour = parseInt(scheduleTime.text());

    //COMPARES TIMES
    if (currentHour > scheduleHour) {
        //IF CURRENT HOUR IS GREATER THAN SCHEDULE HOUR, ADD CLASS "PAST"
        $(this).addClass("past");
    } else if (currentHour < scheduleHour) {
        //IF CURRENT HOUR IS LESS THAN SCHEDULE HOUR, ADD CLASS "FUTURE"
        $(this).addClass("future");
        $(this).removeClass("past");
    } else {
        // IF TIMES ARE EQUAL ADD CLASS PRESENT
        $(this).addClass("present");
        $(this).removeClass("past");
        $(this).removeClass("future");
    };
});

// SAVE FUNCTION //

function saveText() {
    let textContent = $(this).siblings(".text-content").val();
    let hour = $(this).parent().attr("id");

    // ADD TEXTCONTENT AND HOUR TO LOCAL STORAGE
    localStorage.setItem(hour, textContent);
};

// CALL SAVETEXT ON BUTTON CLICK //
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


// CALL FUNCTIONS
getLocalStorage();
updateTime();
