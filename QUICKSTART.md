# Quick Start Guide

## 1️⃣ Start the App (One Command)

```bash
npm run dev
```

Open your browser to **http://localhost:5173** (or whatever URL is shown in the terminal)

The app is now running live with hot-reload!

---

## 2️⃣ Navigate the Reviewer

### **Study Guide Tab (📖)**
- Organized in **3 tiers** from foundational to advanced
- Tap any module to expand and see topics
- Tap any topic to see key points
- **Tap "▶ Try Scenario"** to practice exam-style questions

### **Quick Reference Tab (⚡)**
- 28 searchable terms (API flags, CLI commands, config paths)
- Filter by category (API, CLI, Config, Skills, MCP, Hooks, etc.)
- Designed for quick lookups while studying

### **Practice Exam Tab (✍️)**
- 28 randomized exam-style questions
- Tap an answer, then "Submit" to see if you're right + explanation
- Full score on 100-1000 scale
- **Goal: 900/1000 to meet the target**

---

## 3️⃣ Study Path (Recommended Order)

**Tier 1 — Foundation (Start here)**
- Module 1: Understanding Claude & How It Works
- Module 2: API Fundamentals, Prompt Engineering & Evaluation

**Tier 2 — Intermediate**
- Module 3: MCP Architecture, Primitives & Tool Design
- Module 4: Claude Code Configuration, Hooks & CI/CD

**Tier 3 — Advanced**
- Module 5: Agent Skills, Commands & Modular Config
- Module 6: Agentic Architecture, Multi-Agent & Workflows

---

## 4️⃣ Tips for Success

✅ **Do this:**
- Study in order (Tier 1 → 2 → 3)
- Try every embedded scenario in the Study Guide
- Use Quick Reference to bookmark terms you struggle with
- Retake the Practice Exam multiple times (randomized each time)
- Target 900/1000 on the practice exam

❌ **Don't do this:**
- Skip sections (Foundation content is needed for later tiers)
- Ignore the scenarios (they match real exam format)
- Cram without understanding concepts

---

## 5️⃣ Troubleshooting

**App won't start:**
```bash
# Make sure you're in the right directory
cd "/Users/jennifer.miradora/Documents/95. Portfolio/CCAF Reviewer"

# Try clearing npm cache
npm cache clean --force

# Try installing again
npm install

# Then start
npm run dev
```

**Port 5173 already in use:**
```bash
# Vite will automatically use the next available port (5174, 5175, etc.)
# Just check the terminal output for the correct URL
```

**Changes aren't showing up:**
- Hard refresh: `Cmd + Shift + R` (Mac) or `Ctrl + Shift + R` (Windows)
- Or check that you saved the file and npm run dev is still running

---

## 6️⃣ When You're Ready for the Real Exam

1. **Complete all 3 tiers** of the Study Guide
2. **Score 900+** on the Practice Exam at least 2-3 times
3. **Review any topics** where you scored below 80% on scenarios
4. **Take the official practice exam** from Anthropic
5. **Schedule your real exam** through Anthropic Academy

---

Happy studying! 🚀
