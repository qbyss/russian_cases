// Russian noun data with cases
const russianNouns = [
    // NOMINATIVE CASE - Base forms
    // Masculine
    {
        base: "стол",
        translation: "table",
        gender: "masculine",
        caseType: "nominative",
        correctForm: "стол",
        preposition: "",
        fullExample: "стол (table)",
        wrongOptions: ["стола", "столу", "столом"],
        wordType: "noun"
    },
    {
        base: "дом",
        translation: "house",
        gender: "masculine",
        caseType: "nominative",
        correctForm: "дом",
        preposition: "",
        fullExample: "дом (house)",
        wrongOptions: ["дома", "дому", "домом"],
        wordType: "noun"
    },
    {
        base: "музей",
        translation: "museum",
        gender: "masculine",
        caseType: "nominative",
        correctForm: "музей",
        preposition: "",
        fullExample: "музей (museum)",
        wrongOptions: ["музея", "музею", "музее"],
        wordType: "noun"
    },
    {
        base: "город",
        translation: "city",
        gender: "masculine",
        caseType: "nominative",
        correctForm: "город",
        preposition: "",
        fullExample: "город (city)",
        wrongOptions: ["города", "городу", "городе"],
        wordType: "noun"
    },
    {
        base: "парк",
        translation: "park",
        gender: "masculine",
        caseType: "nominative",
        correctForm: "парк",
        preposition: "",
        fullExample: "парк (park)",
        wrongOptions: ["парка", "парку", "парке"],
        wordType: "noun"
    },
    // Feminine
    {
        base: "книга",
        translation: "book",
        gender: "feminine",
        caseType: "nominative",
        correctForm: "книга",
        preposition: "",
        fullExample: "книга (book)",
        wrongOptions: ["книги", "книгу", "книгой"],
        wordType: "noun"
    },
    {
        base: "школа",
        translation: "school",
        gender: "feminine",
        caseType: "nominative",
        correctForm: "школа",
        preposition: "",
        fullExample: "школа (school)",
        wrongOptions: ["школы", "школу", "школе"],
        wordType: "noun"
    },
    {
        base: "комната",
        translation: "room",
        gender: "feminine",
        caseType: "nominative",
        correctForm: "комната",
        preposition: "",
        fullExample: "комната (room)",
        wrongOptions: ["комнаты", "комнату", "комнате"],
        wordType: "noun"
    },
    {
        base: "страна",
        translation: "country",
        gender: "feminine",
        caseType: "nominative",
        correctForm: "страна",
        preposition: "",
        fullExample: "страна (country)",
        wrongOptions: ["страны", "страну", "стране"],
        wordType: "noun"
    },
    {
        base: "работа",
        translation: "work",
        gender: "feminine",
        caseType: "nominative",
        correctForm: "работа",
        preposition: "",
        fullExample: "работа (work)",
        wrongOptions: ["работы", "работу", "работе"],
        wordType: "noun"
    },
    {
        base: "сумка",
        translation: "bag",
        gender: "feminine",
        caseType: "nominative",
        correctForm: "сумка",
        preposition: "",
        fullExample: "сумка (bag)",
        wrongOptions: ["сумки", "сумку", "сумке"],
        wordType: "noun"
    },
    // Neuter
    {
        base: "окно",
        translation: "window",
        gender: "neuter",
        caseType: "nominative",
        correctForm: "окно",
        preposition: "",
        fullExample: "окно (window)",
        wrongOptions: ["окна", "окну", "окне"],
        wordType: "noun"
    },
    {
        base: "море",
        translation: "sea",
        gender: "neuter",
        caseType: "nominative",
        correctForm: "море",
        preposition: "",
        fullExample: "море (sea)",
        wrongOptions: ["моря", "морю", "морем"],
        wordType: "noun"
    },
    {
        base: "письмо",
        translation: "letter",
        gender: "neuter",
        caseType: "nominative",
        correctForm: "письмо",
        preposition: "",
        fullExample: "письмо (letter)",
        wrongOptions: ["письма", "письму", "письме"],
        wordType: "noun"
    },

    // GENITIVE CASE
    // Masculine
    {
        base: "стол",
        translation: "table",
        gender: "masculine",
        caseType: "genitive",
        correctForm: "стола",
        preposition: "без",
        fullExample: "без стола (without a table)",
        wrongOptions: ["стол", "столу", "столом"],
        wordType: "noun"
    },
    {
        base: "дом",
        translation: "house",
        gender: "masculine",
        caseType: "genitive",
        correctForm: "дома",
        preposition: "из",
        fullExample: "из дома (from the house)",
        wrongOptions: ["дом", "дому", "доме"],
        wordType: "noun"
    },
    {
        base: "музей",
        translation: "museum",
        gender: "masculine",
        caseType: "genitive",
        correctForm: "музея",
        preposition: "из",
        fullExample: "из музея (from the museum)",
        wrongOptions: ["музей", "музею", "музее"],
        wordType: "noun"
    },
    {
        base: "город",
        translation: "city",
        gender: "masculine",
        caseType: "genitive",
        correctForm: "города",
        preposition: "из",
        fullExample: "из города (from the city)",
        wrongOptions: ["город", "городу", "городе"],
        wordType: "noun"
    },
    {
        base: "парк",
        translation: "park",
        gender: "masculine",
        caseType: "genitive",
        correctForm: "парка",
        preposition: "из",
        fullExample: "из парка (from the park)",
        wrongOptions: ["парк", "парку", "парке"],
        wordType: "noun"
    },
    // Feminine
    {
        base: "книга",
        translation: "book",
        gender: "feminine",
        caseType: "genitive",
        correctForm: "книги",
        preposition: "без",
        fullExample: "без книги (without a book)",
        wrongOptions: ["книга", "книгу", "книге"],
        wordType: "noun"
    },
    {
        base: "школа",
        translation: "school",
        gender: "feminine",
        caseType: "genitive",
        correctForm: "школы",
        preposition: "из",
        fullExample: "из школы (from school)",
        wrongOptions: ["школа", "школу", "школе"],
        wordType: "noun"
    },
    {
        base: "комната",
        translation: "room",
        gender: "feminine",
        caseType: "genitive",
        correctForm: "комнаты",
        preposition: "из",
        fullExample: "из комнаты (from the room)",
        wrongOptions: ["комната", "комнату", "комнате"],
        wordType: "noun"
    },
    {
        base: "страна",
        translation: "country",
        gender: "feminine",
        caseType: "genitive",
        correctForm: "страны",
        preposition: "из",
        fullExample: "из страны (from the country)",
        wrongOptions: ["страна", "страну", "стране"],
        wordType: "noun"
    },
    {
        base: "работа",
        translation: "work",
        gender: "feminine",
        caseType: "genitive",
        correctForm: "работы",
        preposition: "с",
        fullExample: "с работы (from work)",
        wrongOptions: ["работа", "работу", "работе"],
        wordType: "noun"
    },
    {
        base: "сумка",
        translation: "bag",
        gender: "feminine",
        caseType: "genitive",
        correctForm: "сумки",
        preposition: "без",
        fullExample: "без сумки (without a bag)",
        wrongOptions: ["сумка", "сумку", "сумке"],
        wordType: "noun"
    },
    // Neuter
    {
        base: "окно",
        translation: "window",
        gender: "neuter",
        caseType: "genitive",
        correctForm: "окна",
        preposition: "без",
        fullExample: "без окна (without a window)",
        wrongOptions: ["окно", "окну", "окне"],
        wordType: "noun"
    },
    {
        base: "море",
        translation: "sea",
        gender: "neuter",
        caseType: "genitive",
        correctForm: "моря",
        preposition: "у",
        fullExample: "у моря (by the sea)",
        wrongOptions: ["море", "морю", "морем"],
        wordType: "noun"
    },
    {
        base: "письмо",
        translation: "letter",
        gender: "neuter",
        caseType: "genitive",
        correctForm: "письма",
        preposition: "без",
        fullExample: "без письма (without a letter)",
        wrongOptions: ["письмо", "письму", "письме"],
        wordType: "noun"
    },

    // DATIVE CASE
    // Masculine
    {
        base: "стол",
        translation: "table",
        gender: "masculine",
        caseType: "dative",
        correctForm: "столу",
        preposition: "к",
        fullExample: "к столу (to the table)",
        wrongOptions: ["стол", "стола", "столом"],
        wordType: "noun"
    },
    {
        base: "дом",
        translation: "house",
        gender: "masculine",
        caseType: "dative",
        correctForm: "дому",
        preposition: "к",
        fullExample: "к дому (to the house)",
        wrongOptions: ["дом", "дома", "доме"],
        wordType: "noun"
    },
    {
        base: "музей",
        translation: "museum",
        gender: "masculine",
        caseType: "dative",
        correctForm: "музею",
        preposition: "к",
        fullExample: "к музею (to the museum)",
        wrongOptions: ["музей", "музея", "музее"],
        wordType: "noun"
    },
    {
        base: "город",
        translation: "city",
        gender: "masculine",
        caseType: "dative",
        correctForm: "городу",
        preposition: "к",
        fullExample: "к городу (to the city)",
        wrongOptions: ["город", "города", "городе"],
        wordType: "noun"
    },
    {
        base: "парк",
        translation: "park",
        gender: "masculine",
        caseType: "dative",
        correctForm: "парку",
        preposition: "к",
        fullExample: "к парку (to the park)",
        wrongOptions: ["парк", "парка", "парке"],
        wordType: "noun"
    },
    // Feminine
    {
        base: "книга",
        translation: "book",
        gender: "feminine",
        caseType: "dative",
        correctForm: "книге",
        preposition: "к",
        fullExample: "к книге (to the book)",
        wrongOptions: ["книга", "книги", "книгу"],
        wordType: "noun"
    },
    {
        base: "школа",
        translation: "school",
        gender: "feminine",
        caseType: "dative",
        correctForm: "школе",
        preposition: "к",
        fullExample: "к школе (to the school)",
        wrongOptions: ["школа", "школы", "школу"],
        wordType: "noun"
    },
    {
        base: "комната",
        translation: "room",
        gender: "feminine",
        caseType: "dative",
        correctForm: "комнате",
        preposition: "к",
        fullExample: "к комнате (to the room)",
        wrongOptions: ["комната", "комнаты", "комнату"],
        wordType: "noun"
    },
    {
        base: "страна",
        translation: "country",
        gender: "feminine",
        caseType: "dative",
        correctForm: "стране",
        preposition: "к",
        fullExample: "к стране (to the country)",
        wrongOptions: ["страна", "страны", "страну"],
        wordType: "noun"
    },
    {
        base: "работа",
        translation: "work",
        gender: "feminine",
        caseType: "dative",
        correctForm: "работе",
        preposition: "к",
        fullExample: "к работе (to work)",
        wrongOptions: ["работа", "работы", "работу"],
        wordType: "noun"
    },
    {
        base: "сумка",
        translation: "bag",
        gender: "feminine",
        caseType: "dative",
        correctForm: "сумке",
        preposition: "к",
        fullExample: "к сумке (to the bag)",
        wrongOptions: ["сумка", "сумки", "сумку"],
        wordType: "noun"
    },
    // Neuter
    {
        base: "окно",
        translation: "window",
        gender: "neuter",
        caseType: "dative",
        correctForm: "окну",
        preposition: "к",
        fullExample: "к окну (to the window)",
        wrongOptions: ["окно", "окна", "окне"],
        wordType: "noun"
    },
    {
        base: "море",
        translation: "sea",
        gender: "neuter",
        caseType: "dative",
        correctForm: "морю",
        preposition: "к",
        fullExample: "к морю (to the sea)",
        wrongOptions: ["море", "моря", "морем"],
        wordType: "noun"
    },
    {
        base: "письмо",
        translation: "letter",
        gender: "neuter",
        caseType: "dative",
        correctForm: "письму",
        preposition: "к",
        fullExample: "к письму (to the letter)",
        wrongOptions: ["письмо", "письма", "письме"],
        wordType: "noun"
    },

    // INSTRUMENTAL CASE
    // Masculine
    {
        base: "стол",
        translation: "table",
        gender: "masculine",
        caseType: "instrumental",
        correctForm: "столом",
        preposition: "с",
        fullExample: "со столом (with a table)",
        wrongOptions: ["стол", "стола", "столу"],
        wordType: "noun"
    },
    {
        base: "дом",
        translation: "house",
        gender: "masculine",
        caseType: "instrumental",
        correctForm: "домом",
        preposition: "с",
        fullExample: "с домом (with a house)",
        wrongOptions: ["дом", "дома", "дому"],
        wordType: "noun"
    },
    {
        base: "музей",
        translation: "museum",
        gender: "masculine",
        caseType: "instrumental",
        correctForm: "музеем",
        preposition: "с",
        fullExample: "с музеем (with a museum)",
        wrongOptions: ["музей", "музея", "музею"],
        wordType: "noun"
    },
    {
        base: "город",
        translation: "city",
        gender: "masculine",
        caseType: "instrumental",
        correctForm: "городом",
        preposition: "с",
        fullExample: "с городом (with a city)",
        wrongOptions: ["город", "города", "городу"],
        wordType: "noun"
    },
    {
        base: "парк",
        translation: "park",
        gender: "masculine",
        caseType: "instrumental",
        correctForm: "парком",
        preposition: "с",
        fullExample: "с парком (with a park)",
        wrongOptions: ["парк", "парка", "парку"],
        wordType: "noun"
    },
    // Feminine
    {
        base: "книга",
        translation: "book",
        gender: "feminine",
        caseType: "instrumental",
        correctForm: "книгой",
        preposition: "с",
        fullExample: "с книгой (with a book)",
        wrongOptions: ["книга", "книги", "книгу"],
        wordType: "noun"
    },
    {
        base: "школа",
        translation: "school",
        gender: "feminine",
        caseType: "instrumental",
        correctForm: "школой",
        preposition: "со",
        fullExample: "со школой (with a school)",
        wrongOptions: ["школа", "школы", "школу"],
        wordType: "noun"
    },
    {
        base: "комната",
        translation: "room",
        gender: "feminine",
        caseType: "instrumental",
        correctForm: "комнатой",
        preposition: "с",
        fullExample: "с комнатой (with a room)",
        wrongOptions: ["комната", "комнаты", "комнату"],
        wordType: "noun"
    },
    {
        base: "страна",
        translation: "country",
        gender: "feminine",
        caseType: "instrumental",
        correctForm: "страной",
        preposition: "с",
        fullExample: "со страной (with a country)",
        wrongOptions: ["страна", "страны", "страну"],
        wordType: "noun"
    },
    {
        base: "работа",
        translation: "work",
        gender: "feminine",
        caseType: "instrumental",
        correctForm: "работой",
        preposition: "с",
        fullExample: "с работой (with work)",
        wrongOptions: ["работа", "работы", "работу"],
        wordType: "noun"
    },
    {
        base: "сумка",
        translation: "bag",
        gender: "feminine",
        caseType: "instrumental",
        correctForm: "сумкой",
        preposition: "с",
        fullExample: "с сумкой (with a bag)",
        wrongOptions: ["сумка", "сумки", "сумку"],
        wordType: "noun"
    },
    // Neuter
    {
        base: "окно",
        translation: "window",
        gender: "neuter",
        caseType: "instrumental",
        correctForm: "окном",
        preposition: "с",
        fullExample: "с окном (with a window)",
        wrongOptions: ["окно", "окна", "окну"],
        wordType: "noun"
    },
    {
        base: "море",
        translation: "sea",
        gender: "neuter",
        caseType: "instrumental",
        correctForm: "морем",
        preposition: "с",
        fullExample: "с морем (with a sea)",
        wrongOptions: ["море", "моря", "морю"],
        wordType: "noun"
    },
    {
        base: "письмо",
        translation: "letter",
        gender: "neuter",
        caseType: "instrumental",
        correctForm: "письмом",
        preposition: "с",
        fullExample: "с письмом (with a letter)",
        wrongOptions: ["письмо", "письма", "письму"],
        wordType: "noun"
    },

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
    // NOMINATIVE CASE - Base forms
    // Masculine
    {
        base: "новый",
        translation: "new",
        gender: "masculine",
        caseType: "nominative",
        correctForm: "новый",
        preposition: "",
        fullExample: "новый (new)",
        wrongOptions: ["нового", "новому", "новым"],
        wordType: "adjective"
    },
    {
        base: "старый",
        translation: "old",
        gender: "masculine",
        caseType: "nominative",
        correctForm: "старый",
        preposition: "",
        fullExample: "старый (old)",
        wrongOptions: ["старого", "старому", "старым"],
        wordType: "adjective"
    },
    {
        base: "большой",
        translation: "big",
        gender: "masculine",
        caseType: "nominative",
        correctForm: "большой",
        preposition: "",
        fullExample: "большой (big)",
        wrongOptions: ["большого", "большому", "большим"],
        wordType: "adjective"
    },
    {
        base: "синий",
        translation: "blue",
        gender: "masculine",
        caseType: "nominative",
        correctForm: "синий",
        preposition: "",
        fullExample: "синий (blue)",
        wrongOptions: ["синего", "синему", "синим"],
        wordType: "adjective"
    },
    // Feminine
    {
        base: "новая",
        translation: "new",
        gender: "feminine",
        caseType: "nominative",
        correctForm: "новая",
        preposition: "",
        fullExample: "новая (new)",
        wrongOptions: ["новой", "новую", "новом"],
        wordType: "adjective"
    },
    {
        base: "старая",
        translation: "old",
        gender: "feminine",
        caseType: "nominative",
        correctForm: "старая",
        preposition: "",
        fullExample: "старая (old)",
        wrongOptions: ["старой", "старую", "старом"],
        wordType: "adjective"
    },
    {
        base: "большая",
        translation: "big",
        gender: "feminine",
        caseType: "nominative",
        correctForm: "большая",
        preposition: "",
        fullExample: "большая (big)",
        wrongOptions: ["большой", "большую", "большом"],
        wordType: "adjective"
    },
    {
        base: "синяя",
        translation: "blue",
        gender: "feminine",
        caseType: "nominative",
        correctForm: "синяя",
        preposition: "",
        fullExample: "синяя (blue)",
        wrongOptions: ["синей", "синюю", "синем"],
        wordType: "adjective"
    },
    // Neuter
    {
        base: "новое",
        translation: "new",
        gender: "neuter",
        caseType: "nominative",
        correctForm: "новое",
        preposition: "",
        fullExample: "новое (new)",
        wrongOptions: ["нового", "новому", "новом"],
        wordType: "adjective"
    },
    {
        base: "старое",
        translation: "old",
        gender: "neuter",
        caseType: "nominative",
        correctForm: "старое",
        preposition: "",
        fullExample: "старое (old)",
        wrongOptions: ["старого", "старому", "старом"],
        wordType: "adjective"
    },
    {
        base: "синее",
        translation: "blue",
        gender: "neuter",
        caseType: "nominative",
        correctForm: "синее",
        preposition: "",
        fullExample: "синее (blue)",
        wrongOptions: ["синего", "синему", "синем"],
        wordType: "adjective"
    },

    // GENITIVE CASE
    // Masculine
    {
        base: "новый",
        translation: "new",
        gender: "masculine",
        caseType: "genitive",
        correctForm: "нового",
        preposition: "без",
        fullExample: "без нового (without a new one)",
        wrongOptions: ["новый", "новому", "новым"],
        wordType: "adjective"
    },
    {
        base: "старый",
        translation: "old",
        gender: "masculine",
        caseType: "genitive",
        correctForm: "старого",
        preposition: "без",
        fullExample: "без старого (without an old one)",
        wrongOptions: ["старый", "старому", "старым"],
        wordType: "adjective"
    },
    {
        base: "большой",
        translation: "big",
        gender: "masculine",
        caseType: "genitive",
        correctForm: "большого",
        preposition: "без",
        fullExample: "без большого (without a big one)",
        wrongOptions: ["большой", "большому", "большим"],
        wordType: "adjective"
    },
    {
        base: "синий",
        translation: "blue",
        gender: "masculine",
        caseType: "genitive",
        correctForm: "синего",
        preposition: "без",
        fullExample: "без синего (without a blue one)",
        wrongOptions: ["синий", "синему", "синим"],
        wordType: "adjective"
    },
    // Feminine
    {
        base: "новая",
        translation: "new",
        gender: "feminine",
        caseType: "genitive",
        correctForm: "новой",
        preposition: "без",
        fullExample: "без новой (without a new one)",
        wrongOptions: ["новая", "новую", "новом"],
        wordType: "adjective"
    },
    {
        base: "старая",
        translation: "old",
        gender: "feminine",
        caseType: "genitive",
        correctForm: "старой",
        preposition: "без",
        fullExample: "без старой (without an old one)",
        wrongOptions: ["старая", "старую", "старом"],
        wordType: "adjective"
    },
    {
        base: "большая",
        translation: "big",
        gender: "feminine",
        caseType: "genitive",
        correctForm: "большой",
        preposition: "без",
        fullExample: "без большой (without a big one)",
        wrongOptions: ["большая", "большую", "большом"],
        wordType: "adjective"
    },
    {
        base: "синяя",
        translation: "blue",
        gender: "feminine",
        caseType: "genitive",
        correctForm: "синей",
        preposition: "без",
        fullExample: "без синей (without a blue one)",
        wrongOptions: ["синяя", "синюю", "синем"],
        wordType: "adjective"
    },
    // Neuter
    {
        base: "новое",
        translation: "new",
        gender: "neuter",
        caseType: "genitive",
        correctForm: "нового",
        preposition: "без",
        fullExample: "без нового (without a new one)",
        wrongOptions: ["новое", "новому", "новом"],
        wordType: "adjective"
    },
    {
        base: "старое",
        translation: "old",
        gender: "neuter",
        caseType: "genitive",
        correctForm: "старого",
        preposition: "без",
        fullExample: "без старого (without an old one)",
        wrongOptions: ["старое", "старому", "старом"],
        wordType: "adjective"
    },
    {
        base: "синее",
        translation: "blue",
        gender: "neuter",
        caseType: "genitive",
        correctForm: "синего",
        preposition: "без",
        fullExample: "без синего (without a blue one)",
        wrongOptions: ["синее", "синему", "синем"],
        wordType: "adjective"
    },

    // DATIVE CASE
    // Masculine
    {
        base: "новый",
        translation: "new",
        gender: "masculine",
        caseType: "dative",
        correctForm: "новому",
        preposition: "к",
        fullExample: "к новому (to a new one)",
        wrongOptions: ["новый", "нового", "новым"],
        wordType: "adjective"
    },
    {
        base: "старый",
        translation: "old",
        gender: "masculine",
        caseType: "dative",
        correctForm: "старому",
        preposition: "к",
        fullExample: "к старому (to an old one)",
        wrongOptions: ["старый", "старого", "старым"],
        wordType: "adjective"
    },
    {
        base: "большой",
        translation: "big",
        gender: "masculine",
        caseType: "dative",
        correctForm: "большому",
        preposition: "к",
        fullExample: "к большому (to a big one)",
        wrongOptions: ["большой", "большого", "большим"],
        wordType: "adjective"
    },
    {
        base: "синий",
        translation: "blue",
        gender: "masculine",
        caseType: "dative",
        correctForm: "синему",
        preposition: "к",
        fullExample: "к синему (to a blue one)",
        wrongOptions: ["синий", "синего", "синим"],
        wordType: "adjective"
    },
    // Feminine
    {
        base: "новая",
        translation: "new",
        gender: "feminine",
        caseType: "dative",
        correctForm: "новой",
        preposition: "к",
        fullExample: "к новой (to a new one)",
        wrongOptions: ["новая", "новую", "новом"],
        wordType: "adjective"
    },
    {
        base: "старая",
        translation: "old",
        gender: "feminine",
        caseType: "dative",
        correctForm: "старой",
        preposition: "к",
        fullExample: "к старой (to an old one)",
        wrongOptions: ["старая", "старую", "старом"],
        wordType: "adjective"
    },
    {
        base: "большая",
        translation: "big",
        gender: "feminine",
        caseType: "dative",
        correctForm: "большой",
        preposition: "к",
        fullExample: "к большой (to a big one)",
        wrongOptions: ["большая", "большую", "большом"],
        wordType: "adjective"
    },
    {
        base: "синяя",
        translation: "blue",
        gender: "feminine",
        caseType: "dative",
        correctForm: "синей",
        preposition: "к",
        fullExample: "к синей (to a blue one)",
        wrongOptions: ["синяя", "синюю", "синем"],
        wordType: "adjective"
    },
    // Neuter
    {
        base: "новое",
        translation: "new",
        gender: "neuter",
        caseType: "dative",
        correctForm: "новому",
        preposition: "к",
        fullExample: "к новому (to a new one)",
        wrongOptions: ["новое", "нового", "новом"],
        wordType: "adjective"
    },
    {
        base: "старое",
        translation: "old",
        gender: "neuter",
        caseType: "dative",
        correctForm: "старому",
        preposition: "к",
        fullExample: "к старому (to an old one)",
        wrongOptions: ["старое", "старого", "старом"],
        wordType: "adjective"
    },
    {
        base: "синее",
        translation: "blue",
        gender: "neuter",
        caseType: "dative",
        correctForm: "синему",
        preposition: "к",
        fullExample: "к синему (to a blue one)",
        wrongOptions: ["синее", "синего", "синем"],
        wordType: "adjective"
    },

    // INSTRUMENTAL CASE
    // Masculine
    {
        base: "новый",
        translation: "new",
        gender: "masculine",
        caseType: "instrumental",
        correctForm: "новым",
        preposition: "с",
        fullExample: "с новым (with a new one)",
        wrongOptions: ["новый", "нового", "новому"],
        wordType: "adjective"
    },
    {
        base: "старый",
        translation: "old",
        gender: "masculine",
        caseType: "instrumental",
        correctForm: "старым",
        preposition: "с",
        fullExample: "с старым (with an old one)",
        wrongOptions: ["старый", "старого", "старому"],
        wordType: "adjective"
    },
    {
        base: "большой",
        translation: "big",
        gender: "masculine",
        caseType: "instrumental",
        correctForm: "большим",
        preposition: "с",
        fullExample: "с большим (with a big one)",
        wrongOptions: ["большой", "большого", "большому"],
        wordType: "adjective"
    },
    {
        base: "синий",
        translation: "blue",
        gender: "masculine",
        caseType: "instrumental",
        correctForm: "синим",
        preposition: "с",
        fullExample: "с синим (with a blue one)",
        wrongOptions: ["синий", "синего", "синему"],
        wordType: "adjective"
    },
    // Feminine
    {
        base: "новая",
        translation: "new",
        gender: "feminine",
        caseType: "instrumental",
        correctForm: "новой",
        preposition: "с",
        fullExample: "с новой (with a new one)",
        wrongOptions: ["новая", "новую", "новом"],
        wordType: "adjective"
    },
    {
        base: "старая",
        translation: "old",
        gender: "feminine",
        caseType: "instrumental",
        correctForm: "старой",
        preposition: "с",
        fullExample: "с старой (with an old one)",
        wrongOptions: ["старая", "старую", "старом"],
        wordType: "adjective"
    },
    {
        base: "большая",
        translation: "big",
        gender: "feminine",
        caseType: "instrumental",
        correctForm: "большой",
        preposition: "с",
        fullExample: "с большой (with a big one)",
        wrongOptions: ["большая", "большую", "большом"],
        wordType: "adjective"
    },
    {
        base: "синяя",
        translation: "blue",
        gender: "feminine",
        caseType: "instrumental",
        correctForm: "синей",
        preposition: "с",
        fullExample: "с синей (with a blue one)",
        wrongOptions: ["синяя", "синюю", "синем"],
        wordType: "adjective"
    },
    // Neuter
    {
        base: "новое",
        translation: "new",
        gender: "neuter",
        caseType: "instrumental",
        correctForm: "новым",
        preposition: "с",
        fullExample: "с новым (with a new one)",
        wrongOptions: ["новое", "нового", "новому"],
        wordType: "adjective"
    },
    {
        base: "старое",
        translation: "old",
        gender: "neuter",
        caseType: "instrumental",
        correctForm: "старым",
        preposition: "с",
        fullExample: "с старым (with an old one)",
        wrongOptions: ["старое", "старого", "старому"],
        wordType: "adjective"
    },
    {
        base: "синее",
        translation: "blue",
        gender: "neuter",
        caseType: "instrumental",
        correctForm: "синим",
        preposition: "с",
        fullExample: "с синим (with a blue one)",
        wrongOptions: ["синее", "синего", "синему"],
        wordType: "adjective"
    },

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

// Russian verb conjugation data
const russianVerbs = [
    // PRESENT TENSE - First Conjugation (-ать, -ять, -еть)
    {
        infinitive: "работать",
        translation: "to work",
        tense: "present",
        conjugationType: "first",
        person: "я",
        correctForm: "работаю",
        wrongOptions: ["работаешь", "работает", "работаем"],
        fullExample: "я работаю (I work)"
    },
    {
        infinitive: "работать",
        translation: "to work",
        tense: "present",
        conjugationType: "first",
        person: "ты",
        correctForm: "работаешь",
        wrongOptions: ["работаю", "работает", "работаем"],
        fullExample: "ты работаешь (you work)"
    },
    {
        infinitive: "работать",
        translation: "to work",
        tense: "present",
        conjugationType: "first",
        person: "он/она",
        correctForm: "работает",
        wrongOptions: ["работаю", "работаешь", "работаем"],
        fullExample: "он/она работает (he/she works)"
    },
    {
        infinitive: "работать",
        translation: "to work",
        tense: "present",
        conjugationType: "first",
        person: "мы",
        correctForm: "работаем",
        wrongOptions: ["работаю", "работаешь", "работают"],
        fullExample: "мы работаем (we work)"
    },
    {
        infinitive: "работать",
        translation: "to work",
        tense: "present",
        conjugationType: "first",
        person: "вы",
        correctForm: "работаете",
        wrongOptions: ["работаю", "работает", "работают"],
        fullExample: "вы работаете (you work)"
    },
    {
        infinitive: "работать",
        translation: "to work",
        tense: "present",
        conjugationType: "first",
        person: "они",
        correctForm: "работают",
        wrongOptions: ["работаю", "работает", "работаем"],
        fullExample: "они работают (they work)"
    },

    // делать - to do/make
    {
        infinitive: "делать",
        translation: "to do/make",
        tense: "present",
        conjugationType: "first",
        person: "я",
        correctForm: "делаю",
        wrongOptions: ["делаешь", "делает", "делаем"],
        fullExample: "я делаю (I do)"
    },
    {
        infinitive: "делать",
        translation: "to do/make",
        tense: "present",
        conjugationType: "first",
        person: "ты",
        correctForm: "делаешь",
        wrongOptions: ["делаю", "делает", "делают"],
        fullExample: "ты делаешь (you do)"
    },
    {
        infinitive: "делать",
        translation: "to do/make",
        tense: "present",
        conjugationType: "first",
        person: "он/она",
        correctForm: "делает",
        wrongOptions: ["делаю", "делаешь", "делают"],
        fullExample: "он/она делает (he/she does)"
    },
    {
        infinitive: "делать",
        translation: "to do/make",
        tense: "present",
        conjugationType: "first",
        person: "они",
        correctForm: "делают",
        wrongOptions: ["делаю", "делает", "делаем"],
        fullExample: "они делают (they do)"
    },

    // читать - to read
    {
        infinitive: "читать",
        translation: "to read",
        tense: "present",
        conjugationType: "first",
        person: "я",
        correctForm: "читаю",
        wrongOptions: ["читаешь", "читает", "читаем"],
        fullExample: "я читаю (I read)"
    },
    {
        infinitive: "читать",
        translation: "to read",
        tense: "present",
        conjugationType: "first",
        person: "ты",
        correctForm: "читаешь",
        wrongOptions: ["читаю", "читает", "читают"],
        fullExample: "ты читаешь (you read)"
    },
    {
        infinitive: "читать",
        translation: "to read",
        tense: "present",
        conjugationType: "first",
        person: "он/она",
        correctForm: "читает",
        wrongOptions: ["читаю", "читаешь", "читают"],
        fullExample: "он/она читает (he/she reads)"
    },
    {
        infinitive: "читать",
        translation: "to read",
        tense: "present",
        conjugationType: "first",
        person: "они",
        correctForm: "читают",
        wrongOptions: ["читаю", "читает", "читаем"],
        fullExample: "они читают (they read)"
    },

    // PRESENT TENSE - Second Conjugation (-ить)
    {
        infinitive: "говорить",
        translation: "to speak",
        tense: "present",
        conjugationType: "second",
        person: "я",
        correctForm: "говорю",
        wrongOptions: ["говоришь", "говорит", "говорим"],
        fullExample: "я говорю (I speak)"
    },
    {
        infinitive: "говорить",
        translation: "to speak",
        tense: "present",
        conjugationType: "second",
        person: "ты",
        correctForm: "говоришь",
        wrongOptions: ["говорю", "говорит", "говорят"],
        fullExample: "ты говоришь (you speak)"
    },
    {
        infinitive: "говорить",
        translation: "to speak",
        tense: "present",
        conjugationType: "second",
        person: "он/она",
        correctForm: "говорит",
        wrongOptions: ["говорю", "говоришь", "говорят"],
        fullExample: "он/она говорит (he/she speaks)"
    },
    {
        infinitive: "говорить",
        translation: "to speak",
        tense: "present",
        conjugationType: "second",
        person: "мы",
        correctForm: "говорим",
        wrongOptions: ["говорю", "говорит", "говорят"],
        fullExample: "мы говорим (we speak)"
    },
    {
        infinitive: "говорить",
        translation: "to speak",
        tense: "present",
        conjugationType: "second",
        person: "вы",
        correctForm: "говорите",
        wrongOptions: ["говорю", "говорит", "говорят"],
        fullExample: "вы говорите (you speak)"
    },
    {
        infinitive: "говорить",
        translation: "to speak",
        tense: "present",
        conjugationType: "second",
        person: "они",
        correctForm: "говорят",
        wrongOptions: ["говорю", "говорит", "говорим"],
        fullExample: "они говорят (they speak)"
    },

    // видеть - to see
    {
        infinitive: "видеть",
        translation: "to see",
        tense: "present",
        conjugationType: "second",
        person: "я",
        correctForm: "вижу",
        wrongOptions: ["видишь", "видит", "видим"],
        fullExample: "я вижу (I see)"
    },
    {
        infinitive: "видеть",
        translation: "to see",
        tense: "present",
        conjugationType: "second",
        person: "ты",
        correctForm: "видишь",
        wrongOptions: ["вижу", "видит", "видят"],
        fullExample: "ты видишь (you see)"
    },
    {
        infinitive: "видеть",
        translation: "to see",
        tense: "present",
        conjugationType: "second",
        person: "он/она",
        correctForm: "видит",
        wrongOptions: ["вижу", "видишь", "видят"],
        fullExample: "он/она видит (he/she sees)"
    },
    {
        infinitive: "видеть",
        translation: "to see",
        tense: "present",
        conjugationType: "second",
        person: "они",
        correctForm: "видят",
        wrongOptions: ["вижу", "видит", "видим"],
        fullExample: "они видят (they see)"
    },

    // PAST TENSE - Gender agreement
    {
        infinitive: "работать",
        translation: "to work",
        tense: "past",
        conjugationType: "first",
        person: "он",
        gender: "masculine",
        correctForm: "работал",
        wrongOptions: ["работала", "работало", "работали"],
        fullExample: "он работал (he worked)"
    },
    {
        infinitive: "работать",
        translation: "to work",
        tense: "past",
        conjugationType: "first",
        person: "она",
        gender: "feminine",
        correctForm: "работала",
        wrongOptions: ["работал", "работало", "работали"],
        fullExample: "она работала (she worked)"
    },
    {
        infinitive: "работать",
        translation: "to work",
        tense: "past",
        conjugationType: "first",
        person: "оно",
        gender: "neuter",
        correctForm: "работало",
        wrongOptions: ["работал", "работала", "работали"],
        fullExample: "оно работало (it worked)"
    },
    {
        infinitive: "работать",
        translation: "to work",
        tense: "past",
        conjugationType: "first",
        person: "они",
        gender: "plural",
        correctForm: "работали",
        wrongOptions: ["работал", "работала", "работало"],
        fullExample: "они работали (they worked)"
    },

    // делать - past
    {
        infinitive: "делать",
        translation: "to do/make",
        tense: "past",
        conjugationType: "first",
        person: "он",
        gender: "masculine",
        correctForm: "делал",
        wrongOptions: ["делала", "делало", "делали"],
        fullExample: "он делал (he did)"
    },
    {
        infinitive: "делать",
        translation: "to do/make",
        tense: "past",
        conjugationType: "first",
        person: "она",
        gender: "feminine",
        correctForm: "делала",
        wrongOptions: ["делал", "делало", "делали"],
        fullExample: "она делала (she did)"
    },
    {
        infinitive: "делать",
        translation: "to do/make",
        tense: "past",
        conjugationType: "first",
        person: "они",
        gender: "plural",
        correctForm: "делали",
        wrongOptions: ["делал", "делала", "делало"],
        fullExample: "они делали (they did)"
    },

    // говорить - past
    {
        infinitive: "говорить",
        translation: "to speak",
        tense: "past",
        conjugationType: "second",
        person: "он",
        gender: "masculine",
        correctForm: "говорил",
        wrongOptions: ["говорила", "говорило", "говорили"],
        fullExample: "он говорил (he spoke)"
    },
    {
        infinitive: "говорить",
        translation: "to speak",
        tense: "past",
        conjugationType: "second",
        person: "она",
        gender: "feminine",
        correctForm: "говорила",
        wrongOptions: ["говорил", "говорило", "говорили"],
        fullExample: "она говорила (she spoke)"
    },
    {
        infinitive: "говорить",
        translation: "to speak",
        tense: "past",
        conjugationType: "second",
        person: "они",
        gender: "plural",
        correctForm: "говорили",
        wrongOptions: ["говорил", "говорила", "говорило"],
        fullExample: "они говорили (they spoke)"
    },

    // FUTURE TENSE - Imperfective (буду + infinitive)
    {
        infinitive: "работать",
        translation: "to work",
        tense: "future",
        conjugationType: "first",
        aspect: "imperfective",
        person: "я",
        correctForm: "буду работать",
        wrongOptions: ["буду работаю", "будет работать", "будут работать"],
        fullExample: "я буду работать (I will work)"
    },
    {
        infinitive: "работать",
        translation: "to work",
        tense: "future",
        conjugationType: "first",
        aspect: "imperfective",
        person: "ты",
        correctForm: "будешь работать",
        wrongOptions: ["буду работать", "будет работать", "будете работать"],
        fullExample: "ты будешь работать (you will work)"
    },
    {
        infinitive: "работать",
        translation: "to work",
        tense: "future",
        conjugationType: "first",
        aspect: "imperfective",
        person: "он/она",
        correctForm: "будет работать",
        wrongOptions: ["буду работать", "будешь работать", "будут работать"],
        fullExample: "он/она будет работать (he/she will work)"
    },
    {
        infinitive: "работать",
        translation: "to work",
        tense: "future",
        conjugationType: "first",
        aspect: "imperfective",
        person: "они",
        correctForm: "будут работать",
        wrongOptions: ["буду работать", "будет работать", "будем работать"],
        fullExample: "они будут работать (they will work)"
    }
];

// Combine all words
const allWords = [...russianNouns, ...russianAdjectives];

// ========== SCREEN NAVIGATION ==========

// Application state
let currentTopic = null; // 'cases', 'verbs', 'pronouns', 'agreement'
let currentWord = null;
let selectedCases = [];
let correctCount = 0;
let totalCount = 0;
let availableWords = [];
let practiceMode = 'case';
let currentAgreementQuestion = null;
let currentConfigScreen = null;

// Screen elements
const topicSelection = document.getElementById('topicSelection');
const casesConfig = document.getElementById('casesConfig');
const verbsConfig = document.getElementById('verbsConfig');
const pronounsConfig = document.getElementById('pronounsConfig');
const agreementConfig = document.getElementById('agreementConfig');
const practiceArea = document.getElementById('practiceArea');

// Practice area elements
const baseWordEl = document.getElementById('baseWord');
const translationEl = document.getElementById('translation');
const caseTypeEl = document.getElementById('caseType');
const questionTextEl = document.getElementById('questionText');
const optionsContainer = document.getElementById('optionsContainer');
const feedbackEl = document.getElementById('feedback');
const nextBtn = document.getElementById('nextBtn');
const showAnswerBtn = document.getElementById('showAnswerBtn');
const correctCountEl = document.getElementById('correctCount');
const totalCountEl = document.getElementById('totalCount');
const accuracyEl = document.getElementById('accuracy');

// Navigation functions
function showScreen(screen) {
    // Hide all screens
    topicSelection.classList.add('hidden');
    casesConfig.classList.add('hidden');
    verbsConfig.classList.add('hidden');
    pronounsConfig.classList.add('hidden');
    agreementConfig.classList.add('hidden');
    practiceArea.classList.add('hidden');

    // Show requested screen
    screen.classList.remove('hidden');
}

function goToTopicSelection() {
    currentTopic = null;
    currentConfigScreen = null;
    showScreen(topicSelection);
}

function goToConfig(topic) {
    currentTopic = topic;
    switch (topic) {
        case 'cases':
            currentConfigScreen = casesConfig;
            showScreen(casesConfig);
            break;
        case 'verbs':
            currentConfigScreen = verbsConfig;
            showScreen(verbsConfig);
            break;
        case 'pronouns':
            currentConfigScreen = pronounsConfig;
            showScreen(pronounsConfig);
            break;
        case 'agreement':
            currentConfigScreen = agreementConfig;
            showScreen(agreementConfig);
            break;
    }
}

function goToPractice() {
    showScreen(practiceArea);
}

function goBackFromPractice() {
    if (currentConfigScreen) {
        showScreen(currentConfigScreen);
    } else {
        goToTopicSelection();
    }
}

// Topic selection event listeners
document.querySelectorAll('.topic-card').forEach(card => {
    card.addEventListener('click', (e) => {
        const topic = card.getAttribute('data-topic');
        goToConfig(topic);
    });
});

// Back button event listeners
document.getElementById('backFromCases').addEventListener('click', goToTopicSelection);
document.getElementById('backFromVerbs').addEventListener('click', goToTopicSelection);
document.getElementById('backFromPronouns').addEventListener('click', goToTopicSelection);
document.getElementById('backFromAgreement').addEventListener('click', goToTopicSelection);
document.getElementById('backFromPractice').addEventListener('click', goBackFromPractice);

// Start practice buttons
document.getElementById('startCasesPractice').addEventListener('click', startCasesPractice);
document.getElementById('startVerbsPractice').addEventListener('click', startVerbsPractice);
document.getElementById('startPronounsPractice').addEventListener('click', startPronounsPractice);
document.getElementById('startAgreementPractice').addEventListener('click', startAgreementPractice);

// Practice navigation
nextBtn.addEventListener('click', loadNextWord);
showAnswerBtn.addEventListener('click', showAnswer);

// ========== CASES PRACTICE ==========

function startCasesPractice() {
    // Get selected cases
    const caseCheckboxes = document.querySelectorAll('.case-checkbox:checked');
    selectedCases = Array.from(caseCheckboxes).map(cb => cb.value);

    if (selectedCases.length === 0) {
        alert('Please select at least one case to practice!');
        return;
    }

    // Get practice mode
    const practiceMode = document.querySelector('input[name="casesPracticeMode"]:checked').value;

    // Filter words based on selection
    let wordsPool = [];
    if (practiceMode === 'nouns') {
        wordsPool = russianNouns;
    } else if (practiceMode === 'adjectives') {
        wordsPool = russianAdjectives;
    } else {
        wordsPool = allWords;
    }

    availableWords = wordsPool.filter(word => selectedCases.includes(word.caseType));

    if (availableWords.length === 0) {
        alert('No words available for the selected options. Try different settings.');
        return;
    }

    shuffleArray(availableWords);

    // Reset stats
    correctCount = 0;
    totalCount = 0;
    updateStats();

    // Go to practice
    goToPractice();
    loadCaseQuestion();
}

// ========== VERBS PRACTICE ==========

function startVerbsPractice() {
    const tenseCheckboxes = document.querySelectorAll('.tense-checkbox:checked');
    const selectedTenses = Array.from(tenseCheckboxes).map(cb => cb.value);

    const conjugationCheckboxes = document.querySelectorAll('.conjugation-checkbox:checked');
    const selectedConjugations = Array.from(conjugationCheckboxes).map(cb => cb.value);

    if (selectedTenses.length === 0) {
        alert('Please select at least one tense to practice!');
        return;
    }

    if (selectedConjugations.length === 0) {
        alert('Please select at least one conjugation type!');
        return;
    }

    // Filter verbs based on selection
    availableWords = russianVerbs.filter(verb =>
        selectedTenses.includes(verb.tense) && selectedConjugations.includes(verb.conjugationType)
    );

    if (availableWords.length === 0) {
        alert('No verbs available for the selected options. Try different settings.');
        return;
    }

    shuffleArray(availableWords);

    // Reset stats
    correctCount = 0;
    totalCount = 0;
    updateStats();

    // Go to practice
    goToPractice();
    loadVerbQuestion();
}

function loadVerbQuestion() {
    if (availableWords.length === 0) {
        // Reshuffle when we run out
        const tenseCheckboxes = document.querySelectorAll('.tense-checkbox:checked');
        const selectedTenses = Array.from(tenseCheckboxes).map(cb => cb.value);
        const conjugationCheckboxes = document.querySelectorAll('.conjugation-checkbox:checked');
        const selectedConjugations = Array.from(conjugationCheckboxes).map(cb => cb.value);

        availableWords = russianVerbs.filter(verb =>
            selectedTenses.includes(verb.tense) && selectedConjugations.includes(verb.conjugationType)
        );
        shuffleArray(availableWords);
    }

    currentWord = availableWords.pop();
    currentAgreementQuestion = null;

    // Update word display
    baseWordEl.textContent = currentWord.infinitive;
    translationEl.textContent = `"${currentWord.translation}"`;

    let caseText = `${currentWord.tense} tense - ${currentWord.person}`;
    if (currentWord.gender) {
        caseText += ` (${currentWord.gender})`;
    }
    caseTypeEl.textContent = caseText;

    // Update word type badge
    const wordTypeEl = document.getElementById('wordType');
    wordTypeEl.textContent = 'verb';
    wordTypeEl.className = `word-type-badge verb`;

    // Update question text
    questionTextEl.textContent = `How do you conjugate this verb?`;

    // Clear feedback
    feedbackEl.classList.add('hidden');
    feedbackEl.classList.remove('correct', 'incorrect');

    // Hide next button, show hint button
    nextBtn.classList.add('hidden');
    showAnswerBtn.classList.remove('hidden');

    // Create options
    createVerbOptions();
}

function createVerbOptions() {
    optionsContainer.innerHTML = '';

    // Combine correct answer with wrong options and shuffle
    const allOptions = [currentWord.correctForm, ...currentWord.wrongOptions];
    shuffleArray(allOptions);

    allOptions.forEach(option => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = option;
        btn.addEventListener('click', () => selectVerbOption(btn, option));
        optionsContainer.appendChild(btn);
    });
}

