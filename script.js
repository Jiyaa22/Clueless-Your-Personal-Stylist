const questions = [
    {
        question: "In which movie does Meryl Streep play the powerful fashion magazine editor Miranda Priestly?",
        options: { a: "Devil Wears Prada", b: "Funny Face", c: "Confessions of a Shopaholic", d: "The September Issue" },
        correctAnswer: "a"
    },
    {
        question: "Which movie, starring Audrey Hepburn, revolves around a model and photographer's romance set against the background of Parisian fashion?",
        options: { a: "Sabrina", b: "Breakfast at Tiffany's", c: "Funny Face", d: "My Fair Lady" },
        correctAnswer: "c"
    },
    {
        question: "In which 2004 film does Lindsay Lohan play a character who becomes a fashion icon at her new school?",
        options: { a: "Freaky Friday", b: "Parent Trap", c: "Mean Girls", d: "Herbie: Fully Loaded" },
        correctAnswer: "c"
    },
    {
        question: "Which fashion-centric movie starring Anne Hathaway and Robert De Niro portrays an old guy interning at a fashion agency with a demanding boss?",
        options: { a: "The Intern", b: "Princess Diaries", c: "Devil Wears Prada", d: "Ocean's 8" },
        correctAnswer: "a"
    },
    {
        question: "What color top did Shah Rukh Khan object to Poo wearing in the iconic scene from Kabhi Khushi Kabhi Gham?",
        options: { a: "Black", b: "Pink", c: "Red", d: "White" },
        correctAnswer: "b"
    },
    {
        question: "How many outfits did Shantipriya wear in Om Shanti Om before she died?",
        options: { a: "4", b: "5", c: "7", d: "8" },
        correctAnswer: "b"
    },
    {
        question: "At the 2016 Met Gala, which singer wore a stunning Givenchy gown with a feathered neckpiece?",
        options: { a: "Lady Gaga", b: "Beyonce", c: "Madonna", d: "Rihanna" },
        correctAnswer: "b"
    },
    {
        question: "What was the theme for the 2019 Met Gala?",
        options: { a: "Camp: Notes on Fashion", b: "Garden on Times", c: "House of Chanel", d: "Heavenly Bodies" },
        correctAnswer: "a"
    },
    {
        question: "Which designer created the avant-garde outfit worn by Zendaya at the 2019 Met Gala, inspired by Cinderella's fairy godmother?",
        options: { a: "Versace", b: "Dolce and Gabbana", c: "Tommy Hilfiger", d: "Giorgio Armani" },
        correctAnswer: "c"
    },
    {
        question: "Which Rachel trend did Jennifer Aniston revisit during the Friends Reunion?",
        options: { a: "Plaids", b: "Turtleneck", c: "Graphic Tee", d: "Animal Print" },
        correctAnswer: "b"
    },
    {
        question: "Versace re-created its iconic green dress in 2019 with which actress?",
        options: { a: "Jennifer Lopez", b: "Angelina Jolie", c: "Jennifer Aniston", d: "Christina Aguilera" },
        correctAnswer: "a"
    },
    {
        question: "'Bagwati' from the film Zindagi Na Milegi Dobara is actually a:",
        options: { a: "Louis Vuitton Classic", b: "Iconic Chanel Bag", c: "Hermes Birkin Bag", d: "Limited Collection Prada" },
        correctAnswer: "c"
    },
    {
        question: "The iconic heart Tag necklace by Tiffany is called:",
        options: { a: "Return to Tiffany", b: "Back to Tiffany", c: "Best of Tiffany", d: "Compliments of Tiffany" },
        correctAnswer: "a"
    },
    {
        question: "Juttis are traditionally referred to as:",
        options: { a: "Ballerinas", b: "Mojri", c: "Peeps", d: "Sadri" },
        correctAnswer: "b"
    },
    {
        question: "The iconic Swarovski pendant is basically a:",
        options: { a: "Duck", b: "Rabbit", c: "Peacock", d: "Swan" },
        correctAnswer: "d"
    },
    {
        question: "What is the exact shade of Andrea Sachs’s (Anne Hathaway) blue sweater in Devil Wears Prada?",
        options: { a: "Cobalt Blue", b: "Teal Blue", c: "Cerulean Blue", d: "Admiral Blue" },
        correctAnswer: "c"
    },
    {
        question: "Aisha was the first film where an Indian actress:",
        options: { a: "Wore a vintage Chanel tweed suit", b: "Wore a polo hat", c: "Wore chantilly Gucci gloves", d: "Wore vintage Burberry sunglasses" },
        correctAnswer: "a"
    },
    {
        question: "Which popular film did the ace stylist Anaita Shroff Adajania design costumes for:",
        options: { a: "Kuch Kuch Hota Hai", b: "Dil To Pagal Hai", c: "Kabhi Khushi Kabhi Gham", d: "Kal Ho Na Ho" },
        correctAnswer: "d"
    },
    {
        question: "What is the full name of designer Sabyasachi Mukherjee's designer label?",
        options: { a: "Sabyasachi Bengal", b: "Sabyasachi India", c: "Sabyasachi Calcutta", d: "Label Sabyasachi" },
        correctAnswer: "c"
    },
    {
        question: "This designer won a national award in costume designing for the film Haider:",
        options: { a: "Anju Modi", b: "Dolly Ahluwalia", c: "Anamika Khanna", d: "Neeta Lulla" },
        correctAnswer: "b"
    },
    {
        question: "Sonam Kapoor’s iconic lilac lehenga in the opening scene of Aisha is designed by:",
        options: { a: "Anamika Khanna", b: "Aashna Behl", c: "Anushree Reddy", d: "Aastha Narang" },
        correctAnswer: "a"
    },
    {
        question: "Indian couturier Abhinav Mishra's fashion line is famous for its:",
        options: { a: "Aari embroidery", b: "Mirror work", c: "Cutdana work", d: "Kashidakari" },
        correctAnswer: "b"
    },
    {
        question: "How do you correctly pronounce the name of the popular high street fashion brand Zara?",
        options: { a: "'Tzah-dah'", b: "'Zah-rah'", c: "'Zaa-raa'", d: "'Zuh-ra'" },
        correctAnswer: "a"
    },
    {
        question: "Who is the first Indian designer to get the honor of displaying his designs at the MET?",
        options: { a: "Sabyasachi", b: "Ritu Beri", c: "Anita Dongre", d: "Manish Arora" },
        correctAnswer: "a"
    },
    {
        question: "In the past, Masaba Gupta has served as the creative head of this popular brand:",
        options: { a: "Satya Paul", b: "Bodice", c: "Grassroot", d: "Global Desi" },
        correctAnswer: "a"
    },
    {
        question: "The jeans that are fitted on the thighs and then get progressively loose from the knee area are called:",
        options: { a: "Bootcut jeans", b: "Mom Jeans", c: "Boyfriend jeans", d: "Bell Bottom" },
        correctAnswer: "d"
    },
    {
        question: "The basic shape or outline of a garment is referred to as:",
        options: { a: "Cut", b: "Line", c: "Silhouette", d: "Hemline" },
        correctAnswer: "c"
    },
    {
        question: "The French term for high sewing, which often refers to exclusive designer creations, is:",
        options: { a: "Haute couture", b: "Prêt-à-porter", c: "Chic", d: "High fashion" },
        correctAnswer: "a"
    },
    {
        question: "Who is known for his trademark polo player logo?",
        options: { a: "Tommy Hilfiger", b: "Ralph Lauren", c: "Calvin Klein" , d: "US polo" },
        correctAnswer: "b"
    },
    {
        question: "Who is known for launching the 'supermodel' era of the 1990s?",
        options: { a: "Dolce and Gabbana", b: "Giorgio Armani", c: "Gianni Versace" , d: "Louis Vuitton" },
        correctAnswer: "c"
    }
];

