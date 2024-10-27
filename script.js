function updateClock() {
    const now = new Date();
    
    // Digital clock
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    
    const displayHours = hours % 12 || 12;
    const displayMinutes = String(minutes).padStart(2, '0');
    const displaySeconds = String(seconds).padStart(2, '0');
    
    document.getElementById('time').innerText = `${displayHours}:${displayMinutes}:${displaySeconds} ${ampm}`;
    
    // Date
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById('date').innerText = now.toLocaleDateString(undefined, options);
    
    // Analog clock
    const hourDeg = (360 / 12) * (hours % 12) + (minutes / 60) * (360 / 12);
    const minuteDeg = (360 / 60) * minutes;
    const secondDeg = (360 / 60) * seconds;
    
    document.getElementById('hourHand').style.transform = `translateX(-50%) rotate(${hourDeg}deg)`;
    document.getElementById('minuteHand').style.transform = `translateX(-50%) rotate(${minuteDeg}deg)`;
    document.getElementById('secondHand').style.transform = `translateX(-50%) rotate(${secondDeg}deg)`;
}

// Update clock every second
setInterval(updateClock, 1000);
updateClock(); // Initial call
