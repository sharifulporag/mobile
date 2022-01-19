setInterval(digitalClock, 1000);

function digitalClock(){
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
   
    const finalTime = `${hours}: ${minutes} : ${seconds}`;
    if(hours > 12) {
       
    }
    document.getElementById('time').innerHTML = finalTime;
}


