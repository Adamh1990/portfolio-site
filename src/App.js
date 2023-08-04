import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Social from "./components/Social";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

function App() {
  return (
   <div>
    <NavBar />
    <Home />
    <Social />
    <About />
    <Projects />
    <Experience />
    <Contact />
   </div>
  );
}

export default App;
