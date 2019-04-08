const radios = [...document.querySelectorAll(".cookingDegree")];
const btn = document.querySelector(".timer button");
const timeControl = document.querySelector(".timer input")
const options = [3, 4, 5, 7, 8];

let hours = 0;
let minutes = 0;
let secundes = 0;

function showTime() {
    return (`0${hours}:${(minutes < 10 ? "0" + minutes : minutes)}:${(secundes < 10 ? "0" + secundes : secundes)}`);
}

timeControl.value = showTime();

radios.forEach((radio, i) => {
    radio.addEventListener("click", () => {
        minutes = options[i];
        timeControl.value = showTime();
        timeControl.style.color = "white";
    })
})

function time() {
    if (secundes > 0) {
        secundes--;
    } else if (minutes > 0) {
        minutes--;
        secundes = 59;
    } else if (hours > 0) {
        hours--;
        minutes = 59;
        secundes = 59;
    }
    timeControl.value = showTime();

    if (hours == 0 && minutes == 0 && secundes == 0) {
        timeControl.style.color = "red";
        timeControl.value = `Eggs is done`;
        btn.disabled = "";
        radios.forEach((radio) => radio.disabled = "");
        return;
    }
    setTimeout(time, 1000);
};

btn.addEventListener("click", (e) => {
    e.preventDefault();
    time();
    btn.disabled = "disabled";
    radios.forEach((radio) => radio.disabled = "disabled");
})