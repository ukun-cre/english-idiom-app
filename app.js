// English Idiom Learning App

// Sample data for idioms
const idioms = [
    { id: 1, phrase: 'Break the ice', meaning: 'To initiate conversation in a social setting', options: [
        'To start a fight',
        'To make friends',
        'To initiate a conversation',
        'To break something'
    ],
    answerIndex: 2 },
    { id: 2, phrase: 'Bite the bullet', meaning: 'To endure a painful experience', options: [
        'To hesitate',
        'To complain',
        'To face a hardship',
        'To give in'
    ],
    answerIndex: 2 },
    // Add more idioms as needed
];

let currentStage = 0;
let score = 0;
let completedStages = 0;

// Function to initiate the quiz
function startQuiz() {
    currentStage = 0;
    score = 0;
    completedStages = 0;
    displayQuestion();
}

// Function to display a question
function displayQuestion() {
    if (currentStage < idioms.length) {
        const idiom = idioms[currentStage];
        console.log(`Idiom: ${idiom.phrase}`);
        idiom.options.forEach((option, index) => {
            console.log(`${index + 1}. ${option}`);
        });
    } else {
        endQuiz();
    }
}

// Function to answer a question
function answerQuestion(selectedIndex) {
    const idiom = idioms[currentStage];
    if (selectedIndex === idiom.answerIndex) {
        score++;
        console.log('Correct!');
    } else {
        console.log('Wrong! The correct answer was:', idiom.options[idiom.answerIndex]);
    }
    completedStages++;
    currentStage++;
    displayQuestion();
}

// Function to end the quiz
function endQuiz() {
    console.log(`Quiz finished! Your score is: ${score} out of ${completedStages}`);
}

// Start the quiz
document.addEventListener('DOMContentLoaded', startQuiz);

// Example to answer a question: answerQuestion(2); // Assumes user selects the third option (index 2)