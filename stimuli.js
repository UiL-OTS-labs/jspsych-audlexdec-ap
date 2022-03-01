////////////////
// STIMULI
///////////////

// Item types
const NON_WORD = "NON_WORD";
const RELATED = "RELATED";
const UNRELATED = "UNRELATED";
const PRACTICE = "PRACTICE";

// name for lists, in this case one list, one item in the list
const LISTS = ["Default Group"];

// In case of more complex design, the above could be, for example:

// const LISTS = [
//     "my_first_list",
//     "my_second_list"
// ];


const PRACTICE_ITEMS = [
    {
        id: 1, 
        item_type: PRACTICE, 
        word: "palve", 
        wordfn: "./sounds/palve.wav",
        prime: "onion",
        primefn: "./sounds/onion.wav",
        expected_answer: 0
    },
    {
        id: 2, 
        item_type: PRACTICE, 
        word: "hot", 
        wordfn: "./sounds/hot.wav",
        prime: "stapler",
        primefn: "./sounds/stapler.wav",
        expected_answer: 1
    }
];

const LIST_1 = [
    {
        id: 1, 
        item_type: NON_WORD, 
        word: "slirque", 
        wordfn: "./sounds/slirque.wav",
        prime: "eyes",
        primefn: "./sounds/eyes.wav",
        expected_answer: 0
    },
    {
        id: 2, 
        item_type: NON_WORD, 
        word: "crawse", 
        wordfn: "./sounds/crawse.wav",
        prime: "piano",
        primefn: "./sounds/piano.wav",
        expected_answer: 0
    },
    {
        id: 3, 
        item_type: NON_WORD, 
        word: "thwurp", 
        wordfn: "./sounds/thwurp.wav",
        prime: "rabbit",
        primefn: "./sounds/rabbit.wav",
        expected_answer: 0
    },
    {
        id: 4, 
        item_type: NON_WORD, 
        word: "clem", 
        wordfn: "./sounds/clem.wav",
        prime: "flower",
        primefn: "./sounds/flower.wav",
        expected_answer: 0
    }, 
    {
        id: 5, 
        item_type: RELATED, 
        word: "white", 
        wordfn: "./sounds/white.wav",
        prime: "snow",
        primefn: "./sounds/snow.wav",
        expected_answer: 1
    },
    {
        id: 6, 
        item_type: RELATED, 
        word: "travel", 
        wordfn: "./sounds/travel.wav",
        prime: "suitcase",
        primefn: "./sounds/suitcase.wav",
        expected_answer: 1
    },
    {
        id: 7, 
        item_type: UNRELATED, 
        word: "letter", 
        wordfn: "./sounds/letter.wav",
        prime: "garden",
        primefn: "./sounds/garden.wav",
        expected_answer: 1
    },
    {
        id: 8, 
        item_type: UNRELATED, 
        word: "clown", 
        wordfn: "./sounds/clown.wav",
        prime: "forest",
        primefn: "./sounds/forest.wav",
        expected_answer: 1
    }
];


const TEST_ITEMS = [
    {list_name: LISTS[0], table: LIST_1}
    ];
   
// If there were two lists to choose from:

// const TEST_ITEMS = [
//     {list_name: LISTS[0], table: LIST_1},
//     {list_name: LISTS[1], table: LIST_2}
// ];
