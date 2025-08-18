import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Skills from "./Components/Skills/Skills";
import Work from "./Components/Work/Work";


export default function App() {
  return (
    <div >
      <Navbar />
      <Home />
      <Skills />
      <Work />
      <Contact/>
      <Footer/>
    </div>
  )
}
