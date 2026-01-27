# Sean Roth - Full Context

This document is the source of truth for the AI assistant on seanroth.ai.
It gets compiled into the system prompt.

---

## Who Sean Is

Sean Roth is an AI engineer based in Denver, Colorado. He builds practical AI applications — tools that ship and solve real problems, not research projects or demos.

His path to AI engineering is non-linear: MA in Screenwriting from Chapman, 8,500+ ESL classes taught (including 3 years in Korea), IBM AI Developer certification, and currently building mathematical foundations through Math Academy.

This background gives him an unusual combination: deep technical capability plus genuine understanding of how to communicate complex ideas to people who aren't technical.

---

## Current Projects

### VFX Buddy (Archived)
**What it is**: AI video segmentation tool built on Meta's SAM 3
**Stack**: Laravel/PHP, React, SAM 3, RunPod, Stripe
**Status**: Archived — wound down after market validation failure

**The real story**: Built a full SaaS with serverless GPU workers on RunPod, Stripe payments, and ran a cold outreach campaign to 28 wedding videographer leads. Zero responses. Market research revealed the target audience doesn't do rotoscoping — their pain points are culling, color grading, and audio mixing. The actual rotoscoping market was saturated with well-funded competition (Runway ML, Mocha Pro) and no moat opportunity.

Made the data-driven decision to wind down rather than pivot into a losing position.

**Validation**: Technical approach was independently validated when KAIST/Adobe Research published VideoMaMa (January 2026) solving the same problem — mask-guided video matting using SAM. The tech was right. The market was wrong.

**What it demonstrates**: Full-stack AI deployment, go-to-market execution, business judgment, knowing when to walk away.

---

### Alexandria
**What it is**: Personal knowledge infrastructure with semantic search
**Stack**: PostgreSQL 16, pgvector, Ollama, Python, Syncthing
**Status**: Active, 256 books ingested
**Repo**: github.com/sean-roth/alexandria-core

**The real story**: A system where knowledge compounds over time. PostgreSQL with pgvector stores embeddings, Ollama generates them locally, and everything syncs to Obsidian. Built using a multi-agent workflow: Designer Claude writes specs, Engineer Claude implements, every decision documented.

Discovered nomic-embed-text's effective 512-token limit through systematic debugging when search quality degraded — the docs claimed 8192. The model silently truncates content beyond 512 tokens due to BERT's positional embedding architecture.

Runs on a home Ubuntu server (i7, 32GB RAM, 17TB storage), hardlined to laptop via SSH. Claude Code executes on the server while Sean coordinates from desktop — fully local, no API calls for embeddings.

**What it demonstrates**: Vector database architecture, multi-agent development workflow, debugging docs-vs-reality discrepancies, local infrastructure setup.

---

### Clara
**What it is**: AI orchestration system / personal assistant
**Stack**: Python, Ollama, Anthropic API, Gemini, MCP, SQLite, Hume AI
**Status**: Active development, daily use
**Repo**: github.com/sean-roth/clara-ai

**The real story**: Clara is Sean's Jarvis-like AI orchestration system. It routes queries between local models (Ollama) and cloud APIs (Claude, Gemini) based on complexity. It maintains memory across conversations with importance scoring. It integrates tools via MCP protocol (web search, filesystem, databases). Voice interface coming via Hume AI TTS.

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

**The real story**: Most AI training focuses on "here's how to use ChatGPT." Sean's course focuses on the harder problem: how do you think about AI integration? How do you identify where it helps vs. where it doesn't? How do you build workflows that actually stick? Focused on Anthropic ecosystem for enterprise credibility.

**What it demonstrates**: Can translate technical concepts for non-technical audiences, understands organizational adoption challenges.

---

### SOPs Nobody Reads (Consultancy)
**What it is**: Boutique consultancy converting SOPs into actual training materials
**Status**: Active, Colorado-first market focus

**The real story**: Companies have SOPs that nobody reads. Sean takes those documents and transforms them into engaging training materials using AI-augmented workflows. What traditionally takes weeks, he does in days. Targeting manufacturing companies (50-500 employees) with compliance requirements.

**What it demonstrates**: Real client work, practical AI application, understanding business processes.

---

## Technical Skills

### Strong
- **Agent Systems**: MCP protocol, tool use, orchestration, multi-model routing
- **LLMs**: Prompt engineering, RAG patterns, context management
- **Full-Stack**: Python, JavaScript/TypeScript, React, Laravel, Flask, FastAPI
- **APIs**: REST design, OAuth, webhook handling, Stripe integration

### Growing
- **Computer Vision**: SAM, image segmentation, video processing
- **MLOps**: Model deployment, monitoring (learning)
- **Cloud Infrastructure**: AWS, Azure basics (expanding)
- **Local Inference**: Ollama, edge deployment considerations

### Not Yet (Honest Gaps)
- **Enterprise ML at Scale**: Haven't operated ML systems serving millions
- **Team Leadership**: Haven't managed engineering teams
- **Mobile Development**: Web-focused

---

## Background That Matters

### 8,500+ ESL Classes
This isn't filler. Teaching that many classes means:
- Deep practice explaining complex ideas simply
- Understanding how people actually learn (not how we think they learn)
- Patience with the gap between expert knowledge and beginner understanding
- Real-time adaptation based on feedback

### Non-Linear Path
Screenwriting MA → ESL teaching → AI development looks scattered on a resume. The throughline: communication, understanding users, building things that help people learn and work better.

### Hardware Understanding
Sean does his own hardware repair and builds his own systems. He understands technology "from metal to LLM" — not just the software abstractions.

---

## What Sean Is Looking For

- Practical AI applications — shipping products, not research
- Ownership of meaningful features
- Remote preferred, open to hybrid in Denver or Chicago
- Health insurance (non-negotiable)
- Culture that values shipping over perfection

**Salary expectations**: Targeting $130k+ depending on role and company stage

---

## What Sean Brings

1. **Shipped products** — Not projects, products with real users and real lessons
2. **Full-stack capability** — Can own features end-to-end
3. **Practical AI focus** — Solves problems, not chases hype
4. **Communication skills** — Can explain technical work to anyone
5. **Builder mindset** — Identifies problems, ships solutions, iterates
6. **Business judgment** — Knows when to build and when to walk away

---

## Contact

- **GitHub**: github.com/sean-roth
- **Location**: Denver, CO
