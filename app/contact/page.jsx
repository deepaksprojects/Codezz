import { MarkGithubIcon, MailIcon, PersonIcon, LinkIcon } from '@primer/octicons-react';
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import data from "../../data.json";
import { getUser, getSocialAccounts } from "../data";

// TODO: make it edge once Turbopack supports it.
export const runtime = 'nodejs';

export default async function Contacts({
	searchParams: { customUsername },
}) {

	const username = customUsername || process.env.GITHUB_USERNAME || data.githubUsername;
	const linkedinProfile = data.linkedinProfile
	// Get both user and socials in parallel.
	// const userData = getUser(username);
	// const socialsData = getSocialAccounts(username);
	// const [user, githubSocials] = await Promise.all([userData, socialsData]);
	const email =  data.email;

	const contacts = [];
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
		icon: <FaLinkedin  size={20} />,
		href: "https://www.linkedin.com/in/" + linkedinProfile,
		label: "Linkedin",
		handle: linkedinProfile,
	});
	// contacts.push({
	// 	icon: <FaXTwitter size={20} />,
	// 	href: s.url,
	// 	label: s.provider,
	// 	// Extract last aprt of the url.
	// 	handle: s.url.split("/").pop(),
	// });


	return (
		<div className=" bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
			<Navigation />
			<div className="container flex items-center justify-center min-h-screen px-4 mx-auto">
				<div className="grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-0 sm:grid-cols-3 lg:gap-16">
					{contacts.map((s) => {
						// My email sucks, so I'm trying to make it fit in the grid.
						const emailTransform = s.label === 'Email' ? 'sm:rotate-45 md:rotate-0 lg:rotate-45 xl:rotate-0' : '';

						return (
							<Card key={s.label}>
								<Link
									href={s.href}
									target="_blank"
									className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24 lg:pb-48 md:p-16 sm:p-8"
								>
									<span
										className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
										aria-hidden="true"
									/>
									<span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
										{s.icon}
									</span>{" "}
									<div className="z-10 flex flex-col items-center">
										<span className={`whitespace-nowrap text-xl font-medium duration-150 lg:text-3xl text-zinc-200 group-hover:text-white font-display ${emailTransform}`}>
											{s.handle}
										</span>
										<span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
											{s.label}
										</span>
									</div>
								</Link>
							</Card>
						)
					})}
				</div>
			</div>
		</div>
	);
}
