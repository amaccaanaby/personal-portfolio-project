import About from "../Sections/About";
import Contact from "../Sections/Contact";
import Experiences from "../Sections/Experiences";
import HeroSection from "../components/HeroSection";
import Projects from "../Sections/Projects";

function Portfolio() {
  return (
    <main className="bg-[#f5f5f7] text-gray-700">
      <div className="flex flex-col gap-40 max-w-7xl mx-auto">
        <section id="hero" className="mt-30 px-5 md:px-6 py-10">
          <HeroSection
            text1="Software Engineering Student - Frontend Developer"
            text2="Designing digital experiences with code & creativity."
            text3="Front-end developer focused on React, TypeScript, and Tailwind CSS. I am highly motivated to learn, collaborate, and grow through the Apple Developer Academy while developing meaningful digital solutions for real-world challenges."
          />
        </section>

        <section id="about" className="px-5 md:px-6 py-10 scroll-mt-28">
          <About />
        </section>

        <section id="experiences" className="px-5 md:px-6 py-10 scroll-mt-28">
          <Experiences />
        </section>

        <section id="projects" className="px-5 md:px-6 py-10 scroll-mt-28">
          <Projects />
        </section>

        <section id="contact" className="px-5 md:px-6 py-10 scroll-mt-28">
          <Contact />
        </section>
      </div>
    </main>
  );
}

export default Portfolio;