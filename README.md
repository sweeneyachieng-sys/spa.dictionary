# Dictionary Web Application

## Overview

The Dictionary Web Application is an interactive single-page application (SPA) that allows users to search for English words and retrieve their meanings, synonyms, examples, parts of speech, and pronunciation audio.

The application uses the Free Dictionary API to fetch real-time dictionary data and dynamically displays the results without reloading the page.

## Features

- **Word Search:** Search for English words and retrieve their definitions.
- **Definitions:** Display the meaning of a searched word.
- **Parts of Speech:** Identify grammatical categories such as nouns, verbs, and adjectives.
- **Synonyms:** Display available synonyms for searched words.
- **Examples:** Show example sentences when provided by the API.
- **Input Validation:** Prevent empty searches and reject certain invalid characters.
- **Error Handling:** Display helpful messages when searches fail.
- **Dynamic DOM Updates:** Display results without refreshing the page.
- **Responsive Interface:** Use Tailwind CSS to support different screen sizes.

## Technologies Used

| Technology | Purpose |
|---|---|
| HTML5 | Structure of the application |
| Tailwind CSS | Styling and responsive design |
| JavaScript (ES6+) | Application logic and interactivity |
| Fetch API | Retrieving dictionary data |
| Async/Await | Handling asynchronous requests |
| DOM Manipulation | Dynamically updating search results |
| ESLint | Checking JavaScript code quality |
| Git & GitHub | Version control and project hosting |

## API Integration

This project uses the [Free Dictionary API](https://dictionaryapi.dev/).

**API Endpoint:**

`https://api.dictionaryapi.dev/api/v2/entries/en/{word}`

The API provides information such as word definitions, phonetics, parts of speech, examples, and synonyms.

## Installation and Setup

1. Clone the repository:

   ```bash
   git clone git@github.com:sweeneyachieng-sys/spa.dictionary.git
   ```

2. Navigate into the project directory:

   ```bash
   cd REPOSITORY
   ```

3. Open the project in Visual Studio Code:

   ```bash
   code .
   ```

4. Open `index.html` in your browser or use the VS Code Live Server extension.

## How to Use

1. Open the dictionary application.
2. Enter an English word into the search field.
3. Click the **Consult** button or press Enter.
4. View the available definition, part of speech, synonyms, and example sentences.
5. Click the audio button to hear the pronunciation, if available.
6. Enter another word to perform a new search.

## ESLint

ESLint is used to identify potential JavaScript errors and encourage consistent coding practices.

To run ESLint, install the project dependencies and execute:

```bash
npm install
npx eslint spa.js
```

This assumes the repository includes the appropriate ESLint configuration and package dependencies.

## Error Handling

The application handles common issues, including:

- Empty or invalid search input.
- Words that cannot be found in the dictionary.
- Failed network or API requests.
- Missing pronunciation audio.
- Missing optional dictionary information.

## Future Improvements

- Support multiple definitions for each word.
- Add filtering by part of speech.
- Implement search history.
- Add a favorites feature.
- Improve accessibility and keyboard navigation.
- Expand pronunciation options.

## Learning Outcomes

This project demonstrates practical knowledge of:

- Asynchronous JavaScript.
- Fetch API and JSON response parsing.
- JavaScript event listeners.
- DOM manipulation.
- Input validation and error handling.
- Working with external APIs.
- Code quality practices using ESLint.
- Git and GitHub version control.

## License

Created for educational and learning purposes.