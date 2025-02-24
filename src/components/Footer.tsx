import Image from "next/image";
import Link from "next/link";

export default function Footer() {
	const year = new Date().getFullYear();

	return (
		<footer className="py-8 border-t border-[#AD8330] relative">
			<div className="container mx-auto px-4">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
				<div className="col-span-2">
						<div className="flex items-center gap-6"> {/* Added flex container */}
							<Image src={'/logo.svg'} width={200} height={240} alt="Value Mount Lixiviate" />
							<div className="mt-2 space-y-2"> {/* Added spacing container */}
								<h1 className="text-lg font-semibold text-gray-700">
									Refining Gold with Precision and Integrity
								</h1>
								<p className="text-sm text-gray-600">
									336 Olin Estates, Sheldontown, KS 78508-7791
								</p>
							</div>
						</div>
					</div>

					<div>
						<h3 className="font-bold mb-4">Company</h3>
						<ul>
							<li>
								<Link href="/about-us">About Us</Link>
							</li>
							<li>
								<Link href="/investors">Investors</Link>
							</li>
							<li>
								<Link href="/news-insights">News & Insights</Link>
							</li>
							<li>
								<Link href="/partner-with-us">Partner with Us</Link>
							</li>
						</ul>
					</div>
					<div>
						<h3 className="font-bold mb-4">Follow Us On</h3>
						<ul>
							<li>
								<Link href="/contact-us">Contact Us</Link>
							</li>
							<li>
								<Link href="/faqs">FAQs</Link>
							</li>
							<li>
								<Link href="/help-support">Help & Support</Link>
							</li>
							<li>
								<Link href="/terms-conditions">Terms & Conditions</Link>
							</li>
							<li>
								<Link href="/privacy-policy">Privacy Policy</Link>
							</li>
							<li>
								<Link href="/disclaimer">Disclaimer</Link>
							</li>
						</ul>
					</div>
				</div>
				<div className="mt-8 text-center">
					<p>&copy; {year} Value Mount Lixiviate | All Rights Reserved</p>
				</div>
			</div>
		</footer>
	);
}
