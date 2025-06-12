🎯 Word Guessing Game
A simple interactive word guessing game built with HTML, CSS, and JavaScript. The game displays a partially hidden word and prompts the user to guess individual letters. It provides feedback on correct or incorrect guesses and announces when the word has been successfully guessed.

🚀 Features
Displays a word with some letters hidden.

Accepts one-letter inputs from the user.

Validates input for correct format and duplicate guesses.

Shows real-time updates to the word display.

Provides success or error messages.

Stylish and responsive design.

🛠️ Technologies Used
HTML – Structure of the game interface.

CSS – Styling and layout (including responsive centering and effects).

JavaScript – Game logic, input validation, and dynamic UI updates.

📂 Project Structure
graphql
Copy
Edit
word-guessing-game/
│
├── index.html         # Main HTML file with the game UI
├── style.css          # CSS file for styling
└── script.js          # JavaScript file with game logic

🧠 Game Logic Overview
The target word is hardcoded ("perl").

Some letters are initially revealed (e.g., "p" and "l").

Users guess missing letters one at a time.

Correct guesses update the word display.

Duplicate or invalid inputs are handled gracefully.

Alerts notify users of wrong guesses or successful completion.



🧑‍💻 How to Use
Clone or download this repository.

Open index.html in a web browser.

Enter a single lowercase letter in the input box and click Submit.

Continue guessing until the word is fully revealed.

✅ Example
Displayed Word:
p _ _ l
User Input: e
Updated Display: p e _ l
Keep going until you complete p e r l.

💡 Future Improvements
Dynamic word generation.

Lives/chances system.

Score tracking and leaderboard.

Add keyboard event support (Enter key to submit).

