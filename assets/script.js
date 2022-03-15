var saveBtn = document.querySelector("#saveButton");
var textarea = document.getElementById.text;
var currentTime = moment().format('LLLL')
var time = document.getElementById("time");
//var timeHT = $("#time")

$("today").text(currentTime);

//send to local storage when save clicked
saveBtn

//calendar date/time in heading
$("span").text(currentTime);

//color coding
if (parseInt(timeHT)<currentTime){
    $("#text").css("background-color", "#d3d3d3")
    console.log(timeHT);
}

localStorage.setItem("plans", textarea);