function Projects() {
  return (
    <section className="projects-page">
      <h2>Projects</h2>

      <article className="project-card">
        <h3>Sorting and Search Algorithm Benchmark</h3>
        <p>
          Implemented and benchmarked six sorting algorithms in C and compared
          binary and ternary search performance.
        </p>
        <a
          href="https://github.com/NicolasNalepa/sorting-search-algorithm-benchmark"
          target="_blank"
          rel="noopener noreferrer"
        >
          View code on GitHub
        </a>
      </article>

      <article className="project-card">
        <h3>Student Record and Username Processor</h3>
        <p>
          Built a modular C program to read, process, and write student records
          from CSV files. Organized file handling, string processing, and
          statistics into reusable modules, with a Makefile to automate the
          build.
        </p>
        <a
          href="https://github.com/NicolasNalepa/student-record-username-processor"
          target="_blank"
          rel="noopener noreferrer"
        >
          View code on GitHub
        </a>
      </article>

      <article className="project-card">
        <h3>Dynamic DNA Record Database</h3>
        <p>
          Built a C program to load DNA records from CSV files and support
          record insertion, deletion, and sequence-length analysis. Used
          dynamic memory allocation to resize the database and clean up memory
          when finished.
        </p>
        <a
          href="https://github.com/NicolasNalepa/dynamic-dna-record-database"
          target="_blank"
          rel="noopener noreferrer"
        >
          View code on GitHub
        </a>
      </article>

      <article className="project-card">
        <h3>DNA Sequence Analysis Toolkit</h3>
        <p>
          Developed reusable C functions to analyze DNA sequences, including
          GC-content calculation, motif search, Hamming distance, and palindrome
          detection.
        </p>
        <a
          href="https://github.com/NicolasNalepa/dna-sequence-analysis-toolkit"
          target="_blank"
          rel="noopener noreferrer"
        >
          View code on GitHub
        </a>
      </article>

      <article className="project-card">
        <h3>Personal Portfolio</h3>
        <p>
          This website gives visitors a better understanding of who I am, what I
          do, and the skills and interests that shape my work.
        </p>
        <a
          href="https://github.com/NicolasNalepa/Portfolio---Nicolas-Nalepa"
          target="_blank"
          rel="noopener noreferrer"
        >
          View code on GitHub
        </a>
      </article>
    </section>
  )
}

export default Projects