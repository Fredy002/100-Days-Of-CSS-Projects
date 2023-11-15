document.addEventListener('DOMContentLoaded', (event) => {
    const dateElement = document.getElementById('current-date');
    const currentDate = new Date();
    const dateString = currentDate.toLocaleDateString('en', { year: 'numeric', month: 'long', day: 'numeric' });
    dateElement.textContent = dateString;
});