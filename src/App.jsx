import About from "./components/about"
import Bottom from "./components/bottom"
import Contact from "./components/contactme"
import Experience from "./components/experience"
import Home from "./components/home"
import Navbar from "./components/navbar"
import toast, { Toaster } from 'react-hot-toast';

function App() {

  return (
    <>
         <div className="min-h-screen font-serif bg-slate-100">
          <Toaster/>
   <Navbar/>
   <Home/>
   <About/>
   <Experience/>
   <Contact/>
   <Bottom/>
    </div>
    </>
  )
}

export default App
