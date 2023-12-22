function addBook() {
    const titleInput = document.getElementById('book-title');
    const title = titleInput.value.trim();

    if (title === '') {
        alert('Please enter a book title.');
        return;
    }

    const readingLog = document.getElementById('reading-log');
    const bookItem = document.createElement('li');
    bookItem.className = 'book-item';
    bookItem.innerHTML = `
        <span>${title}</span>
        <button onclick="markAsReading(this)">Mark as Reading</button>
        <button onclick="markAsDone(this)">Mark as Done</button>
    `;
    readingLog.appendChild(bookItem);

    titleInput.value = '';
}

function markAsReading(button) {
    const bookItem = button.closest('.book-item');
    bookItem.innerHTML += ' - Currently Reading';
}

function markAsDone(button) {
    const bookItem = button.closest('.book-item');
    bookItem.classList.add('done');
    bookItem.innerHTML += ' - Done Reading';
}