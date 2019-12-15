// 시계
setInterval(function(){
    var timer = new Date();
    var hour = timer.getHours();
    var minute = timer.getMinutes();
    var second = timer.getSeconds();
    if( hour < 10 ) hour = '0' + hour;
    if( minute < 10 ) minute = '0' + minute;
    if( second < 10 ) second = '0' + second;
    document.getElementById('clock').innerHTML = hour + ":" + minute + ":" + second},1000);


// 년, 월, 일
setInterval(function(){
    var calender =  new Date();
    var year = calender.getFullYear();
    var month = calender.getMonth() + 1;
    var date = calender.getDate();
    var week =new Array('日','月','火','水','木','金','土');

    var day = "(" + week[calender.getDay()] + ")";
    if( month < 10 ) month = '0' + month;
    if( date < 10 ) date = '0' + date;
    document.getElementById("date").innerHTML = year + "年" + " " + month + "月" + " " + date + "日" + " " + day});


// 위로 버튼
$(document).on('click', 'a[href^="#"]', function(e) {
    // target element id
    var id = $(this).attr('href');

    // target element
    var $id = $(id);
    if ($id.length === 0) {
        return;
    }

    // prevent standard hash navigation (avoid blinking in IE)
    e.preventDefault();

    // top position relative to the document
    var pos = $id.offset().top;

    // animated top scrolling
    $('body, html').animate({scrollTop: pos});
});

function sorry(){
    alert('😪')
}
