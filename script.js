let pressCount = 1;

function randomizeSeats() {
    const studentNames = [];

    // Collect all student names
    for (let i = 1; i <= 36; i++) {
        const studentName = document.getElementById(`name${i}`).value.toLowerCase();
        studentNames.push(studentName);
    }

    let indexKeo = studentNames.indexOf(keo);
    let indexAndrew = studentNames.indexOf(andrew);
    let indexTag = studentNames.indexOf(tagCraven);
    let indexAlayna = studentNames.indexOf(alayna);
    let indexJenna = studentNames.indexOf(jennaKauer);
    let indexJacob = studentNames.indexOf(jacobMyer);
    let indexVaughn = studentNames.indexOf(vaughnLind);
    let indexNia = studentNames.indexOf(niaBorlin);
    let indexHudson = studentNames.indexOf(hudsonTyger);
    let indexBrielle = studentNames.indexOf(brielleFoster);

    let pair = [];

    // Step 1: Try to pair Andrew with higher probability students (Keo, Alayna, Jenna)
    if (pressCount % 2 === 0 && pair.length === 0) { // Only attempt pairing if Andrew hasn't been paired yet
        if (indexAlayna > -1 && indexAndrew > -1 && Math.random() < 0.25) { // Adjusted probability for Alayna
            pair = [andrew, alayna];
        } else if (indexJenna > -1 && indexAndrew > -1 && Math.random() < 0.89) { // Adjusted probability for Jenna
            pair = [andrew, jennaKauer];
        } else if (indexKeo > -1 && indexAndrew > -1 && Math.random() < 0.3) { // Increased probability for Keo
            pair = [andrew, keo];
        }
    }

    // Step 2: If Andrew is not yet paired, try to pair him with lower probability students (Hudson, Brielle, Tag, Jacob, Vaughn, Nia)
    if (pair.length === 0) {
        if (Math.random() < 0.05 && indexHudson > -1 && indexAndrew > -1) {
            pair = [andrew, hudsonTyger];
        } else if (Math.random() < 0.05 && indexBrielle > -1 && indexAndrew > -1) {
            pair = [andrew, brielleFoster];
        } else if (Math.random() < 0.05 && indexTag > -1 && indexAndrew > -1) {
            pair = [andrew, tagCraven];
        } else if (Math.random() < 0.05 && indexJacob > -1 && indexAndrew > -1) {
            pair = [andrew, jacobMyer];
        } else if (Math.random() < 0.05 && indexVaughn > -1 && indexAndrew > -1) {
            pair = [andrew, vaughnLind];
        } else if (Math.random() < 0.05 && indexNia > -1 && indexAndrew > -1) {
            pair = [andrew, niaBorlin];
        }
    }

    // Step 3: If Andrew hasn't been paired yet, always pair him with Alayna, but only if no other pairing found
    if (pair.length === 0 && indexAlayna > -1 && indexAndrew > -1) {
        pair = [andrew, alayna];
    }

    // Step 4: Shuffle remaining students (excluding paired ones)
    const remainingStudents = [...studentNames];
    if (pair.length > 0) {
        // Remove paired students from remaining students list
        remainingStudents.splice(remainingStudents.indexOf(pair[0]), 1);
        remainingStudents.splice(remainingStudents.indexOf(pair[1]), 1);
    }

    // Shuffle remaining students
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
    ];

    // Step 5: Insert the paired students into their seats horizontally
    if (pair.length > 0) {
        const selectedPair = validHorizontalPairs[Math.floor(Math.random() * validHorizontalPairs.length)];

        let insertPosition1 = selectedPair[0] - 1;
        let insertPosition2 = selectedPair[1] - 1;

        remainingStudents.splice(insertPosition1, 0, pair[0]);
        remainingStudents.splice(insertPosition2, 0, pair[1]);
    }

    // Step 6: Fill remaining desks
    for (let i = 1; i <= 36; i++) {
        const desk = document.getElementById(`seat${i}`);
        desk.textContent = remainingStudents[i - 1];
    }

    pressCount++;
}

const keo = "keo matsura";
const andrew = "andrew borlin";
const tagCraven = "tag craven";
const alayna = "alayna foster";
const jennaKauer = "jenna kauer";
const jacobMyer = "jacob myer";
const vaughnLind = "vaughn lind";
const niaBorlin = "nia borlin";
const hudsonTyger = "hudson tyger";
const brielleFoster = "brielle foster";
