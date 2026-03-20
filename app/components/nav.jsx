"use client";

import { ArrowLeftIcon } from "@primer/octicons-react";
import Link from "next/link";
import { useSearchParams } from 'next/navigation';
import { useEffect, useRef, useState } from "react";

export const Navigation = () => {
	const ref = useRef(null);
	const [isIntersecting, setIntersecting] = useState(true);
	const searchParams = useSearchParams();
	const customUsername = searchParams.get('customUsername');

	useEffect(() => {
		if (!ref.current) return;
		const observer = new IntersectionObserver(([entry]) =>
			setIntersecting(entry.isIntersecting),
		);

		observer.observe(ref.current);
		return () => observer.disconnect();
	}, []);

	return (
		<header ref={ref}>
			<div
				className={`fixed inset-x-0 top-0 z-50 backdrop-blur duration-200 border-b ${
					isIntersecting
						? "bg-zinc-900/0 border-transparent"
						: "bg-zinc-900/500 border-zinc-800"
				}`}
			>
				<div className="container flex flex-row-reverse flex-wrap items-center justify-between gap-4 p-4 mx-auto sm:p-6">
					<div className="flex flex-wrap justify-end gap-4 text-sm sm:gap-8 sm:text-base">
						<a
							href={"/" + (customUsername ? `?customUsername=${customUsername}` : '') + "#projects"}
							className="duration-200 text-zinc-400 hover:text-zinc-100"
						>
							Projects
						</a>
						<a
							href={"/" + (customUsername ? `?customUsername=${customUsername}` : '') + "#contact"}
							className="duration-200 text-zinc-400 hover:text-zinc-100"
						>
							Contact
						</a>
					</div>

					<Link
						href={"/" + (customUsername ? `?customUsername=${customUsername}` : '') + "#home"}
						className="duration-200 text-zinc-300 hover:text-zinc-100"
						aria-label="Back to home"
					>
						<ArrowLeftIcon className="w-6 h-6" />
					</Link>
				</div>
			</div>
		</header>
	);
};
