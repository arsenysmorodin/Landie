$(document).ready(function() {
    var banner = $(".prefooter");
    var imgs = $(".animation-wrp");

    function moving(object, speed) {
        banner.on('mousemove', function(event) {
            var X = Math.floor((event.pageX) / speed - 20) + "px";
            var Y = Math.floor((event.pageY) / speed) + "px";
            object.css('transform', 'translate(' + X + ' , ' + Y + ')');
        });
    }

    function moveAll(object) {
        moving($(object[0]), 20);
    }

    moveAll(imgs);

});
