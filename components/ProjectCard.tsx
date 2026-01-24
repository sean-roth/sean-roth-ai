"use client";

import { useState } from "react";

interface ProjectCardProps {
  title: string;
  tagline: string;
  stack: string[];
  status: string;
  url?: string;
  description: string;
  demonstrates: string[];
}

export default function ProjectCard({
  title,
  tagline,
  stack,
  status,
  url,
  description,
  demonstrates,
}: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="border border-zinc-200 dark:border-zinc-800 rounded-lg overflow-hidden">
      {/* Header - always visible */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full p-4 text-left hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors"
      >
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
              {title}
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400 mt-1">{tagline}</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs px-2 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 rounded-full">
              {status}
            </span>
            <svg
              className={`w-5 h-5 text-zinc-400 transition-transform ${isExpanded ? "rotate-180" : ""}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 mt-3">
          {stack.map((tech) => (
            <span
              key={tech}
              className="text-xs px-2 py-1 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded"
            >
              {tech}
            </span>
          ))}
        </div>
      </button>

      {/* Expanded content */}
      {isExpanded && (
        <div className="px-4 pb-4 border-t border-zinc-200 dark:border-zinc-800">
          <div className="pt-4">
            <h4 className="text-sm font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-wide mb-2">
              The Real Story
            </h4>
            <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
              {description}
            </p>
          </div>
          <div className="mt-4">
            <h4 className="text-sm font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-wide mb-2">
              What It Demonstrates
            </h4>
            <ul className="list-disc list-inside text-zinc-700 dark:text-zinc-300 space-y-1">
              {demonstrates.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          {url && (
            <div className="mt-4">
              <a
                href={url.startsWith("http") ? url : `https://${url}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-900 dark:text-zinc-100 underline hover:no-underline"
              >
                {url}
              </a>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
