// Array of fortunes based on categories
const fortunes = {
    general: [
        "You will have a great day!",
        "Something unexpected is about to happen.",
        "Your hard work will pay off soon.",
        "A surprise is waiting for you around the corner.",
        "You will soon find something that you've lost.",
        "Love is in your near future.",
        "You are about to experience a major change in your life.",
        "An exciting opportunity will come your way today.",
        "Your efforts will be recognized, and you'll be rewarded.",
        "Someone special is thinking of you today."
    ],
    love: [
        "True love is in your near future.",
        "Your soulmate is closer than you think.",
        "You will soon meet someone who will change your life.",
        "Love will guide you in your decision-making.",
        "Keep your heart open, someone special is looking for you.",
        "Be patient, love will find you when you least expect it."
    ],
    career: [
        "A promotion is in your future.",
        "An unexpected opportunity will come your way soon.",
        "Your hard work will soon be recognized.",
        "Take a leap of faith in your career—success awaits.",
        "A new path will emerge in your professional life.",
        "You will achieve your career goals, stay focused."
    ],
    health: [
        "Your health will improve with small lifestyle changes.",
        "Take care of your mental health—rest is important.",
        "Your body will thank you for taking care of it.",
        "A positive change in your health habits is coming.",
        "Stay active and you'll feel more energized.",
        "Good health is on your horizon, keep up the good work."
    ]
};

// DOM elements
const fortuneText = document.getElementById("fortune");
const tellFortuneBtn = document.getElementById("tellFortuneBtn");
const historyList = document.getElementById("history-list");
let selectedCategory = 'general'; // Default category

// Function to generate a random fortune
function tellFortune() {
    const randomIndex = Math.floor(Math.random() * fortunes[selectedCategory].length);
    const fortune = fortunes[selectedCategory][randomIndex];

    // Display the fortune with animation
    fortuneText.textContent = fortune;
    fortuneText.style.opacity = 1;

    // Add the fortune to history
    const historyItem = document.createElement("li");
    historyItem.textContent = fortune;
    historyList.insertBefore(historyItem, historyList.firstChild);

    // Play a sound effect
    const audio = new Audio('fortune-sound.mp3'); // Add your sound file here
    audio.play();

    // Hide the fortune text after animation
    setTimeout(() => {
        fortuneText.style.opacity = 0;
    }, 3000); // Fade out after 3 seconds
}

// Event listeners for category buttons
const categoryButtons = document.querySelectorAll('.category-btn');
categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
        selectedCategory = button.getAttribute('data-category');
        tellFortune();
    });
});

// Event listener for the "Tell My Fortune" button
tellFortuneBtn.addEventListener('click', tellFortune);
