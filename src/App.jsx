import { useState } from "react";

const LEARNING_PATH = [
  {
    id: "foundation-claude", tier: 1, tierLabel: "Foundation", course: "Claude 101", courseUrl: "https://anthropic.skilljar.com/claude-101",
    title: "Understanding Claude & How It Works", examDomains: ["D4", "D5"], color: "#2A9D8F",
    summary: "What Claude is, how it processes text (tokenization), conversation basics, and core features. This is the conceptual bedrock for everything else.",
    topics: [
      { title: "How Claude Processes Text", keyPoints: ["Text is first broken into smaller chunks called tokens before any processing occurs", "Claude generates responses token-by-token, predicting the most likely next token", "Temperature controls randomness: low (0.0) = predictable/factual, high (1.0) = creative/varied", "Context window = total tokens (input + output) the model can handle in one request"],
        scenario: { question: "You're building a factual Q&A app for medical terminology. Which temperature setting should you use?", options: ["1.0 (very high) for diverse answers", "0.5 (medium) as a balanced default", "Low temperature (near 0.0) for consistent, predictable responses", "Temperature doesn't matter for factual content"], correct: 2, explanation: "Factual Q&A needs deterministic, consistent responses. Low temperature minimizes randomness so the same question produces the same reliable answer." } },
      { title: "Conversations & Context", keyPoints: ["Claude is STATELESS via the API — it does NOT remember previous messages between separate requests", "You must send the FULL conversation history in each API request to maintain context", "System prompts define Claude's role, personality, and behavior across the conversation", "Messages array alternates between 'user' and 'assistant' roles to build multi-turn conversations"],
        scenario: { question: "You ask Claude 'What is pizza?' and it answers. Then you ask 'What toppings are popular?' but Claude doesn't know you're still talking about pizza. What's the problem?", options: ["Claude is broken", "You need to send the whole conversation history with each request", "You asked too quickly", "Claude doesn't like pizza"], correct: 1, explanation: "Claude is stateless. Each API call is independent. You must include all prior messages (user + assistant) in the messages array so Claude has the full context." } },
      { title: "Core Features Overview", keyPoints: ["Extended thinking: produces BOTH a reasoning process and final answer (two parts in response)", "Citations: create a clear trail from Claude's response back to specific parts of source documents", "Prompt caching: reuse same large content across requests — 90% cost savings, min 1024 tokens", "Code execution: runs in isolated Docker container with NO network access", "PDF support: use type: 'document' with media_type: 'application/pdf' (different from images)"],
        scenario: { question: "You want Claude to analyze a PDF document. What's the main difference from sending an image?", options: ["PDFs cost more to process", "Change type to 'document' and media_type to 'application/pdf'", "You can only send text, not images in PDFs", "PDFs require special permission"], correct: 1, explanation: "PDFs use type: 'document' with media_type: 'application/pdf', while images use type: 'image'. The content type specification is the key structural difference." } }
    ]
  },
  {
    id: "foundation-api", tier: 1, tierLabel: "Foundation", course: "Building with the Claude API", courseUrl: "https://anthropic.skilljar.com/claude-with-the-anthropic-api",
    title: "API Fundamentals, Prompt Engineering & Evaluation", examDomains: ["D4", "D5"], color: "#457B9D",
    summary: "API request structure, prompt engineering techniques, structured output with tool_use, prompt evaluation workflows, and batch processing.",
    topics: [
      { title: "API Request Essentials", keyPoints: ["Four required elements: API key (x-api-key header), model name, messages array, and max_tokens", "API key MUST be stored on your server, NEVER exposed in client-side code", "Response streaming sends tokens incrementally — fixes the 'loading spinner then wall of text' problem", "Prefilled messages + stop sequences = clean JSON output with no extra text"],
        scenario: { question: "Users complain your chat app feels slow — they wait 20 seconds then all text appears at once. What fixes this?", options: ["Asking shorter questions", "Using a faster internet connection", "Enabling response streaming", "Using a different web browser"], correct: 2, explanation: "Streaming sends tokens incrementally as they're generated. Users see text appearing in real-time instead of waiting for the complete response." } },
      { title: "Prompt Engineering Techniques", keyPoints: ["Be clear and direct: 'Write a product description for running shoes.' beats vague openings", "XML tags (<reviews>, <sales_data>) separate distinct data types in prompts", "Few-shot prompting: provide sample input/output pairs for consistent formatted output", "Few-shot enables model to GENERALIZE to novel patterns, not just match pre-specified cases", "Explicit criteria > vague instructions: 'flag when behavior contradicts code' beats 'check accuracy'"],
        scenario: { question: "Your code review AI produces inconsistent output. Detailed instructions alone don't fix it. Most effective technique?", options: ["Make the prompt longer with more rules", "Provide 2-4 few-shot examples showing exact desired format", "Lower the temperature to 0", "Use XML tags to structure the prompt"], correct: 1, explanation: "Few-shot examples are the most effective for consistent formatted output when instructions alone fail. They demonstrate exact format and enable generalization." } },
      { title: "Structured Output via tool_use", keyPoints: ["tool_use with JSON schemas = MOST RELIABLE for guaranteed schema-compliant output", "Eliminates JSON syntax errors but NOT semantic errors (sums not matching, wrong fields)", "tool_choice: 'auto' = may return text; 'any' = MUST call a tool; forced = specific named tool", "Optional/nullable fields prevent fabrication when info doesn't exist in source", "Enum with 'other' + detail string for extensible categories; 'unclear' for ambiguity"],
        scenario: { question: "You need guaranteed schema-compliant JSON with no syntax errors. Most reliable approach?", options: ["Detailed system prompt asking for JSON", "tool_use with JSON schemas and tool_choice configuration", "Prefilled assistant messages starting with '{'", "Temperature 0 for deterministic output"], correct: 1, explanation: "tool_use with JSON schemas completely eliminates syntax errors. Note: can't prevent semantic errors (wrong field values)." } },
      { title: "Prompt Evaluation Workflow", keyPoints: ["Workflow: create test cases → generate responses → feed through GRADER → analyze → iterate", "Model grader = another AI model assessing quality (NOT human, NOT syntax check)", "Ask grader for strengths, weaknesses, AND reasoning — not just numerical scores", "Generate test cases using THE SAME MODEL you're testing", "Testing once and deploying is dangerous — users provide unexpected inputs that break it"],
        scenario: { question: "You're running a prompt eval. You've generated responses from Claude. Next step?", options: ["Deploy to production", "Rewrite the prompt from scratch", "Create more test questions", "Feed responses through a grader for scoring"], correct: 3, explanation: "After generating responses, the next step is grading — you need scores and feedback to know if your prompt works." } },
      { title: "Tool Use Fundamentals", keyPoints: ["Tool function: a plain function executed when Claude needs info or to perform an action", "JSON schema tells Claude what arguments your function expects and how to use it", "stop_reason: 'tool_use' = wants to call a tool; 'end_turn' = conversation complete", "Response = multi-block messages with BOTH text blocks AND tool_use blocks", "Batch tool: multiple calls simultaneously, reduces back-and-forth round trips"],
        scenario: { question: "How can you tell if Claude wants to make another tool call?", options: ["Check if response contains the word 'tool'", "Check if the response is longer than usual", "Look at stop_reason field for 'tool_use'", "Count the message blocks"], correct: 2, explanation: "stop_reason is the authoritative way to detect tool intent. 'tool_use' = execute tool; 'end_turn' = done." } },
      { title: "Batch Processing (Message Batches API)", keyPoints: ["50% cost savings, up to 24-hour window, NO guaranteed latency SLA", "Appropriate: overnight reports, weekly audits (non-blocking, latency-tolerant)", "NOT appropriate: pre-merge checks, blocking developer workflows", "Does NOT support multi-turn tool calling within a single batch request", "custom_id correlates request/response pairs; resubmit only failed docs"],
        scenario: { question: "Team runs: (1) blocking pre-merge checks and (2) overnight tech debt reports. Switch both to Batch API for 50% savings?", options: ["Batch for tech debt only; keep real-time for pre-merge", "Switch both to batch", "Keep real-time for both", "Batch with timeout fallback"], correct: 0, explanation: "Batch API: up to 24h processing, no latency SLA — unsuitable for blocking pre-merge. Perfect for overnight reports." } }
    ]
  },
  {
    id: "intermediate-mcp", tier: 2, tierLabel: "Intermediate", course: "Intro to Model Context Protocol", courseUrl: "https://anthropic.skilljar.com/introduction-to-model-context-protocol",
    title: "MCP Architecture, Primitives & Tool Design", examDomains: ["D2"], color: "#E9C46A",
    summary: "MCP architecture (client/server), three primitives (tools, resources, prompts), transport types, tool descriptions as primary selection mechanism, structured errors, and server config.",
    topics: [
      { title: "MCP Architecture & Roles", keyPoints: ["MCP = communication layer providing context and tools WITHOUT tedious integration code", "Servers contain tools, prompts, resources; Clients act as bridge to access them", "Transport-agnostic: stdio (local dev), HTTP/SSE (remote), Streamable HTTP (modern)", "Most common during development: standard input/output (stdio) on same machine", "Two components for a client: MCP Client class + Client Session"],
        scenario: { question: "Your MCP server and client need to communicate during development. Most common connection method?", options: ["Through a database", "Over the internet", "Through standard input/output on same machine", "Using email"], correct: 2, explanation: "Stdio is simplest for local dev — no network config, direct process communication. HTTP for production." } },
      { title: "Three MCP Primitives", keyPoints: ["Tools (model-controlled): functions Claude calls to perform actions with side effects", "Resources (app-controlled): read-only data sources like GET endpoints — no side effects", "Prompts (user-controlled): pre-defined reusable templates selected before inference", "Templated resources use URI parameters (docs://documents/{id}) for dynamic data", "ListToolsRequest discovers available tools from server (tools/list)"],
        scenario: { question: "Users click a button to trigger 'summarize document' workflow. Which MCP primitive?", options: ["Resources — need to fetch document data", "Functions — involves processing", "Prompts — users control when to start", "Tools — AI needs new capabilities"], correct: 2, explanation: "Prompts are USER-CONTROLLED templates. Tools are MODEL-CONTROLLED. Resources are APP-CONTROLLED read-only data." } },
      { title: "Tool Interface Design (EXAM-CRITICAL)", keyPoints: ["Tool descriptions = PRIMARY mechanism LLMs use for selection — minimal = unreliable", "Include: input formats, example queries, edge cases, boundary explanations", "Ambiguous/overlapping descriptions cause misrouting", "Too many tools (18 vs 4-5) DEGRADES selection reliability", "Split generic tools; rename to eliminate overlap"],
        scenario: { question: "get_customer ('Retrieves customer info') and lookup_order ('Retrieves order details') have minimal descriptions; agent misroutes. Best first step?", options: ["Add 5-8 few-shot examples", "Expand descriptions with input formats, examples, edge cases, boundaries", "Build a routing layer with keyword detection", "Consolidate into single lookup_entity tool"], correct: 1, explanation: "Tool descriptions are THE PRIMARY selection mechanism. Expanding them is low-effort, high-leverage — fixes the root cause directly." } },
      { title: "Structured Error Responses (MCP)", keyPoints: ["MCP isError flag communicates failures back to agent", "Return: errorCategory (transient/validation/business/permission), isRetryable, description", "Distinguish access failures (retry) from valid empty results (no matches)", "Generic 'Operation failed' PREVENTS intelligent recovery", "Subagents: local recovery for transient; propagate only unresolvable with partial results"],
        scenario: { question: "Web search subagent times out. Which approach enables intelligent coordinator recovery?", options: ["Structured error context: failure type, query, partial results, alternatives", "Auto-retry then generic 'search unavailable'", "Catch timeout, return empty results as successful", "Terminate entire workflow"], correct: 0, explanation: "Structured error context enables informed recovery decisions. Generic status hides context. Empty success suppresses errors." } },
      { title: "MCP Server Configuration", keyPoints: ["Project-level: .mcp.json (shared, VCS, env var expansion: ${GITHUB_TOKEN})", "User-level: ~/.claude.json (personal/experimental)", "All tools discovered at connection time, available simultaneously", "MCP resources expose content catalogs to reduce exploratory tool calls", "Test with MCP Inspector: mcp dev mcp_server.py"],
        scenario: { question: "You've built an MCP server. Best way to test tools before connecting to Claude?", options: ["Write test scripts for each tool", "Test manually in terminal", "Use MCP Inspector with mcp dev mcp_server.py", "Connect to Claude first"], correct: 2, explanation: "MCP Inspector is the official browser-based tool for testing MCP servers — interactive UI for listing and executing tools." } }
    ]
  },
  {
    id: "intermediate-claudecode", tier: 2, tierLabel: "Intermediate", course: "Claude Code in Action", courseUrl: "https://anthropic.skilljar.com/claude-code-in-action",
    title: "Claude Code Configuration, Hooks & CI/CD", examDomains: ["D3"], color: "#E76F51",
    summary: "CLAUDE.md hierarchy, .claude/rules/ with glob patterns, plan mode vs direct execution, hooks (PreToolUse/PostToolUse), CI/CD with -p flag, and session management.",
    topics: [
      { title: "CLAUDE.md Hierarchy (EXAM-CRITICAL)", keyPoints: ["User-level: ~/.claude/CLAUDE.md — personal, NOT shared via VCS", "Project-level: .claude/CLAUDE.md or root — shared with team", "Directory-level: subdirectory CLAUDE.md for area-specific rules", "@import references external files for modular organization", ".claude/rules/ = topic-specific files as alternative to monolithic CLAUDE.md", "/memory verifies which memory files are loaded"],
        scenario: { question: "New team member isn't getting coding conventions the rest of the team has. Where's the problem?", options: ["Conventions in ~/.claude/CLAUDE.md (user-level, NOT shared via VCS)", "Claude Code isn't installed correctly", "CLAUDE.md file is too long", "Needs different API key"], correct: 0, explanation: "User-level CLAUDE.md is personal and NOT shared via VCS. Move conventions to project-level (.claude/CLAUDE.md) for team sharing." } },
      { title: "Path-Specific Rules & Glob Patterns", keyPoints: [".claude/rules/ with YAML frontmatter paths fields using glob patterns", "Rules load ONLY when editing matching files — reduces context/tokens", "Glob patterns apply across ALL directories (paths: ['**/*.test.tsx'])", "Better than subdirectory CLAUDE.md when conventions span many directories"],
        scenario: { question: "Test files spread everywhere (Button.test.tsx beside Button.tsx). Want ALL tests to follow same conventions. Best approach?", options: [".claude/rules/ with glob patterns (paths: ['**/*.test.tsx'])", "CLAUDE.md in every test directory", "All conventions in root CLAUDE.md under 'Testing' header", "Create a testing skill"], correct: 0, explanation: "Glob-pattern rules automatically apply based on file paths regardless of directory — essential for files spread everywhere." } },
      { title: "Plan Mode vs Direct Execution", keyPoints: ["Plan mode: large-scale changes, multiple approaches, architectural decisions, multi-file", "Direct execution: simple, well-scoped (single validation check, one-file fix)", "Plan mode enables safe exploration BEFORE committing — prevents costly rework", "Explore subagent isolates verbose discovery, returns summaries", "If complexity is stated in requirements, use plan mode — don't wait for it to 'emerge'"],
        scenario: { question: "Restructuring monolith into microservices — dozens of files, arch decisions needed. Approach?", options: ["Plan mode to explore and design before changes", "Direct execution with incremental changes", "Direct execution with comprehensive instructions", "Direct execution, switch to plan mode if complexity emerges"], correct: 0, explanation: "Plan mode is for complex tasks with architectural decisions. Complexity is already stated — don't wait for it to 'emerge.'" } },
      { title: "Hooks: PreToolUse & PostToolUse", keyPoints: ["PreToolUse: BEFORE execution — can BLOCK (exit code 2), validate, escalate", "PostToolUse: AFTER execution — normalize data, transform results, validate", "Hooks = DETERMINISTIC guarantees vs prompt instructions (probabilistic)", "Use hooks when business rules require GUARANTEED compliance", "Prevent reading .env: PreToolUse matching Read + Grep tools"],
        scenario: { question: "Agent skips identity verification (get_customer) 12% of the time before processing refunds. Fix with deterministic guarantee?", options: ["Programmatic prerequisite/hook blocking refund until get_customer verified", "Enhance system prompt to say verification is mandatory", "Add few-shot examples showing correct order", "Implement routing classifier"], correct: 0, explanation: "Programmatic enforcement provides DETERMINISTIC guarantees. Prompt-based approaches have non-zero failure rate — insufficient for financial consequences." } },
      { title: "CI/CD Integration (EXAM-CRITICAL)", keyPoints: ["-p (--print) = non-interactive mode for CI/CD (PREVENTS HANGS)", "--output-format json + --json-schema = structured CI output", "CLAUDE.md provides project context to CI-invoked Claude Code", "Same session that generated code is LESS effective at reviewing it", "Include prior findings to avoid duplicate comments on re-runs"],
        scenario: { question: "Pipeline runs `claude 'Analyze this PR'` but hangs waiting for interactive input. Fix?", options: ["Use -p flag: claude -p 'Analyze this PR'", "Set CLAUDE_HEADLESS=true", "Redirect stdin from /dev/null", "Add --batch flag"], correct: 0, explanation: "-p (--print) is the documented way to run non-interactively. Other options reference non-existent features (B, D) or workarounds (C)." } },
      { title: "Session Management", keyPoints: ["--resume <name>: continue named prior conversation", "fork_session: independent branches from shared baseline", "Fresh start with injected summaries > resuming with stale tool results", "/compact: reduce context during extended sessions"],
        scenario: { question: "Explored codebase yesterday, made significant code changes overnight. Continue analysis today?", options: ["Resume session with --resume", "New session with structured summary — prior tool results are stale", "fork_session to branch from yesterday", "Just re-read all files"], correct: 1, explanation: "When prior tool results are stale (files changed), fresh session with injected summaries is more reliable." } }
    ]
  },
  {
    id: "advanced-skills", tier: 3, tierLabel: "Advanced", course: "Introduction to Agent Skills", courseUrl: "https://anthropic.skilljar.com/introduction-to-agent-skills",
    title: "Agent Skills, Commands & Modular Config", examDomains: ["D3", "D1"], color: "#9B5DE5",
    summary: "Skills (.claude/skills/ with SKILL.md frontmatter), custom slash commands, context: fork, allowed-tools, and the distinction from CLAUDE.md, hooks, and subagents.",
    topics: [
      { title: "Custom Slash Commands", keyPoints: ["Project-scoped: .claude/commands/ — shared via VCS, available to team", "User-scoped: ~/.claude/commands/ — personal, not shared", "$ARGUMENTS placeholder replaced with text typed after command name", "Example: 'Review $ARGUMENTS' → /review penguin.py → 'Review penguin.py'"],
        scenario: { question: "You want a /review command available to every developer when they clone the repo. Where?", options: [".claude/commands/ in the project repository", "~/.claude/commands/ on each developer's machine", "CLAUDE.md at the project root", ".claude/config.json with commands array"], correct: 0, explanation: "Project-scoped commands in .claude/commands/ are version-controlled and auto-available. ~/.../commands/ is personal." } },
      { title: "Skills Configuration (SKILL.md)", keyPoints: ["Skills: .claude/skills/ with SKILL.md frontmatter — on-demand invocation", "context: fork — isolated sub-agent, prevents output from polluting main conversation", "allowed-tools — restricts tool access during execution", "argument-hint — prompts for parameters when invoked without args", "Skills = on-demand; CLAUDE.md = always-loaded universal standards"],
        scenario: { question: "Your codebase analysis skill produces verbose output cluttering the main conversation. Fix?", options: ["allowed-tools to restrict to read-only", "context: fork to run in isolated sub-agent", "argument-hint for analysis scope", "Separate CLAUDE.md with analysis instructions"], correct: 1, explanation: "context: fork runs the skill in isolation, preventing verbose output from polluting the main conversation." } }
    ]
  },
  {
    id: "advanced-agents", tier: 3, tierLabel: "Advanced", course: "Building with the Claude API", courseUrl: "https://anthropic.skilljar.com/claude-with-the-anthropic-api",
    title: "Agentic Architecture, Multi-Agent & Workflows", examDomains: ["D1", "D5"], color: "#E63946",
    summary: "Agentic loops, multi-agent orchestration (hub-and-spoke), workflow patterns, escalation, context management, and reliability — the LARGEST exam domain (27%).",
    topics: [
      { title: "Agentic Loop (EXAM-CRITICAL — 27%)", keyPoints: ["Loop: check stop_reason → 'tool_use' = continue; 'end_turn' = terminate", "Tool results appended to conversation for next-step reasoning", "Model-driven decisions vs pre-configured sequences", "ANTI-PATTERNS: parsing NL for loop end, arbitrary caps, text content as completion"],
        scenario: { question: "What is a tool function in Claude's tool use system?", options: ["Special API endpoint from Anthropic", "Config file for Claude's behavior", "Database query for preferences", "Plain function executed when Claude needs info or to perform an action"], correct: 3, explanation: "A tool function is executable code invoked by Claude — performs actions, fetches data, returns results." } },
      { title: "Multi-Agent (Hub-and-Spoke)", keyPoints: ["Coordinator manages ALL inter-subagent communication", "Subagents have ISOLATED context — NO automatic inheritance", "Task tool spawns subagents; allowedTools must include 'Task'", "Context EXPLICITLY provided in prompt — no sharing", "Parallel subagents: multiple Task calls in SINGLE coordinator response", "Risk: narrow decomposition → incomplete coverage"],
        scenario: { question: "Research system covers only 'visual arts' for 'AI in creative industries' — missing music, writing, film. Each subagent works correctly. Root cause?", options: ["Synthesis agent lacks gap detection", "Coordinator's decomposition too narrow", "Web search queries too narrow", "Doc analysis filters non-visual"], correct: 1, explanation: "Coordinator decomposed topic into only visual arts subtasks. Subagents worked correctly within assigned scope — the problem is WHAT was assigned." } },
      { title: "Workflow Patterns", keyPoints: ["Chaining: sequential focused steps — fixes 'Claude ignores rules' in long prompts", "Routing: direct to specialized pipelines by content type", "Parallelization: evaluate independent options simultaneously, then compare", "Evaluator-Optimizer: generate → evaluate → improve → loop", "Workflows (predetermined) = reliable, testable; Agents (autonomous) = flexible", "Choose workflows when you can picture the exact flow"],
        scenario: { question: "Claude keeps ignoring rules in a long prompt with many requirements. What helps?", options: ["Make prompt longer", "Run everything in parallel", "Routing workflow to categorize", "Chain into focused sequential steps"], correct: 3, explanation: "Chaining reduces cognitive load per step — each handles fewer rules for better compliance." } },
      { title: "Context Management (EXAM-CRITICAL)", keyPoints: ["Progressive summarization risk: loses numbers, dates, expectations in vague summaries", "'Lost in the middle': models process beginning/end well, may omit middle", "Trim tool outputs to relevant fields BEFORE accumulation (40→5 fields)", "Persistent 'case facts' block OUTSIDE summarized history", "Scratchpad files persist findings across context boundaries", "Aggregate accuracy (97%) may MASK poor performance on specific types"],
        scenario: { question: "System shows 97% accuracy but users report errors on insurance claims. What's happening?", options: ["Model needs more training", "Aggregate accuracy masks poor performance on specific types — need stratified analysis", "97% figure is wrong", "Insurance docs too complex"], correct: 1, explanation: "Aggregate accuracy can MASK type-specific problems. Stratified analysis by document type reveals actual weaknesses." } },
      { title: "Escalation & Human-in-the-Loop", keyPoints: ["Triggers: customer requests human, policy gaps, inability to progress", "Honor explicit human requests IMMEDIATELY — don't investigate first", "Sentiment/confidence scores are UNRELIABLE proxies", "Multiple matches → ask for identifiers, DON'T use heuristics", "Structured handoff: customer ID, root cause, amount, recommendation"],
        scenario: { question: "Customer says 'I want a human.' Issue is straightforward. What should the agent do?", options: ["Investigate first, offer to resolve", "Escalate immediately", "Ask why they want a human", "Check confidence, escalate if low"], correct: 1, explanation: "Honor explicit requests IMMEDIATELY. Investigation first ignores their stated preference." } },
      { title: "Multi-Pass Review", keyPoints: ["Self-review limitation: model retains reasoning, less likely to question own decisions", "Independent instance (no prior context) catches more subtle issues", "Split: per-file local passes + cross-file integration pass", "Avoids attention dilution, contradictions, missed bugs"],
        scenario: { question: "Single-pass review of 14 files: inconsistent depth, contradictory findings, missed bugs. Restructure?", options: ["Per-file local passes + cross-file integration pass", "Require devs to split PRs into 3-4 files", "Larger context window model", "Three passes, flag issues in 2+ runs"], correct: 0, explanation: "Per-file ensures consistent depth; integration catches cross-file issues. Larger context doesn't fix attention quality." } }
    ]
  }
];

