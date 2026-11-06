import './App.css'
import { Link, Route, Routes } from 'react-router'
import { Analytics } from '@vercel/analytics/react'
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
   
    <nav  className="navigation" aria-label="Main navigation">
    <Link to="/">Home</Link>
    <Link to="/projects">Projects</Link>
    <Link to="/about">About</Link>
    <Link to="/resume">Resume</Link>
  </nav>
    
      <div className="social-links">
        
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
      <Analytics />
    </>
  )
}



export default App