import Hero from "./_Components/hero";
import Values from "./_Components/values";
import CTA from "./_Components/cta";
import Testimonial from "./_Components/testimonial";
import LogoCloud from "./_Components/logoCloud";
import Services from "./_Components/services";
import Projects from "./_Components/projects";

export default function Home() {
  return (
    <div>
      <Hero />
      <Values />
      <Services />
      <Projects />
      <CTA />
      <Testimonial />
      <LogoCloud />
    </div>
  );
}
