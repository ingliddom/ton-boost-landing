import HeroSection from "@/components/HeroSection";
import ProductSection from "@/components/ProductSection";
import RatesSection from "@/components/RatesSection";
import DigitalAccountSection from "@/components/DigitalAccountSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import DifferentialsSection from "@/components/DifferentialsSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ProductSection />
      <RatesSection />
      <DigitalAccountSection />
      <TestimonialsSection />
      <DifferentialsSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
