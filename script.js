// Russian noun data with cases
const russianNouns = [
    // Prepositional case examples
    {
        base: "стол",
        translation: "table",
        gender: "masculine",
        caseType: "prepositional",
        correctForm: "столе",
        preposition: "о",
        fullExample: "о столе (about the table)",
        wrongOptions: ["столу", "стола", "столом"]
    },
    {
        base: "книга",
        translation: "book",
        gender: "feminine",
        caseType: "prepositional",
        correctForm: "книге",
        preposition: "о",
        fullExample: "о книге (about the book)",
        wrongOptions: ["книгу", "книги", "книгой"]
    },
    {
        base: "окно",
        translation: "window",
        gender: "neuter",
        caseType: "prepositional",
        correctForm: "окне",
        preposition: "о",
        fullExample: "о окне (about the window)",
        wrongOptions: ["окна", "окну", "окном"]
    },
    {
        base: "дом",
        translation: "house",
        gender: "masculine",
        caseType: "prepositional",
        correctForm: "доме",
        preposition: "о",
        fullExample: "о доме (about the house)",
        wrongOptions: ["дому", "дома", "домом"]
    },
    {
        base: "школа",
        translation: "school",
        gender: "feminine",
        caseType: "prepositional",
        correctForm: "школе",
        preposition: "о",
        fullExample: "о школе (about the school)",
        wrongOptions: ["школу", "школы", "школой"]
    },
    {
        base: "музей",
        translation: "museum",
        gender: "masculine",
        caseType: "prepositional",
        correctForm: "музее",
        preposition: "о",
        fullExample: "о музее (about the museum)",
        wrongOptions: ["музею", "музея", "музеем"]
    },
    {
        base: "море",
        translation: "sea",
        gender: "neuter",
        caseType: "prepositional",
        correctForm: "море",
        preposition: "о",
        fullExample: "о море (about the sea)",
        wrongOptions: ["моря", "морю", "морем"]
    },
    {
        base: "город",
        translation: "city",
        gender: "masculine",
        caseType: "prepositional",
        correctForm: "городе",
        preposition: "о",
        fullExample: "о городе (about the city)",
        wrongOptions: ["городу", "города", "городом"]
    },

    // Accusative case examples
    {
        base: "стол",
        translation: "table",
        gender: "masculine",
        caseType: "accusative",
        correctForm: "стол",
        preposition: "на",
        fullExample: "на стол (onto the table)",
        wrongOptions: ["столу", "столе", "столом"]
    },
    {
        base: "книга",
        translation: "book",
        gender: "feminine",
        caseType: "accusative",
        correctForm: "книгу",
        preposition: "в",
        fullExample: "в книгу (into the book)",
        wrongOptions: ["книге", "книги", "книгой"]
    },
    {
        base: "окно",
        translation: "window",
        gender: "neuter",
        caseType: "accusative",
        correctForm: "окно",
        preposition: "в",
        fullExample: "в окно (into/through the window)",
        wrongOptions: ["окна", "окне", "окну"]
    },
    {
        base: "дом",
        translation: "house",
        gender: "masculine",
        caseType: "accusative",
        correctForm: "дом",
        preposition: "в",
        fullExample: "в дом (into the house)",
        wrongOptions: ["дому", "доме", "дома"]
    },
    {
        base: "школа",
        translation: "school",
        gender: "feminine",
        caseType: "accusative",
        correctForm: "школу",
        preposition: "в",
        fullExample: "в школу (to school)",
        wrongOptions: ["школе", "школы", "школой"]
    },
    {
        base: "музей",
        translation: "museum",
        gender: "masculine",
        caseType: "accusative",
        correctForm: "музей",
        preposition: "в",
        fullExample: "в музей (to the museum)",
        wrongOptions: ["музее", "музея", "музеем"]
    },
    {
        base: "море",
        translation: "sea",
        gender: "neuter",
        caseType: "accusative",
        correctForm: "море",
        preposition: "в",
        fullExample: "в море (to/into the sea)",
        wrongOptions: ["моря", "морю", "морем"]
    },
    {
        base: "город",
        translation: "city",
        gender: "masculine",
        caseType: "accusative",
        correctForm: "город",
        preposition: "в",
        fullExample: "в город (to the city)",
        wrongOptions: ["городу", "городе", "города"]
    },
    {
        base: "комната",
        translation: "room",
        gender: "feminine",
        caseType: "accusative",
        correctForm: "комнату",
        preposition: "в",
        fullExample: "в комнату (into the room)",
        wrongOptions: ["комнате", "комнаты", "комнатой"]
    },
    {
        base: "письмо",
        translation: "letter",
        gender: "neuter",
        caseType: "accusative",
        correctForm: "письмо",
        preposition: "в",
        fullExample: "в письмо (into the letter)",
        wrongOptions: ["письма", "письме", "письму"]
    },
    {
        base: "сумка",
        translation: "bag",
        gender: "feminine",
        caseType: "accusative",
        correctForm: "сумку",
        preposition: "в",
        fullExample: "в сумку (into the bag)",
        wrongOptions: ["сумке", "сумки", "сумкой"]
    },
    {
        base: "парк",
        translation: "park",
        gender: "masculine",
        caseType: "accusative",
        correctForm: "парк",
        preposition: "в",
        fullExample: "в парк (to the park)",
        wrongOptions: ["парку", "парке", "парком"]
    },
    {
        base: "страна",
        translation: "country",
        gender: "feminine",
        caseType: "prepositional",
        correctForm: "стране",
        preposition: "о",
        fullExample: "о стране (about the country)",
        wrongOptions: ["страну", "страны", "страной"]
    },
    {
        base: "работа",
        translation: "work",
        gender: "feminine",
        caseType: "prepositional",
        correctForm: "работе",
        preposition: "о",
        fullExample: "о работе (about work)",
        wrongOptions: ["работу", "работы", "работой"]
    }
];

