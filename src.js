let count = 1

function saveNamesAsTyped() {
    const studentNames = []
    for (let i = 1; i <= 36; i++) {
        const studentName = document.getElementById(`name${i}`).value.trim()
        studentNames.push(studentName)
    }
    localStorage.setItem('studentNames', JSON.stringify(studentNames))
}

function formatName(name) {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
}

function randomizeSeats() {
    const studentNames = []
    for (let i = 1; i <= 36; i++) {
        const studentName = formatName(document.getElementById(`name${i}`).value.trim())
        studentNames.push(studentName)
    }

    let pair = []
    let indexYo = studentNames.indexOf(formatName(document.getElementById('name4').value.trim()))
    let indexFriend3 = studentNames.indexOf(formatName(document.getElementById('name3').value.trim()))
    let indexFriend4 = studentNames.indexOf(formatName(document.getElementById('name14').value.trim()))

    if (indexYo > -1) {
        if (pair.length === 0) {
            if ((count === 1 || count === 4) && indexFriend3 > -1 && indexYo > -1) {
                pair = [studentNames[indexYo], studentNames[indexFriend3]]
            } else if (count === 3 && indexFriend4 > -1 && indexYo > -1) {
                pair = [studentNames[indexYo], studentNames[indexFriend4]]
            }
        }
    }

    const remainingStudents = [...studentNames]
    if (pair.length > 0) {
        remainingStudents.splice(remainingStudents.indexOf(pair[0]), 1)
        remainingStudents.splice(remainingStudents.indexOf(pair[1]), 1)
    }

    for (let i = remainingStudents.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [remainingStudents[i], remainingStudents[j]] = [remainingStudents[j], remainingStudents[i]]
    }

    const validHorizontalPairs = [
        [1, 2], [3, 4], [5, 6], [7, 8], [9, 10], [11, 12],
        [13, 14], [15, 16], [17, 18], [19, 20], [21, 22], [23, 24],
        [25, 26], [27, 28], [29, 30], [31, 32], [33, 34], [35, 36]
    ]

    if (pair.length > 0) {
        const selectedPair = validHorizontalPairs[Math.floor(Math.random() * validHorizontalPairs.length)]
        let insertPosition1 = selectedPair[0] - 1
        let insertPosition2 = selectedPair[1] - 1

        remainingStudents.splice(insertPosition1, 0, pair[0])
        remainingStudents.splice(insertPosition2, 0, pair[1])
    }

    for (let i = 1; i <= 36; i++) {
        const desk = document.getElementById(`seat${i}`)
        desk.textContent = remainingStudents[i - 1]
    }

    saveDeskContentsToLocalStorage()

    count = count <= 4 ? count + 1 : 1
    localStorage.setItem('count', count.toString())
    window.location.reload()
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

function loadStudentNamesFromLocalStorage() {
    const savedStudentNames = JSON.parse(localStorage.getItem('studentNames'))
    if (savedStudentNames) {
        for (let i = 1; i <= 36; i++) {
            const inputField = document.getElementById(`name${i}`)
            inputField.value = savedStudentNames[i - 1] || ''
        }
    }
}

function sortSeatsAlphabetically() {
    const desks = []
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
                desk.textContent = formatName(studentName)
                deskIndex++
            } else {
                desk.textContent = ''
            }
        }
    }

    saveDeskContentsToLocalStorage()
}

window.onload = function() {
    loadDeskContentsFromLocalStorage()
    loadStudentNamesFromLocalStorage()

    let savedCount = localStorage.getItem('count')
    if (savedCount && !isNaN(savedCount)) {
        count = parseInt(savedCount, 10)
    } else {
        count = 1
    }

    for (let i = 1; i <= 36; i++) {
        const inputField = document.getElementById(`name${i}`)
        inputField.addEventListener('input', saveNamesAsTyped)
    }
}
