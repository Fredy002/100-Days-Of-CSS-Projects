// Points
for (let i = 0; i < 18; i++) {
    document.write(`
        <div class="sphere" style="--sphere:${i}">
            <div class="point"></div>
            <div class="point" style="right:0;"></div>
            <div class="point" style="right:0;bottom:0;"></div>
            <div class="point" style="bottom:0;"></div>
        </div>
    `);
}

window.onload = function() {
    // Update date and time
    function updateDateTime() {
        const now = new Date();
        const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
        const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

        const dayName = days[now.getDay()];
        const dayNumber = now.getDate();
        const month = months[now.getMonth()];
        const year = now.getFullYear();

        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');

        document.getElementById('currentDate').textContent = `${dayName} ${dayNumber} ${month} ${year}`;
        document.getElementById('currentTime').textContent = `${hours}:${minutes}`;
    }

    updateDateTime();

    // Update date and time every minute
    setInterval(updateDateTime, 60000);
}