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

    let pair = [];

    // Step 1: Try to pair Andrew with higher probability students (Keo, Alayna, Jenna)
    if (pressCount % 2 === 0) {
        if (indexAlayna > -1 && indexAndrew > -1 && Math.random() < 0.2) {
            pair = [andrew, alayna];
            studentNames.splice(indexAlayna, 1);  // Remove Alayna from the list
            indexAndrew = studentNames.indexOf(andrew);
            studentNames.splice(indexAndrew, 1);  // Remove Andrew from the list
        } else if (indexJenna > -1 && indexAndrew > -1 && Math.random() < 0.4) {
            pair = [andrew, jennaKauer];
            studentNames.splice(indexJenna, 1);  // Remove Jenna from the list
            indexAndrew = studentNames.indexOf(andrew);
            studentNames.splice(indexAndrew, 1);  // Remove Andrew from the list
        } else if (indexKeo > -1 && indexAndrew > -1 && Math.random() < 0.3) {
            pair = [andrew, keo];
            studentNames.splice(indexKeo, 1);  // Remove Keo from the list
            indexAndrew = studentNames.indexOf(andrew);
            studentNames.splice(indexAndrew, 1);  // Remove Andrew from the list
        }
    }

    // Step 2: If Andrew is not yet paired, try to pair him with lower probability students (Tag, Jacob, Vaughn, Nia)
    if (pair.length === 0) {
        if (Math.random() < 0.025 && indexTag > -1 && indexAndrew > -1) {
            pair = [andrew, tagCraven];
            studentNames.splice(indexTag, 1);  // Remove Tag from the list
            indexAndrew = studentNames.indexOf(andrew);
            studentNames.splice(indexAndrew, 1);  // Remove Andrew from the list
        } else if (Math.random() < 0.025 && indexJacob > -1 && indexAndrew > -1) {
            pair = [andrew, jacobMyer];
            studentNames.splice(indexJacob, 1);  // Remove Jacob from the list
            indexAndrew = studentNames.indexOf(andrew);
            studentNames.splice(indexAndrew, 1);  // Remove Andrew from the list
        } else if (Math.random() < 0.025 && indexVaughn > -1 && indexAndrew > -1) {
            pair = [andrew, vaughnLind];
            studentNames.splice(indexVaughn, 1);  // Remove Vaughn from the list
            indexAndrew = studentNames.indexOf(andrew);
            studentNames.splice(indexAndrew, 1);  // Remove Andrew from the list
        } else if (Math.random() < 0.025 && indexNia > -1 && indexAndrew > -1) {
            pair = [andrew, niaBorlin];
            studentNames.splice(indexNia, 1);  // Remove Nia from the list
            indexAndrew = studentNames.indexOf(andrew);
            studentNames.splice(indexAndrew, 1);  // Remove Andrew from the list
        }
    }

    // Step 3: If Andrew hasn't been paired yet, always pair him with Alayna
    if (pair.length === 0 && indexAlayna > -1 && indexAndrew > -1) {
        pair = [andrew, alayna];
        studentNames.splice(indexAlayna, 1);  // Remove Alayna from the list
        indexAndrew = studentNames.indexOf(andrew);
        studentNames.splice(indexAndrew, 1);  // Remove Andrew from the list
    }

    // Step 4: Shuffle remaining students
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
    ];

    // Step 5: Insert the paired students into their seats horizontally
    if (pair.length > 0) {
        const selectedPair = validHorizontalPairs[Math.floor(Math.random() * validHorizontalPairs.length)];

        let insertPosition1 = selectedPair[0] - 1;
        let insertPosition2 = selectedPair[1] - 1;

        shuffledNames.splice(insertPosition1, 0, pair[0]);
        shuffledNames.splice(insertPosition2, 0, pair[1]);
    }

    // Step 6: Fill remaining desks
    for (let i = 1; i <= 36; i++) {
        const desk = document.getElementById(`seat${i}`);
        desk.textContent = shuffledNames[i - 1];
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
