import Hero from "@/components/sections/Hero";
import Navbar from "@/components/ui/Navbar";
import AboutGrid from "@/components/sections/AboutGrid";
export default function Home() {
  return (
    <main className="relative bg-black flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <Navbar />
        <Hero />
        <AboutGrid />
      </div>
    </main>
  );
}
