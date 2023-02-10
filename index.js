var timerObj = document.getElementById("timer")
var startBtnObj = document.getElementById("start-btn")
var resetBtnObj = document.getElementById("reset-btn")
var istimerrunning = false
var interval

resetBtnObj.addEventListener("click",function(){
    console.log("reset button clicked");
    timerObj.textContent = "00:00";
    istimerrunning = false
})

startBtnObj.addEventListener("click",()=>{
    console.log("start button clicked");
    if (istimerrunning) {
        startBtnObj.textContent = "Start";
        istimerrunning = false  
    }
    else{
    startBtnObj.textContent = "Stop";
    istimerrunning = true
    interval = setInterval(function(){
    console.log("Its good");
    timerObj.textContent = "0";

    }, 1000)
    }
})