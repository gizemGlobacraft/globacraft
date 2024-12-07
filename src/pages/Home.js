import HeroSection from "../components/HeroSection.js";
import FeatureSection from "../components/FeatureSection.js";
import CTASection from "../components/CTASection.js";
import BlogSection from "../components/BlogSection.js";
import TestimonialsSection from "../components/TestimonialSection.js";
import ContactSection from "../components/ContactSection.js";
import StatsSection from "../components/StatsSection.js";
import ProcessSection from "../components/ProcessSection.js";

function Home() {
  return (
    <>
      <HeroSection />
      <ProcessSection />
      {/* <BlogSection /> */}
      {/* {/* <FeatureSection /> */}
      <StatsSection />
      {/* <TestimonialsSection /> */}
      <ContactSection />
      <CTASection />
    </>
  );
}
export default Home;
