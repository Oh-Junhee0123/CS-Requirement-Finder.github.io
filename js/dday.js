function dday() 
{  
    const today = new Date();  
    const year = today.getFullYear();  
    const start = new Date(`2025-08-14`);

    const untilCSMS = new Date(start - today);  
    const day = String(Math.floor(untilCSMS / (1000 * 3600 * 24)));  
    const hour = String(Math.floor((untilCSMS / (1000 * 3600)) % 24)).padStart(2, "0");  
    const minute = String(Math.floor((untilCSMS / (1000 * 60)) % 60)).padStart(2, "0");  
    const second = String(Math.floor((untilCSMS / 1000) % 60)).padStart(2,"0");
}
const clockTitle = document.querySelector(".dDay");

function CSMSClock() 
{  
    const today = new Date();  
    const year = today.getFullYear();  
    const start = new Date(`2025-08-14`);  
    const untilCSMS = new Date(start - today);  
    const day = String(Math.floor(untilCSMS / (1000 * 3600 * 24)));  
    const hour = String(Math.floor((untilCSMS / (1000 * 3600)) % 24)).padStart(2, "0");  
    const minute = String(Math.floor((untilCSMS / (1000 * 60)) % 60)).padStart(2, "0");  
    const second = String(Math.floor((untilCSMS / 1000) % 60)).padStart(2,"0");  
    clockTitle.innerText = `${day}:${hour}:${minute}:${second}`;
} 
setInterval(CSMSClock, 1000);
