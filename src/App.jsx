import './App.css'
import { Link, Route, Routes } from 'react-router'
import Home from './pages/Home'
import Projects from './pages/Projects'
import About from './pages/About'
import Resume from './pages/Resume'

function App() {
  return (
    <>
      <header>
  <div className="top-bar">
  

    <div className="header-links">
      <nav className="navigation" aria-label="Main navigation">
        
        <Link to="/" aria-label="Home" title="Home">
          <img src="/Home.png" alt="" width="32" height="24" />
        </Link>
        
        
        <Link to="/projects" aria-label="Projects" title="Projects">
          <img src="/project.png" alt="" width="27" height="24" />
        </Link>
       
       
       
        <Link to="/about" aria-label="About Me" title="About Me">
          <img src="/AboutMe.png" alt="" width="27" height="24" />
        </Link>
        
        
        
        
        <Link to="/resume" aria-label="resume" title="resume">
          <img src="/Resume.jpg" alt="" width="27" height="24" />
        </Link>
    
      </nav>

      <div className="social-links">
        <a
          href="https://www.linkedin.com/in/nicolas-nalepa-326a51379/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn profile"
          title="LinkedIn"
        >
          <img src="/LinkedIn.png" alt="" width="29" height="26" />
        </a>

        <a
          href="https://github.com/NicolasNalepa"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub profile"
          >
          <img src="/githublogo.png" alt="" width="27" height="24" />
        </a>
      </div>
    </div>
  </div>

  
</header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </main>
    </>
  )
}



export default App