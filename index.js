function randomizeSeats() {
    const studentNames = []

    for (let i = 1; i <= 36; i++) {
        const studentName = document.getElementById(`name${i}`).value.trim().toLowerCase()
        studentNames.push(studentName)
    }

    let remainingStudents = [...studentNames];
    for (let i = remainingStudents.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [remainingStudents[i], remainingStudents[j]] = [remainingStudents[j], remainingStudents[i]]
    }

    for (let i = 1; i <= 36; i++) {
        const desk = document.getElementById(`seat${i}`)
        desk.textContent = remainingStudents[i - 1] || ''
    }

    saveDeskContentsToLocalStorage();
}

function saveDeskContentsToLocalStorage() {
    let deskContents = []
    for (let i = 1; i <= 36; i++) {
        const desk = document.getElementById(`seat${i}`)
        deskContents.push(desk.textContent.trim())
    }
    localStorage.setItem('deskContents', JSON.stringify(deskContents))
}

function loadDeskContentsFromLocalStorage() {
    const savedDeskContents = JSON.parse(localStorage.getItem('deskContents'))
    if (savedDeskContents) {
        for (let i = 1; i <= 36; i++) {
            const desk = document.getElementById(`seat${i}`)
            desk.textContent = savedDeskContents[i - 1] || ''
        }
    }
}

window.onload = function() {
    loadDeskContentsFromLocalStorage();

    for (let i = 1; i <= 36; i++) {
        const inputField = document.getElementById(`name${i}`)
        inputField.addEventListener('input', function() {
            saveStudentNamesToLocalStorage()
        })
    }
}

function saveStudentNamesToLocalStorage() {
    const studentNames = [];
    for (let i = 1; i <= 36; i++) {
        const studentName = document.getElementById(`name${i}`).value.trim().toLowerCase()
        studentNames.push(studentName)
    }
    localStorage.setItem('studentNames', JSON.stringify(studentNames))
}

function sortSeatsAlphabetically() {
    const desks = [];
    const totalSeats = 36

    for (let i = 1; i <= totalSeats; i++) {
        const studentName = document.getElementById(`name${i}`).value.trim()
        if (studentName) {
            desks.push(studentName)
        }
    }

    desks.sort()
    const rows = 6
    const cols = 6
    let deskIndex = 0

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            const seatIndex = row * cols + col + 1
            const desk = document.getElementById(`seat${seatIndex}`)
    
            if (deskIndex < desks.length) {
                const studentName = desks[deskIndex]
                const formattedName = studentName.charAt(0).toUpperCase() + studentName.slice(1).toLowerCase();
                desk.textContent = formattedName
                deskIndex++
            } else {
                desk.textContent = ''
            }
            saveDeskContentsToLocalStorage()
        }
    }
}   o
