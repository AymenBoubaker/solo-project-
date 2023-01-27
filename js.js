var wa9et =[]
function displayTime(){
    var dateTime = new Date();
    var hrs = dateTime.getHours();
    var min = dateTime.getMinutes();
    var sec = dateTime.getSeconds();
    var session = $('#session');

    if(hrs >= 12){
        session.text('PM');
    }else{
        session.text('AM');
    }

    if(hrs > 12){
        hrs = hrs - 12;
    }
    wa9et=[hrs,min,sec]
        $('#hours').text(hrs);
    $('#minutes').text(min);
    $('#seconds').text(sec);
}
setInterval(displayTime, 10);
// minutes
for (var i = 0; i <= 60 ; i++) {
    $('#minutes1').append('<option value="Minute"   >'+i+'</option>')
}
var h=0
$("#hr").change(function() {
    h=document.getElementById("hr").selectedIndex
})
var m=0
$("#minutes1").change(function() {
    m=document.getElementById("minutes1").selectedIndex-1
})
$("#felsa").on("click",function () {
    var seconds = Number(document.getElementById("seconds").innerText)
    console.log(h , m,wa9et[0],wa9et[1],seconds)
    var x = (((h-wa9et[0])*120) + ((m - wa9et[1])*60)) - seconds
    if (x<0){
        x=-x
    }
    setTimeout(function (){
        document.querySelector("audio").play()
    },x*1000)
    
})

