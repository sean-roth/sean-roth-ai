# Sean Roth - Full Context

This document is the source of truth for the AI assistant on seanroth.ai.
It gets compiled into the system prompt.

---

## Who Sean Is

Sean Roth is an AI engineer pivoting to Sales Engineering, currently based in Colorado and planning to relocate to Chicago. He builds practical AI applications and explains them clearly — tools that ship and solve real problems, not research projects or demos.

His path is non-linear: MA in Creative Writing from Western Colorado University, BA in Communication from UCCS, 8,500+ live teaching sessions with ESL students and professionals (since 2011, including 3 years in Korea), IBM AI Developer certification, and currently building mathematical foundations through Math Academy.

This background gives him an unusual combination: hands-on technical capability plus 8,500+ hours of practice explaining complex ideas to people in real-time. Different content than technical demos, same skills.

---

## Two Ways Sean Can Help You

### If You're Hiring (Sales Engineer / Solutions Engineer)
Sean is looking for SE roles where technical depth meets enterprise sales. He's built AI systems hands-on and wants to learn the sales motion from an established team. He can go deep on embeddings, RAG, model deployment, and agent architectures — then explain it clearly to a room that's never heard those words.

### If You Need AI Training (SOPs Nobody Reads)
Sean helps small-to-mid businesses adopt AI through practical training. He converts static SOPs into engaging, AI-powered training materials. What traditionally takes weeks, he does in days. If your team has documentation nobody reads, he can fix that.

---

## Current Projects

### VFX Buddy (Archived)
**What it is**: AI video segmentation tool built on Meta's SAM 3
**Stack**: Laravel/PHP, React, SAM 3, RunPod, Stripe
**Status**: Archived — wound down after market validation failure

**The real story**: Built a full SaaS in 6 weeks with serverless GPU workers on RunPod, Stripe payments, and ran a cold outreach campaign to 28 wedding videographer leads. Zero responses. Market research revealed the target audience doesn't do rotoscoping — their pain points are culling, color grading, and audio mixing. The actual rotoscoping market was saturated with well-funded competition (Runway ML, Mocha Pro) and no moat opportunity.

Made the data-driven decision to wind down after 2 weeks of zero response rather than pivot into a losing position.

**Validation**: Technical approach was independently validated when KAIST/Adobe Research published VideoMaMa (January 2026) solving the same problem — mask-guided video matting using SAM. The tech was right. The market was wrong.

**What it demonstrates**: Full-stack AI deployment, go-to-market execution, business judgment, knowing when to walk away.

---

### Alexandria
**What it is**: Personal knowledge infrastructure with semantic search
**Stack**: PostgreSQL 16, pgvector, Ollama (nomic-embed-text), Python, Syncthing
**Status**: Active, 17+ books ingested
**Repo**: github.com/sean-roth/alexandria-core

**The real story**: A system where knowledge compounds over time. PostgreSQL with pgvector stores embeddings, Ollama generates them locally. Built using a multi-agent workflow: Designer Claude writes specs, Engineer Claude implements on the Linux server via SSH, every decision documented.

Discovered nomic-embed-text's effective 512-token limit through systematic debugging when search quality degraded — the docs claimed 8192. The model silently truncates content beyond 512 tokens due to BERT's positional embedding architecture. Documented the investigation process, including wrong approaches (tried tiktoken, which is the wrong tokenizer).

Runs on a home Ubuntu server (i7, 32GB RAM, 17TB storage), hardlined to laptop via SSH. Claude Code executes on the server while Sean coordinates from desktop — fully local, no API calls for embeddings.

**What it demonstrates**: Vector database architecture, embeddings pipelines, multi-agent development workflow, debugging docs-vs-reality discrepancies, systematic problem-solving.

---

### Clara
**What it is**: AI orchestration system / personal assistant
**Stack**: Python, Ollama, Anthropic API, Gemini, MCP, SQLite, Hume AI
**Status**: Active development, daily use
**Repo**: github.com/sean-roth/clara-ai

**The real story**: Clara is Sean's AI orchestration system. It routes queries between local models (Ollama) and cloud APIs (Claude, Gemini) based on complexity. It maintains memory across conversations with importance scoring. It integrates tools via MCP protocol (web search, filesystem, databases). Voice interface via Hume AI TTS.

**What it demonstrates**: Multi-model orchestration, agent architecture, MCP protocol expertise, system design thinking.

---

### B2B Sales Agent
**What it is**: Automated prospect research and outreach pipeline
**Stack**: Claude Code, Apollo MCP, Firecrawl, Gmail API
**Status**: Running, actively used for SOPs Nobody Reads outreach

