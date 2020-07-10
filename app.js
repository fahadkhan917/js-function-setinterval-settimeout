

// var count=5;

// function time(){

// count++;
// document.write(count);

// }



// setInterval(time,1000);


// function time(){

// document.write("fahad");

// }

// setTimeout(time,1000)

var count=0;
var interval;
function time(){

    count++;
    console.log(count);


}

interval=setInterval(time,1000);


setTimeout(function(){clearInterval(interval)},10000)