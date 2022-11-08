import "./App.css";
import { About } from "./Components/About/AboutMe";
import { Project } from "./Components/Project/Project";
import { Footer } from "./Components/Footer/Footer";
import { Nav } from "./Components/Nav/Nav";
import { Contact } from "./Components/Contact/Contact";
import { Header } from "./Components/Header/Header";
import { Skills } from "./Components/Skills/Skills";
import Calender from './Components/GithubStats/GithubCalender'
import Stats from "./Components/GithubStats/GithubStats";
function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <About />
      <Skills />
      <Project />
      <Calender />
      <Stats />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
