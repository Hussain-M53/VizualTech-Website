import Hero from "./_Components/hero";
import Values from "./_Components/values";
import CTA from "./_Components/cta";
import Testimonial from "./_Components/testimonial";
import LogoCloud from "./_Components/logoCloud";
import Services from "./_Components/services";

export default function Home() {
  return (
    <div>
      <Hero />
      <Values />
      <Services />
      <Testimonial />
      <CTA />
      <LogoCloud />
    </div>
  );
}
