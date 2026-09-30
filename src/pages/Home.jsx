
import { Link } from "react-router"

function Home() {
  return (
    <section className="home-intro">
      <div className="intro-text">
        <h1>Nicolas Nalepa</h1>
        <h2>Welcome to my portfolio!</h2>
        
        
        <p className="intro-description">
          I’m a Computer Science student at the University of Guelph,
          specializing in Cybersecurity. {' '} 
          <Link className="projects-button" to="/projects">
          Explore my projects 
          </Link> {' '} 
          or learn more about me.
        
        </p> 
        
       <div className="intro-details">
        <p className="intro-location">
            <img src="/pin.png" alt="" />
            Based in Mississauga, Ontario, Canada
        </p>

        <p className="intro-availibility">
             <img src="work.png" alt="" />
            Seeking co-op placement - Winter 2027
        </p>
    </div>
    
    
    <section className="skills-section" aria-labelledby="skills-heading">
  <h3 id="skills-heading">Skills:</h3>

  <div className="skills-list">
    <img src="/c.webp" alt="C" />
    <img src="/Python.webp" alt="Python" />
    <img src="/Javascript.png" alt="JavaScript" />
    <img src="/Java.webp" alt="Java" />
    <img src="/React.webp" alt="React" />
    <img src="/Linux.png" alt="Linux" />
    <img src="/git.png" alt="Git" />
  </div>
</section>




      <div className="follow-section">
        <p>Follow me:</p>
        
        <a
            href="https://www.linkedin.com/in/nicolas-nalepa-326a51379/"
            target="_blank"
            rel="noopener noreferrer"
        >
            <img src="/LinkedIn.png" alt="LinkedIn" />
        </a>

        <a
        href="https://www.instagram.com/Sowxvy_nick/"
        target="_blank"
        rel="noopener noreferrer"
        >
            <img src="/instagram.webp" alt="Instagram" />
     </a>

        <a
       
       href="https://github.com/NicolasNalepa"
        target="_blank"
        rel="noopener noreferrer"
       
       >
       
        <img src="/githublogo.png" alt="GitHub" />
    
     </a> 
   
   </div>  {/* Ends the Follow me row*/}

    <div className="contact-section">
        <h3>Contact Me:</h3>

       <a 
        
        href="mailto:nicolasnalepa@outlook.com">
        <img src="/mial.png" alt="Email me" />
        </a>
       
       <p>Phone: 416-522-3278</p>

    </div> {/* Ends contact-section */}
    </div> {/* Ends intro-text */}



      <img
        className="profile-photo"
        src="/Me.PNG"
        alt="Nicolas Nalepa"
        width="320"
      />
    </section>
  )

}

export default Home