let startBox = document.querySelector('.start-box')
let inputCounter = startBox.querySelector('#input-counter');
let startCounter = startBox.querySelector('#start-counter');
let errorElement = document.querySelector('#error-message');
let timerCircle = document.querySelector('.c100');
let timnum=document.querySelector('.num')
let loadingMessage = document.querySelector('.message .loading')
let successMessage = document.querySelector('.message .success')


startCounter.addEventListener('click' , function(e) {
    let seconds = parseInt(inputCounter.value)

    if(isNaN(seconds)) {
        errorElement.textContent = 'زمان را به درستی وارد کنید';
        errorElement.classList.add('active')
        return;
    }

    errorElement.classList.remove('active');
    startBox.classList.remove('active')
    timerCircle.style.display = 'block';
    timnum.textContent = seconds;
    loadingMessage.style.display = 'block';
    successMessage.style.display = 'none';            
    

let origrnalseconds = seconds;
let lastPercent='p100'
let timerd= setInterval(() => {

    if(lastPercent) timerCircle.classList.remove(lastPercent)
    if (seconds <= 1) {
    clearInterval(timerd)
startBox.classList.add('active')
timerCircle.style.display='none'
loadingMessage.style.display = 'none';
    successMessage.style.display = 'block';            
    inputCounter.value='';
return;
}

    seconds = seconds - 1;
    let percent = Math.abs(Math.floor(( origrnalseconds - seconds ) / origrnalseconds * 100-100 ))
    lastPercent=`p${percent}`
    timerCircle.classList.add(`p${percent}`)
    timnum.textContent=seconds;
}, 1000);




})

