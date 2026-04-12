import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Features from "@/components/Features";
import UserTypes from "@/components/UserTypes";
import AppPreview from "@/components/AppPreview";
import HowItWorks from "@/components/HowItWorks";
import WaitlistCTA from "@/components/WaitlistCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <UserTypes />
      <AppPreview />
      <HowItWorks />
      <WaitlistCTA />
      <Footer />
    </>
  );
}
