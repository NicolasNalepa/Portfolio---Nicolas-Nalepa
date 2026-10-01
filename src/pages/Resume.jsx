function Resume() {
  return (
    <section className="resume-page">
      <h2>Resume</h2>
      <p>View my resume or download a copy.</p>

      <a
        className="view-resume"
        href="/Nicolas Nalepa Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        View resume (PDF)
      </a>
    
      <a
        className="download-resume"
        href="/Nicolas Nalepa Resume.pdf"
        download="Nicolas-Nalepa-Resume.pdf"
      >
        Download resume
      </a>
      <iframe
      className="resume-preview"
      src="/Nicolas Nalepa Resume.pdf#view=FitH"
      title="Nicolas Nalepa's Resume"
    />    
    </section>
  )
}
export default Resume