import Footer from "../footer/Footer";
import Header from "../header/Header";
import About from "./about/About";
import { Contact } from "./contact/Contact";
import Hero from "./hero/Hero";
import Projects from "./projects/Projects";
import { Qualification } from "./qualification/Qualification";
import { Services } from "./services/Services";
import { Skills } from "./skills/Skills";
const Home = () => {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Services />
        <Qualification/>
        <Projects/>
        <Contact/>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
