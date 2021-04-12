function addAnimClass(ele) {

    ele.addClass('turn');
    setTimeout(() => ele.removeClass('turn'), 800);
}

function animateCards(hourChanged, minChanged) {

    addAnimClass($('#sec'));
    if(minChanged)
        addAnimClass($('#min'));
    if(hourChanged)
        addAnimClass($('#hour'));
}

function refreshClock() {

    let time = {

        h: new Date().getHours(),
        m: new Date().getMinutes(),
        s: new Date().getSeconds()
    };

    for (let unit in time) {
        
        if(time[unit] < 10)
            time[unit] = '0' + time[unit];
    }

    const hour = $('#hour');
    const min = $('#min');
    
    animateCards(time.h != hour.text(), time.m != min.text());

    hour.text(time.h);
    min.text(time.m);
    $('#sec').text(time.s);
}

$(() => setInterval(refreshClock, 1000));