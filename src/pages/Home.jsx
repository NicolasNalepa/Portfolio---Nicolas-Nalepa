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
      </div>

      <img
        className="profile-photo"
        src="/Profile.jpg"
        alt="Nicolas Nalepa"
        width="320"
      />
    </section>
  )
}

export default Home