
function initTimer() {
    var elem = document.querySelector('#divCounter');
    var startTime = new Date('2020/11/3').getTime();
    var crntTime = new Date().getTime();

    if (startTime - crntTime < 0) {
        elem.innerHTML = "<div>00<label>Day</label></div><div>00<label>Hour</label></div><div>00<label>Minute</label></div><div>00<label>Second</label></div>";
        return;
    }

    var t = setInterval(function () {
        var distance = startTime - crntTime;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        days = days.toString().length < 2 ? ("0" + days.toString()) : days;
        hours = hours.toString().length < 2 ? ("0" + hours.toString()) : hours;
        minutes = minutes.toString().length < 2 ? ("0" + minutes.toString()) : minutes;
        seconds = seconds.toString().length < 2 ? ("0" + seconds.toString()) : seconds;

        if (distance < 0) {

        }
        else {
            var html = "";
            html = getAppropriate(days, "day", html);
            html = getAppropriate(hours, "hour", html);
            html = getAppropriate(minutes, "minute", html);
            html = getAppropriate(seconds, "second", html);

            elem.innerHTML = html;
        }

        crntTime += 1000;
    }, 1000);
}

function getAppropriate(value, label, html) {
    var template = "";
    if (value == 1) {
        template = "<div>" + value + "<label>" + label + "</label></div>";
    }
    else if (value > 1) {
        template = "<div>" + value + "<label>" + label + "s</label></div>";
    }
    else if (html != "") {
        template = "<div>" + value + "<label>" + label + "</label></div>";
    }

    return html + template;
}

initTimer(); 