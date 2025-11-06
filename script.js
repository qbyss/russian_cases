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
        wrongOptions: ["столу", "стола", "столом"],
        wordType: "noun"
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

// Russian adjective data with cases
const russianAdjectives = [
    // Prepositional case - Masculine
    {
        base: "новый",
        translation: "new",
        gender: "masculine",
        caseType: "prepositional",
        correctForm: "новом",
        preposition: "о",
        fullExample: "о новом (about the new one)",
        wrongOptions: ["новый", "новую", "новое"],
        wordType: "adjective"
    },
    {
        base: "старый",
        translation: "old",
        gender: "masculine",
        caseType: "prepositional",
        correctForm: "старом",
        preposition: "о",
        fullExample: "о старом (about the old one)",
        wrongOptions: ["старый", "старую", "старое"],
        wordType: "adjective"
    },
    {
        base: "большой",
        translation: "big",
        gender: "masculine",
        caseType: "prepositional",
        correctForm: "большом",
        preposition: "о",
        fullExample: "о большом (about the big one)",
        wrongOptions: ["большой", "большую", "большое"],
        wordType: "adjective"
    },
    {
        base: "красивый",
        translation: "beautiful",
        gender: "masculine",
        caseType: "prepositional",
        correctForm: "красивом",
        preposition: "о",
        fullExample: "о красивом (about the beautiful one)",
        wrongOptions: ["красивый", "красивую", "красивое"],
        wordType: "adjective"
    },

    // Prepositional case - Feminine
    {
        base: "новая",
        translation: "new",
        gender: "feminine",
        caseType: "prepositional",
        correctForm: "новой",
        preposition: "о",
        fullExample: "о новой (about the new one)",
        wrongOptions: ["новая", "новую", "новом"],
        wordType: "adjective"
    },
    {
        base: "старая",
        translation: "old",
        gender: "feminine",
        caseType: "prepositional",
        correctForm: "старой",
        preposition: "о",
        fullExample: "о старой (about the old one)",
        wrongOptions: ["старая", "старую", "старом"],
        wordType: "adjective"
    },
    {
        base: "большая",
        translation: "big",
        gender: "feminine",
        caseType: "prepositional",
        correctForm: "большой",
        preposition: "о",
        fullExample: "о большой (about the big one)",
        wrongOptions: ["большая", "большую", "большом"],
        wordType: "adjective"
    },
    {
        base: "красивая",
        translation: "beautiful",
        gender: "feminine",
        caseType: "prepositional",
        correctForm: "красивой",
        preposition: "о",
        fullExample: "о красивой (about the beautiful one)",
        wrongOptions: ["красивая", "красивую", "красивом"],
        wordType: "adjective"
    },

    // Prepositional case - Neuter
    {
        base: "новое",
        translation: "new",
        gender: "neuter",
        caseType: "prepositional",
        correctForm: "новом",
        preposition: "о",
        fullExample: "о новом (about the new one)",
        wrongOptions: ["новое", "новую", "новой"],
        wordType: "adjective"
    },
    {
        base: "старое",
        translation: "old",
        gender: "neuter",
        caseType: "prepositional",
        correctForm: "старом",
        preposition: "о",
        fullExample: "о старом (about the old one)",
        wrongOptions: ["старое", "старую", "старой"],
        wordType: "adjective"
    },

    // Accusative case - Masculine (inanimate = nominative)
    {
        base: "новый",
        translation: "new",
        gender: "masculine",
        caseType: "accusative",
        correctForm: "новый",
        preposition: "в",
        fullExample: "в новый (into the new one)",
        wrongOptions: ["новом", "новую", "нового"],
        wordType: "adjective"
    },
    {
        base: "старый",
        translation: "old",
        gender: "masculine",
        caseType: "accusative",
        correctForm: "старый",
        preposition: "в",
        fullExample: "в старый (into the old one)",
        wrongOptions: ["старом", "старую", "старого"],
        wordType: "adjective"
    },
    {
        base: "большой",
        translation: "big",
        gender: "masculine",
        caseType: "accusative",
        correctForm: "большой",
        preposition: "на",
        fullExample: "на большой (onto the big one)",
        wrongOptions: ["большом", "большую", "большого"],
        wordType: "adjective"
    },
    {
        base: "синий",
        translation: "blue",
        gender: "masculine",
        caseType: "accusative",
        correctForm: "синий",
        preposition: "в",
        fullExample: "в синий (into the blue one)",
        wrongOptions: ["синем", "синюю", "синего"],
        wordType: "adjective"
    },

    // Accusative case - Feminine (-ую/-юю)
    {
        base: "новая",
        translation: "new",
        gender: "feminine",
        caseType: "accusative",
        correctForm: "новую",
        preposition: "в",
        fullExample: "в новую (into the new one)",
        wrongOptions: ["новая", "новой", "новом"],
        wordType: "adjective"
    },
    {
        base: "старая",
        translation: "old",
        gender: "feminine",
        caseType: "accusative",
        correctForm: "старую",
        preposition: "в",
        fullExample: "в старую (into the old one)",
        wrongOptions: ["старая", "старой", "старом"],
        wordType: "adjective"
    },
    {
        base: "большая",
        translation: "big",
        gender: "feminine",
        caseType: "accusative",
        correctForm: "большую",
        preposition: "на",
        fullExample: "на большую (onto the big one)",
        wrongOptions: ["большая", "большой", "большом"],
        wordType: "adjective"
    },
    {
        base: "красивая",
        translation: "beautiful",
        gender: "feminine",
        caseType: "accusative",
        correctForm: "красивую",
        preposition: "в",
        fullExample: "в красивую (into the beautiful one)",
        wrongOptions: ["красивая", "красивой", "красивом"],
        wordType: "adjective"
    },
    {
        base: "синяя",
        translation: "blue",
        gender: "feminine",
        caseType: "accusative",
        correctForm: "синюю",
        preposition: "в",
        fullExample: "в синюю (into the blue one)",
        wrongOptions: ["синяя", "синей", "синем"],
        wordType: "adjective"
    },
    {
        base: "хорошая",
        translation: "good",
        gender: "feminine",
        caseType: "accusative",
        correctForm: "хорошую",
        preposition: "в",
        fullExample: "в хорошую (into the good one)",
        wrongOptions: ["хорошая", "хорошей", "хорошем"],
        wordType: "adjective"
    },

    // Accusative case - Neuter (= nominative)
    {
        base: "новое",
        translation: "new",
        gender: "neuter",
        caseType: "accusative",
        correctForm: "новое",
        preposition: "в",
        fullExample: "в новое (into the new one)",
        wrongOptions: ["новом", "новую", "новой"],
        wordType: "adjective"
    },
    {
        base: "старое",
        translation: "old",
        gender: "neuter",
        caseType: "accusative",
        correctForm: "старое",
        preposition: "в",
        fullExample: "в старое (into the old one)",
        wrongOptions: ["старом", "старую", "старой"],
        wordType: "adjective"
    },
    {
        base: "синее",
        translation: "blue",
        gender: "neuter",
        caseType: "accusative",
        correctForm: "синее",
        preposition: "в",
        fullExample: "в синее (into the blue one)",
        wrongOptions: ["синем", "синюю", "синей"],
        wordType: "adjective"
    },

    // Additional Prepositional adjectives
    {
        base: "маленький",
        translation: "small",
        gender: "masculine",
        caseType: "prepositional",
        correctForm: "маленьком",
        preposition: "о",
        fullExample: "о маленьком (about the small one)",
        wrongOptions: ["маленький", "маленькую", "маленькое"],
        wordType: "adjective"
    },
    {
        base: "хороший",
        translation: "good",
        gender: "masculine",
        caseType: "prepositional",
        correctForm: "хорошем",
        preposition: "о",
        fullExample: "о хорошем (about the good one)",
        wrongOptions: ["хороший", "хорошую", "хорошее"],
        wordType: "adjective"
    },
    {
        base: "синий",
        translation: "blue",
        gender: "masculine",
        caseType: "prepositional",
        correctForm: "синем",
        preposition: "о",
        fullExample: "о синем (about the blue one)",
        wrongOptions: ["синий", "синюю", "синее"],
        wordType: "adjective"
    }
];

