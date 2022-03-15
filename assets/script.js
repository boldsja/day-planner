$(document).ready(function(){
    
var currentTime = moment().format('LLLL')

//var timeHT = $("#time")

$(".today").text(currentTime);

//send to local storage when save clicked


//calendar date/time in heading
$("span").text(currentTime);

//saveBtn functionality
$(".saveBtn").on("click", function(){
    let textValue = $(this).siblings('.text').val();
  //  console.log("textAreaValue", textValue);
    let timeBlock = $(this).parent().attr("id");
   // console.log("timeBlock", timeBlock);

    localStorage.setItem(timeBlock, textValue);
})

//color coding
function keepinTime(){

    let currentHour = moment().hours();
  //  console.log("currenthour", currentHour);

    $(".time-block").each(function(){
        let timeBlockHour = parseInt($(this).attr("id"));
      //  console.log("timeBlockHour", timeBlockHour);

        if(timeBlockHour < currentHour){
            $(this).addClass("past");
        } else if(timeBlockHour === currentHour){
            $(this).removeClass("past");
            $(this).addClass("present");
        } else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }
    })
}

keepinTime()

for(let i = 9; i< 17; i++){
//$("#9 .text").val(localStorage.getItem("9"));

// using back ticks and interpolation
$(`#${i} .text`).val(localStorage.getItem(`${i}`));

// using quotes and plus sign
// $("#" + i + ".text").val(localStorage.getItem(i))
}
})