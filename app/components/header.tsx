"use client";

import Link from "next/link";
import { FaDownload } from "react-icons/fa";
import { useState } from "react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
] as const;

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800/80 bg-black/85 text-white shadow-md backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link
          href="#home"
          className="shrink-0 text-xl font-bold text-indigo-500 sm:text-2xl"
          onClick={() => setOpen(false)}
        >
          codezz
        </Link>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-700 text-zinc-200 hover:bg-zinc-900 md:hidden"
          aria-expanded={open}
          aria-controls="site-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((o) => !o)}
        >
          <span className="sr-only">Menu</span>
          {open ? (
            <span className="text-xl leading-none" aria-hidden>
              ×
            </span>
          ) : (
            <span className="flex flex-col gap-1.5 py-0.5" aria-hidden>
              <span className="block h-0.5 w-5 bg-current" />
              <span className="block h-0.5 w-5 bg-current" />
              <span className="block h-0.5 w-5 bg-current" />
            </span>
          )}
        </button>

        <nav
          id="site-nav"
          className={`${
            open ? "flex" : "hidden"
          } absolute left-0 right-0 top-full flex-col gap-1 border-b border-zinc-800 bg-black px-4 py-4 md:static md:flex md:flex-row md:items-center md:gap-6 md:border-0 md:bg-transparent md:p-0 lg:gap-8`}
        >
          {navItems.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="rounded-lg px-3 py-2 text-center text-sm text-gray-300 hover:bg-zinc-900 hover:text-indigo-400 md:py-1 md:hover:bg-transparent"
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-lg px-3 py-2 text-sm text-white hover:bg-zinc-900 hover:text-green-400 md:inline-flex md:hover:bg-transparent"
            onClick={() => setOpen(false)}
          >
            <span>Resume</span>
            <FaDownload className="h-3.5 w-3.5" aria-hidden />
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