// Combine all words
const allWords = [...russianNouns, ...russianAdjectives];

// Application state
let currentWord = null;
let selectedCases = [];
let correctCount = 0;
let totalCount = 0;
let availableWords = [];
let practiceMode = 'case'; // 'case' or 'agreement'
let currentAgreementQuestion = null;

// DOM elements
const prepositionalCheckbox = document.getElementById('prepositional');
const accusativeCheckbox = document.getElementById('accusative');
const casePracticeRadio = document.getElementById('casePractice');
const agreementPracticeRadio = document.getElementById('agreementPractice');
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

    // Get selected practice mode
    practiceMode = casePracticeRadio.checked ? 'case' : 'agreement';

    if (practiceMode === 'case') {
        // Filter words based on selected cases
        availableWords = allWords.filter(word => selectedCases.includes(word.caseType));
        shuffleArray(availableWords);
    } else {
        // For agreement mode, prepare noun-adjective combinations
        const nouns = russianNouns.filter(noun => selectedCases.includes(noun.caseType));
        shuffleArray(nouns);
        availableWords = nouns;
    }

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
    if (practiceMode === 'case') {
        loadCaseQuestion();
    } else {
        loadAgreementQuestion();
    }
}

function loadCaseQuestion() {
    if (availableWords.length === 0) {
        // Reshuffle when we run out
        availableWords = allWords.filter(word => selectedCases.includes(word.caseType));
        shuffleArray(availableWords);
    }

    currentWord = availableWords.pop();
    currentAgreementQuestion = null;

    // Update word display
    baseWordEl.textContent = currentWord.base;
    translationEl.textContent = `"${currentWord.translation}"`;
    caseTypeEl.textContent = `${currentWord.caseType} case - ${currentWord.preposition} + ?`;

    // Update word type badge
    const wordTypeEl = document.getElementById('wordType');
    const wordType = currentWord.wordType || 'noun'; // Default to noun if not specified
    wordTypeEl.textContent = wordType;
    wordTypeEl.className = `word-type-badge ${wordType}`;

    // Clear feedback
    feedbackEl.classList.add('hidden');
    feedbackEl.classList.remove('correct', 'incorrect');

    // Hide next button, show hint button
    nextBtn.classList.add('hidden');
    showAnswerBtn.classList.remove('hidden');

    // Create options
    createOptions();
}

