import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Skills } from "../components/Skills";
import { Projects } from "../components/Projects";
import { Work } from "../components/Work";
import { Contact } from "../components/Contact";

function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Work />
      <Contact />
    </div>
  );
}

export default Home;
