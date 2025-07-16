// src/App.tsx
import { /* ConnectButton */ } from "thirdweb/react";
import { client } from "./client";

export function App() {
	return (
		<main className="p-4 pb-10 min-h-screen flex items-center justify-center bg-black text-white">
			<div className="flex flex-col items-center justify-center w-full py-20">
				<Header />

				{/* <div className="flex justify-center mb-20">
					<ConnectButton
						client={client}
						appMetadata={{
							name: "Turf Wars",
							url: "https://turfwars.fun",
						}}
					/>
				</div> */}

				<ThirdwebResources />
			</div>
		</main>
	);
}

function Header() {
	return (
		<header className="flex flex-col items-center mb-12">
			<img
				src="/favicon.png"
				alt="Turfwars Logo"
				className="w-36 h-36 mb-6"
			/>
			<h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6 text-center text-zinc-100">
				Turfwars
				<span className="text-zinc-300 mx-1">.</span>
				<span className="-skew-x-6 text-violet-500">Fun</span>
			</h1>
		</header>
	);
}

function ThirdwebResources() {
	return (
		<div className="flex justify-center w-full">
			<ArticleCard
				title="Trade Now"
				href="https://www.syncfolio.space/turfwars"
				description="Hosted By SyncFolio Space."
			/>
		</div>
	);
}

function ArticleCard(props: {
	title: string;
	href: string;
	description: string;
}) {
	return (
		<a
			href={`${props.href}?utm_source=turfwars`}
			target="_blank"
			className="block w-full max-w-3xl border border-zinc-800 p-10 rounded-xl hover:bg-zinc-900 hover:border-zinc-700 transition-colors text-center flex flex-col items-center justify-center"
			rel="noreferrer"
		>
			<article>
				<h2 className="text-3xl font-semibold mb-2">{props.title}</h2>
				<p className="text-lg text-zinc-400">{props.description}</p>
			</article>
		</a>
	);
}
