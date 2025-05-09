import Expertises from "@/components/sections/Expertises";
import Hero from "@/components/sections/Hero";
import Navbar from "@/components/ui/Navbar";
import About from "@/components/sections/About";

export default function Home() {
  return (
    <main className="relative flex justify-center items-center flex-col overflow-hidden mx-auto bg-black">
      <Navbar />
      <Hero />
      <div className="max-w-7xl w-full mx-auto">
        <About />
        <Expertises />

      </div>
    </main>
  );
}
