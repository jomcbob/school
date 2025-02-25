let pressCount = 0

function randomizeSeats() {
    const studentNames = [];

    for (let i = 1; i <= 36; i++) {
        const studentName = document.getElementById(`name${i}`).value.toLowerCase()
        studentNames.push(studentName)
    }

    const keo = "keo matsura"
    const andrew = "andrew borlin"
    const alayna = "alayna foster"

    let indexKeo = studentNames.indexOf(keo)
    let indexAndrew = studentNames.indexOf(andrew)
    let indexAlayna = studentNames.indexOf(alayna)

    let pair = []

    if (pressCount % 2 === 0) {
        if (indexKeo > -1 && indexAndrew > -1) {
            pair = [andrew, keo]
            studentNames.splice(indexKeo, 1)
            indexAndrew = studentNames.indexOf(andrew);
            studentNames.splice(indexAndrew, 1)
        }
    } else {
        if (indexAlayna > -1 && indexAndrew > -1) {
            pair = [andrew, alayna]
            studentNames.splice(indexAlayna, 1)
            indexAndrew = studentNames.indexOf(andrew);
            studentNames.splice(indexAndrew, 1)
        }
    }

    const shuffledNames = [...studentNames];
    for (let i = shuffledNames.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledNames[i], shuffledNames[j]] = [shuffledNames[j], shuffledNames[i]];
    }

    const validHorizontalPairs = [
        [1, 2], [3, 4], [5, 6], 
        [7, 8], [9, 10], [11, 12],
        [13, 14], [15, 16], [17, 18], 
        [19, 20], [21, 22], [23, 24],
        [25, 26], [27, 28], [29, 30],
        [31, 32], [33, 34], [35, 36]
    ]

    if (pair.length > 0) {
        const selectedPair = validHorizontalPairs[Math.floor(Math.random() * validHorizontalPairs.length)];

        let insertPosition1 = selectedPair[0] - 1;
        let insertPosition2 = selectedPair[1] - 1;

        shuffledNames.splice(insertPosition1, 0, pair[0])
        shuffledNames.splice(insertPosition2, 0, pair[1])
    }

    for (let i = 1; i <= 36; i++) {
        const desk = document.getElementById(`seat${i}`);
        desk.textContent = shuffledNames[i - 1];
    }

    pressCount++
}
