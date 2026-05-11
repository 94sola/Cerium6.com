import { Routes, Route, Outlet } from "react-router-dom";

import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Features from "./components/features";
import About from "./components/about";
import Who from "./components/whoweare";
import Footer from "./components/footer";
import Contact from "./components/contact";

// PRODUCT PAGES
import AnalystProficiency from "./components/page/AnalystProficiency";
import Reporting from "./components/page/Reporting";
import SampleManagement from "./components/page/SampleManagement";
import ProjectTracking from "./components/page/ProjectTracking";
import MethodDevelopment from "./components/page/MethodDevelopment";
import Documentation from "./components/page/Documentation";

// ===== LAYOUT =====
const Layout = () => {
  return (
    <>
      <Navbar />

      {/* PAGE CONTENT */}
      <Outlet />

      <Footer />
    </>
  );
};

// ===== HOME PAGE =====
const HomePage = () => {
  return (
    <>
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
};

// ===== APP =====
function App() {
  return (
    <Routes>
      {/* ALL PAGES USING LAYOUT */}
      <Route element={<Layout />}>
        {/* HOME */}
        <Route path="/" element={<HomePage />} />

        {/* PRODUCT PAGES */}
        <Route
          path="/analyst-proficiency"
          element={<AnalystProficiency />}
        />

        <Route
          path="/reporting-pdf-generation"
          element={<Reporting />}
        />

        <Route
          path="/sample-management"
          element={<SampleManagement />}
        />

        <Route
          path="/project-tracking"
          element={<ProjectTracking />}
        />

        <Route
          path="/method-development"
          element={<MethodDevelopment />}
        />

        <Route
          path="/documentation"
          element={<Documentation />}
        />
      </Route>
    </Routes>
  );
}

export default App;