**The real story**: Finding and researching prospects manually doesn't scale. This agent searches Apollo for leads matching an ICP, enriches them with web research via Firecrawl, generates personalized cold emails, and creates Gmail drafts for review.

**What it demonstrates**: MCP tool development, practical automation, understanding B2B workflows, pipeline management.

---

### AI Adoption Training
**What it is**: Course helping small businesses actually use AI
**Focus**: Mindset and frameworks, not just tools
**Status**: Drafting

**The real story**: Most AI training focuses on "here's how to use ChatGPT." Sean's course focuses on the harder problem: how do you think about AI integration? How do you identify where it helps vs. where it doesn't? How do you build workflows that actually stick?

**What it demonstrates**: Can translate technical concepts for non-technical audiences, understands organizational adoption challenges.

---

### SOPs Nobody Reads (Consultancy)
**What it is**: Consultancy converting company documentation into AI-powered training
**Website**: SOPsNobodyReads.com
**Status**: Active, taking clients

**The real story**: Companies have SOPs that nobody reads. Sean takes those documents and transforms them into engaging, interactive training materials using AI-augmented workflows. SCORM-compliant for LMS integration. Targeting manufacturing and operations teams (50-500 employees) with compliance requirements.

**What it demonstrates**: Real client work, practical AI application, understanding business processes, training development.

---

## Technical Skills

### Strong
- **Agent Systems**: MCP protocol, tool use, orchestration, multi-model routing
- **LLMs**: Prompt engineering, RAG patterns, context management
- **Embeddings**: Vector databases (pgvector), chunking strategies, semantic search
- **Full-Stack**: Python, JavaScript/TypeScript, React, Laravel, Flask, FastAPI
- **APIs**: REST design, OAuth, webhook handling, Stripe integration

### Growing
- **Computer Vision**: SAM, image segmentation, video processing
- **MLOps**: Model deployment, monitoring (learning)
- **Cloud Infrastructure**: AWS, Azure basics (expanding)
- **Local Inference**: Ollama, edge deployment considerations

### Honest Gaps
- **Enterprise ML at Scale**: Haven't operated ML systems serving millions
- **Team Leadership**: Haven't managed engineering teams
- **Mobile Development**: Web-focused
- **Enterprise Sales**: Learning — that's why he wants an SE role with an established team

---

## Background That Matters

### 8,500+ Live Teaching Sessions (2011 - Present)
This isn't filler. Sean has taught English to students and professionals across Asia, Europe, and online for over a decade. That means:
- Deep practice explaining complex ideas simply
- Real-time reading of the room — when someone's lost, when they're tracking
- Adjusting on the fly based on comprehension
- Patience with the gap between expert knowledge and beginner understanding
- Comfort presenting live across time zones and cultures

**For SE roles**: This is demo experience. Different content, same skills.

### Non-Linear Path
Screenwriting/Creative Writing MA → Communication BA → ESL teaching → AI development looks scattered on a resume. The throughline: communication, understanding users, building things that help people learn and work better.

### Hardware Understanding
Sean does his own hardware repair and builds his own systems. He understands technology from metal to LLM — not just the software abstractions.

---

## What Sean Is Looking For

### Sales Engineer / Solutions Engineer Roles
- AI/ML company with technical product requiring demos
- Established SE team (not solo SE) — wants to learn from experienced people
- Remote-first or Chicago-based
- $100k+ base, clear commission structure
- Health insurance (non-negotiable)

### Why Sales Engineering
Sean spent the last year building AI products. The tech works. What he learned: the hard part isn't building — it's selling. He built VFX Buddy for the wrong market. Sales is the skill gap, and he wants to learn it while bringing technical credibility most SE candidates don't have.

### Location
Currently in Colorado. Planning to relocate to Chicago spring/summer 2026. Looking for remote roles with Chicago-based companies, or willing to relocate for the right opportunity.

---

## What Sean Brings

1. **Technical depth** — Built AI systems hands-on: embeddings pipelines, computer vision, agent orchestration
2. **Communication skills** — 8,500+ hours of live instruction, can explain anything to anyone
3. **Shipped products** — Not just projects, actual products with real lessons learned
4. **Business judgment** — Knows when to build and when to walk away (VFX Buddy)
5. **Honesty** — Will tell you what he doesn't know, which makes the things he does know credible
6. **Coachable** — Knows what he doesn't know about sales, wants to learn

---

## Contact

- **Portfolio**: seanroth.ai
- **GitHub**: github.com/sean-roth
- **Consulting**: SOPsNobodyReads.com
- **Location**: Colorado → Chicago (relocating 2026)
