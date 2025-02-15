import Image from "next/image";
import React from "react";

export default function ContactForm() {
	return (
		<section className="mx-auto max-w-7xl py-12 px-4">
			<div className="bg-white/40 border border-[#0a0d1733] rounded-lg overflow-hidden p-5">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					{/* Form Section */}
					<div className="p-8">
						<div className="mb-8">
							<h2 className="text-[#AD8330] text-2xl font-bold mb-2">
								Let&apos;s Refine Your Gold Together
							</h2>
							<p className="text-[#696969]">
								Fill out this form and our team will get back to you promptly.
							</p>
						</div>
						<form className="space-y-4">
							{/* Name Fields */}
							<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
								<input
									type="text"
									placeholder="Last Name"
									className="p-3.5 rounded-md border-2 border-[#AD8330] placeholder:text-[#AD8330] placeholder:text-sm"
								/>
								<input
									type="text"
									placeholder="First Name"
									className="p-3.5 rounded-md border-2 border-[#AD8330] placeholder:text-[#AD8330] placeholder:text-sm"
								/>
							</div>
							{/* Other Inputs */}
							<input
								type="email"
								placeholder="Email"
								className="w-full p-3.5 rounded-md border-2 border-[#AD8330] placeholder:text-[#AD8330] placeholder:text-sm"
							/>
							<input
								type="tel"
								placeholder="Phone Number"
								className="w-full p-3.5 rounded-md border-2 border-[#AD8330] placeholder:text-[#AD8330] placeholder:text-sm"
							/>
							<textarea
								placeholder="Message"
								rows={4}
								className="w-full p-3.5 rounded-md border-2 border-[#AD8330] placeholder:text-[#AD8330] placeholder:text-sm resize-none"
							/>
							<button className="w-full bg-[#AD8330] text-white py-3 rounded-md font-semibold text-lg">
								Send to Refine
							</button>
						</form>
					</div>
					{/* Image Section */}
					<div className="hidden md:block relative h-64 md:h-auto">
						<Image
							src="/contactForm.svg"
							alt="Gold bars on red velvet"
							layout="fill"
							objectFit="cover"
							className="rounded-xl"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
