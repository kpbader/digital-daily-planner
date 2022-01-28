
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
var currentTimeEl = new Date();
document.getElementById("currentDay").textContent = currentTimeEl;


// WHEN I view the time blocks for that day
// THEN each time block is color-coded to indicate whether it is in the past, present, or future 

// // check due date
// auditTask(taskLi);

 var auditTask = function(taskEl) {
        // get date from task element 
        var date = $(taskEl).find("span").text().trim();
       
        // convert to moment object at 5:00pm
        var time = moment(date, "L").set("hour", 17);
        
        // remove any old classes from element 
        $(taskEl).removeClass("list-group-item-warning list-group-item-danger");
       
        // apply new class if task is near/over due date 
        if (moment().isAfter(currentTimeEl)) {
          $(taskEl).addClass("list-group-item-danger");
         }
         else if (Math.abs(moment().diff(time, "days")) <= 2) {
           $(taskEl).addClass("list-group-item-warning");
         } 
 };


// WHEN I click the save button for that time block 
// THEN the text for that event is saved in local storage 
var saveTasks = function() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
};


// WHEN I refresh the page 
// THEN the saved events persist 
var loadTasks = function() {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  };
  