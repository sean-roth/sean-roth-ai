import Chat from "@/components/Chat";
import ProjectCard from "@/components/ProjectCard";
import SkillsGrid from "@/components/SkillsGrid";
import FitAssessment from "@/components/FitAssessment";

const projects = [
  {
    title: "VFX Buddy",
    tagline: "AI-powered rotoscoping for wedding videographers",
    stack: ["Laravel/PHP", "React", "SAM 3", "RunPod", "Stripe"],
    status: "Live",
    url: "vfxbuddy.ai",
    description:
      "Rotoscoping means hours of tedious frame-by-frame work. VFX Buddy uses Meta's SAM 3 to generate masks in minutes instead of hours. Full SaaS with Stripe subscriptions, React frontend on Vercel, Laravel API on Railway, Python GPU workers on RunPod Serverless, and Cloudflare R2 storage. Built solo, end-to-end.",
    demonstrates: [
      "Computer vision in production",
      "Full-stack SaaS architecture",
      "Serverless GPU infrastructure",
      "Shipping complete products",
    ],
  },
  {
    title: "Alexandria",
    tagline: "Personal knowledge infrastructure with semantic search",
    stack: ["PostgreSQL 16", "pgvector", "Ollama", "Python", "Syncthing"],
    status: "Active",
    url: "github.com/sean-roth/alexandria-core",
    description:
      "A system where knowledge compounds over time. PostgreSQL with pgvector stores embeddings, Ollama generates them locally, and everything syncs to Obsidian. 17+ books ingested so far. Built using a multi-agent workflow: Designer Claude writes specs, Engineer Claude implements, every decision documented. Discovered nomic-embed-text's effective 512-token limit through systematic debugging when search quality degraded—the docs claimed 8192. Runs on a home Ubuntu server (i7, 32GB RAM, 17TB storage), hardlined to laptop via SSH. Claude Code executes on the server while I coordinate from desktop—fully local, no API calls for embeddings.",
    demonstrates: [
      "Vector database architecture",
      "Multi-agent development workflow",
      "Debugging docs-vs-reality discrepancies",
      "Local infrastructure and hardware setup",
    ],
  },
  {
    title: "Clara",
    tagline: "AI orchestration system / personal assistant",
    stack: ["Python", "Ollama", "Anthropic API", "Gemini", "MCP", "SQLite", "Hume AI"],
    status: "Active Development",
    url: "github.com/sean-roth/clara-ai",
    description:
      "Clara is my Jarvis-like AI orchestration system. It routes queries between local models (Ollama) and cloud APIs (Claude, Gemini) based on complexity, maintains memory across conversations with importance scoring, and integrates tools via MCP protocol (web search, filesystem, databases). Voice interface coming via Hume AI TTS.",
    demonstrates: [
      "Multi-model orchestration",
      "Agent architecture",
      "MCP protocol expertise",
      "System design thinking",
    ],
  },
  {
    title: "B2B Sales Agent",
    tagline: "Automated prospect research and outreach pipeline",
    stack: ["Claude Code", "Apollo MCP", "Firecrawl", "Gmail API"],
    status: "Running",
    description:
      "Finding and researching prospects manually doesn't scale. This agent searches Apollo for leads matching an ICP, enriches them with web research via Firecrawl, generates personalized cold emails, and creates Gmail drafts for review. I use it daily for VFX Buddy outreach.",
    demonstrates: [
      "MCP tool development",
      "Practical automation",
      "Understanding B2B workflows",
      "Pipeline management",
    ],
  },
  {
    title: "AI Adoption Training",
    tagline: "Course helping small businesses actually use AI",
    stack: ["Anthropic Ecosystem", "Curriculum Design"],
    status: "Drafting",
    description:
      "Most AI training focuses on 'here's how to use ChatGPT.' This course focuses on the harder problem: how do you think about AI integration? How do you identify where it helps vs. where it doesn't? How do you build workflows that actually stick?",
    demonstrates: [
      "Technical communication for non-technical audiences",
      "Organizational AI adoption strategy",
    ],
  },
];

const skills = {
  strong: [
    "Agent Systems (MCP protocol, tool use, orchestration)",
    "LLMs (prompt engineering, RAG patterns, context management)",
    "Full-Stack (Python, JavaScript/TypeScript, React, Laravel, Flask, FastAPI)",
    "APIs (REST design, OAuth, webhook handling, Stripe)",
    "Computer Vision (SAM, image segmentation, video processing)",
  ],
  growing: [
    "MLOps (model deployment, monitoring)",
    "Cloud Infrastructure (AWS, Azure basics)",
    "Local Inference (Ollama, edge deployment)",
  ],
  notYet: [
    "Enterprise ML at Scale",
    "Team Leadership",
    "Mobile Development",
  ],
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      <main className="max-w-4xl mx-auto px-6 py-16">
        {/* Hero */}
        <header className="mb-16">
          <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
            Sean Roth
          </h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-6">
            AI Developer
          </p>
          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed max-w-2xl">
            I build practical AI applications — tools that ship and solve real problems,
            not research projects or demos. My path here is non-linear: screenwriting MA,
            8,500+ ESL classes taught, now shipping products with computer vision and LLMs.
          </p>
        </header>

        {/* Chat */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-6">
            Ask Me Anything
          </h2>
          <Chat />
        </section>

        {/* Projects */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-6">
            Current Projects
          </h2>
          <div className="space-y-4">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-6">
            Technical Skills
          </h2>
          <SkillsGrid {...skills} />
        </section>

        {/* Fit Assessment */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-6">
            Check the Fit
          </h2>
          <FitAssessment />
        </section>

        {/* Footer */}
        <footer className="pt-8 border-t border-zinc-200 dark:border-zinc-800">
          <div className="flex flex-wrap gap-6 text-zinc-600 dark:text-zinc-400">
            <a
              href="https://github.com/sean-roth"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
            >
              GitHub
            </a>
            <span>Denver, CO</span>
          </div>
        </footer>
      </main>
    </div>
  );
}
