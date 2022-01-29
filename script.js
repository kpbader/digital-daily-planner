
// displays current time 
var currentTimeEl = moment().format('MMMM Do YYYY, h:mm:ss a');
document.getElementById("currentDay").textContent = currentTimeEl;

// save items
$('.saveBtn').on('click', function (){
    var value= $(this).siblings('.description').val();
    var key = $(this).parent().attr('id')

    localStorage.setItem(key, value)
});


// // check due date (will change color according to time)
function auditTime() {
    var currentHour = moment().hour();

    $('.time-block').each(function(){
        var temp = parseInt($(this).attr("id"))
        if (currentHour === temp) {
                $(this).addClass("present");
            } else if (currentHour > temp) {
                $(this).addClass("past");
            }else{
                $(this).addClass("future");
            }
    })
}
auditTime();

// load items to page
$('#9 .description').val(localStorage.getItem('9'));
$('#10 .description').val(localStorage.getItem('10'));
$('#11 .description').val(localStorage.getItem('11'));
$('#12 .description').val(localStorage.getItem('12'));
$('#13 .description').val(localStorage.getItem('13'));
$('#14 .description').val(localStorage.getItem('14'));
$('#15 .description').val(localStorage.getItem('15'));
$('#16 .description').val(localStorage.getItem('16'));
$('#17 .description').val(localStorage.getItem('17'));

