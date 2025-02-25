function randomizeSeats() {
    const studentNames = []

    for (let i = 1; i <= 36; i++) {
        const studentName = document.getElementById(`name${i}`).value
        studentNames.push(studentName)
    }

    const kio = "keo matsura"
    const andrew = "andrew borlin"

    // Remove Andrew and Keo from the list if they exist
    let indexKio = studentNames.indexOf(kio)
    let indexAndrew = studentNames.indexOf(andrew)

    if (indexKio > -1){
     studentNames.splice(indexKio, 1)
     indexAndrew = studentNames.indexOf(andrew)
    }
    if (indexAndrew > -1) studentNames.splice(indexAndrew, 1)

    let pair = [];
    if (indexKio > -1 && indexAndrew > -1) {
        pair = [andrew, kio]
    }

    const shuffledNames = [...studentNames]
    for (let i = shuffledNames.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        [shuffledNames[i], shuffledNames[j]] = [shuffledNames[j], shuffledNames[i]]
    }

    const validHorizontalPairs = [
        [1, 2], [3, 4], [5, 6], 
        [7, 8], [9, 10], [11, 12],
        [13, 14], [15, 16], [17, 18], 
        [19, 20], [21, 22], [23, 24],
        [25, 26], [27, 28], [29, 30],
        [31, 32], [33, 34], [35, 36]
    ]

    const selectedPair = validHorizontalPairs[Math.floor(Math.random() * validHorizontalPairs.length)]

    let insertPosition1 = selectedPair[0] - 1;
    let insertPosition2 = selectedPair[1] - 1;

    if (pair.length > 0) {
        shuffledNames.splice(insertPosition1, 0, pair[0])
        shuffledNames.splice(insertPosition2, 0, pair[1])
    }

    for (let i = 1; i <= 36; i++) {
        const desk = document.getElementById(`seat${i}`);
        desk.textContent = shuffledNames[i - 1];
    }
}
