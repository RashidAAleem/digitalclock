// Function to update the digital clock
function updateDigitalClock() {
    var timeElement = document.getElementById('time');
    var dateElement = document.getElementById('date');

    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    // Format time as HH:MM:SS
    var timeString = formatTime(hours) + ":" + formatTime(minutes) + ":" + formatTime(seconds);
    
    // Display the digital time
    timeElement.textContent = timeString;

    // Format date (e.g., "Wednesday, Oct 19")
    var dateString = now.toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' });
    dateElement.textContent = dateString;
}

// Function to add leading zero for single digits (e.g., 05 instead of 5)
function formatTime(value) {
    return value < 10 ? '0' + value : value;
}

// Function to update the analog clock hands
function updateAnalogClock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    // Get the rotation degrees for each hand
    var hourDegrees = (hours % 12) * 30 + (minutes / 60) * 30; // 30 degrees per hour + 0.5 degree per minute
    var minuteDegrees = minutes * 6 + (seconds / 60) * 6; // 6 degrees per minute + 0.1 degree per second
    var secondDegrees = seconds * 6; // 6 degrees per second

    // Get the clock hands elements
    var hourHand = document.getElementById('hourHand');
    var minuteHand = document.getElementById('minuteHand');
    var secondHand = document.getElementById('secondHand');

    // Set the rotations for each hand
    hourHand.style.transform = 'rotate(' + hourDegrees + 'deg)';
    minuteHand.style.transform = 'rotate(' + minuteDegrees + 'deg)';
    secondHand.style.transform = 'rotate(' + secondDegrees + 'deg)';
}

// Update both clocks every second
setInterval(function() {
    updateDigitalClock();
    updateAnalogClock();
}, 1000);

// Initialize the clocks
updateDigitalClock();
updateAnalogClock();
