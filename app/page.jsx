import HeroSection from "@/components/HeroSection";
import PortfolioSection from "@/components/PortfolioSection";
import ContactSection from "@/components/ContactSection";
import StackSection from "@/components/StackSection";

export default function Home() {
	return (
		<>
			<HeroSection />
			{/* <PortfolioSection /> */}
			<StackSection />
			<ContactSection />
		</>
	);
}
