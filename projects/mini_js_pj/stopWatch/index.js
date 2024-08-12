let secondsElapsed = 0;
let interval = null;


function leadingZero(value) {
    return String(value).padStart(2, "0");
}

function showClock() {
    const time = document.getElementById("time");
    const seconds = secondsElapsed % 60;
    const minutes = Math.floor(secondsElapsed / 60);
    time.innerHTML = `${leadingZero(minutes)}:${leadingZero(seconds)}`;

}

function countSeconds() {
    secondsElapsed++;
    showClock();
}

function startClock() {
    if (interval) stopClock();
    interval = setInterval(countSeconds, 1000);

}

function stopClock() {
    clearInterval(interval);
}

function resetClock() {
    stopClock();
    secondsElapsed = 0;
    showClock()
}