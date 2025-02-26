function randomizeSeats() {
    const studentNames = [];

    for (let i = 1; i <= 36; i++) {
        const studentName = document.getElementById(`name${i}`).value.trim().toLowerCase();
        studentNames.push(studentName);
    }

    let remainingStudents = [...studentNames];
    for (let i = remainingStudents.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [remainingStudents[i], remainingStudents[j]] = [remainingStudents[j], remainingStudents[i]];
    }

    for (let i = 1; i <= 36; i++) {
        const desk = document.getElementById(`seat${i}`);
        desk.textContent = remainingStudents[i - 1];
    }
}