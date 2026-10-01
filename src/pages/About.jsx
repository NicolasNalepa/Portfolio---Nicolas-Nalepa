function About() {
  return (
    <section className="about-page">
      <div className="about-layout">
        <div className="about-text">
          <h2>About Me</h2>

          <div className="about-card">
            <h3>My Background</h3>
            <p>
              I’m Nicolas Nalepa, a Computer Science co-op student at
              the University of Guelph, specializing in Cybersecurity.
              Through coursework and personal projects, I’m building
              experience in programming, problem-solving, and web development.
              My projects range from working with algorithms and dynamic
              memory in C to building this portfolio with React and CSS.
              Each has helped me turn classroom concepts into working
              programs and become more confident debugging and improving
              my code.
            </p>
          </div>

          <div className="about-card">
            <h3>What I’m Working Toward</h3>
            <p>
              I’m seeking a Winter 2027 co-op placement where I can
              contribute to real projects and learn from an experienced
              team. I want to strengthen my software development skills
              and explore how cybersecurity principles are applied
              in practice.
            </p>
          </div>

          <div className="about-card">
            <h3>My Interests</h3>
            <p>
              Outside of school, I enjoy listening to music, spending
              time with friends, and staying physically active. Music
              is a big part of my everyday life, and making time for
              physical activity is important to me. I also value
              personal growth, whether that means learning something
              new, building better habits, or working toward a goal.
            </p>
          </div>
        </div>

        <div className="about-sidebar">
          <img
            className="about-photo"
            src="/nick.jpg"
            alt="Nicolas Nalepa"
          />

          <div className="about-connect">
            <h3>Let’s connect!</h3>

            <div className="about-connect-links">
              <a href="mailto:nicolasnalepa@outlook.com">
                <img src="/mial.png" alt="Email me" />
              </a>

              <a
                href="https://www.linkedin.com/in/nicolas-nalepa-326a51379/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/LinkedIn.png" alt="LinkedIn" />
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
        </div>
      </div>
    </section>
  )
}

export default About