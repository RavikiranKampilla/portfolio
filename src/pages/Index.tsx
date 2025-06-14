
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Education } from "@/components/Education";
import { Projects } from "@/components/Projects";
import { Internships } from "@/components/Internships";
import { Certificates } from "@/components/Certificates";
import { Contact } from "@/components/Contact";
import { Navigation } from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />
      <Hero />
      <About />
      <Education />
      <Projects />
      <Internships />
      <Certificates />
      <Contact />
    </div>
  );
};

export default Index;