// Application state
let currentWord = null;
let selectedCases = [];
let correctCount = 0;
let totalCount = 0;
let availableWords = [];

// DOM elements
const prepositionalCheckbox = document.getElementById('prepositional');
const accusativeCheckbox = document.getElementById('accusative');
const startBtn = document.getElementById('startBtn');
const practiceArea = document.getElementById('practiceArea');
const baseWordEl = document.getElementById('baseWord');
const translationEl = document.getElementById('translation');
const caseTypeEl = document.getElementById('caseType');
const optionsContainer = document.getElementById('optionsContainer');
const feedbackEl = document.getElementById('feedback');
const nextBtn = document.getElementById('nextBtn');
const showAnswerBtn = document.getElementById('showAnswerBtn');
const correctCountEl = document.getElementById('correctCount');
const totalCountEl = document.getElementById('totalCount');
const accuracyEl = document.getElementById('accuracy');

// Event listeners
startBtn.addEventListener('click', startPractice);
nextBtn.addEventListener('click', loadNextWord);
showAnswerBtn.addEventListener('click', showAnswer);

prepositionalCheckbox.addEventListener('change', updateStartButton);
accusativeCheckbox.addEventListener('change', updateStartButton);

function updateStartButton() {
    const hasSelection = prepositionalCheckbox.checked || accusativeCheckbox.checked;
    startBtn.disabled = !hasSelection;
}

function startPractice() {
    selectedCases = [];
    if (prepositionalCheckbox.checked) selectedCases.push('prepositional');
    if (accusativeCheckbox.checked) selectedCases.push('accusative');

    if (selectedCases.length === 0) {
        alert('Please select at least one case to practice!');
        return;
    }

    // Filter words based on selected cases
    availableWords = russianNouns.filter(noun => selectedCases.includes(noun.caseType));

    // Shuffle the words
    shuffleArray(availableWords);

    // Reset stats
    correctCount = 0;
    totalCount = 0;
    updateStats();

    // Show practice area
    practiceArea.classList.remove('hidden');

    // Load first word
    loadNextWord();

    // Scroll to practice area
    practiceArea.scrollIntoView({ behavior: 'smooth' });
}

function loadNextWord() {
    if (availableWords.length === 0) {
        // Reshuffle when we run out
        availableWords = russianNouns.filter(noun => selectedCases.includes(noun.caseType));
        shuffleArray(availableWords);
    }

    currentWord = availableWords.pop();

    // Update word display
    baseWordEl.textContent = currentWord.base;
    translationEl.textContent = `"${currentWord.translation}"`;
    caseTypeEl.textContent = `${currentWord.caseType} case - ${currentWord.preposition} + ?`;

    // Clear feedback
    feedbackEl.classList.add('hidden');
    feedbackEl.classList.remove('correct', 'incorrect');

    // Hide next button, show hint button
    nextBtn.classList.add('hidden');
    showAnswerBtn.classList.remove('hidden');

    // Create options
    createOptions();
}

function createOptions() {
    optionsContainer.innerHTML = '';

    // Combine correct answer with wrong options and shuffle
    const allOptions = [currentWord.correctForm, ...currentWord.wrongOptions];
    shuffleArray(allOptions);

    allOptions.forEach(option => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = option;
        btn.addEventListener('click', () => selectOption(btn, option));
        optionsContainer.appendChild(btn);
    });
}

function selectOption(button, selectedAnswer) {
    // Disable all buttons
    const allButtons = optionsContainer.querySelectorAll('.option-btn');
    allButtons.forEach(btn => btn.disabled = true);

    // Check answer
    const isCorrect = selectedAnswer === currentWord.correctForm;

    totalCount++;
    if (isCorrect) {
        correctCount++;
        button.classList.add('correct');
        feedbackEl.textContent = `Correct! ${currentWord.preposition} ${currentWord.correctForm}`;
        feedbackEl.classList.add('correct');
    } else {
        button.classList.add('incorrect');
        // Highlight the correct answer
        allButtons.forEach(btn => {
            if (btn.textContent === currentWord.correctForm) {
                btn.classList.add('correct');
            }
        });
        feedbackEl.textContent = `Incorrect. The correct answer is: ${currentWord.preposition} ${currentWord.correctForm}`;
        feedbackEl.classList.add('incorrect');
    }

    feedbackEl.classList.remove('hidden');
    showAnswerBtn.classList.add('hidden');
    nextBtn.classList.remove('hidden');

    updateStats();
}

function showAnswer() {
    const allButtons = optionsContainer.querySelectorAll('.option-btn');
    allButtons.forEach(btn => {
        btn.disabled = true;
        if (btn.textContent === currentWord.correctForm) {
            btn.classList.add('correct');
        }
    });

    feedbackEl.textContent = `Answer: ${currentWord.preposition} ${currentWord.correctForm}`;
    feedbackEl.classList.add('correct');
    feedbackEl.classList.remove('hidden');

    showAnswerBtn.classList.add('hidden');
    nextBtn.classList.remove('hidden');

    // Don't count this as a wrong answer, just skip it
}

function updateStats() {
    correctCountEl.textContent = correctCount;
    totalCountEl.textContent = totalCount;

    if (totalCount > 0) {
        const accuracy = Math.round((correctCount / totalCount) * 100);
        accuracyEl.textContent = `${accuracy}%`;
    } else {
        accuracyEl.textContent = '0%';
    }
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
