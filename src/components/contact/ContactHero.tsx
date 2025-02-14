import Image from "next/image";
import React from "react";

export default function ContactHero() {
	const cardDetails = [
		{
			id: 1,
			icon: "/call.svg",
			heading: "Call",
			details: "+91 0987654321",
		},
		{
			id: 2,
			icon: "/mail.svg",
			heading: "Email",
			details: "valuemount@gmail.com",
		},
		{
			id: 3,
			icon: "/linkedin.svg",
			heading: "Linkedin",
			details: "@valuemount",
		},
	];

	return (
		<section className="mx-auto max-w-7xl mt-10 px-4">
			<div>
				{/* Hero Banner with Email Input */}
				<div className="relative rounded-lg overflow-hidden mb-10">
					<div className="p-8 min-h-[300px] md:h-[480px] lg:h-[550px] relative z-10 flex flex-col justify-end">
						<h1 className="text-4xl font-bold text-white mb-2">Contact Us</h1>
						<p className="text-white/80 mb-4">Want us to connect with you?</p>
						<p className="text-white/60 text-sm mb-4">
							Just leave your email and we will get back to you!
						</p>
						<div className="flex w-full max-w-md rounded-lg border border-[#AD8330]/20 overflow-hidden bg-white">
							<div className="flex items-center pl-4">
								<Image
									src="/mail.svg"
									alt="Email icon"
									width={24}
									height={24}
								/>
							</div>
							<input
								type="email"
								placeholder="Enter your Email Address"
								className="flex-1 p-3 outline-none border-none"
							/>
							<button className="bg-[#AD8330] text-white px-6 py-2">
								Submit
							</button>
						</div>
					</div>
					{/* Full Background Image */}
					<div className="absolute inset-0">
						<Image
							src="/mail-new.svg"
							alt="Background"
							fill
							objectFit="cover"
							className="rounded-lg"
						/>
					</div>
				</div>

				{/* Contact Cards */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-3 w-full mb-10">
					{cardDetails.map((details) => (
						<div
							className="border border-[#AD8330]/20 rounded-lg p-4 w-full md:max-w-[340px]"
							key={details.id}
						>
							<div className="flex items-center gap-3">
								<Image
									src={details.icon}
									alt={details.heading}
									width={24}
									height={24}
								/>
								<div>
									<h3 className="font-bold text-[#1B1B1B]">
										{details.heading}
									</h3>
									<p className="text-[#696969]">{details.details}</p>
								</div>
							</div>
						</div>
					))}
				</div>

				{/* Location Section */}
				<div className="flex flex-col md:flex-row items-center justify-between w-full px-4 gap-4">
					<div className="flex items-center gap-3">
						<div className="bg-[#AD8330] rounded-full p-4">
							<Image
								src="/location.svg"
								alt="location icon"
								width={24}
								height={24}
							/>
						</div>
						<div className="space-y-1">
							<h1 className="font-bold text-lg text-[#1B1B1B]">Location</h1>
							<p className="text-[#696969] text-lg">
								336 Olin Estates, Sheldontown, KS 78508-7791
							</p>
						</div>
					</div>
					<button className="bg-[#AD8330] rounded-xl px-5 h-10 font-semibold text-lg text-white mt-4 md:mt-0">
						Get Address
					</button>
				</div>
			</div>
		</section>
	);
}
