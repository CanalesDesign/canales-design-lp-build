import AboutSection from "@/components/organisms/aboutSection";
import BenefitsSection from "@/components/organisms/benefitsSection";
import BrandsSection from "@/components/organisms/brandsSection";
import FaqSection from "@/components/organisms/faqSection";
import Footer from "@/components/organisms/footer";
import HeroSection from "@/components/organisms/heroSection";
import IsotypeSection from "@/components/organisms/isotypeSection";
import Navbar from "@/components/organisms/navbar";
import ReviewsSection from "@/components/organisms/reviewsSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <BenefitsSection />
        <IsotypeSection />
        <ReviewsSection />
        <BrandsSection />
        <FaqSection />
      </main>
      <Footer />
    </>
  );
}
