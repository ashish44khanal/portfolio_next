import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <div className="container mx-auto flex flex-col">
        <Navbar />
        <HeroSection />
      </div>
    </>
  );
}
