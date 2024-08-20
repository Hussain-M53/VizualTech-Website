import Image from "next/image";
import Navbar from "./_Components/navbar";
import Hero from "./_Components/hero";
import Values from "./_Components/values";
import CTA from "./_Components/cta";
import Testimonial from "./_Components/testimonial";
import LogoCloud from "./_Components/logoCloud";
import Footer from "./_Components/footer";

export default function Home() {
  return (
    <div>
      <Hero />
      <Values />
      <Testimonial />
      <CTA />
      <LogoCloud /> 
      <Footer/>
    </div>
  );
}
