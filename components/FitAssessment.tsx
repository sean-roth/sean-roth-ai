"use client";

import { useState, useRef, useEffect } from "react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export default function FitAssessment() {
  const [isStarted, setIsStarted] = useState(false);
  const [jobDescription, setJobDescription] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [streamingContent, setStreamingContent] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, streamingContent]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!jobDescription.trim() || isLoading) return;

    setIsStarted(true);
    const userMessage = `Please analyze this job description and give me an honest assessment of Sean's fit:\n\n${jobDescription.trim()}`;

    setMessages([{ role: "user", content: "Job description submitted for analysis..." }]);
    setIsLoading(true);
    setStreamingContent("");

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [{ role: "user", content: userMessage }],
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || "Failed to analyze");
      }

      const reader = response.body?.getReader();
      const decoder = new TextDecoder();
      let fullContent = "";

      if (reader) {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          const chunk = decoder.decode(value, { stream: true });
          fullContent += chunk;
          setStreamingContent(fullContent);
        }
      }

      setMessages((prev) => [...prev, { role: "assistant", content: fullContent }]);
      setStreamingContent("");
    } catch (error) {
      console.error("Fit assessment error:", error);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: error instanceof Error ? error.message : "Sorry, something went wrong. Please try again.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setIsStarted(false);
    setJobDescription("");
    setMessages([]);
    setStreamingContent("");
  };

  if (!isStarted) {
    return (
      <div className="border border-zinc-200 dark:border-zinc-800 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
          Fit Assessment
        </h3>
        <p className="text-zinc-600 dark:text-zinc-400 mb-4">
          Paste a job description and get an honest analysis of how Sean&apos;s background matches the requirements.
        </p>
        <form onSubmit={handleSubmit}>
          <textarea
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
            placeholder="Paste the job description here..."
            rows={8}
            className="w-full px-4 py-3 border border-zinc-200 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-500 resize-none"
          />
          <button
            type="submit"
            disabled={!jobDescription.trim()}
            className="mt-4 px-6 py-3 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-full font-medium hover:bg-zinc-700 dark:hover:bg-zinc-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Analyze Fit
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="border border-zinc-200 dark:border-zinc-800 rounded-lg overflow-hidden">
      <div className="p-4 border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
          Fit Assessment
        </h3>
        <button
          onClick={handleReset}
          className="text-sm text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300"
        >
          Try another
        </button>
      </div>

      <div className="p-4 max-h-[400px] overflow-y-auto">
        {messages.map((message, index) => (
          <div key={index} className="mb-4">
            {message.role === "assistant" && (
              <div className="prose prose-zinc dark:prose-invert max-w-none">
                <p className="whitespace-pre-wrap text-zinc-700 dark:text-zinc-300 leading-relaxed">
                  {message.content}
                </p>
              </div>
            )}
          </div>
        ))}
        {streamingContent && (
          <div className="prose prose-zinc dark:prose-invert max-w-none">
            <p className="whitespace-pre-wrap text-zinc-700 dark:text-zinc-300 leading-relaxed">
              {streamingContent}
            </p>
          </div>
        )}
        {isLoading && !streamingContent && (
          <div className="flex items-center gap-2 text-zinc-500">
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-zinc-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
              <div className="w-2 h-2 bg-zinc-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
              <div className="w-2 h-2 bg-zinc-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
            </div>
            <span>Analyzing fit...</span>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
    </div>
  );
}
