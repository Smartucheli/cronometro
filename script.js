const minutes = document.querySelector("#minutes")
const seconds = document.querySelector("#seconds")
const miliseconds = document.querySelector("#miliseconds")

const startBtn = document.querySelector("#startBtn")
const pauseBtn = document.querySelector("#pauseBtn")
const resumeBtn = document.querySelector("#resumeBtn")
const resetBtn = document.querySelector("#resetBtn")


let interval;
let min = 0;
let sec = 0;
let mm = 0;
let ispaused = false


pauseBtn.addEventListener("click", pause_time)
startBtn.addEventListener("click", start_time)
resumeBtn.addEventListener("click", resume_time)
resetBtn.addEventListener("click", reset_time)


function start_time() {
    ispaused = false;
    interval = setInterval(() => {
        if(!ispaused){
            mm += 10

            if (mm == 1000) {
                sec++
                mm = 0
            } 

            if (sec == 600){
                min++
                sec = 0
            }

            minutes.textContent = format_time(min)
            seconds.textContent = format_time(sec)
            miliseconds.textContent = format_mm(mm)
        }     
    }, 10);
    startBtn.style.display = "none"
    pauseBtn.style.display = "block"

}


function reset_time() {
    clearInterval(interval)
    min = 0;
    sec = 0;
    mm = 0;

    minutes.textContent = "00"
    seconds.textContent = "00"
    miliseconds.textContent = "000"

    startBtn.style.display = "block"
    pauseBtn.style.display = "none"
    resumeBtn.style.display = "none"
    
}


function pause_time() {
    ispaused = true
    pauseBtn.style.display = "none"
    resumeBtn.style.display = "block"
}

function resume_time() {
    ispaused = false
    resumeBtn.style.display = "none"
    pauseBtn.style.display = "block"
}


function format_time(time) {
    return time < 10 ? `0${time}` : time;
}


function format_mm(time) {
    return time < 100 ? `${time}`.padStart(3, "0") : time;
}