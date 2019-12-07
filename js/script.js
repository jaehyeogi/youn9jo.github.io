///////////////// Clock START LINE ////////////////
setInterval(function(){
    var timer = new Date();
    var h = timer.getHours();
    var m = timer.getMinutes();
    var s = timer.getSeconds();
    if( h < 10 ) h = '0' + h;
    if( m < 10 ) m = '0' + m;
    if( s < 10 ) s = '0' + s;
    document.getElementById('clock').innerHTML = h + ":" + m + ":" + s},1000);
//////////////  Clock END LINE ///////////////

// handle links with @href started with '#' only
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

n =  new Date();
y = n.getFullYear();
m = n.getMonth() + 1;
d = n.getDate();
document.getElementById("date").innerHTML = y + "年" + m + "月" + d + "日";
