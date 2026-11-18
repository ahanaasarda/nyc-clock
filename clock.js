
function updateClock() {

    var d = new Date();

    var h = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();

    console.log(d,h,m,s);

    // hour : minutes : seconds
    var time = h + ":" + m + ":" + s;

    console.log(time);

    document.getElementById("clock").innerHTML = time;

    // update in real time
    setTimeout(updateClock, 1000);

}

updateClock();