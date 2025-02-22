import Link from "next/link";

export default function Footer() {
	const year = new Date().getFullYear();

	return (
		<footer className="py-8 border-t border-[#AD8330] relative">
			<div className="container mx-auto px-4">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
					<div>
						<h3 className="font-bold mb-4">Products</h3>
						<ul>
							<li>
								<Link href="/digital-gold">Digital Gold</Link>
							</li>
							<li>
								<Link href="/refineries">Refineries</Link>
							</li>
							<li>
								<Link href="/trustee-certificate">Trustee Certificate</Link>
							</li>
							<li>
								<Link href="/digital-silver">Digital Silver</Link>
							</li>
							<li>
								<Link href="/spot">SPOT</Link>
							</li>
						</ul>
					</div>
					<div>
						<h3 className="font-bold mb-4">Services</h3>
						<ul>
							<li>
								<Link href="/gold-loans">Gold Loans</Link>
							</li>
							<li>
								<Link href="/sell-old-gold">Sell Old Gold</Link>
							</li>
							<li>
								<Link href="/shop-jewellery">Shop Jewellery</Link>
							</li>
						</ul>
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
			{/* Developed by section */}
			<div className="absolute bottom-2 right-2 text-sm text-gray-500">
				Developed by{" "}
				<Link
					href="https://github.com/Neverm1ndEZ"
					className="text-[#AD8330] hover:underline"
				>
					Neverm1ndEZ
				</Link>
			</div>
		</footer>
	);
}
