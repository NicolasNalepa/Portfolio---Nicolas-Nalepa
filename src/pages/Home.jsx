function Home() {
  return (
    <section className="home-intro">
      <div className="intro-text">
        <h1>Nicolas Nalepa</h1>
        <h2>Welcome to my portfolio!</h2>
        <p className="intro-description">
          I’m a Computer Science student at the University of Guelph,
          specializing in Cybersecurity. Explore my projects or
          learn more about me.
        </p>
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
      </div>
      
      
      </div>

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