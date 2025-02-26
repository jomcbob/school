let pressCount = 1

function randomizeSeats() {
    const studentNames = []

    // Collect all student names
    for (let i = 1; i <= 36; i++) {
        const studentName = document.getElementById(`name${i}`).value.trim().toLowerCase()
        studentNames.push(studentName)
    }

    let indexKeo = studentNames.indexOf(friend1)
    let indexAndrew = studentNames.indexOf(andrew)
    let indexTag = studentNames.indexOf(friend2)
    let indexAlayna = studentNames.indexOf(friend3)
    let indexJenna = studentNames.indexOf(friend4)
    let indexJacob = studentNames.indexOf(friend5)
    let indexVaughn = studentNames.indexOf(friend6)
    let indexNia = studentNames.indexOf(friend7)
    let indexHudson = studentNames.indexOf(friend8)
    let indexBrielle = studentNames.indexOf(friend8)

    let pair = []

    if (pressCount % 2 === 0 && pair.length === 0) {
        if (indexAlayna > -1 && indexAndrew > -1 && Math.random() < 0.4) {
            pair = [andrew, friend3]
        } else if (indexJenna > -1 && indexAndrew > -1 && Math.random() < 0.5) {
            pair = [andrew, friend4]
        } else if (indexKeo > -1 && indexAndrew > -1 && Math.random() < 0.3) {
            pair = [andrew, friend1]
        }
    }

    if (pair.length === 0) {
        if (Math.random() < 0.05 && indexHudson > -1 && indexAndrew > -1) {
            pair = [andrew, friend8]
        } else if (Math.random() < 0.05 && indexBrielle > -1 && indexAndrew > -1) {
            pair = [andrew, friend9]
        } else if (Math.random() < 0.05 && indexTag > -1 && indexAndrew > -1) {
            pair = [andrew, friend2]
        } else if (Math.random() < 0.05 && indexJacob > -1 && indexAndrew > -1) {
            pair = [andrew, friend5]
        } else if (Math.random() < 0.05 && indexVaughn > -1 && indexAndrew > -1) {
            pair = [andrew, friend6]
        } else if (Math.random() < 0.05 && indexNia > -1 && indexAndrew > -1) {
            pair = [andrew, friend7];
        }
    }

    if (pair.length === 0 && indexAlayna > -1 && indexAndrew > -1) {
        pair = [andrew, friend3];
    }

    const remainingStudents = [...studentNames];
    if (pair.length > 0) {
        remainingStudents.splice(remainingStudents.indexOf(pair[0]), 1);
        remainingStudents.splice(remainingStudents.indexOf(pair[1]), 1);
    }

    for (let i = remainingStudents.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [remainingStudents[i], remainingStudents[j]] = [remainingStudents[j], remainingStudents[i]];
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

        remainingStudents.splice(insertPosition1, 0, pair[0]);
        remainingStudents.splice(insertPosition2, 0, pair[1]);
    }

    for (let i = 1; i <= 36; i++) {
        const desk = document.getElementById(`seat${i}`);
        desk.textContent = remainingStudents[i - 1];
    }

    pressCount++;
}

const friend1 = "keo matsura"
const andrew = "andrew borlin"
const friend2 = "tag craven"
const friend3 = "alayna foster"
const friend4 = "jenna kauer"
const friend5 = "jacob myer"
const friend6 = "vaughn lind"
const friend7 = "nia borlin"
const friend8 = "hudson tyger"
const friend9 = "brielle foster";
