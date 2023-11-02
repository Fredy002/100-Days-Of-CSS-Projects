function createLines(numberOfLines) {
    const linesContainer = document.getElementById('linesContainer');
    for (let i = 0; i < numberOfLines; i++) {
        const line = document.createElement('div');
        line.className = 'line';
        linesContainer.appendChild(line);
    }
}

// Create 30 lines dynamically
createLines(30);