import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import Audience from "@/components/Audience";
import Pricing from "@/components/Pricing";
import Closing from "@/components/Closing";
import SiteFooter from "@/components/SiteFooter";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="top">
        <Hero />
        <Problem />
        <HowItWorks />
        <Features />
        <Audience />
        <Pricing />
        <Closing />
      </main>
      <SiteFooter />
    </>
  );
}