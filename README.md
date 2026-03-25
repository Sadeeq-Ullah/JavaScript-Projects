# JavaScript Fundamentals — Project Portfolio

[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![Netlify](https://img.shields.io/badge/Deployed-Netlify-00C7B7?style=flat-square&logo=netlify&logoColor=white)](https://www.netlify.com/)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Sadeeq%20Khilji-0A66C2?style=flat-square&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/sadeeq-khilji/)
[![GitHub](https://img.shields.io/badge/GitHub-Sadeeq--Ullah-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/Sadeeq-Ullah?tab=repositories)

---

## Overview

This repository documents my JavaScript fundamentals journey through hands-on projects. Each project was built from scratch without frameworks — intentionally, to develop a strong understanding of core JS mechanics: event handling, state management, DOM interaction, and data persistence. Every project is fully deployed and functional.

---

## Projects

### 🧮 Calculator
> Arithmetic logic built entirely in vanilla JS with full input validation and edge case handling.

- Handles operator chaining, decimal inputs, and invalid sequences without breaking
- Layout built with CSS Grid — no table hacks
- Focused on clean conditional logic and state tracking between operations

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Open-brightgreen?style=flat-square)](https://calculator210o.netlify.app/)

---

### 🧠 Quiz App
> A modular quiz platform using ES6 imports/exports — closest in structure to production-level JS organization.

- Questions and answers managed as structured data arrays, fully decoupled from UI logic
- Real-time score tracking with immediate per-answer feedback
- First project in this repo to use ES6 Modules — demonstrates understanding of file-based code separation

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Open-brightgreen?style=flat-square)](https://quizsession.netlify.app/)

---

### ✂️ Rock Paper Scissors
> Classic game vs. computer — built to practice randomization, conditional branching, and live DOM updates.

- Computer move generated via `Math.random()` with result evaluated through a decision matrix
- Score persists across rounds within the session
- CSS animations tied to win/loss outcomes for visual feedback

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Open-brightgreen?style=flat-square)](https://scissorgame.netlify.app/)

---

### 📝 To-Do List
> Task management app with full CRUD operations and localStorage persistence.

- Tasks survive page refresh via `localStorage` — read, written, and parsed on every state change
- Delete and completion toggle implemented without any third-party library
- Demonstrates understanding of JSON serialization and browser storage APIs

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Open-brightgreen?style=flat-square)](https://todolist21884.netlify.app/)

---

## JS Concepts Covered Across Projects

| Concept | Where Applied |
| :--- | :--- |
| DOM manipulation | All projects |
| Event listeners & delegation | Calculator, To-Do List, Rock Paper Scissors |
| State management (vanilla) | Calculator, Quiz App |
| ES6 Modules (import/export) | Quiz App |
| localStorage & JSON | To-Do List |
| Randomization & conditionals | Rock Paper Scissors |
| CSS Grid & Flexbox | Calculator, To-Do List |
| Input validation | Calculator |

---

## Repository Structure

```
/
├── Calculator/
│   ├── index.html
│   ├── style.css
│   ├── app.js
│   └── README.md
├── Quiz app/
│   ├── index.html
│   ├── style.css
│   ├── app.js
│   └── README.md
├── StoneScissorsPaper/
│   ├── index.html
│   ├── style.css
│   ├── app.js
│   └── README.md
├── To do list/
│   ├── index.html
│   ├── style.css
│   ├── app.js
│   └── README.md
└── README.md
```

---

## Running Locally

```bash
# Clone the repository
git clone https://github.com/Sadeeq-Ullah/javascript-projects.git

# Navigate to any project
cd "Quiz app"

# Open in browser
# Option 1 — VS Code Live Server (recommended)
# Option 2 — Python local server
python -m http.server
```

> **Important:** The Quiz App uses ES6 Modules and must be served through a local server. Opening `index.html` directly via the file system will throw CORS errors due to browser security restrictions on module imports.

---

## Connect

- **GitHub:** [github.com/Sadeeq-Ullah](https://github.com/Sadeeq-Ullah?tab=repositories)
- **LinkedIn:** [linkedin.com/in/sadeeq-khilji](https://www.linkedin.com/in/sadeeq-khilji/)