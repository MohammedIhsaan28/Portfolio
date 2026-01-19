import LogoSection from "@/sections/LogoSection";
import Navbar from "@/components/Navbar";
import AnimatedCounter from "@/sections/AnimatedCounter";
import FeatureCard from "@/sections/FeatureCard";
import Hero from "@/sections/Hero";
import Showcase from "@/sections/Showcase";
import Experience from "@/sections/Experience";
import Techstack from "@/sections/Techstack";
import Testimonials from "@/sections/Testimonials";
import Contact from "@/sections/Contact";


export default function Home() {
  return (
    <main>
      <Navbar/>
      <Hero/>
      <AnimatedCounter/>
      <Showcase/>
      <LogoSection/>
      <FeatureCard/>
      <Experience/>
      <Techstack/>
      <Testimonials/>
      <Contact/>
    </main>
  );
}
