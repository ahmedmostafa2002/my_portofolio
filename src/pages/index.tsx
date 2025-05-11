import About from "../components/about";
import Contact from "../components/contact";
import Experience from "../components/experience";
import Home from "../components/home";
import Projects from "../components/projects";
import Skills from "../components/skills";

function Index() {
  return (
    <div className="flex flex-col">
        <Home/>
        <About/>
        <Skills/>
        <Experience/>
        <Projects/>
        <Contact/>
    </div>
);
}

export default Index;