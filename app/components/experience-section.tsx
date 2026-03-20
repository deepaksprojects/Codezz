const roles = [
  {
    title: "Mobile Application Developer",
    company: "ThoughtsWin Systems",
    period: "July 2025 – Present",
    dateTime: "2025-07",
    highlights: [
      "Architected and developed a healthcare application from scratch with pixel-perfect UI/UX, implementing dynamic form systems and admin-configured flows using Redux and RTK Query for state management, caching, and performance.",
      "Engineered deep and universal linking with file-based routing, secure file upload workflows, and buffer-based file processing with local caching for stronger performance and reliability.",
      "Applied SOLID principles and solid engineering practices to keep the codebase maintainable—reducing memory leaks and unintended side effects while scaling smoothly across iOS and Android.",
    ],
  },
  {
    title: "Software Developer",
    company: "Tractor Junction",
    period: "May 2022 – July 2025",
    dateTime: "2022-05/2025-07",
    highlights: [
      "Built a scalable React Native app with OTA updates (~20% faster deploys), Maestro testing (~25% fewer bugs), and optimised data sync (~+20%) across iOS and Android.",
      "Enabled 100+ team members across 50+ pan-India centres to manage vehicle data through automation and real-time access, cutting manual work by about 80%.",
      "Improved app performance by ~35% with lazy loading, image compression, Redux state management, and React Native best practices for a smoother UX.",
    ],
  },
  {
    title: "React Developer",
    company: "Webologix Pvt. Ltd.",
    period: "Jan 2022 – Apr 2022",
    dateTime: "2022-01/2022-04",
    highlights: [
      "Integrated Shaka Player into React Native for live and on-demand video streaming on iOS and Android, improving experience for 1000+ learners and platform stability.",
      "Delivered a cross-platform Electron desktop app, reducing development time by ~30% while keeping consistent performance on Windows, macOS, and Linux.",
    ],
  },
  {
    title: "Full-stack Intern",
    company: "ARS Technology",
    period: "July 2021 – Dec 2021",
    dateTime: "2021-07/2021-12",
    highlights: [
      "Built and maintained e-commerce web experiences with React, Next.js, and Node.js—shipping features across the stack from UI to APIs.",
      "Improved Core Web Vitals (LCP, CLS, INP) through image optimisation, code splitting, and performance-minded React patterns.",
      "Collaborated on production codebases, learning full-cycle delivery from requirements to deployment in a fast-paced agency-style environment.",
    ],
  },
];

export function ExperienceSection() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 text-left sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <h2 className="mb-8 text-2xl font-bold text-white sm:mb-12 sm:text-3xl">
        Work experience
      </h2>
      <ol className="relative ml-0 border-l border-zinc-700/80">
        {roles.map((role) => (
          <li
            key={role.company + role.period}
            className="relative mb-12 pl-6 last:mb-0 sm:pl-8"
          >
            <span
              className="absolute left-0 top-1.5 h-2.5 w-2.5 -translate-x-1/2 rounded-full border-2 border-zinc-900 bg-indigo-500 ring-2 ring-indigo-500/30 sm:top-2 sm:h-3 sm:w-3"
              aria-hidden
            />
            <div className="flex flex-col gap-1 sm:flex-row sm:flex-wrap sm:items-baseline sm:justify-between sm:gap-x-4">
              <div>
                <h3 className="text-lg font-semibold text-white sm:text-xl">
                  {role.title}
                </h3>
                <p className="text-indigo-400">{role.company}</p>
              </div>
              <time
                className="shrink-0 text-sm text-zinc-500 tabular-nums"
                dateTime={role.dateTime}
              >
                {role.period}
              </time>
            </div>
            <ul className="mt-4 list-none space-y-3 text-sm leading-relaxed text-zinc-400 sm:text-base">
              {role.highlights.map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span
                    className="mt-2 h-1 w-1 shrink-0 rounded-full bg-indigo-500/90"
                    aria-hidden
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </div>
  );
}
