# 🐍 Python-chan
**An anime-guided Python tutor that grows with you — from your first `print()` to your first trained model.**
*She's not just patient. She's delighted you're here.*
[![React](https://img.shields.io/badge/React-19-61dafb?logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8-646cff?logo=vite&logoColor=white)](https://vite.dev/)
[![Zustand](https://img.shields.io/badge/Zustand-5-orange)](https://zustand-demo.pmnd.rs/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-0055ff)](https://www.framer.com/motion/)
[![License: PolyForm Noncommercial](https://img.shields.io/badge/License-PolyForm_Noncommercial-blue)](./LICENSE)
[![Live Demo](https://img.shields.io/badge/Live%20Demo-python--chan.vercel.app-7c6fff?logo=vercel&logoColor=white)](https://python-chan.vercel.app)

Built by [Omega Mu Gamma Studio](https://github.com/Omega-Mu-Gamma-Studio) · the team behind [SeeDS](https://see-ds.vercel.app), [KMapX](https://kmapx.vercel.app), [EG Suite](https://eg-suite.vercel.app), [GateLab](https://gatelab.vercel.app), [Java-chan](https://java-chan.vercel.app), and [PlusPlus-chan](https://plusplus-chan.vercel.app).

---

## What is Python-chan?

Python-chan is a browser-based Python learning app where a warm, brilliant mascot character walks students all the way from "what is a variable" to "I just trained a logistic regression model." She's the friend who already understands the thing you're stuck on, and explains it like she's genuinely glad you asked.

Unlike the rest of the Chan family, Python-chan isn't a single curriculum — she's **three full courses, stacked**. Foundations gets you fluent. Data Science gets you working with real datasets. Machine Learning gets you building models that predict things. Each course is its own complete 5-unit, 75-lesson arc, and they're designed to be taken in order — but a confident self-learner can jump straight to Course 2 or 3 if they already know their basics.

No abstract theory walls. No condescension. Just Python, three courses deep, taught by someone who's thrilled you're learning it.

🔗 **[Try it live → python-chan.vercel.app](https://python-chan.vercel.app)**

---

## The Teaching Model

Every lesson across all 225 lessons follows this exact structure:

| Phase | Name | What Happens |
| --- | --- | --- |
| **1** | See It Work | Python-chan shows working code, the output, and explains what's happening line by line |
| **2** | See It Break | Same code, deliberately broken — she explains the error, why it happened, and what it teaches you |
| **3** | You Try | Student writes code or fills in blanks; pattern-based validation gives immediate feedback |

Validation is regex/pattern-based — no code execution in the browser. This keeps the app lightweight and deployable anywhere.

---

## Curriculum — 225 Lessons Across 3 Courses

| Course | Focus | Units | Lessons |
| --- | --- | --- | --- |
| 1 | Foundations | 5 | 75 |
| 2 | Data Science Track | 5 | 75 |
| 3 | Machine Learning Track | 5 | 75 |

<details>
<summary>📖 View Course 1 — Foundations (75 lessons)</summary>

**Unit 1 — Getting Started** `1.1` What is Python and Why It Matters · `1.2` Setting Up Your Environment · `1.3` Your First Python Program · `1.4` Variables and Assignment · `1.5` Basic Data Types — int, float, str, bool · `1.6` Type Conversion · `1.7` Arithmetic Operators · `1.8` Comparison and Logical Operators · `1.9` String Formatting with f-strings · `1.10` Getting Input from the User · `1.11` Comments and Code Hygiene · `1.12` Common Beginner Errors · `1.13` How Python Reads Your Code · `1.14` The Python REPL · `1.15` Mini Challenge — Hello, World Done Right

**Unit 2 — Control Flow and Functions** `2.1` if, elif, else · `2.2` Nested Conditionals · `2.3` while Loops · `2.4` for Loops · `2.5` break, continue, pass · `2.6` Defining Functions · `2.7` Parameters and Arguments · `2.8` Return Values · `2.9` Default and Keyword Arguments · `2.10` Scope — Local vs Global · `2.11` Recursion Basics · `2.12` Lambda Functions · `2.13` map and filter · `2.14` List Comprehensions · `2.15` Mini Challenge — FizzBuzz Your Way

**Unit 3 — Collections** `3.1` Lists and Indexing · `3.2` List Methods and Slicing · `3.3` Tuples — Immutable Sequences · `3.4` Dictionaries — Keys and Values · `3.5` Dictionary Methods · `3.6` Sets and Set Operations · `3.7` Nested Collections · `3.8` Iterating Over Collections · `3.9` zip and enumerate · `3.10` Sorting and Reversing · `3.11` Unpacking and Spreading · `3.12` Dictionary Comprehensions · `3.13` Choosing the Right Collection · `3.14` Common Collection Patterns · `3.15` Mini Challenge — Word Frequency Counter

**Unit 4 — Files, Errors, and Modules** `4.1` Opening and Reading Files · `4.2` Writing to Files · `4.3` Working with CSV · `4.4` Try, Except, Finally · `4.5` Raising Custom Exceptions · `4.6` Context Managers — with Statement · `4.7` Importing Modules · `4.8` The Standard Library Tour · `4.9` Installing Packages with pip · `4.10` Virtual Environments · `4.11` os and pathlib · `4.12` datetime Module · `4.13` random Module · `4.14` Writing Your Own Module · `4.15` Mini Challenge — File-Based To-Do List

**Unit 5 — Object Oriented Python and Final Project** `5.1` Classes and Objects · `5.2` The init Method · `5.3` Instance Attributes and Methods · `5.4` Class Attributes and Class Methods · `5.5` Inheritance · `5.6` Method Overriding · `5.7` Encapsulation · `5.8` Polymorphism · `5.9` Magic Methods — str, len, eq · `5.10` Decorators · `5.11` PEP 8 and Writing Clean Code · `5.12` Debugging Techniques · `5.13` Writing Tests with unittest · `5.14` Project — Build a CLI App · `5.15` Project — Polish and Submit

</details>

<details>
<summary>📖 View Course 2 — Data Science Track (75 lessons)</summary>

**Unit 1 — The Data Science Setup** `1.1` What is Data Science? · `1.2` The Data Science Workflow · `1.3` Setting Up Jupyter and Anaconda · `1.4` NumPy Arrays vs Python Lists · `1.5` Creating and Inspecting Arrays · `1.6` Array Operations and Broadcasting · `1.7` Indexing and Slicing Arrays · `1.8` Reshaping and Stacking Arrays · `1.9` Introduction to Pandas · `1.10` Series and DataFrames · `1.11` Loading Data — CSV, Excel, JSON · `1.12` Exploring Your Dataset · `1.13` Selecting and Filtering Data · `1.14` Handling Missing Values · `1.15` Mini Challenge — Load and Describe a Dataset

**Unit 2 — Data Cleaning and Transformation** `2.1` Identifying Dirty Data · `2.2` Renaming Columns and Reindexing · `2.3` Data Type Conversion · `2.4` Deduplication · `2.5` String Cleaning in Pandas · `2.6` Sorting and Ranking · `2.7` GroupBy and Aggregation · `2.8` Merging and Joining DataFrames · `2.9` Pivot Tables · `2.10` Apply and Lambda in Pandas · `2.11` Binning and Discretization · `2.12` Outlier Detection · `2.13` Feature Engineering Basics · `2.14` Saving Cleaned Data · `2.15` Mini Challenge — Clean a Messy Dataset

**Unit 3 — Visualization** `3.1` Why Visualization Matters · `3.2` Matplotlib — Your First Plot · `3.3` Line Charts and Bar Charts · `3.4` Scatter Plots and Histograms · `3.5` Subplots and Layouts · `3.6` Styling and Themes · `3.7` Seaborn vs Matplotlib · `3.8` Distribution Plots · `3.9` Categorical Plots · `3.10` Heatmaps and Correlation · `3.11` Pair Plots · `3.12` Annotating Charts · `3.13` Interactive Plots with Plotly Intro · `3.14` Choosing the Right Chart · `3.15` Mini Challenge — Visualize a Real Dataset

**Unit 4 — Statistics and Exploratory Analysis** `4.1` Descriptive Statistics · `4.2` Probability Basics · `4.3` Normal Distribution · `4.4` Binomial and Poisson Distributions · `4.5` Hypothesis Testing · `4.6` p-Values and Significance · `4.7` Correlation vs Causation · `4.8` Univariate Analysis · `4.9` Bivariate Analysis · `4.10` Multivariate Analysis · `4.11` Time Series Basics · `4.12` Rolling Statistics · `4.13` EDA Workflow · `4.14` EDA Case Study · `4.15` Mini Challenge — Full EDA Pass

**Unit 5 — Intro to ML and Final Project** `5.1` What is Machine Learning? · `5.2` Supervised vs Unsupervised · `5.3` Training, Validation, Test Sets · `5.4` Overfitting and Underfitting · `5.5` The Scikit-Learn API · `5.6` Linear Regression · `5.7` Logistic Regression · `5.8` Model Evaluation Metrics · `5.9` Cross Validation · `5.10` Web Scraping with BeautifulSoup · `5.11` APIs and JSON Data · `5.12` SQL with Pandas · `5.13` Project — Choose a Dataset · `5.14` Project — Full EDA and Modeling · `5.15` Project — Present Your Findings

</details>

<details>
<summary>📖 View Course 3 — Machine Learning Track (75 lessons)</summary>

**Unit 1 — ML Foundations** `1.1` The ML Pipeline · `1.2` Feature Engineering Principles · `1.3` Preprocessing with Scikit-Learn · `1.4` Pipelines and ColumnTransformer · `1.5` Baseline Models · `1.6` Linear Regression Deep Dive · `1.7` Polynomial Regression · `1.8` Ridge and Lasso Regularization · `1.9` Logistic Regression Deep Dive · `1.10` K-Nearest Neighbors · `1.11` Decision Trees · `1.12` Support Vector Machines · `1.13` Regression Metrics · `1.14` Classification Metrics — Precision, Recall, F1 · `1.15` Mini Challenge — Compare Three Models

**Unit 2 — Ensemble Methods and Model Tuning** `2.1` Bagging and Random Forests · `2.2` AdaBoost · `2.3` Gradient Boosting · `2.4` XGBoost · `2.5` Stacking and Blending · `2.6` Cross Validation Strategies · `2.7` Grid Search · `2.8` Random Search · `2.9` Feature Importance and Selection · `2.10` Dealing with Imbalanced Data · `2.11` K-Means Clustering · `2.12` DBSCAN · `2.13` Principal Component Analysis · `2.14` Dimensionality Reduction Use Cases · `2.15` Mini Challenge — Tune a Random Forest

**Unit 3 — Neural Networks** `3.1` The Perceptron · `3.2` Multilayer Networks · `3.3` Activation Functions · `3.4` Backpropagation Intuition · `3.5` Keras and TensorFlow Setup · `3.6` Building Your First Neural Network · `3.7` Loss Functions and Optimizers · `3.8` Dropout and Batch Normalization · `3.9` Callbacks and Early Stopping · `3.10` Saving and Loading Models · `3.11` Image Data and Preprocessing · `3.12` Convolutional Layers and Pooling · `3.13` Building a CNN from Scratch · `3.14` Transfer Learning · `3.15` Mini Challenge — Image Classifier

**Unit 4 — NLP and Advanced Topics** `4.1` Text Preprocessing · `4.2` Bag of Words and TF-IDF · `4.3` Word Embeddings · `4.4` Recurrent Neural Networks · `4.5` Transformers and BERT Intro · `4.6` Sentiment Analysis Pipeline · `4.7` Generative Models — GANs Intro · `4.8` Reinforcement Learning Basics · `4.9` ML Ethics and Bias · `4.10` Model Monitoring and Drift · `4.11` Saving Models — Joblib and Pickle · `4.12` Building a Flask API for Your Model · `4.13` AutoML Tools · `4.14` MLOps Overview · `4.15` Mini Challenge — Sentiment Classifier

**Unit 5 — Capstone Project** `5.1` Problem Selection and Scoping · `5.2` Data Collection and Cleaning · `5.3` Exploratory Analysis · `5.4` Feature Engineering · `5.5` Model Selection · `5.6` Hyperparameter Tuning · `5.7` Evaluation and Interpretation · `5.8` Handling Edge Cases · `5.9` Building a Flask API · `5.10` Model Documentation · `5.11` Bias Audit · `5.12` Peer Review Session · `5.13` Project — Final Implementation · `5.14` Project — Deployment · `5.15` Project — Presentation

</details>

---

## Features

### 🎓 Learning System

- **Three-phase lesson structure** — See It Work → See It Break → You Try, across all 225 lessons
- **Three-course progression** — Foundations unlocks Data Science, which unlocks Machine Learning; advanced learners can unlock a track early via a placement quiz
- **Contextual hint escalation** — hint appears at 2 wrong attempts, solution unlocks at 5
- **Pattern-based validation** — instant feedback without a server or code execution engine
- **Full lesson navigation** — collapsible sidebar grouped by course → unit → lesson, with per-lesson completion tracking

### 🎮 Progression & Rewards

- **XP system** — earn XP per lesson, with bonus XP for first-attempt success and hint-free runs
- **15 levels** (5 more than her siblings, because there's 3x the curriculum) — clear thresholds with a persistent progress bar
- **Level-gated cosmetics** — new rewards unlock as you level up, tracking your shift from "learning to code" to "shipping models"
- **localStorage persistence** — no account needed, progress is saved in the browser

### 🎨 The Shop

**App Themes** (equippable backgrounds):

| Level | Item | Style |
| --- | --- | --- |
| 1 | Golden Hour Desk 🌇 | Warm light through the window, mug of tea steaming next to the keyboard — the default |
| 4 | Jupyter Garden 🪴 | Soft green notebook cells climbing like ivy across the screen |
| 7 | Chalkboard Constellations ✨ | Equations and scatter plots drawn in chalk dust across a night sky |
| 10 | Server Room Glow 🖥️ | Cool blue rack lights — the model is training, and she's not leaving until it finishes |
| 13 | Golden Ratio Study 📐 | Marble desk, brass instruments, the aesthetic of someone who actually reads the math behind the model |

**Character Outfits** (equippable; all with full 6-expression sprite art):

| Level | Outfit | Vibe |
| --- | --- | --- |
| 1 | Sunlit Cardigan 🧶 | Soft, oversized, slightly too long sleeves. Her signature look, always equipped |
| 2 | Library Cardigan 📖 | Same warmth, draped over a reading nook fit for f-strings and footnotes |
| 4 | Lab Coat & Glasses 🔬 | Data Science Mode — ON. Pen behind the ear, sleeves rolled |
| 5 | Greenhouse Sundress 🌿 | NumPy arrays bloom like a garden when you know how to broadcast them |
| 6 | Night-Owl Hoodie 🦉 | EDA at 2am. The dataset finally makes sense |
| 8 | Professor's Blazer 🎓 | Machine Learning Mode — ON. She means business, but she's still smiling |
| 9 | Garden Witch ✨🌸 | The Ensemble Methods outfit. Many small spells, one strong forest |
| 10 | Idol — Gradient Descent 🎤 | She already performs a Celebration. Might as well dress for it |
| 12 | Neural Net Kimono 🧵 | Silver thread circuitry stitched through deep navy silk |
| 14 | Capstone Crown 👑 | You survived all three courses. Wear the crown |
| 15 | Off the Clock 🏖️ | model.deployed = True. She is, finally, allowed to rest |

**Downloadable Wallpapers** (phone/desktop art, save to your device):

| Level | Wallpaper | Vibe |
| --- | --- | --- |
| 3 | Morning Notebook ☕ | Jupyter cells, coffee ring stain, golden light |
| 3 | Cherry Blossom Reading Nook 🌸 | A worn copy of a stats textbook in her lap |
| 6 | The Pandas DataFrame 🐼 | Rows and columns rendered as a quiet, orderly garden grid |
| 6 | Scatter Plot Skyline 🌃 | City lights mapped as a correlation plot, glowing softly |
| 8 | Rainy Lab Window 🌧️ | Condensation on the glass, a model training in the reflection |
| 9 | Loss Curve Sunset 📉 | The loss is finally going down. So is the sun |
| 11 | Neon Notebook Arcade 🕹️ | Retro-futurist console running an actual logistic regression |
| 12 | Mountain Summit — Convergence 🏔️ | She reached the global minimum. So did you |
| 13 | Shrine Steps — Stats Edition 🏮 | Stone steps, dawn mist, a p-value finally below 0.05 |
| 15 | Deployment Day Sunset 🌅 | The Flask API is live. Time to watch the sky instead of the logs |

### ✨ Character & Expressions

Python-chan has 6 distinct expressions that fire contextually throughout lessons:

| State | Trigger |
| --- | --- |
| `idle` | Phase 1 — explaining working code |
| `thinking` | Hint mode; waiting for input |
| `surprised` | Correct answer |
| `happy` | Phase transitions and encouragement |
| `sad` | Wrong answer (first few times) |
| `idle-sleep` | Idle between interactions |

Each equipped outfit has its own full set of 6 expression sprites — swapping outfits changes Python-chan's entire look, not just a filter.

**Domain Expansion** — a fullscreen celebration effect fires on milestone level-ups and on completing each of the three courses, complete with confetti.

---

## Tech Stack

| Layer | Choice | Why |
| --- | --- | --- |
| Frontend | React 19 + Vite 8 | Fast HMR, ES modules, modern JSX transform |
| Styling | Plain CSS + Framer Motion 12 | No CSS framework overhead; animations via Motion |
| State | Zustand 5 | Minimal boilerplate, works with `persist` middleware out of the box |
| Data | JSON files + localStorage | Zero backend for Phase 1; data adapter ready for Phase 2 |
| Routing | React Router v7 | File-level page components |
| Hosting | Vercel | Zero-config deployment |

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Running Locally

```bash
# Clone the repo
git clone https://github.com/Omega-Mu-Gamma-Studio/Python-Chan.git
cd Python-Chan

# Install dependencies
npm install

# Start the dev server
npm run dev
```

The app runs at `http://localhost:5173` by default.

```bash
# Build for production
npm run build

# Preview the production build locally
npm run preview
```

### Deploying to Vercel

This repo is Vercel-ready with no configuration needed. Connect the repo in the Vercel dashboard and it'll detect the Vite setup automatically. No environment variables required for Phase 1.

---

## Project Structure

```
Python-Chan/
├── public/
│   ├── sprites/                      # Character expressions (Sunlit Cardigan — base outfit)
│   │   ├── teaching.png
│   │   ├── excited.png
│   │   ├── frustrated.png
│   │   ├── thinking.png
│   │   ├── oops.png
│   │   ├── idle.png
│   │   └── uniforms/                 # Outfit-specific sprite sets (6 expressions each)
│   │       ├── library-cardigan/
│   │       ├── lab-coat/
│   │       ├── greenhouse/
│   │       ├── night-owl/
│   │       ├── professor-blazer/
│   │       ├── garden-witch/
│   │       ├── idol/
│   │       ├── neural-kimono/
│   │       ├── capstone-crown/
│   │       └── off-the-clock/
│   └── wallpapers/                   # Downloadable device wallpapers (10 total)
│       ├── pythonchan-morning-notebook.png
│       ├── pythonchan-sakura-reading-nook.png
│       ├── pythonchan-dataframe-garden.png
│       ├── pythonchan-scatter-skyline.png
│       ├── pythonchan-rainy-lab.png
│       ├── pythonchan-loss-curve-sunset.png
│       ├── pythonchan-neon-notebook.png
│       ├── pythonchan-convergence-summit.png
│       ├── pythonchan-shrine-stats.png
│       └── pythonchan-deployment-sunset.png
│
├── src/
│   ├── components/
│   │   ├── character/PythonChan.jsx    # Sprite renderer; reads spriteOverrides from equipped outfit
│   │   ├── layout/AppLayout.jsx        # Root layout; applies theme + background
│   │   ├── lesson/                     # LessonCanvas, CodeBlock, PhaseIndicator
│   │   └── ui/                         # Sidebar, BottomBar, XPDisplay, ProgressBar, CourseSelector
│   │
│   ├── data/
│   │   ├── lessons/                  # 225 JSON lesson files (course1–3, unit1–5, lessons 1–15)
│   │   ├── courses/                  # 3 course JSON files (id, title, unit list)
│   │   ├── units/                    # 15 unit JSON files (id, title, lesson list)
│   │   └── shopItems.js              # All cosmetic definitions (outfits, themes, downloadables)
│   │
│   ├── hooks/
│   │   ├── useLesson.js              # Lesson phase state machine
│   │   ├── useProgress.js            # Progress store bindings
│   │   └── useSound.js               # Sound effect hooks
│   │
│   ├── pages/
│   │   ├── Home.jsx                  # Dashboard / course selection
│   │   ├── CoursePage.jsx            # Unit list for a course
│   │   ├── UnitPage.jsx              # Lesson list for a unit
│   │   ├── LessonPage.jsx            # The actual lesson experience
│   │   └── Shop.jsx                  # Cosmetics shop
│   │
│   ├── services/
│   │   ├── lessonService.js          # JSON loader + lesson data access
│   │   └── storageService.js         # localStorage adapter (Phase 2: swap for API)
│   │
│   ├── store/
│   │   ├── progressStore.js          # Zustand store: XP, level, outfits, progress
│   │   └── lessonStore.js            # Zustand store: active lesson state
│   │
│   └── utils/
│       ├── xpCalculator.js           # XP thresholds, level math, earned XP calculation
│       ├── patternMatcher.js         # Regex-based answer validation engine
│       └── pyHighlighter.js          # Python syntax highlighting for code blocks
```

---

## Adding Content

### Adding a New Lesson

Lesson JSON files live at `src/data/lessons/course{C}/unit{N}/{N}.{M}.json`. Each file follows this structure:

```json
{
  "id": "1.1",
  "course": 1,
  "title": "What is Python and Why It Matters",
  "xp": 10,
  "phases": [
    {
      "phase": 1,
      "title": "See It Work",
      "dialogue": "Python-chan's explanation text here",
      "code": "print('Hello, Player!')",
      "output": "Hello, Player!"
    },
    {
      "phase": 2,
      "title": "See It Break",
      "dialogue": "Here's what happens when...",
      "code": "print('Hello, Player!'",
      "error": "SyntaxError: unexpected EOF while parsing"
    },
    {
      "phase": 3,
      "title": "You Try",
      "dialogue": "Your turn!",
      "prompt": "What function prints text to the console in Python?",
      "answer": "print()",
      "hint": "It's four letters and very friendly.",
      "solution": "print()"
    }
  ]
}
```

### Adding a New Outfit

1. Create a folder under `public/sprites/uniforms/<outfit-name>/`
2. Drop in 6 PNGs named: `teaching.png`, `idle.png`, `oops.png`, `thinking.png`, `frustrated.png`, `excited.png`
3. Add an entry to `src/data/shopItems.js` with `spriteOverrides` mapping each expression state to the correct file path
4. That's it — `PythonChan.jsx` and `Shop.jsx` both read `spriteOverrides` automatically

### Developer Cheat Mode

In the Shop page, **triple-click the Shop title** to toggle the dev cheat:

- First triple-click → instantly sets XP to 9999 and level to 15 (unlocks everything)
- Second triple-click → resets XP and level back to 0 / 1

---

## Roadmap

### Phase 1 (Current) ✅

- All 225 lessons authored and published across 3 courses
- Full cosmetics system (11 outfits, 5 themes, 10 downloadable wallpapers)
- XP/leveling, shop, expressions, domain expansion
- localStorage persistence, no account required

### Phase 2 (Planned)

- PostgreSQL + Express API backend
- User accounts and cross-device sync
- Progress stored server-side (the store already has a `_resetForMigration` hook and storage adapter pattern ready for this)
- Instructor view: class-wide completion dashboards
- No frontend rewrite required — only the storage layer changes

---

## Credits & Assets

**Character Art**: Python-chan's sprites were generated using AI tools and hand-curated for expression consistency by the Omega Mu Gamma Studio team. All character designs are proprietary to Omega Mu Gamma Studio.

**Note**: As a free, open-source educational tool, we prioritized shipping a complete learning experience over commissioning custom art. If you're an artist interested in contributing official character designs, reach out — we'd love to collaborate.

---

## Part of Omega Mu Gamma Studio

Python-chan is part of a student-built suite of open-source engineering and CS education tools from Omega Mu Gamma Studio.

| Tool | What it does |
| --- | --- |
| [SeeDS](https://see-ds.vercel.app) | 3D data structure visualizer with drag-and-drop Playground mode |
| [KMapX](https://kmapx.vercel.app) | Karnaugh map simplifier with don't-care support |
| [EG Suite](https://eg-suite.vercel.app) | 3D Engineering Graphics simulator for ME22201 |
| [GateLab](https://gatelab.vercel.app) | 2D digital logic schematic playground (CS22303) |
| [Java-chan](https://java-chan.vercel.app) | Anime-guided Java tutor for CS22301 |
| [PlusPlus-chan](https://plusplus-chan.vercel.app) | Anime-guided C++ tutor for aspiring game developers |
| **Python-chan** | Anime-guided, three-course Python tutor — Foundations, Data Science, and Machine Learning — *this repo* |

---

## License

This project is licensed under the **[PolyForm Noncommercial License 1.0.0](https://polyformproject.org/licenses/noncommercial/1.0.0/)**.

You may use, modify, and share this software for **noncommercial purposes** only. This includes:
- Personal study and hobby projects
- Educational and research use
- Use by noncommercial organizations (charities, educational institutions, government bodies)

**Commercial use is prohibited** without a separate commercial license from Omega Mu Gamma Studio.

**The character art, sprites, and visual assets for this project are also proprietary.** They may not be reproduced, redistributed, or used outside this project without explicit permission.

For commercial licensing inquiries, contact Omega Mu Gamma Studio.

© 2026 Omega Mu Gamma Studio
