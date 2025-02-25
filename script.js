function randomizeSeats() {
    const studentNames = [];

    // Collect student names
    for (let i = 1; i <= 36; i++) {
        const studentName = document.getElementById(`name${i}`).value;
        studentNames.push(studentName);
    }

    const kio = "keo matsura";
    const andrew = "andrew borlin";

    // Remove Andrew and Keo if they exist, and keep track of their presence
    let indexKio = studentNames.indexOf(kio);
    let indexAndrew = studentNames.indexOf(andrew);

    let pair = [];

    if (indexKio > -1 && indexAndrew > -1) {
        // If both Andrew and Keo are present, we want to pair them
        pair = [andrew, kio];
        studentNames.splice(indexKio, 1); // Remove Keo
        indexAndrew = studentNames.indexOf(andrew)
        studentNames.splice(indexAndrew, 1); // Remove Andrew
    }

    // Shuffle the remaining student names if only one or neither is present
    const shuffledNames = [...studentNames];
    for (let i = shuffledNames.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledNames[i], shuffledNames[j]] = [shuffledNames[j], shuffledNames[i]];
    }

    // Define valid horizontal pairs of desks
    const validHorizontalPairs = [
        [1, 2], [3, 4], [5, 6], 
        [7, 8], [9, 10], [11, 12],
        [13, 14], [15, 16], [17, 18], 
        [19, 20], [21, 22], [23, 24],
        [25, 26], [27, 28], [29, 30],
        [31, 32], [33, 34], [35, 36]
    ];

    // Select a random pair of desks for Andrew and Keo if they are both present
    if (pair.length > 0) {
        const selectedPair = validHorizontalPairs[Math.floor(Math.random() * validHorizontalPairs.length)];

        let insertPosition1 = selectedPair[0] - 1;
        let insertPosition2 = selectedPair[1] - 1;

        // Insert Andrew and Keo into the shuffled list
        shuffledNames.splice(insertPosition1, 0, pair[0]); // Insert Andrew
        shuffledNames.splice(insertPosition2, 0, pair[1]); // Insert Keo
    }

    // Update the desks with the shuffled names
    for (let i = 1; i <= 36; i++) {
        const desk = document.getElementById(`seat${i}`);
        desk.textContent = shuffledNames[i - 1];
    }
}
