const startButton = document.getElementById("js--start");
const stopButton = document.getElementById("js--stop");
const resetButton = document.getElementById("js--reset");
const milisecondsTimer = document.getElementById("js--milisecondsTimer");
const secondsTimer = document.getElementById("js--secondsTimer");
const minutesTimer = document.getElementById("js--minutesTimer");

let miliseconds = 0;
let seconds = 0;
let minutes = 0;
let running = false;

startButton.onclick = function() {
    if (running === true) {
        return;
    }

    running = true;
    timer = setInterval(function() {
        miliseconds++;
        if (miliseconds === 1000) {
            seconds++
            miliseconds = 0;
        }
        if (seconds === 60) {
            minutes++
            seconds = 0;
        }
        milisecondsTimer.innerText = miliseconds;
        secondsTimer.innerText = seconds;
        minutesTimer.innerText = minutes;

        if (miliseconds < 100 || miliseconds == 0) {
            milisecondsTimer.innerText = "0" + miliseconds;
        }
        if (miliseconds < 10) {
            milisecondsTimer.innerText = "00" + miliseconds;
        }
        if (seconds < 10 || seconds == 0) {
            secondsTimer.innerText = "0" + seconds;
          }
        if (minutes < 10 || minutes == 0) {
            minutesTimer.innerText = "0" + minutes;
        }

    }, 1);
};

stopButton.onclick = function() {
    clearInterval(timer);
    running = false;
}

resetButton.onclick = function() {
    miliseconds = "00" + 0;
    seconds = "0" + 0;
    minutes = "0" + 0;
    milisecondsTimer.innerText = "000";
    secondsTimer.innerText = "00";
    minutesTimer.innerText = "00";
}