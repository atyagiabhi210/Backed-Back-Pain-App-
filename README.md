# Backed - Back Pain Exercise App

Backed is a React Native app designed to help users manage and relieve back pain through a series of guided exercises. The app provides detailed instructions for each exercise, tracks progress, and stores completed exercise sessions with a history feature. It also includes text-to-speech functionality to announce exercise details and timing.

## Features

- **Exercise Guide**: Detailed descriptions and images for various back pain exercises.
- **Timer**: Each exercise comes with a built-in countdown timer to guide users through the correct duration.
- **Text-to-Speech (TTS)**:
  - Announces the exercise name when starting.
  - Calls out remaining time when it's under 10 seconds.
  - Says "Good job" when the exercise is completed.
- **Exercise Navigation**: Navigate between exercises using forward and backward buttons.
- **Progress Tracking**: Tracks completed exercise sessions and stores them with date and time.
- **History Screen**: Displays completed exercises sorted by date (e.g., "Today", "Last Month").
- **Confetti Animation**: Celebratory confetti when all exercises are completed.
- **Warning Messages**: Alerts users if they attempt to skip exercises before completion.
- **Success Modal**: Displays upon successful completion of all exercises.

## Screens

### Exercise Screen

The main screen where users perform exercises:

- Displays the current exercise name, image, and timer.
- Play/Pause functionality for the timer.
- Navigate to next/previous exercises.
- Calls out exercise details using text-to-speech when the play button is pressed.
- Success modal and confetti animation after all exercises are completed.
- Warning if users skip exercises before completion.
  <img src="./app_screenshot/list.jpeg" alt="Exercise Screen" height="400"/>

### History Screen

- Displays all completed exercise sessions.
- Sessions are sorted by date with labels like "Today", "Last Month", etc.
- Each session contains a list of exercises performed, along with the date and time.
  <img src="./app_screenshot/history.jpeg" alt="History Screen" height="400"/>

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/backed-app.git
   ```
2. Run npm install
3. Run npm start
