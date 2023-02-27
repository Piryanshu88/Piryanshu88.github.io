//import "./App.css";
import { About } from "./Components/About/AboutMe";
import { Project } from "./Components/Project/Project";
import { Footer } from "./Components/Footer/Footer";
import { Nav } from "./Components/Nav/Nav";
import { Contact } from "./Components/Contact/Contact";
import { Header } from "./Components/Header/Header";
import { Skills } from "./Components/Skills/Skills";
import Calender from "./Components/GithubStats/GithubCalender";
import Stats from "./Components/GithubStats/GithubStats";
import { Navbar } from "./Component/Navbar/Navbar";
import { Home } from "./Component/Home/Home";
import { Loading } from "./Component/LoadingPage/Loading";
import useReady from "./Component/LoadingPage/useReady";
function App() {
  const { ready } = useReady(2000);
  return (
    <div className="App">
      {" "}
      {!ready ? (
        <>
          <Loading />
        </>
      ) : (
        <div className="App">
          {" "}
          <Navbar />
          <Home />
        </div>
      )}
      {/* <Header />
      <Nav />
      <About />
      <Skills />
      <Project />
      <Calender />
      <Stats />
      <Contact />
      <Footer /> */}
    </div>
  );
}

export default App;
