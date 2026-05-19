import { Navbar } from "@/layout/Navbar";
import { About } from "@/sections/About";
import { Contact } from "@/sections/Contact";
import { Experience } from "@/sections/Experience";
import { Hero } from "@/sections/Hero";
import { Footer } from "./layout/Footer";
import { Expertise } from "./sections/Expertise";
import { Service } from "./sections/Service";
import { Supplier } from "./sections/Supplier";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Expertise />
        <Service />
        <Experience />
        <Supplier />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
