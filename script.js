// Funktion zum Anzeigen der Tage auf der Homepage
function displayDays() {
    const daysList = document.getElementById('days-list');
    daysList.innerHTML = '';
    const days = JSON.parse(localStorage.getItem('days')) || [];

    days.forEach((day, index) => {
        const dayItem = document.createElement('div');
        dayItem.className = 'day-item';
        dayItem.innerHTML = `
            <p>${day.name}</p>
            <button class="btn btn-danger btn-sm" onclick="deleteDay(${index})">Löschen</button>
        `;
        dayItem.addEventListener('click', () => redirectToDayPage(index));
        daysList.appendChild(dayItem);
    });
}

// Funktion zum Löschen eines Tages
function deleteDay(index) {
    const days = JSON.parse(localStorage.getItem('days')) || [];
    days.splice(index, 1);
    localStorage.setItem('days', JSON.stringify(days));
    displayDays();
}

// Funktion zur Weiterleitung auf die Seite für eine Übung
function redirectToDayPage(index) {
    localStorage.setItem('currentDayIndex', index);
    window.location.href = 'day.html';
}

// Initialisierung der Seite
document.addEventListener('DOMContentLoaded', () => {
    displayDays();
});
