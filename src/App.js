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
import  WelcomePage from './components/WelcomePage.jsx'
import Projects from "./components/Projects";
import Publications from "./components/Publications"
import Skills from "./components/Skills";
import Blogs from "./components/Blogs";
import Contact from "./components/Contact";

function App() {

  const name ="<Vineet Mishra/>"
  return (
    <div class="overflow-x-hidden">
          <HashRouter >
   
   <nav class="flex items-center  justify-between flex-wrap  p-6  bg-white  "  id="nav">
            <Link to="/" > 
             <div class="flex  flex-shrink-0  mr-6">
             <span className="heading"class=" text-4xl tracking-tight ">
                  {name}</span>
              
              </div>
              </Link>

              <div class="w-full  text-center flex-grow lg:flex lg:items-center  lg:w-auto  ">
                <div class="text-sm lg:flex-grow   ">
                  <a href="#section-2" class="block mt-4 text-center lg:inline-block lg:mt-0 text-teal-200 hover:text-gray-500 mr-4 text-xl  px-12 "> 
                  Skills
                  </a>

                  <a href="#section-3" class="block mt-4 text-center lg:inline-block lg:mt-0 text-teal-200 hover:text-gray-500 mr-4 text-xl  px-12  ">
                     Projects
                  </a>


                  <a href="#section-5" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200  hover:text-gray-500 mr-4 text-xl  px-12 ">
                Blogs
                  </a>
                  <a href="#section-4" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200  hover:text-gray-500 mr-4 text-xl  px-12 ">
                    Published
                  </a>
                  <a href="#section-6" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200  hover:text-gray-500 mr-4 text-xl   px-12">
                    Contact
                  </a>


                </div>

              </div>
            </nav>

<div id="section-1">
<WelcomePage/>
</div>

<div id="section-3">
     <Projects/>
     </div>

     <div id="section-2">
     <Skills/>
     </div>

    
  
  
     <div id="section-4">
     <Publications/>
    
     </div>
  
<div id="section-5">
<Blogs/>
</div>
   
<div id="section-6">
<Contact/>
</div>
  
 
        <Routes>

               {/* <Route exact path="/" element={<App />, <WelcomePage/>}></Route>
               <Route exact path="/skills" element={<Skills/>}></Route>
               <Route exact path="/projects" element={<Projects/>}></Route>
               <Route exact path="/blogs" element={<Blogs/>}></Route>
               <Route exact path="/published" element={<Publications/>}></Route>
               <Route exact path="/contact" element={<Contact/>}></Route> */}
        
            </Routes>
      </ HashRouter>

      <footer class="text-center text-2xl px-2 py-3">Made with ❤️ by Vineet Mishra
    <div class="w-full h-auto flex justify-center">
    <img className="Intro-img" src="https://akshaysaini.in/img/foot.jpg" alt="" />
    </div>
      
    
      </footer>

    </div>
  );
}

export default App;
