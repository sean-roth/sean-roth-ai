# seanroth.ai

Personal AI portfolio site with interactive chat and fit assessment.

## The Idea

Instead of a static resume that gets 6 seconds of attention, this site lets hiring managers:
- **Chat with an AI** trained on my work and experience
- **Assess fit** by pasting a job description for honest evaluation
- **Explore depth** through expandable context on each project

## Tech Stack

- **Frontend**: Next.js + Tailwind CSS
- **AI**: Anthropic Claude API (claude-sonnet-4-20250514)
- **Hosting**: Vercel
- **Domain**: seanroth.ai (Namecheap)

## Structure

```
sean-roth-ai/
├── app/
│   ├── page.tsx              # Main portfolio page
│   ├── layout.tsx            # Root layout
│   └── api/
│       └── chat/
│           └── route.ts      # Claude API endpoint
├── components/
│   ├── Chat.tsx              # Chat interface
│   ├── FitAssessment.tsx     # Job fit analyzer
│   ├── ProjectCard.tsx       # Project with expandable context
│   └── SkillsGrid.tsx        # Strong/Growing/Not Yet
├── content/
│   ├── CONTEXT.md            # Full context for AI (source of truth)
│   ├── projects/             # Deep context per project
│   └── system-prompt.md      # The actual prompt sent to Claude
├── lib/
│   └── anthropic.ts          # API client setup
└── public/
    └── ...
```

## Abuse Prevention (Simple)

1. **Rate limiting**: 20 messages/IP/hour via middleware
2. **Click to start**: Chat only initializes on user action
3. **Spending cap**: Hard limit in Anthropic console
4. **Cloudflare**: Route through CF for basic bot protection

## Local Development

```bash
npm install
cp .env.example .env.local  # Add ANTHROPIC_API_KEY
npm run dev
```

## Deploy

```bash
vercel
```

## The Voice

The AI introduces itself as Sean's collaborator, not as Sean:

> "Hi, I'm an AI that Sean trained on his work and experience. We built this site together. Ask me anything about his projects, background, or whether he might be a fit for a role you're hiring for."

This is honest about the human-AI collaboration and makes the interaction more personal.
