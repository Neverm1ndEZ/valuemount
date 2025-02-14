import ContactForm from "@/components/contact/ContactForm";
import ContactHero from "@/components/contact/ContactHero";

const ContactPage = () => {
	return (
		<div className="min-h-screen">
			<ContactHero />
			<ContactForm />
		</div>
	);
};

export default ContactPage;
