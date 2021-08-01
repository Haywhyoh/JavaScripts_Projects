var date = new Date('Aug 4, 2021 5:00:00').getTime();

var x = setInterval(function(){
var now = new Date().getTime();
var timeDiff = date - now;

var days = Math.floor(timeDiff / (1000 * 24 * 60 * 60));
var hours = Math.floor((timeDiff % (1000 * 24 * 60 *60)) / (1000 * 60 *60));
var minutes = Math.floor((timeDiff % (1000  * 60 *60)) / (1000 * 60 ));
var seconds = Math.floor((timeDiff % (1000 * 60)) / (1000 ));


document.getElementById('days').innerHTML = days + 'D';
document.getElementById('hour').innerHTML = hours + 'H';
document.getElementById('min').innerHTML = minutes + 'M';
document.getElementById('seconds').innerHTML = seconds + 'S';


if (timeDiff < 0){
    clearInterval(x);
    document.getElementById('days').innerHTML = 0 + 'D';
    document.getElementById('hour').innerHTML = 0 + 'H';
    document.getElementById('min').innerHTML = 0 + 'M';
    document.getElementById('seconds').innerHTML = 0 + 'S';


}

},1000);



