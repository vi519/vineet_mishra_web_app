import logo from "./logo.svg";

import "./App.css";
import "./index.css";
import {
  BrowserRouter as Router,
  HashRouter,
  Routes,
  Route,
  useRoutes,
  Link,
} from "react-router-dom";
import WelcomePage from "./components/WelcomePage.jsx";
import Projects from "./components/Projects";
import Publications from "./components/Publications";
import Skills from "./components/Skills";
import Blogs from "./components/Blogs";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Timeline from "./components/Timeline";

function App() {
  const name = "#VineetMishra";
  const portfolioTheme="bg-black"
  return (
    <div className="overflow-x-hidden bg-gray-100  ">
      
      <HashRouter>
        <nav
          class=" bg-stone-400 flex items-center  justify-between flex-wrap p-6"
          id="nav"
        >
          <Link to="/">
            <div class="lex items-center justify-center">
              {" "}
              <em>
                <span className="heading" class=" text-4xl tracking-tight  ">
                  {" "}
                  {name}🐅{" "}
                </span>{" "}
              </em>{" "}
            </div>{" "}
          </Link>{" "}
         
            <div class="flex items-center justify-center ">
              <div class="text-sm lg:flex-grow    ">
                <a
                  href="#section-2"
                  class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:shadow-2xl text-green-500 mr-4 text-xl  px-6  lg:mx-2"
                >
                  Skills{" "}
                </a>{" "}
                <a
                  href="#section-3"
                  class="block mt-4  lg:inline-block lg:mt-0 text-teal-200 hover:shadow-2xl text-green-500 mr-4 text-xl px-6 lg:mx-2"
                >
                  Projects{" "}
                </a>{" "}
                <a
                  href="#section-5"
                  class="block mt-4 lg:inline-block lg:mt-0 text-teal-200  hover:shadow-2xl text-green-500 mr-4 text-xl px-6 lg:mx-2 "
                >
                  Blogs{" "}
                </a>{" "}
                <a
                  href="#section-4"
                  class="block mt-4 lg:inline-block lg:mt-0 text-teal-200  hover:shadow-2xl text-green-500 mr-4 text-xl px-6 lg:mx-2"
                >
                  OpenSource
                </a>
                <a
                  href="#section-9"
                  class="block mt-4 lg:inline-block lg:mt-0 text-teal-200  hover:shadow-2xl text-green-500 mr-4 text-xl   px-6 lg:mx-2"
                >
                  Timeline{" "}
                </a>{" "}
                <a
                  href="#section-6"
                  class="block mt-4 lg:inline-block lg:mt-0 text-teal-200  hover:shadow-2xl text-green-500 mr-4 text-xl  px-6 lg:mx-2"
                >
                  Academics{" "}
                </a>{" "}
                <a
                  href="#section-7"
                  class="block mt-4 lg:inline-block lg:mt-0 text-teal-200  hover:shadow-2xl text-green-500 mr-4 text-xl   px-6 lg:mx-2"
                >
                  Contact{" "}
                </a>{" "}
              </div>{" "}
            </div>{" "}
    
        </nav>{" "}
        <div id="section-1">
          <WelcomePage />
        </div>{" "}
        <div id="section-3">
          <Projects />
        </div>{" "}
        <div className="px-32" id="section-2">
          <Skills />
        </div>{" "}
        <div id="section-4">
          <Publications />
        </div>{" "}
        <div id="section-5">
          <Blogs />
        </div>{" "}
        <div id="section-9">
          <Timeline />
        </div>{" "}
        <div id="section-6">
          <Education />
        </div>{" "}
        <div id="section-7">
          <Contact />
        </div>{" "}
        <Routes>
          {" "}
          {/* <Route exact path="/" element={<App />, <WelcomePage/>}></Route>
                                                                                                                                                                                                                                                                                                                                       <Route exact path="/skills" element={<Skills/>}></Route>
                                                                                                                                                                                                                                                                                                                                       <Route exact path="/projects" element={<Projects/>}></Route>
                                                                                                                                                                                                                                                                                                                                       <Route exact path="/blogs" element={<Blogs/>}></Route>
                                                                                                                                                                                                                                                                                                                                       <Route exact path="/published" element={<Publications/>}></Route>
                                                                                                                                                                                                                                                                                                                                       <Route exact path="/contact" element={<Contact/>}></Route> */}{" "}
        </Routes>{" "}
      </HashRouter>{" "}
      <footer className="text-center text-2xl px-2 py-3  text-white">
      
      <div className="w-full h-auto flex justify-center">
        <img
          className="rounded-full shadow-lg"
          src="https://akshaysaini.in/img/foot.jpg"
          alt="Vineet Mishra"
        />
      </div>
      <div className="mb-4 bg-black">
        Made with <span role="img" aria-label="heart">❤️</span> by Vineet Mishra
      </div>
    </footer>
    </div>
  );
}

export default App;
