import HeroSection from "../components/HeroSection";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";

const Home = () => {
  return (
    <div className="mt-16">
      <HeroSection />
      <Features />
      <Testimonials />
      <FAQ />
    </div>
  );
};

export default Home;
