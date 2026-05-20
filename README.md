# CCAF Exam Reviewer

A comprehensive, interactive study tool for the **Claude Certified Architect – Foundations (CCAF)** certification exam. This single-file HTML application provides study materials, quick reference, and 11 complete practice test sets with 78 unique exam-style questions.

![Status](https://img.shields.io/badge/Status-Production%20Ready-brightgreen)
![License](https://img.shields.io/badge/License-MIT-blue)
![Size](https://img.shields.io/badge/Size-55KB-green)
![Questions](https://img.shields.io/badge/Questions-78-blue)
![Test%20Sets](https://img.shields.io/badge/Test%20Sets-11-brightblue)

---

## 📋 Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Test Sets Overview](#test-sets-overview)
- [Study Strategy](#study-strategy)
- [Technical Details](#technical-details)
- [Browser Compatibility](#browser-compatibility)
- [Deployment](#deployment)
- [Exam Information](#exam-information)
- [FAQ](#faq)

---

## ✨ Features

### 📚 **Study Guide Tab**
- **3 Learning Tiers:** Foundation, Intermediate, Advanced
- **6 Complete Courses:**
  - Claude 101 - Understanding Claude & How It Works
  - Building with the Claude API - API Fundamentals & Prompt Engineering
  - Intro to Model Context Protocol (MCP) - Architecture & Design
  - Claude Code in Action - Configuration, Hooks & CI/CD
  - Introduction to Agent Skills - Skills, Commands & Modular Config
  - Building with the Claude API - Agentic Architecture & Multi-Agent Systems
- **28 Interactive Topics** with expandable key points
- **28 Embedded Scenarios** with multiple-choice questions
- **Full Explanations** for every answer
- Color-coded by domain and course

### ⚡ **Quick Reference Tab**
- **28 Searchable Terms** across CCAF exam domains
- **8 Categories:** API, CLI, Config, Skills, MCP, Hooks, Session, SDK
- Real-time search functionality
- Category filtering
- Quick definitions for quick recall

### ✍️ **Practice Exam Tab**
- **11 Complete Test Sets** (78 unique questions total)
- **Original Test Set:** 28 questions from study guide scenarios
- **10 Backup Test Sets:** 50 brand new CCAF-style questions
- **🔄 Generate New Test Button** - Switch between test sets mid-exam
- **Test Set Names** displayed at top of each question
- **Randomized Questions** (Fisher-Yates shuffle)
- **Comprehensive Scoring** on 0-1000 scale
- **Domain-Colored Progress Bar** tracking
- **Full Explanations** for every answer
- **Instant Feedback** (correct/incorrect highlighting)
- **Score Thresholds:**
  - 900+: 🎯 TARGET MET (exam passing score)
  - 720+: ✅ PASSED (minimum passing)
  - <720: ❌ BELOW PASSING (needs review)

### 🎨 **User Interface**
- **Clean, Professional Design** with black text on light background
- **Light Mode Only** for maximum readability
- **Responsive Layout** optimized for all screen sizes
- **Touch-Friendly Buttons** for mobile devices
- **Smooth Transitions** and interactive elements
- **No External Dependencies** - completely self-contained

---

## 🚀 Getting Started

### Prerequisites
- **Any modern web browser** (Chrome, Firefox, Safari, Edge)
- **No internet required** after initial load
- **No software installation** needed

### Installation

1. **Download the file:**
   - Download `ccaf-reviewer.html` from the latest release

2. **Save as index.html (recommended for GitHub Pages):**
   ```bash
   mv ccaf-reviewer.html index.html
   ```

3. **Open in browser:**
   - Double-click the file, or
   - Drag and drop into browser window, or
   - Use "File > Open" in your browser

### Using on GitHub Pages

1. Clone your repository:
   ```bash
   git clone https://github.com/yourusername/ccfa-reviewer.git
   cd ccfa-reviewer
   ```

2. Copy the file:
   ```bash
   cp /path/to/ccaf-reviewer.html index.html
   ```

3. Commit and push:
   ```bash
   git add index.html
   git commit -m "Add CCAF Exam Reviewer with 11 test sets"
   git push origin main
   ```

4. Configure GitHub Pages:
   - Go to Settings → Pages
   - Source: "Deploy from a branch"
   - Branch: `main`
   - Folder: `/ (root)`
   - Save

5. Your app will be live at:
   ```
   https://yourusername.github.io/ccfa-reviewer/
   ```

---

## 📖 Usage

### Study Guide Tab

1. **Expand Modules:**
   - Click any course module to expand/collapse
   - Shows module summary and all topics

2. **Expand Topics:**
   - Click any topic to expand and view:
     - Title and course
     - Key points (bullet list)
     - "Try Scenario" button
   - Toggle text changes from `+` to `−`
   - Background highlights when expanded

3. **Try Scenarios:**
   - Click "▶ Try Scenario" button
   - Scenario box appears with question
   - Select any answer (A, B, C, or D)
   - Correct answer: green highlight
   - Incorrect answer: red highlight
   - Full explanation displays below

### Quick Reference Tab

1. **Search Terms:**
   - Type in the search box
   - Results filter in real-time
   - Search term code and definition both included

2. **Filter by Category:**
   - Click category buttons: API, CLI, Config, Skills, MCP, Hooks, Session, SDK
   - "All" shows all 28 terms
   - Combine with search for precise lookup

3. **View Terms:**
   - Each term shows code/command
   - Definition provides concise explanation
   - Great for quick recall before practice

### Practice Exam Tab

1. **Start Test:**
   - Original test (28 questions) loads automatically
   - Shows test set name at top left
   - Questions randomized each attempt

2. **Answer Questions:**
   - Read question carefully
   - Select one of 4 options (A, B, C, D)
   - Submit button enables after selection
   - Click "Submit" to check answer

3. **Review Answer:**
   - Correct answer: green highlight ✓
   - Your incorrect answer: red highlight ✗
   - Full explanation displays
   - Shows why answer is correct

4. **Switch Test Sets:**
   - Click "🔄 Generate New Test" button at top
   - Test set cycles: Original → 2 → 3 → ... → 11 → Original
   - Questions reset and reshuffle
   - Progress resets to question 1

5. **Complete Exam:**
   - After all questions answered
   - Results screen shows:
     - Score (0-1000)
     - Correct count (e.g., 18/28)
     - Status emoji and message
     - Color-coded based on performance
   - Click "Retake" to start over with Original set
   - Or click "Generate New Test" before retaking

---

## 🎯 Test Sets Overview

### Original Test Set (28 Questions)
- **Source:** Study guide scenarios
- **Domains:** D1, D2, D3, D4, D5 (all domains)
- **Topics:** All course materials covered
- **Difficulty:** Mixed (foundation to advanced)

### Test Set 2 (5 Questions)
- **Topics:** Batch API, Multi-agent systems, Tool selection, CLAUDE.md hierarchy, CI/CD
- **Domains:** D1, D3, D4
- **Focus:** API patterns and configuration

### Test Set 3 (5 Questions)
- **Topics:** Extended thinking, Architecture patterns, Skills, Few-shot prompting
- **Domains:** D4, D5
- **Focus:** Advanced API features

### Test Set 4 (5 Questions)
- **Topics:** Context management, Prompt caching, MCP primitives, Hooks, Accuracy analysis
- **Domains:** D2, D4, D5
- **Focus:** Context handling and MCP

### Test Set 5 (5 Questions)
- **Topics:** Agentic loops, Workflows, JSON schemas, Error handling, Routing patterns
- **Domains:** D1, D4
- **Focus:** Agentic architecture fundamentals

### Test Set 6 (5 Questions)
- **Topics:** MCP transport, Plan mode, Escalation protocols, Caching strategies
- **Domains:** D2, D3, D4
- **Focus:** Transport and planning decisions

### Test Set 7 (5 Questions)
- **Topics:** Glob patterns, Stratified analysis, Tool count limits, @import, tool_choice
- **Domains:** D2, D3, D5
- **Focus:** Configuration and reliability

### Test Set 8 (5 Questions)
- **Topics:** /memory command, Multi-pass reviews, Error retry, Custom commands, Few-shot
- **Domains:** D3, D4
- **Focus:** Session management and code review

### Test Set 9 (5 Questions)
- **Topics:** PostToolUse hooks, Deterministic behavior, Context trimming, MCP primitives
- **Domains:** D2, D3
- **Focus:** Hooks and context optimization

### Test Set 10 (5 Questions)
- **Topics:** Code execution, Sessions, Error recovery, Routing, isError flag
- **Domains:** D1, D2, D3
- **Focus:** Execution and recovery patterns

### Test Set 11 (5 Questions)
- **Topics:** JSON output, Configuration sharing, MCP purpose, PreToolUse hooks, Batch API
- **Domains:** D2, D3, D4
- **Focus:** Output consistency and team configuration

---

## 📚 Study Strategy

### Recommended Learning Path

#### **Week 1: Foundation (56 minutes)**
- **Monday:** Original Test Set (45-60 min)
  - Goal: 700+ score
  - Identifies knowledge gaps
- **Wednesday:** Retake Original Set
  - Focus on missed questions
  - Read all explanations
- **Friday:** Retake Original Set
  - Track score improvement
  - Target: 750+

#### **Week 2-3: Intermediate (60 minutes)**
- **Mon:** Test Set 2 (20-30 min) - Batch & Multi-agent
- **Wed:** Test Set 3 (20-30 min) - Advanced features
- **Fri:** Test Set 4 (20-30 min) - Context management
- Target score: 800+

#### **Week 4-5: Integration (60 minutes)**
- **Mon:** Test Set 5 (20-30 min) - Agentic loops
- **Wed:** Test Set 6 (20-30 min) - Transport & planning
- **Fri:** Test Set 7 (20-30 min) - Configuration
- Target score: 850+

#### **Week 6-7: Mastery (60 minutes)**
- **Mon:** Test Set 8 (20-30 min) - Memory & review
- **Wed:** Test Set 9 (20-30 min) - Hooks & trimming
- **Fri:** Test Set 10 & 11 (20-30 min) - Execution
- Target score: 900+

#### **Exam Week: Review**
- Retake highest-scoring test sets
- Focus on weak domains
- Target: 900+

### Domain-Focused Review

**Weak on D1 (Agentic Architecture)?**
- Review: Test Sets 5, 9, 10
- Focus: Multi-agent patterns, loops, recovery

**Weak on D2 (MCP)?**
- Review: Test Sets 4, 6, 7, 9, 11
- Focus: Primitives, transport, error handling

**Weak on D3 (Claude Code)?**
- Review: Test Sets 2, 6, 7, 8
- Focus: Configuration, hooks, commands

**Weak on D4 (API)?**
- Review: Test Sets 2, 3, 4, 5, 6, 11
- Focus: Batch, caching, tool use, JSON

**Weak on D5 (Advanced)?**
- Review: Test Sets 3, 4, 7
- Focus: Context management, stratified analysis, patterns

### Pro Tips

1. **Understand, Don't Memorize**
   - Read explanations thoroughly
   - Understand WHY answers are correct
   - Apply concepts to real scenarios

2. **Mix Test Sets**
   - Don't just repeat one set
   - Each set reinforces different topics
   - Broader knowledge = better exam prep

3. **Track Progress**
   - Write down scores from each set
   - Identify patterns in wrong answers
   - Focus study on weak areas

4. **Spaced Repetition**
   - Practice same set 2-3 days apart
   - Brain consolidates information better
   - Increases retention and recall

5. **Randomization Works**
   - Each attempt shuffles questions
   - Tests real understanding
   - Prevents memorization

---

## 🔧 Technical Details

### File Structure

```
ccaf-reviewer.html (55 KB)
├── HTML Structure
│   ├── Header section
│   ├── Tab navigation
│   └── Content containers
├── CSS Styling
│   ├── Root variables (colors)
│   ├── Layout (flexbox)
│   ├── Components (buttons, cards)
│   └── Responsive design
└── JavaScript
    ├── Data (LEARNING_PATH, QUICK_REFERENCE, BACKUP_TEST_SETS)
    ├── State management
    ├── Tab switching
    ├── Rendering functions
    ├── Event handlers
    └── Score calculation
```

### Color Scheme

**Text Colors:**
- Primary: `#000000` (Pure Black)
- Secondary: `#333333` (Dark Gray)

**Background:**
- Secondary: `#f5f5f5` (Light Gray)
- Border: `#d0d0d0` (Visible Dark Gray)

**Domain Colors:**
- Teal: `#2A9D8F` (Success/Correct)
- Blue: `#457B9D` (Selection/Highlight)
- Yellow: `#E9C46A` (Warning/Partial)
- Orange: `#E76F51` (Emphasis)
- Purple: `#9B5DE5` (Module Color)
- Red: `#E63946` (Error/Incorrect)

### Data Structure

#### LEARNING_PATH
```javascript
[
  {
    id: "module-id",
    tier: 1-3,
    course: "Course Name",
    title: "Module Title",
    examDomains: ["D1", "D2"],
    color: "#HexColor",
    summary: "...",
    topics: [
      {
        title: "Topic Title",
        keyPoints: ["point1", "point2", ...],
        scenario: {
          question: "...",
          options: ["A", "B", "C", "D"],
          correct: 0-3,
          explanation: "..."
        }
      }
    ]
  }
]
```

#### QUICK_REFERENCE
```javascript
[
  {
    term: "code-or-term",
    def: "Definition or explanation",
    cat: "Category"
  }
]
```

#### BACKUP_TEST_SETS
```javascript
[
  {
    name: "Test Set N",
    questions: [
      {
        question: "...",
        options: ["A", "B", "C", "D"],
        correct: 0-3,
        domain: "D1-D5",
        color: "#HexColor",
        explanation: "..."
      }
    ]
  }
]
```

### State Variables

| Variable | Type | Purpose |
|----------|------|---------|
| `examQuestions` | Array | Current test set questions |
| `currentExamQ` | Number | Current question index |
| `examAnswers` | Object | User responses (correct/incorrect) |
| `currentRefCategory` | String | Selected quick ref category |
| `currentTestSetIndex` | Number | Current test set (0-10) |

### JavaScript Functions

**Initialization:**
- `init()` - Initialize app, render all tabs

**Tab Management:**
- `switchTab(tabId, btn)` - Switch between tabs

**Study Guide:**
- `renderStudyGuide()` - Build entire study guide
- `renderTopic(topic, modId, topicIdx, color)` - Build single topic
- `toggleModule(modId)` - Expand/collapse module
- `toggleTopic(topicId, color)` - Expand/collapse topic
- `toggleScenario(topicId)` - Show/hide scenario
- `answerScenario(topicId, selected, correct)` - Process scenario answer

**Quick Reference:**
- `renderQuickRef()` - Build reference section
- `filterByCategory(cat)` - Filter by category
- `filterReferences()` - Search/filter terms

**Practice Exam:**
- `renderExam()` - Load test set (handles both original and backups)
- `generateNewTestSet()` - Cycle to next test set
- `renderExamQuestion()` - Display current question
- `selectExamOption(idx, correct)` - Handle option selection
- `submitExam(correct)` - Process answer submission
- `renderExamResults()` - Display final results
- `retakeExam()` - Reset and restart exam

---

## 🌐 Browser Compatibility

| Browser | Desktop | Mobile | Tablet |
|---------|---------|--------|--------|
| Chrome | ✅ | ✅ | ✅ |
| Firefox | ✅ | ✅ | ✅ |
| Safari | ✅ | ✅ | ✅ |
| Edge | ✅ | ✅ | ✅ |
| Opera | ✅ | ✅ | ✅ |

### Minimum Requirements
- **ES6 JavaScript Support**
- **CSS Flexbox Support**
- **No polyfills needed**

### Tested On
- Desktop: Windows 10/11, macOS, Linux
- Mobile: iOS 13+, Android 8+
- Tablets: iPad (5th gen+), Android tablets

---

## 🚀 Deployment

### GitHub Pages (Recommended)

1. **Clone your repository:**
   ```bash
   git clone https://github.com/yourusername/ccfa-reviewer.git
   cd ccfa-reviewer
   ```

2. **Copy the file:**
   ```bash
   cp /path/to/ccaf-reviewer.html index.html
   ```

3. **Commit and push:**
   ```bash
   git add index.html
   git commit -m "Add CCAF Exam Reviewer"
   git push origin main
   ```

4. **Configure GitHub Pages:**
   - Settings → Pages
   - Source: "Deploy from a branch"
   - Branch: `main`
   - Folder: `/ (root)`
   - Save

5. **Access your app:**
   ```
   https://yourusername.github.io/your-repo-name/
   ```

### Self-Hosted

1. **Download file**
2. **Rename to `index.html`**
3. **Place in web server root**
4. **Access via your domain**

### Local Use

1. **Download file**
2. **Double-click to open in browser**
3. **Or drag into browser window**
4. **Works completely offline**

---

## 📝 Exam Information

### About CCAF

**Claude Certified Architect – Foundations** is Anthropic's certification for professionals building with Claude.

**Passing Score:** 720/1000
**Target Score:** 900/1000

**5 Domains Tested:**
- **D1:** Agentic Architecture & Multi-Agent Systems (27%)
- **D2:** Model Context Protocol (MCP) (18%)
- **D3:** Claude Code Configuration (23%)
- **D4:** Claude API & Fundamentals (17%)
- **D5:** Advanced Patterns & Optimization (15%)

### Exam Resources

- **Official Exam Guide:** [CCAF Exam Guide PDF](https://everpath-course-content.s3-accelerate.amazonaws.com/instructor%2F8lsy243ftffjjy1cx9lm3o2bw%2Fpublic%2F1773274827%2FClaude+Certified+Architect+%E2%80%93+Foundations+Certification+Exam+Guide.pdf)
- **Anthropic Documentation:** [docs.anthropic.com](https://docs.anthropic.com)
- **Official Courses:** Available on Skilljar

### This Tool

- ✅ Covers all 5 exam domains
- ✅ Based on official course materials
- ✅ 78 exam-style practice questions
- ✅ Real implementation scenarios
- ✅ Best practices & anti-patterns
- ✅ Full explanations for every answer

---

## ❓ FAQ

### Q: Is this tool official?
**A:** This is an independent study tool based on official CCAF course materials and the exam guide. Not officially endorsed by Anthropic but created by an exam candidate.

### Q: Can I use this on mobile?
**A:** Yes! The tool is fully responsive and works on phones, tablets, and desktops.

### Q: Do I need internet to use this?
**A:** No. After loading the page, you can work offline. Everything is self-contained in one HTML file.

### Q: Can I print this?
**A:** The tool is optimized for on-screen use. Use your browser's print feature, but interactive features won't work on paper.

### Q: How many questions are there really?
**A:** 78 total unique questions:
- 28 in the Original Test Set
- 50 in 10 Backup Test Sets (5 each)

### Q: Do questions repeat?
**A:** No, all 78 questions are unique. Questions randomize each attempt within a test set.

### Q: How long should I study?
**A:** Recommended 6-7 weeks:
- Week 1: Master original test (45-60 min)
- Weeks 2-7: Cycle through backup sets (20-30 min each, 3x/week)

### Q: What score do I need to pass the real exam?
**A:** 720/1000. This tool scores on the same scale (0-1000).

### Q: Can I share this with others?
**A:** Yes! The tool is self-contained and can be shared freely.

### Q: How do I report bugs?
**A:** Test all features thoroughly. If you find issues:
1. Note what step causes the problem
2. Try in another browser
3. Check browser console (F12) for errors
4. Report with browser and OS details

### Q: Can I customize the questions?
**A:** The current version is read-only. However, you can:
- Fork the code and modify locally
- Add your own test sets by editing the HTML
- Extract questions for your own use

### Q: Is there a dark mode?
**A:** The tool uses light mode for maximum readability. Light text on dark background was found to be harder to read for study materials.

### Q: How are scores calculated?
**A:** Score = (Correct Answers / Total Questions) × 1000

Example: 18 correct out of 28 = (18/28) × 1000 = 643

### Q: What if I forget my answers?
**A:** Answers are not saved between sessions. This is intentional - it forces fresh learning rather than relying on memory of previous attempts.

---

## 📄 License

This tool is provided as-is for educational purposes.

**Disclaimer:** This is an independent study tool. Claude, Anthropic, and the CCAF certification are trademarks of Anthropic PBC. This tool is not affiliated with or endorsed by Anthropic.

---

## 🙏 Acknowledgments

- Based on official CCAF Exam Guide
- Course materials from Anthropic
- Exam structure and domains from Anthropic
- Created for CCAF exam preparation

---

## 📞 Support

For issues or questions:

1. **Check this README** - Most questions answered here
2. **Check TEST-SETS-FEATURE-GUIDE.md** - Detailed feature documentation
3. **Check DEPLOYMENT-INSTRUCTIONS.md** - Deployment help
4. **Try another browser** - Eliminates browser-specific issues
5. **Clear browser cache** - Fixes loading issues

---

## 🎯 Next Steps

1. **Download** `ccaf-reviewer.html`
2. **Open** in your web browser
3. **Start** with the Study Guide tab
4. **Practice** with all 11 test sets
5. **Track** your progress
6. **Aim** for 900+ score
7. **Pass** your CCAF exam! 🎓

---

## 🎓 Good Luck!

This tool contains everything you need for comprehensive CCAF exam preparation. With 78 practice questions covering all 5 domains, interactive study materials, and detailed explanations, you have a complete resource for achieving your certification goal.

**Target Score:** 900/1000
**Passing Score:** 720/1000

**Start studying today. Pass your CCAF exam tomorrow!** 📚✨

---

**Version:** 2.1 (Multiple Test Sets)
**Last Updated:** May 2025
**Questions:** 78 unique
**Test Sets:** 11
**Domains:** 5 (D1-D5)
