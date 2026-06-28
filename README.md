# Edbert Pasamba — Portfolio

Personal portfolio built with React. Highlights projects in Data Engineering, Software Development, and System Automation.

---

## Running Locally

### Prerequisites

- [Node.js](https://nodejs.org) v16 or higher
- npm (comes with Node.js)

### Option 1 — BAT file (Windows, easiest)

Double-click `run-local.bat` in the project root. It will install dependencies if needed and start the dev server automatically.

### Option 2 — Manual

```bash
# Install dependencies (first time only)
npm install

# Start the dev server
npm start
```

The app will open at `http://localhost:3000`.

---

## Project Structure

```
src/
├── portfolio.js              # All personal content — edit this to update the site
├── containers/
│   ├── greeting/             # Hero section
│   ├── skillsPlaceholder/    # Skills + project showcase (Data Engineering, Software Dev)
│   ├── howIThink/            # Lean Six Sigma / DMAIC section
│   └── ...
├── components/
│   ├── header/               # Fixed navbar
│   └── ...
└── pages/
    └── home/                 # Main page composition
```

---

## Updating Content

All personal data lives in `src/portfolio.js`. That is the only file you need to touch for content changes — name, roles, experience, social links, and tagline are all there.