function selectVerbOption(button, selectedAnswer) {
    // Disable all buttons
    const allButtons = optionsContainer.querySelectorAll('.option-btn');
    allButtons.forEach(btn => btn.disabled = true);

    // Check answer
    const isCorrect = selectedAnswer === currentWord.correctForm;

    totalCount++;
    if (isCorrect) {
        correctCount++;
        button.classList.add('correct');
        feedbackEl.textContent = `Correct! ${currentWord.fullExample}`;
        feedbackEl.classList.add('correct');
    } else {
        button.classList.add('incorrect');
        // Highlight the correct answer
        allButtons.forEach(btn => {
            if (btn.textContent === currentWord.correctForm) {
                btn.classList.add('correct');
            }
        });
        feedbackEl.textContent = `Incorrect. The correct answer is: ${currentWord.correctForm}`;
        feedbackEl.classList.add('incorrect');
    }

    feedbackEl.classList.remove('hidden');
    showAnswerBtn.classList.add('hidden');
    nextBtn.classList.remove('hidden');

    updateStats();
}

// ========== PRONOUNS PRACTICE ==========

function startPronounsPractice() {
    const pronounCheckboxes = document.querySelectorAll('.pronoun-checkbox:checked');
    const selectedPronouns = Array.from(pronounCheckboxes).map(cb => cb.value);

    const caseCheckboxes = document.querySelectorAll('.pronoun-case-checkbox:checked');
    selectedCases = Array.from(caseCheckboxes).map(cb => cb.value);

    if (selectedPronouns.length === 0 || selectedCases.length === 0) {
        alert('Please select at least one pronoun type and one case!');
        return;
    }

    // TODO: Implement pronoun practice
    alert('Pronoun practice coming soon!');
}

