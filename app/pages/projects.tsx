const projects = [
  {
    title: "Tractor Junction Mobile App",
    description:
      "A mobile app designed to manage tractor sales and customer interactions. Optimized for rural performance, financial tools, and seamless UI.",
    features: [
      "1M+ downloads showcasing user trust and value.",
      "EMI calculator for financial planning.",
      "Custom animations to enhance interactivity.",
      "Rural-friendly performance with optimized data handling.",
    ],
    techStack: ["React Native", "Firebase", "Redux"],
    liveLink:
      "https://play.google.com/store/apps/details?id=com.tractorjunction&hl=en",
    sourceLink: "#",
    image: "/assets/tractor.png",
    bgColor: "#4a90e2",
  },
  {
    title: "Truck Junction",
    description:
      "A comprehensive solution for truck dealers and buyers with advanced search filters and personalized features.",
    features: [
      "Dynamic truck listings and filters.",
      "Interactive UI for diverse users.",
      "Performance-focused architecture.",
      "Seamlessly managed increasing user data.",
    ],
    techStack: ["React Native", "Laravel", "Firebase"],
    liveLink:
      "https://play.google.com/store/apps/details?id=com.truckjunction&hl=en",
    sourceLink: "#",
    image: "/assets/truck.png",
    bgColor: "#f36f45",
  },
  {
    title: "Valuation App",
    description:
      "An app for calculating valuations of used vehicles with user-friendly interfaces and accurate results.",
    features: [
      "Accurate valuation algorithms for used vehicles.",
      "Intuitive, easy-to-use UI for all users.",
      "Optimized for low-end devices with efficient performance.",
      "Secure data handling with Firebase integration.",
    ],
    techStack: ["React Native", "Node.js", "MongoDB"],
    liveLink: "",
    sourceLink: "#",
    image: "/assets/valuation.png",
    bgColor: "#8bc34a",
  },
  {
    title: "Traco - Vehicle Maintenance System",
    description:
      "A system for tracking vehicle maintenance schedules and tasks. Features intuitive design for fleet managers and customers.",
    features: [
      "Integrated tracking for maintenance schedules.",
      "Custom reminders for upcoming tasks.",
      "Secure document storage and management.",
      "Seamless syncing between mobile and backend.",
    ],
    techStack: ["React Native", "Express.js", "MongoDB"],
    liveLink:
      "https://play.google.com/store/apps/details?id=com.tractorjunction.traco&hl=en",
    sourceLink: "#",
    image: "/assets/traco.png",
    bgColor: "#ff5722",
  },
  {
    title: "CRMS for Call Centre Team",
    description:
      "A CRM system for managing customer calls efficiently with advanced analytics and team collaboration features.",
    features: [
      "Real-time call tracking for better customer service.",
      "Analytics dashboard for team performance insights.",
      "Integrated ticketing for follow-up tasks.",
      "Cross-platform functionality for desktops and mobiles.",
    ],
    techStack: ["React", "Node.js", "MongoDB"],
    liveLink: "",
    sourceLink: "#",
    image: "/assets/crms.png",
    bgColor: "#009688",
  },
  {
    title: "Vehicle Management System (VMS)",
    description:
      "System for nationwide inventory and sales management. Seamless integration with enterprise workflows.",
    features: [
      "Defined task assignments per user role.",
      "Optimized image and video uploads for efficiency.",
      "Connected seamlessly with existing systems.",
      "Managed complex inventory and sales data.",
    ],
    techStack: ["React", "Node.js", "MongoDB", "GraphQl"],
    liveLink:
      "https://play.google.com/store/apps/details?id=com.tractorjunction.vms&hl=en",
    sourceLink: "#",
    image: "/assets/vms.png",
    bgColor: "#5c6bc0",
  },
  {
    title: "pharma.cloud",
    description:
      "Cloud-native pharmacy experience: guided prescription capture (files, scan, or defer), multi-step flows with progress, and secure handling of health data at scale.",
    features: [
      "Prescription intake UX - upload JPG/PNG/PDF, camera scan, or request later - with drafts and validation for readable captures.",
      "Centralised catalog, stock, and fulfilment with role-based access for pharmacies, admins, and partners.",
      "API-first integrations (POS, wholesalers, logistics), hardened auth, and deployment patterns suited for regulated environments.",
    ],
    techStack: ["React Native", "Expo", "Reanimated", "GlassUI"],
    liveLink: "",
    sourceLink: "#",
    image: "/assets/pharma-cloud.png",
    bgColor: "#2563eb",
  },
];

const ProjectCard = ({ project }) => {
  const accent = project.bgColor ?? "#6366f1";

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-700/50 bg-zinc-900/90 shadow-lg shadow-black/50 ring-1 ring-white/5 transition duration-300 ease-out hover:-translate-y-1 hover:border-indigo-500/40 hover:shadow-2xl hover:shadow-indigo-950/30 hover:ring-indigo-500/20">
      <div
        className="h-1 w-full shrink-0"
        style={{
          background: `linear-gradient(90deg, ${accent} 0%, ${accent}99 45%, transparent 100%)`,
        }}
        aria-hidden
      />

      <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-950">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover object-top transition duration-500 ease-out group-hover:scale-[1.04]"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/25 to-transparent"
          aria-hidden
        />
      </div>

      <div className="flex flex-1 flex-col gap-4 p-5 sm:gap-5 sm:p-6">
        <header className="space-y-2">
          <h3 className="text-lg font-semibold leading-snug tracking-tight text-white sm:text-xl">
            {project.title}
          </h3>
          <p className="text-sm leading-relaxed text-zinc-400">
            {project.description}
          </p>
        </header>

        <ul className="space-y-2.5 text-sm leading-relaxed text-zinc-500">
          {project.features.map((feature, index) => (
            <li key={index} className="flex gap-3">
              <span
                className="mt-2 h-1 w-1 shrink-0 rounded-full"
                style={{ backgroundColor: accent }}
                aria-hidden
              />
              <span className="text-zinc-400">{feature}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech, index) => (
            <span
              key={index}
              className="rounded-md border border-zinc-600/80 bg-zinc-800/60 px-2.5 py-1 text-xs font-medium text-zinc-300 backdrop-blur-sm transition group-hover:border-zinc-500/60"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-auto flex border-t border-zinc-800/90 pt-4">
          {project.liveLink ? (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
            >
              Live preview
              <span aria-hidden className="text-indigo-200">
                ↗
              </span>
            </a>
          ) : (
            <span
              className="inline-flex cursor-default items-center rounded-lg border border-zinc-600 bg-zinc-800/80 px-4 py-2.5 text-sm font-medium text-zinc-400"
              title="No public URL for this build"
            >
              {project.previewLabel ?? "Confidential"}
            </span>
          )}
        </div>
      </div>
    </article>
  );
};

const ProjectsSection = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <h2 className="mb-8 text-2xl font-bold text-white sm:mb-12 sm:text-3xl">
        Projects
      </h2>
      <div className="grid grid-cols-1 gap-7 md:grid-cols-2 md:gap-8 lg:grid-cols-3 lg:gap-10">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
