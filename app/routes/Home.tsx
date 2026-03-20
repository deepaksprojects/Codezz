import React, { Suspense } from "react";
import Image from "next/image";
import data from "../../data.json";
import { withHeader } from "../components";
import { Projects, SkillsPage } from "../pages";
import { ContactSection } from "../components/contact-section";
import { ExperienceSection } from "../components/experience-section";

function HomeRoute() {
  const UserText = () => {
    const org = data.orgs[0];
    return (
      <div className="space-y-4 p-4 text-center sm:space-y-5 sm:p-6 lg:p-8">
        <p className="text-sm font-medium leading-relaxed text-zinc-400 sm:text-base sm:leading-loose lg:text-lg">
          I’m{" "}
          <span className="font-semibold text-white">Deepak Gupta</span>
          —a software engineer who ships production{" "}
          <span className="text-cyan-400/95">React Native</span> apps and{" "}
          <span className="text-violet-400/95">Next.js &amp; NodeJs</span>{" "}
          platforms with the same standard: fast, accessible, and built to last.
        </p>
        <p className="text-sm font-medium leading-relaxed text-zinc-400 sm:text-base sm:leading-loose lg:text-lg">
          I turn fuzzy requirements into clear architecture state that scales,
          APIs that behave, and UX that earns trust—so products feel effortless
          on both phones and the web.
        </p>
        <p className="text-sm font-medium leading-relaxed text-zinc-400 sm:text-base sm:leading-loose lg:text-lg">
          Right now I’m building at{" "}
          <a
            href={org.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${org.name} — visit site`}
            className="mx-auto inline-flex flex-col items-center gap-3 align-middle transition-opacity hover:opacity-90 sm:inline-flex sm:flex-row sm:gap-3"
          >
            <Image
              src={org.avatarUrl}
              alt=""
              width={240}
              height={56}
              className="h-8 w-auto max-w-[min(260px,85vw)] object-contain object-center sm:h-10"
            />
          </a>
          <span className="mt-2 block text-zinc-400 sm:mt-0 sm:inline">
            {" "}
            shipping healthcare-grade flows where clarity, compliance, and
            scale actually matter, for users who depend on the product every
            day.
          </span>
        </p>
        <p className="text-sm font-medium leading-relaxed text-zinc-400 sm:text-base sm:leading-loose lg:text-lg">
          I care about code review, tight feedback loops, and lifting the bar
          with the team—not heroics, just consistent craft.
        </p>
        <p className="text-sm font-medium leading-relaxed text-zinc-400 sm:text-base sm:leading-loose lg:text-lg">
          Always curious about better patterns, safer deploys, and sharper
          tooling—because great software is a moving target.
        </p>
        <p className="text-base font-medium leading-relaxed text-zinc-300 sm:text-lg">
          Have an ambitious roadmap?{" "}
          <span className="text-cyan-400/90">Let’s connect</span>I’d love to
          help you ship something people remember.
        </p>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <section
        id="home"
        className="scroll-mt-24 flex min-h-screen flex-col items-center justify-center overflow-x-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black px-4 pb-16 pt-8 sm:px-6 sm:pb-20 sm:pt-12"
      >
        <div className="hidden w-full max-w-screen animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0 h-px" />

        <h1 className="animate-title z-10 cursor-default bg-clip-text p-4 text-center font-display text-4xl text-transparent duration-1000 text-edge-outline bg-white sm:p-5 sm:text-6xl md:text-8xl lg:text-9xl">
          Deepak Gupta
        </h1>

        <div className="hidden w-full max-w-screen animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0 h-px" />
        <div className="mt-8 w-full min-w-0 self-stretch sm:mt-12">
          <div className="mx-auto w-[90%] min-w-0 text-center animate-fade-in">
            <h2 className="text-base text-zinc-500 sm:text-lg">
              <Suspense fallback={<p>Loading...</p>}>
                <UserText />
              </Suspense>
            </h2>
            <div className="mt-6 flex justify-center sm:mt-8">
              <a
                href="/resume.pdf"
                download="Deepak_Gupta_Resume.pdf"
                className="rounded-lg bg-[#1f2937] px-5 py-2.5 text-sm text-white shadow-md transition-all duration-300 hover:bg-[#568e59] hover:text-black sm:px-6 sm:py-3 sm:text-base"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        id="experience"
        className="scroll-mt-24 border-t border-zinc-800/60 bg-black"
      >
        <ExperienceSection />
      </section>

      <section
        id="projects"
        className="scroll-mt-24 border-t border-zinc-800/60 bg-black"
      >
        <Projects />
      </section>

      <section
        id="skills"
        className="scroll-mt-24 border-t border-zinc-800/60 bg-black"
      >
        <SkillsPage />
      </section>

      <section id="contact" className="scroll-mt-24 border-t border-zinc-800/60">
        <ContactSection />
      </section>
    </div>
  );
}

export default withHeader(HomeRoute);