let currentQuestionIndex = 0;
let score = 0; // Initialize the score
let isQuizOver = false; // To track if the quiz has ended

const questionEl = document.getElementById('question');
const optionA = document.getElementById('option-a');
const optionB = document.getElementById('option-b');
const optionC = document.getElementById('option-c');
const optionD = document.getElementById('option-d');
const feedbackEl = document.getElementById('feedback');
const nextButton = document.getElementById('next');
const quitButton = document.getElementById('quit'); // Quit button

function loadQuestion() {
    if (isQuizOver) return; // Prevent loading more questions if quiz is over

    const currentQuestion = questions[currentQuestionIndex];
    questionEl.textContent = currentQuestion.question;
    optionA.textContent = currentQuestion.options.a;
    optionB.textContent = currentQuestion.options.b;
    optionC.textContent = currentQuestion.options.c;
    optionD.textContent = currentQuestion.options.d;
    feedbackEl.textContent = ''; // Clear feedback
    nextButton.style.display = 'none'; // Hide Next button initially
}

// Function to handle option clicks
function checkAnswer(selectedOption) {
    const correctAnswer = questions[currentQuestionIndex].correctAnswer;
    const currentQuestion = questions [currentQuestionIndex];
    if (selectedOption === correctAnswer) {
        feedbackEl.textContent = "Correct Answer!";
        score++; // Increment score for the correct answer
    } else {
        feedbackEl.textContent = `Wrong Answer! The correct answer is ${correctAnswer}) ${questions[currentQuestionIndex].options[correctAnswer]}`;
    }
    nextButton.style.display = 'inline'; // Show Next button
}

// Function to load the next question
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        endQuiz(); // Call endQuiz() when quiz finishes
    }
});

// Quit quiz functionality
quitButton.addEventListener('click', () => {
    endQuiz(true); // Call endQuiz with "quit" flag
});

// Attach event listeners to each option button
optionA.addEventListener('click', () => checkAnswer('a'));
optionB.addEventListener('click', () => checkAnswer('b'));
optionC.addEventListener('click', () => checkAnswer('c'));
optionD.addEventListener('click', () => checkAnswer('d'));

// Load the first question when the page loads
loadQuestion();

// Function to end the quiz
function endQuiz(quit = false) {
    isQuizOver = true; // Mark quiz as over
    if (quit) {
        questionEl.textContent = `You quit the quiz! Your score is: ${score}/${questions.length}`;
    } else {
        questionEl.textContent = `Quiz Over! Your total score is: ${score}/${questions.length}`;
    }
    document.querySelector('ul').style.display = 'none'; // Hide options
    nextButton.style.display = 'none'; // Hide Next button
    feedbackEl.textContent = ''; // Clear feedback
}