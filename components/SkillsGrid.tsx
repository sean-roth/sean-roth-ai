interface SkillsGridProps {
  strong: string[];
  growing: string[];
  notYet: string[];
}

export default function SkillsGrid({ strong, growing, notYet }: SkillsGridProps) {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {/* Strong */}
      <div className="p-4 border border-zinc-200 dark:border-zinc-800 rounded-lg">
        <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-3 flex items-center gap-2">
          <span className="w-2 h-2 bg-green-500 rounded-full" />
          Strong
        </h3>
        <ul className="space-y-2">
          {strong.map((skill, index) => (
            <li key={index} className="text-zinc-700 dark:text-zinc-300 text-sm">
              {skill}
            </li>
          ))}
        </ul>
      </div>

      {/* Growing */}
      <div className="p-4 border border-zinc-200 dark:border-zinc-800 rounded-lg">
        <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-3 flex items-center gap-2">
          <span className="w-2 h-2 bg-yellow-500 rounded-full" />
          Growing
        </h3>
        <ul className="space-y-2">
          {growing.map((skill, index) => (
            <li key={index} className="text-zinc-700 dark:text-zinc-300 text-sm">
              {skill}
            </li>
          ))}
        </ul>
      </div>

      {/* Not Yet */}
      <div className="p-4 border border-zinc-200 dark:border-zinc-800 rounded-lg">
        <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-3 flex items-center gap-2">
          <span className="w-2 h-2 bg-zinc-400 rounded-full" />
          Honest Gaps
        </h3>
        <ul className="space-y-2">
          {notYet.map((skill, index) => (
            <li key={index} className="text-zinc-700 dark:text-zinc-300 text-sm">
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
