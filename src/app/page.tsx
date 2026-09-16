import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Why from "@/components/Why";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import Reviews from "@/components/Reviews";
import Faq from "@/components/Faq";
import SiteFooter from "@/components/SiteFooter";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="top">
        <Hero />
        <Why />
        <HowItWorks />
        <Features />
        <Pricing />
        <Reviews />
        <Faq />
      </main>
      <SiteFooter />
    </>
  );
}