// ========== AGREEMENT PRACTICE ==========

function startAgreementPractice() {
    const caseCheckboxes = document.querySelectorAll('.agreement-case-checkbox:checked');
    selectedCases = Array.from(caseCheckboxes).map(cb => cb.value);

    if (selectedCases.length === 0) {
        alert('Please select at least one case to practice!');
        return;
    }

    // Get agreement type
    const agreementType = document.querySelector('input[name="agreementType"]:checked').value;

    if (agreementType === 'adjective-noun') {
        // Filter nouns based on selected cases
        availableWords = russianNouns.filter(noun => selectedCases.includes(noun.caseType));

        if (availableWords.length === 0) {
            alert('No words available for the selected cases.');
            return;
        }

        shuffleArray(availableWords);

        // Reset stats
        correctCount = 0;
        totalCount = 0;
        updateStats();

        // Go to practice
        goToPractice();
        loadAgreementQuestion();
    } else {
        // TODO: Implement number-noun agreement
        alert('Number-noun agreement practice coming soon!');
    }
}

// ========== SHARED PRACTICE FUNCTIONS ==========

function loadNextWord() {
    if (currentTopic === 'cases') {
        loadCaseQuestion();
    } else if (currentTopic === 'agreement') {
        loadAgreementQuestion();
    } else if (currentTopic === 'verbs') {
        loadVerbQuestion();
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

    if (currentTopic === 'cases') {
        allButtons.forEach(btn => {
            btn.disabled = true;
            if (btn.textContent === currentWord.correctForm) {
                btn.classList.add('correct');
            }
        });

        feedbackEl.textContent = `Answer: ${currentWord.preposition} ${currentWord.correctForm}`;
    } else if (currentTopic === 'agreement') {
        allButtons.forEach(btn => {
            btn.disabled = true;
            if (btn.textContent === currentAgreementQuestion.correctForm) {
                btn.classList.add('correct');
            }
        });

        feedbackEl.textContent = `Answer: ${currentAgreementQuestion.preposition} ${currentAgreementQuestion.correctForm} ${currentAgreementQuestion.noun.correctForm}`;
    } else if (currentTopic === 'verbs') {
        allButtons.forEach(btn => {
            btn.disabled = true;
            if (btn.textContent === currentWord.correctForm) {
                btn.classList.add('correct');
            }
        });

        feedbackEl.textContent = `Answer: ${currentWord.correctForm} (${currentWord.fullExample})`;
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