const QUICK_REFERENCE = [
  { term: "stop_reason: \"tool_use\"", def: "Continue agentic loop — execute tool", cat: "API" },
  { term: "stop_reason: \"end_turn\"", def: "Terminate loop — present response", cat: "API" },
  { term: "tool_choice: \"auto\"", def: "May return text OR call tool", cat: "API" },
  { term: "tool_choice: \"any\"", def: "MUST call a tool", cat: "API" },
  { term: "tool_choice: forced", def: "MUST call specific named tool", cat: "API" },
  { term: "Message Batches API", def: "50% savings, ≤24h, no SLA, no multi-turn", cat: "API" },
  { term: "custom_id", def: "Correlate batch req/res; resubmit failures", cat: "API" },
  { term: "-p / --print", def: "Non-interactive CI/CD mode (PREVENTS HANGS)", cat: "CLI" },
  { term: "--output-format json", def: "Structured CLI output for CI", cat: "CLI" },
  { term: "--resume <name>", def: "Continue named session", cat: "CLI" },
  { term: "/compact", def: "Reduce context in long sessions", cat: "CLI" },
  { term: "/memory", def: "Check loaded memory files", cat: "CLI" },
  { term: ".claude/CLAUDE.md", def: "Project config — shared via VCS", cat: "Config" },
  { term: "~/.claude/CLAUDE.md", def: "User config — personal, NOT shared", cat: "Config" },
  { term: ".claude/rules/", def: "Glob-pattern rules (YAML frontmatter)", cat: "Config" },
  { term: "@import", def: "Modular file referencing in CLAUDE.md", cat: "Config" },
  { term: ".claude/commands/", def: "Project slash commands (shared)", cat: "Config" },
  { term: "~/.claude/commands/", def: "User slash commands (personal)", cat: "Config" },
  { term: "context: fork", def: "Skill runs in isolated sub-agent", cat: "Skills" },
  { term: "allowed-tools", def: "Restrict tools during skill execution", cat: "Skills" },
  { term: "argument-hint", def: "Prompt for params if invoked bare", cat: "Skills" },
  { term: ".mcp.json", def: "Project MCP config (VCS, env vars)", cat: "MCP" },
  { term: "~/.claude.json", def: "User MCP config (personal)", cat: "MCP" },
  { term: "isError + errorCategory", def: "Structured MCP error (transient/validation/business/permission)", cat: "MCP" },
  { term: "PostToolUse hook", def: "Normalize results AFTER tool runs", cat: "Hooks" },
  { term: "PreToolUse hook", def: "Block/validate BEFORE tool runs (exit 2=deny)", cat: "Hooks" },
  { term: "fork_session", def: "Branch from shared baseline", cat: "Session" },
  { term: "Task tool", def: "Spawn subagents (needs allowedTools:'Task')", cat: "SDK" },
];

