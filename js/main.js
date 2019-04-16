const radios = [...document.querySelectorAll(".cookingDegree")];
const startBtn = document.querySelector(".timer .start");
const stopBtn = document.querySelector(".timer .stop");
const resetBtn = document.querySelector(".timer .reset");
const timeControl = document.querySelector(".timer input")


let hours = 0;
let minutes = 0;
let secends = 0;

function showTime() {
    return (`0${hours}:${(minutes < 10 ? "0" + minutes : minutes)}:${(secends < 10 ? "0" + secends : secends)}`);
}

timeControl.value = showTime();

radios.forEach((radio) => {
    radio.addEventListener("click", () => {
        secends = 0;
        minutes = (1 * radio.value);
        timeControl.value = showTime();
        timeControl.style.color = "white";
    })
})
let timerX;

function time() {
    if (secends > 0) {
        secends--;
    } else if (minutes > 0) {
        minutes--;
        secends = 59;
    } else if (hours > 0) {
        hours--;
        minutes = 59;
        secends = 59;
    }
    timeControl.value = showTime();

    if (hours == 0 && minutes == 0 && secends == 0) {
        timeControl.style.color = "red";
        timeControl.value = `Eggs is done`;
        radios.forEach((radio) => radio.disabled = false);
        return;
    }
    timerX = setTimeout(time, 1000);
};

startBtn.addEventListener("click", (e) => {
    e.preventDefault();
    time();
    startBtn.style.display = "none";
    stopBtn.style.display = "block";
    radios.forEach((radio) => radio.disabled = true);
})

resetBtn.addEventListener("click", () => {
    if (confirm('Countdown will be reset, do you want to continue?')) {
        startBtn.style.display = "block";
        stopBtn.style.display = "none";
        radios.forEach((radio) => {
            radio.disabled = false;
            radio.checked = false;
        });
        clearInterval(timerX);
        minutes = 0;
        secends = 0;
        timeControl.value = showTime();
    }
})

stopBtn.addEventListener("click", () => {
    startBtn.style.display = "block";
    stopBtn.style.display = "none";
    radios.forEach((radio) => radio.disabled = false);
    clearInterval(timerX);
})