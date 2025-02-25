function randomizeSeats() {
    const studentNames = []

    for (let i = 1; i <= 36; i++) {
        const studentName = document.getElementById(`name${i}`).value
        studentNames.push(studentName)
    }

    const shuffledNames = [...studentNames];
    for (let i = shuffledNames.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledNames[i], shuffledNames[j]] = [shuffledNames[j], shuffledNames[i]];
    }

    for (let i = 1; i <= 36; i++) {
        const desk = document.getElementById(`seat${i}`);
        desk.textContent = shuffledNames[i - 1];
    }
}
