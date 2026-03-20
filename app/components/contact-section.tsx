import {
  MarkGithubIcon,
  MailIcon,
} from "@primer/octicons-react";
import Link from "next/link";
import type { ReactNode } from "react";
import { FaLinkedin } from "react-icons/fa";
import { Card } from "./card";
import data from "../../data.json";

type ContactItem = {
  icon: ReactNode;
  href: string;
  label: string;
  handle: string;
};

export function ContactSection() {
  const username = process.env.GITHUB_USERNAME || data.githubUsername;
  const linkedinProfile = data.linkedinProfile;
  const email = data.email;

  const contacts: ContactItem[] = [];
  if (email) {
    contacts.push({
      icon: <MailIcon size={20} />,
      href: "mailto:" + email,
      label: "Email",
      handle: email,
    });
  }
  contacts.push({
    icon: <MarkGithubIcon size={20} />,
    href: "https://github.com/" + username,
    label: "Github",
    handle: username,
  });
  contacts.push({
    icon: <FaLinkedin size={20} />,
    href: "https://www.linkedin.com/in/" + linkedinProfile,
    label: "Linkedin",
    handle: linkedinProfile,
  });

  return (
    <div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
      <div className="mx-auto max-w-7xl px-4 py-12 text-left sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <h2 className="mb-8 text-2xl font-bold text-white sm:mb-12 sm:text-3xl">
          Contact
        </h2>
        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 md:grid-cols-3 lg:gap-12">
          {contacts.map((s) => {
            const emailTransform =
              s.label === "Email"
                ? "sm:rotate-0 md:rotate-0 break-all text-center"
                : "";

            return (
              <Card key={s.label}>
                <Link
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-6 relative flex flex-col items-center gap-4 duration-700 group sm:gap-6 sm:py-16 md:py-20 lg:py-24"
                >
                  <span
                    className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
                    aria-hidden="true"
                  />
                  <span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
                    {s.icon}
                  </span>
                  <div className="z-10 flex flex-col items-center">
                    <span
                      className={`text-lg sm:text-xl font-medium duration-150 md:text-2xl text-zinc-200 group-hover:text-white font-display ${emailTransform}`}
                    >
                      {s.handle}
                    </span>
                    <span className="mt-3 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
                      {s.label}
                    </span>
                  </div>
                </Link>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
