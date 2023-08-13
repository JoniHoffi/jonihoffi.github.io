// Funktion zum Anzeigen der Übungen für den ausgewählten Tag
function displayExercises() {
    const currentDayIndex = localStorage.getItem('currentDayIndex');
    const days = JSON.parse(localStorage.getItem('days')) || [];
    const currentDay = days[currentDayIndex];

    if (!currentDay) return;

    const exercisesList = document.getElementById('exercises-list');
    exercisesList.innerHTML = '';

    currentDay.exercises.forEach((exercise, index) => {
        const exerciseItem = document.createElement('div');
        exerciseItem.className = 'exercise-item';
        exerciseItem.innerHTML = `
            <p>${exercise.name}</p>
            <button class="btn btn-danger btn-sm" onclick="deleteExercise(${index})">Löschen</button>
        `;
        exercisesList.appendChild(exerciseItem);
    });
}

// Funktion zum Hinzufügen einer Übung
function addExercise(event) {
    event.preventDefault();

    const exerciseType = document.getElementById('exercise-type').value;
    const exerciseName = document.getElementById('exercise-name').value;

    const currentDayIndex = localStorage.getItem('currentDayIndex');
    const days = JSON.parse(localStorage.getItem('days')) || [];
    const currentDay = days[currentDayIndex];

    if (!currentDay) return;

    currentDay.exercises.push({ type: exerciseType, name: exerciseName });
    localStorage.setItem('days', JSON.stringify(days));
    displayExercises();

    document.getElementById('exercise-form').reset();
}

// Funktion zum Löschen einer Übung
function deleteExercise(index) {
    const currentDayIndex = localStorage.getItem('currentDayIndex');
    const days = JSON.parse(localStorage.getItem('days')) || [];
    const currentDay = days[currentDayIndex];

    if (!currentDay) return;

    currentDay.exercises.splice(index, 1);
    localStorage.setItem('days', JSON.stringify(days));
    displayExercises();
}

// Initialisierung der Seite
document.addEventListener('DOMContentLoaded', () => {
    displayExercises();

    const exerciseForm = document.getElementById('exercise-form');
    exerciseForm.addEventListener('submit', addExercise);
});