function loadAgreementQuestion() {
    if (availableWords.length === 0) {
        // Reshuffle when we run out
        const nouns = russianNouns.filter(noun => selectedCases.includes(noun.caseType));
        shuffleArray(nouns);
        availableWords = nouns;
    }

    const noun = availableWords.pop();

    // Pick a random adjective base (masculine form)
    const adjectiveBases = [
        { base: "новый", translation: "new" },
        { base: "старый", translation: "old" },
        { base: "большой", translation: "big" },
        { base: "красивый", translation: "beautiful" },
        { base: "маленький", translation: "small" },
        { base: "хороший", translation: "good" },
        { base: "синий", translation: "blue" }
    ];

    const adjBase = adjectiveBases[Math.floor(Math.random() * adjectiveBases.length)];

    // Get all forms of this adjective in the selected case
    const adjForms = russianAdjectives.filter(adj =>
        adj.translation === adjBase.translation &&
        adj.caseType === noun.caseType
    );

    // Find the correct form that matches the noun's gender
    const correctAdj = adjForms.find(adj => adj.gender === noun.gender);

    if (!correctAdj) {
        // Fallback - shouldn't happen if data is complete
        loadAgreementQuestion();
        return;
    }

    // Create wrong options from other genders
    const wrongOptions = adjForms
        .filter(adj => adj.gender !== noun.gender)
        .map(adj => adj.correctForm);

    currentAgreementQuestion = {
        noun: noun,
        adjective: adjBase,
        correctForm: correctAdj.correctForm,
        wrongOptions: wrongOptions,
        caseType: noun.caseType,
        preposition: noun.preposition
    };

    currentWord = null;

    // Update display for agreement mode
    baseWordEl.innerHTML = `${adjBase.base} <span style="color: #764ba2;">+</span> ${noun.base}`;
    translationEl.textContent = `"${adjBase.translation} ${noun.translation}" (${noun.gender})`;
    caseTypeEl.textContent = `${noun.caseType} case - Match adjective to noun gender`;

    // Update word type badge
    const wordTypeEl = document.getElementById('wordType');
    wordTypeEl.textContent = 'agreement';
    wordTypeEl.className = `word-type-badge agreement`;

    // Clear feedback
    feedbackEl.classList.add('hidden');
    feedbackEl.classList.remove('correct', 'incorrect');

    // Hide next button, show hint button
    nextBtn.classList.add('hidden');
    showAnswerBtn.classList.remove('hidden');

    // Create options
    createAgreementOptions();
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

function createAgreementOptions() {
    optionsContainer.innerHTML = '';

    // Combine correct answer with wrong options and shuffle
    const allOptions = [currentAgreementQuestion.correctForm, ...currentAgreementQuestion.wrongOptions];
    shuffleArray(allOptions);

    allOptions.forEach(option => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = option;
        btn.addEventListener('click', () => selectAgreementOption(btn, option));
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

function selectAgreementOption(button, selectedAnswer) {
    // Disable all buttons
    const allButtons = optionsContainer.querySelectorAll('.option-btn');
    allButtons.forEach(btn => btn.disabled = true);

    // Check answer
    const isCorrect = selectedAnswer === currentAgreementQuestion.correctForm;

    totalCount++;
    if (isCorrect) {
        correctCount++;
        button.classList.add('correct');
        feedbackEl.textContent = `Correct! ${currentAgreementQuestion.preposition} ${currentAgreementQuestion.adjective.base.replace(/ый$|ой$|ий$/, '')}${currentAgreementQuestion.correctForm.match(/[а-я]+$/)[0]} ${currentAgreementQuestion.noun.correctForm}`;
        feedbackEl.classList.add('correct');
    } else {
        button.classList.add('incorrect');
        // Highlight the correct answer
        allButtons.forEach(btn => {
            if (btn.textContent === currentAgreementQuestion.correctForm) {
                btn.classList.add('correct');
            }
        });
        feedbackEl.textContent = `Incorrect. The correct answer is: ${currentAgreementQuestion.preposition} ${currentAgreementQuestion.correctForm} ${currentAgreementQuestion.noun.correctForm}`;
        feedbackEl.classList.add('incorrect');
    }

    feedbackEl.classList.remove('hidden');
    showAnswerBtn.classList.add('hidden');
    nextBtn.classList.remove('hidden');

    updateStats();
}

function showAnswer() {
    const allButtons = optionsContainer.querySelectorAll('.option-btn');

    if (practiceMode === 'case') {
        allButtons.forEach(btn => {
            btn.disabled = true;
            if (btn.textContent === currentWord.correctForm) {
                btn.classList.add('correct');
            }
        });

        feedbackEl.textContent = `Answer: ${currentWord.preposition} ${currentWord.correctForm}`;
    } else {
        // Agreement mode
        allButtons.forEach(btn => {
            btn.disabled = true;
            if (btn.textContent === currentAgreementQuestion.correctForm) {
                btn.classList.add('correct');
            }
        });

        feedbackEl.textContent = `Answer: ${currentAgreementQuestion.preposition} ${currentAgreementQuestion.correctForm} ${currentAgreementQuestion.noun.correctForm}`;
    }

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
