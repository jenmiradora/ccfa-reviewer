# CCAF Exam Reviewer v2

A comprehensive, interactive study tool for the Claude Certified Architect — Foundations certification exam.

## 📋 What's Included

**3 Main Sections:**
- **📖 Study Guide** — 5 learning tiers organized from foundational to advanced, with 28 embedded exam scenarios
- **⚡ Quick Reference** — 28 searchable key terms, CLI flags, and configuration patterns by category
- **✍️ Practice Exam** — 28 randomized questions scored on the 100-1000 scale, designed to meet the 900/1000 target

## 🚀 Running Locally

### **Option 1: Start the Development Server (Recommended)**

```bash
cd "/Users/jennifer.miradora/Documents/95. Portfolio/CCAF Reviewer"
npm run dev
```

The app will open at **http://localhost:5173** with hot-reload (changes update instantly as you edit).

### **Option 2: Build for Production**

```bash
npm run build
npm run preview
```

Creates an optimized build in the `dist/` folder and previews it locally.

## 📂 Project Structure

```
CCAF Reviewer/
├── src/
│   ├── App.jsx        # Main React component (all the study guide, quick ref, practice exam)
│   ├── index.css      # Styling
│   └── main.jsx       # Entry point
├── index.html         # HTML template
├── vite.config.js     # Vite configuration
├── package.json       # Dependencies
└── README.md          # This file
```

## 🎯 Study Approach

**Tier 1 (Foundation):**
1. Claude 101 — How Claude works
2. Building with Claude API — API fundamentals + prompt engineering

**Tier 2 (Intermediate):**
3. Intro to MCP — Architecture & tool design
4. Claude Code in Action — Configuration & CI/CD

**Tier 3 (Advanced):**
5. Agent Skills — Custom commands & configuration
6. Agentic Architecture — Multi-agent systems & workflows

**Each topic has:**
- Key learning points
- An embedded exam scenario (tap "▶ Try Scenario")
- Full explanations on submit

## 💡 Tips

- **Learn in order** — Start with Tier 1 (Foundation), then move up
- **Try every scenario** — They're designed to match the real exam format
- **Use Quick Reference** — Search for terms you need to remember during study sessions
- **Retake the Practice Exam** — Each exam run shuffles questions randomly; aim for 900/1000

## 📊 Exam Info

- **Pass score:** 720/1000
- **Target score:** 900/1000
- **Question format:** Multiple choice (1 correct, 3 distractors)
- **Exam domains:** 5 domains weighted 27%, 18%, 20%, 20%, 15%
- **Scenarios on exam:** 4 of 6 randomly selected

## 🛠️ Development Commands

```bash
npm run dev       # Start dev server at http://localhost:5173
npm run build     # Build for production (output: dist/)
npm run preview   # Preview production build locally
npm run lint      # Run ESLint to check code quality
```

## 📝 Notes

- No internet required to study (all content is local)
- No backend needed — everything runs in your browser
- Scenarios and practice exam scores are stored in browser memory (not saved between sessions)

## 🔗 External Resources

- [Claude 101 Course](https://anthropic.skilljar.com/claude-101)
- [Building with Claude API Course](https://anthropic.skilljar.com/claude-with-the-anthropic-api)
- [Intro to MCP Course](https://anthropic.skilljar.com/introduction-to-model-context-protocol)
- [Claude Code in Action Course](https://anthropic.skilljar.com/claude-code-in-action)
- [Introduction to Agent Skills Course](https://anthropic.skilljar.com/introduction-to-agent-skills)
- [Official CCAF Exam Guide](https://everpath-course-content.s3-accelerate.amazonaws.com/instructor%2F8lsy243ftffjjy1cx9lm3o2bw%2Fpublic%2F1773274827%2FClaude+Certified+Architect+%E2%80%93+Foundations+Certification+Exam+Guide.pdf)

---

Good luck with your CCAF certification exam! 🎯
