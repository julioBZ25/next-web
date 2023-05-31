import About from "@/components/About";
import Contact from "@/components/Contact";
import Main from "@/components/Main";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

interface Props {
  children: React.ReactNode;
}

const MainApp = ({children}: Props) => {
  return (
    <>
    <Navbar />
    <Main />
    <About />
    <Skills />
    <Projects />
    <Contact />
    </>
  )
}

export default MainApp
