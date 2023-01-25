$(function () {
  $("#currentDay").text(dayjs().format("dddd, MMMM Do"));

  $(".row").each(function (index) {
    workDaYTime = dayjs().hour();
    militaryTime = $(this).attr("hour");
    if (militaryTime < workDaYTime) {
      $(this).addClass("past");
    }
    if (militaryTime == workDaYTime) {
      $(this).addClass("present");
    }
    if (militaryTime > workDaYTime) {
      $(this).addClass("future");
    }
  });
});

$("#hour-9.description").val(localStorage.getItem("hour9"));
$("#hour-10.description").val(localStorage.getItem("hour10"));
$("#hour-11.description").val(localStorage.getItem("hour11"));
$("#hour-12.description").val(localStorage.getItem("hour12"));
$("#hour-13.description").val(localStorage.getItem("hour13"));
$("#hour-14.description").val(localStorage.getItem("hour14"));
$("#hour-15.description").val(localStorage.getItem("hour15"));
$("#hour-16.description").val(localStorage.getItem("hour16"));
$("#hour-17.description").val(localStorage.getItem("hour17"));