const TIER_META = { 1: { label: "Foundation", icon: "🏗️", desc: "Core concepts — start here", bg: "#2A9D8F" }, 2: { label: "Intermediate", icon: "⚙️", desc: "Integration & config", bg: "#E9C46A" }, 3: { label: "Advanced", icon: "🚀", desc: "Architecture & orchestration", bg: "#E63946" } };

function StudyGuide() {
  const [expMod, setExpMod] = useState(null);
  const [expTop, setExpTop] = useState(null);
  const [showSc, setShowSc] = useState(null);
  const [scAns, setScAns] = useState(null);

  return (
    <div>{[1,2,3].map(tier => (
      <div key={tier} style={{ marginBottom: 22 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8, padding: "6px 0" }}>
          <span style={{ fontSize: 16 }}>{TIER_META[tier].icon}</span>
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, color: TIER_META[tier].bg, textTransform: "uppercase", letterSpacing: "1px" }}>Tier {tier}: {TIER_META[tier].label}</div>
            <div style={{ fontSize: 10, color: "var(--text-secondary)" }}>{TIER_META[tier].desc}</div>
          </div>
        </div>
        {LEARNING_PATH.filter(m => m.tier === tier).map(mod => (
          <div key={mod.id} style={{ marginBottom: 6, borderRadius: 11, border: expMod === mod.id ? `2px solid ${mod.color}` : "1px solid var(--border-color)", overflow: "hidden" }}>
            <button onClick={() => { setExpMod(expMod === mod.id ? null : mod.id); setExpTop(null); setShowSc(null); setScAns(null); }}
              style={{ width: "100%", padding: "12px 14px", background: expMod === mod.id ? `${mod.color}0D` : "var(--bg-secondary)", border: "none", cursor: "pointer", textAlign: "left" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 6 }}>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 13, fontWeight: 700, color: "var(--text-primary)", lineHeight: 1.4, marginBottom: 3 }}>{mod.title}</div>
                  <div style={{ fontSize: 10, color: mod.color, fontWeight: 600 }}>{mod.course}</div>
                </div>
                <div style={{ display: "flex", gap: 3, flexShrink: 0, flexWrap: "wrap" }}>
                  {mod.examDomains.map(d => <span key={d} style={{ background: `${mod.color}22`, color: mod.color, padding: "2px 6px", borderRadius: 5, fontSize: 9, fontWeight: 700, fontFamily: "monospace" }}>{d}</span>)}
                </div>
              </div>
            </button>
            {expMod === mod.id && (
              <div style={{ padding: "2px 10px 10px" }}>
                <p style={{ fontSize: 11, color: "var(--text-secondary)", lineHeight: 1.6, margin: "0 0 8px 2px" }}>{mod.summary}</p>
                {mod.topics.map((topic, ti) => {
                  const tk = `${mod.id}-${ti}`;
                  const isE = expTop === tk;
                  return (
                    <div key={ti} style={{ marginBottom: 1 }}>
                      <button onClick={() => { setExpTop(isE ? null : tk); setShowSc(null); setScAns(null); }}
                        style={{ width: "100%", padding: "8px 10px", background: isE ? `${mod.color}08` : "transparent", border: "none", borderRadius: 7, cursor: "pointer", display: "flex", justifyContent: "space-between", textAlign: "left" }}>
                        <span style={{ fontSize: 12, fontWeight: 500, color: "var(--text-primary)" }}>{topic.title}</span>
                        <span style={{ fontSize: 11, color: "var(--text-secondary)", flexShrink: 0 }}>{isE ? "−" : "+"}</span>
                      </button>
                      {isE && (
                        <div style={{ padding: "2px 10px 8px" }}>
                          {topic.keyPoints.map((pt, pi) => (
                            <div key={pi} style={{ display: "flex", gap: 6, marginBottom: 5, fontSize: 11, lineHeight: 1.6, color: "var(--text-secondary)" }}>
                              <span style={{ color: mod.color, flexShrink: 0 }}>▸</span><span>{pt}</span>
                            </div>
                          ))}
                          {topic.scenario && (
                            <div style={{ marginTop: 8 }}>
                              <button onClick={() => { setShowSc(showSc === tk ? null : tk); setScAns(null); }}
                                style={{ fontSize: 10, fontWeight: 700, color: mod.color, background: `${mod.color}11`, border: `1px solid ${mod.color}33`, borderRadius: 7, padding: "5px 10px", cursor: "pointer", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                                {showSc === tk ? "Hide" : "▶ Try"} Scenario
                              </button>
                              {showSc === tk && (
                                <div style={{ marginTop: 8, background: "var(--bg-secondary)", border: "1px solid var(--border-color)", borderRadius: 9, padding: 12 }}>
                                  <p style={{ fontSize: 12, fontWeight: 600, lineHeight: 1.6, color: "var(--text-primary)", margin: "0 0 8px" }}>{topic.scenario.question}</p>
                                  {topic.scenario.options.map((o, oi) => {
                                    const isC = oi === topic.scenario.correct, isS = scAns === oi, sr = scAns !== null;
                                    let bg = "transparent", bc = "var(--border-color)", tc = "var(--text-primary)";
                                    if (sr && isC) { bg = "#2A9D8F12"; bc = "#2A9D8F"; tc = "#2A9D8F"; }
                                    else if (sr && isS) { bg = "#E6394612"; bc = "#E63946"; tc = "#E63946"; }
                                    return (
                                      <button key={oi} onClick={() => { if (!sr) setScAns(oi); }}
                                        style={{ width: "100%", padding: "7px 9px", marginBottom: 4, borderRadius: 7, border: `1.5px solid ${bc}`, background: bg, cursor: sr ? "default" : "pointer", textAlign: "left", fontSize: 11, lineHeight: 1.5, color: tc, display: "flex", gap: 7 }}>
                                        <span style={{ fontWeight: 700, fontSize: 10, flexShrink: 0, width: 18, height: 18, borderRadius: 4, display: "flex", alignItems: "center", justifyContent: "center", background: sr && isC ? "#2A9D8F" : sr && isS ? "#E63946" : "var(--border-color)", color: sr && (isC || isS) ? "#fff" : "var(--text-secondary)" }}>{String.fromCharCode(65 + oi)}</span>
                                        <span>{o}</span>
                                      </button>);
                                  })}
                                  {scAns !== null && (
                                    <div style={{ marginTop: 6, padding: "7px 9px", background: "#2A9D8F0A", border: "1px solid #2A9D8F33", borderRadius: 7 }}>
                                      <div style={{ fontSize: 10, fontWeight: 700, color: scAns === topic.scenario.correct ? "#2A9D8F" : "#E63946", marginBottom: 3 }}>{scAns === topic.scenario.correct ? "✓ Correct" : "✗ Incorrect"}</div>
                                      <p style={{ fontSize: 11, lineHeight: 1.6, color: "var(--text-secondary)", margin: 0 }}>{topic.scenario.explanation}</p>
                                    </div>
                                  )}
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      )}
                    </div>);
                })}
              </div>
            )}
          </div>
        ))}
      </div>
    ))}</div>
  );
}

function QuickReference() {
  const [f, setF] = useState(""); const [c, setC] = useState("All");
  const cats = ["All", ...new Set(QUICK_REFERENCE.map(r => r.cat))];
  const filtered = QUICK_REFERENCE.filter(r => (c === "All" || r.cat === c) && (r.term.toLowerCase().includes(f.toLowerCase()) || r.def.toLowerCase().includes(f.toLowerCase())));
  return (
    <div>
      <input type="text" placeholder="Search terms..." value={f} onChange={e => setF(e.target.value)}
        style={{ width: "100%", padding: "9px 12px", borderRadius: 9, border: "1px solid var(--border-color)", background: "var(--bg-secondary)", color: "var(--text-primary)", fontSize: 12, marginBottom: 8, boxSizing: "border-box", outline: "none" }} />
      <div style={{ display: "flex", gap: 3, flexWrap: "wrap", marginBottom: 12 }}>
        {cats.map(ct => <button key={ct} onClick={() => setC(ct)} style={{ padding: "3px 9px", borderRadius: 16, border: "none", fontSize: 10, fontWeight: 600, cursor: "pointer", background: c === ct ? "#2A9D8F" : "var(--bg-secondary)", color: c === ct ? "#fff" : "var(--text-secondary)" }}>{ct}</button>)}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
        {filtered.map((r, i) => (
          <div key={i} style={{ padding: "8px 10px", borderRadius: 9, background: "var(--bg-secondary)", border: "1px solid var(--border-color)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", gap: 6 }}>
              <code style={{ fontSize: 10, fontWeight: 600, color: "#2A9D8F", fontFamily: "monospace", wordBreak: "break-all" }}>{r.term}</code>
              <span style={{ fontSize: 8, color: "var(--text-secondary)", background: "var(--border-color)", padding: "1px 5px", borderRadius: 3, fontWeight: 600, flexShrink: 0 }}>{r.cat}</span>
            </div>
            <div style={{ fontSize: 10, color: "var(--text-secondary)", marginTop: 2, lineHeight: 1.5 }}>{r.def}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function PracticeExam() {
  const all = LEARNING_PATH.flatMap(m => m.topics.filter(t => t.scenario).map(t => ({ ...t.scenario, domain: m.examDomains[0], color: m.color })));
  const [sh] = useState(() => { const a = [...all]; for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; });
  const [cur, setCur] = useState(0); const [sel, setSel] = useState(null); const [show, setShow] = useState(false); const [ans, setAns] = useState({}); const [done, setDone] = useState(false);
  const q = sh[cur]; const cc = Object.values(ans).filter(Boolean).length;

  if (done) {
    const score = Math.round((cc / sh.length) * 1000);
    return (
      <div style={{ textAlign: "center", padding: "20px 0" }}>
        <div style={{ fontSize: 52, fontWeight: 800, color: score >= 900 ? "#2A9D8F" : score >= 720 ? "#E9C46A" : "#E63946", fontFamily: "monospace" }}>{score}</div>
        <div style={{ fontSize: 11, color: "var(--text-secondary)" }}>out of 1000 · {cc}/{sh.length} correct</div>
        <div style={{ fontSize: 14, fontWeight: 700, color: score >= 900 ? "#2A9D8F" : score >= 720 ? "#E9C46A" : "#E63946", margin: "8px 0 20px" }}>
          {score >= 900 ? "🎯 TARGET MET" : score >= 720 ? "✅ PASSED" : "❌ BELOW PASSING"}
        </div>
        <button onClick={() => { setCur(0); setSel(null); setShow(false); setAns({}); setDone(false); }}
          style={{ padding: "10px 28px", borderRadius: 9, border: "none", background: "#2A9D8F", color: "#fff", fontWeight: 600, fontSize: 13, cursor: "pointer" }}>Retake</button>
      </div>
    );
  }
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
        <span style={{ background: `${q.color}22`, color: q.color, padding: "2px 8px", borderRadius: 16, fontSize: 10, fontWeight: 600 }}>{q.domain}</span>
        <span style={{ fontSize: 10, color: "var(--text-secondary)", fontFamily: "monospace" }}>{cur + 1}/{sh.length}</span>
      </div>
      <div style={{ width: "100%", height: 3, background: "var(--border-color)", borderRadius: 2, marginBottom: 14, overflow: "hidden" }}>
        <div style={{ width: `${((cur + 1) / sh.length) * 100}%`, height: "100%", background: "#2A9D8F", transition: "width 0.3s" }} />
      </div>
      <p style={{ fontSize: 13, lineHeight: 1.7, fontWeight: 500, marginBottom: 14, color: "var(--text-primary)" }}>{q.question}</p>
      {q.options.map((o, i) => {
        let bg = "var(--bg-secondary)", bc = "var(--border-color)", tc = "var(--text-primary)";
        if (show && i === q.correct) { bg = "#2A9D8F12"; bc = "#2A9D8F"; tc = "#2A9D8F"; }
        else if (show && i === sel) { bg = "#E6394612"; bc = "#E63946"; tc = "#E63946"; }
        else if (!show && sel === i) { bc = "#457B9D"; bg = "#457B9D0D"; }
        return (
          <button key={i} onClick={() => { if (!show) setSel(i); }}
            style={{ width: "100%", padding: "9px 11px", marginBottom: 5, borderRadius: 8, border: `1.5px solid ${bc}`, background: bg, cursor: show ? "default" : "pointer", textAlign: "left", fontSize: 12, lineHeight: 1.5, color: tc, display: "flex", gap: 8 }}>
            <span style={{ fontWeight: 700, fontSize: 10, flexShrink: 0, width: 19, height: 19, borderRadius: 5, display: "flex", alignItems: "center", justifyContent: "center", background: show && i === q.correct ? "#2A9D8F" : show && i === sel ? "#E63946" : sel === i ? "#457B9D" : "var(--border-color)", color: (show && (i === q.correct || i === sel)) || sel === i ? "#fff" : "var(--text-secondary)" }}>{String.fromCharCode(65 + i)}</span>
            <span>{o}</span>
          </button>);
      })}
      {show && (
        <div style={{ background: "#2A9D8F0A", border: "1px solid #2A9D8F33", borderRadius: 9, padding: 12, margin: "8px 0 12px" }}>
          <div style={{ fontSize: 10, fontWeight: 700, color: sel === q.correct ? "#2A9D8F" : "#E63946", marginBottom: 3 }}>{sel === q.correct ? "✓ Correct" : "✗ Incorrect"}</div>
          <p style={{ fontSize: 11, lineHeight: 1.6, color: "var(--text-secondary)", margin: 0 }}>{q.explanation}</p>
        </div>
      )}
      {!show ? (
        <button onClick={() => { if (sel === null) return; setAns(p => ({ ...p, [cur]: sel === q.correct })); setShow(true); }}
          disabled={sel === null}
          style={{ width: "100%", padding: "10px", borderRadius: 9, border: "none", background: sel !== null ? "#2A9D8F" : "var(--border-color)", color: sel !== null ? "#fff" : "var(--text-secondary)", fontWeight: 600, fontSize: 13, cursor: sel !== null ? "pointer" : "default", marginTop: 4 }}>Submit</button>
      ) : (
        <button onClick={() => { if (cur < sh.length - 1) { setCur(cur + 1); setSel(null); setShow(false); } else setDone(true); }}
          style={{ width: "100%", padding: "10px", borderRadius: 9, border: "none", background: "#457B9D", color: "#fff", fontWeight: 600, fontSize: 13, cursor: "pointer", marginTop: 4 }}>
          {cur < sh.length - 1 ? "Next →" : "Results"}
        </button>
      )}
    </div>
  );
}

export default function App() {
  const [view, setView] = useState("guide");
  const tabs = [{ id: "guide", label: "Study Guide", icon: "📖" }, { id: "ref", label: "Quick Ref", icon: "⚡" }, { id: "exam", label: "Practice", icon: "✍️" }];
  return (
    <div style={{ fontFamily: "'DM Sans', -apple-system, sans-serif", maxWidth: 680, margin: "0 auto", minHeight: "100vh", "--text-primary": "#1a1a2e", "--text-secondary": "#555570", "--bg-secondary": "#f8f8fc", "--border-color": "#e2e2ee" }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700;9..40,800&family=JetBrains+Mono:wght@400;600;700&display=swap');@media(prefers-color-scheme:dark){:root{--text-primary:#e8e8f0!important;--text-secondary:#9999b0!important;--bg-secondary:#1e1e2e!important;--border-color:#2e2e42!important}}`}</style>
      <div style={{ padding: "22px 18px 6px", textAlign: "center", borderBottom: "1px solid var(--border-color)" }}>
        <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: "#2A9D8F", marginBottom: 3 }}>CCAF Exam Reviewer v2</div>
        <h1 style={{ fontSize: 19, fontWeight: 800, margin: "0 0 2px", color: "var(--text-primary)" }}>Claude Certified Architect — Foundations</h1>
        <p style={{ fontSize: 10, color: "var(--text-secondary)", margin: "0 0 12px" }}>Pass: 720 · Target: 900 · 5 Domains · Scenario-Based · Course-Aligned Learning Path</p>
        <div style={{ display: "flex", gap: 3, background: "var(--bg-secondary)", borderRadius: 10, padding: 3 }}>
          {tabs.map(t => <button key={t.id} onClick={() => setView(t.id)} style={{ flex: 1, padding: "6px 3px", borderRadius: 8, border: "none", background: view === t.id ? "#2A9D8F" : "transparent", color: view === t.id ? "#fff" : "var(--text-secondary)", fontWeight: view === t.id ? 700 : 500, fontSize: 11, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 3 }}><span>{t.icon}</span> {t.label}</button>)}
        </div>
      </div>
      <div style={{ padding: "14px 12px 36px" }}>
        {view === "guide" && <StudyGuide />}
        {view === "ref" && <QuickReference />}
        {view === "exam" && <PracticeExam />}
      </div>
    </div>
  );
}
