import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Features from "./components/features";
import About from "./components/about";
import Who from "./components/whoweare";
//import Faq from "./components/faq";
import Contact from "./components/contact";

function App() {
  return (
    <>
      <Navbar />

      <section id="home">
        <Hero />
      </section>


      <section id="features">
        <Features />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="who">
        <Who />
      </section>

      

      <section id="contact">
        <Contact />
      </section>
    </>
  );
}

export default App;