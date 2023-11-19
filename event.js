// Sample JavaScript for handling events

// Sample event data (replace this with a backend/database in a real application)
let events = [];

document.addEventListener('DOMContentLoaded', function () {
    // Initial display of events
    displayEvents();

    // Add event listener to the "Create Event" button
    const createEventButton = document.getElementById('createEventButton');
    createEventButton.addEventListener('click', createEvent);
});

function createEvent() {
    const eventName = document.getElementById('eventName').value;
    const eventDate = document.getElementById('eventDate').value;
    const eventDescription = document.getElementById('eventDescription').value;

    if (eventName && eventDate && eventDescription) {
        const newEvent = {
            name: eventName,
            date: eventDate,
            description: eventDescription
        };

        events.push(newEvent);
        displayEvents();

        // Clear the form fields after creating an event
        document.getElementById('createEventForm').reset();
    } else {
        alert('Please fill in all the fields.');
    }
}

function displayEvents() {
    const eventsList = document.getElementById('events');
    eventsList.innerHTML = '';

    events.forEach(event => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<strong>${event.name}</strong> - ${event.date}<br>${event.description}`;
        eventsList.appendChild(listItem);
    });
}
