function randomizeSeats() {
    const studentNames = []

    for (let i = 1; i <= 36; i++) {
        const studentName = document.getElementById(`name${i}`).value
        studentNames.push(studentName)
    }

    const shuffledNames = [...studentNames]; // Make a copy to preserve the original order
    for (let i = shuffledNames.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        [shuffledNames[i], shuffledNames[j]] = [shuffledNames[j], shuffledNames[i]]
    }

    for (let i = 1; i <= 36; i++) {
        const desk = document.getElementById(`seat${i}`)
        desk.textContent = shuffledNames[i - 1]
    }

    localStorage.setItem('studentNames', JSON.stringify(studentNames))
    localStorage.setItem('shuffledSeatingArrangement', JSON.stringify(shuffledNames))
}


function loadFromLocalStorage() {
    const savedStudentNames = JSON.parse(localStorage.getItem('studentNames'));
    const savedSeatingArrangement = JSON.parse(localStorage.getItem('shuffledSeatingArrangement'))

    if (savedStudentNames) {
        for (let i = 1; i <= 36; i++) {
            const inputField = document.getElementById(`name${i}`)
            inputField.value = savedStudentNames[i - 1]
        }
    }

    if (savedSeatingArrangement) {
        for (let i = 1; i <= 36; i++) {
            const desk = document.getElementById(`seat${i}`)
            desk.textContent = savedSeatingArrangement[i - 1]
        }
    }
}

function saveNamesAlphabetically() {
    const studentNames = []
    for (let i = 1; i <= 36; i++) {
        const studentName = document.getElementById(`name${i}`).value
        studentNames.push(studentName)
    }

    studentNames.sort()
    localStorage.setItem('studentNames', JSON.stringify(studentNames))
    for (let i = 1; i <= 36; i++) {
        const inputField = document.getElementById(`name${i}`)
        inputField.value = studentNames[i - 1]
    }
}

function saveStudentNames() {
    const studentNames = [];
    for (let i = 1; i <= 36; i++) {
        const studentName = document.getElementById(`name${i}`).value
        studentNames.push(studentName)
    }
    localStorage.setItem('studentNames', JSON.stringify(studentNames))
}

window.onload = function () {
    loadFromLocalStorage();
    const inputFields = document.querySelectorAll('.student')
    inputFields.forEach(input => {
        input.addEventListener('input', saveStudentNames)
    })
}
