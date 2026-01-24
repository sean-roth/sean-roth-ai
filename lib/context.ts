import fs from "fs";
import path from "path";

export function getSystemPrompt(): string {
  const contentDir = path.join(process.cwd(), "content");

  const systemPrompt = fs.readFileSync(
    path.join(contentDir, "system-prompt.md"),
    "utf-8"
  );

  const context = fs.readFileSync(
    path.join(contentDir, "CONTEXT.md"),
    "utf-8"
  );

  return `${systemPrompt}\n\n---\n\n# Sean's Full Context\n\n${context}`;
}
