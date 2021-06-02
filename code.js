
//start button
function start(){
    //testing start button functionality
    console.log("START button pushed!");
    //disables start button on click event and enables stop
    document.getElementById("startButton").disabled=true;
    //ensures stop is enabled on click event
    document.getElementById("stopButton").disabled=false;
}

function stop(){
    //testing stop button functionality
    console.log("STOP button pushed!");
    //disables stop button on click event
    document.getElementById("stopButton").disabled=true;
    //ensures start button is enabled on click event
    document.getElementById("startButton").disabled=false;
}

function betterCountdown() {
    var count = 10;
    //setting arguments for iterating
    for (var i = 1; i <= 11; i++) {
        if (i == 11) {
            //display Blastoff when countdown stops
            setTimeout(function () {
                document.getElementById("countdownTimer").innerHTML = "Blastoff!!!";
            }, 1000 * i);
            //display warning when less than 5 seconds
        } else if (i > 6) {
            setTimeout(function () {
                document.getElementById("countdownTimer").innerHTML =
                    "Warning Less than half way to launch, time left = " + count;
                count = count - 1;
            }, 1000 * i);
        } else {
            //start the countdown
            setTimeout(function () {
                document.getElementById("countdownTimer").innerHTML = "the time left is " + count;
                count = count - 1;
            }, 1000 * i);
        }
    }
}

// //countdown timer should run 10 to 1 then blastoff and take 10 seconds to complete full countdown
// function startCountdown() {
//     var count = 10;

// //Timer should display 10
//     document.getElementById("countdownTimer").innerHTML = count;
//     count = count - 1;
// //Active countdown begins here
//     setTimeout(function () {
//         document.getElementById("countdownTimer").innerHTML = count;
//         count = count - 1;//decrease the count by 1 setting countdown timer to 9
//     }, 1000);//wait 1 second before displaying count
//     setTimeout(function () {
//         document.getElementById("countdownTimer").innerHTML = count;
//         count = count - 1;//countdown timer should display 8
//     }, 2000);//wait 2 seconds
//     setTimeout(function () {
//         document.getElementById("countdownTimer").innerHTML = count;
//         count = count - 1;//countdown timer should display 7
//     }, 3000);//wait 3 seconds
//     setTimeout(function () {
//         document.getElementById("countdownTimer").innerHTML = count;
//         count = count - 1;//countdown timer should display 6
//     }, 4000);//wait 4 seconds
//     setTimeout(function () {
//         document.getElementById("countdownTimer").innerHTML = count;
//         count = count - 1;//countdown timer should display 5
//     }, 5000);//wait 5 seconds
//     setTimeout(function () {
//         document.getElementById("countdownTimer").innerHTML = count;
//         count = count - 1;//countdown timer should display 4
//     }, 6000);//wait 6 seconds
//     setTimeout(function () {
//         document.getElementById("countdownTimer").innerHTML = count;
//         count = count - 1;//countdown timer should display 3
//     }, 7000);//wait 7 seconds
//     setTimeout(function () {
//         document.getElementById("countdownTimer").innerHTML = count;
//         count = count - 1;//countdown timer should display 2
//     }, 8000);//wait 8 seconds
//     setTimeout(function () {
//         document.getElementById("countdownTimer").innerHTML = count;
//         count = count - 1;//countdown timer should display 1
//     }, 9000);//wait 9 seconds
//     setTimeout(function () {
//         document.getElementById("countdownTimer").innerHTML = "Blastoff!";
//     },10000);//wait 10 seconds
// };
