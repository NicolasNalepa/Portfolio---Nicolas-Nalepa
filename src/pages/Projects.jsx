function Projects() {
  return (
    <section className="projects-page">
      <h2>Projects</h2>

    <div className="projects-grid">
      <article className="project-card">
        <h3>Personal Portfolio</h3>
        <div className="project-tech">
        <span>React</span>
        <span>JavaScript</span>
        <span>CSS</span>
        </div>
        
        <p>
          This website gives visitors a better understanding of who I am, what I
          do, and the skills and interests that shape my work.
        </p>

        <p className="project-learning">
          <strong> What I learned:</strong> How to build a multi-page website with React, organize content into 
          reusable components, style layouts with CSS, and troubleshoot design and navigation issues across desktop and mobile screens.
          </p>
          <a
          href="https://github.com/NicolasNalepa/Portfolio---Nicolas-Nalepa"
          target="_blank"
          rel="noopener noreferrer"
        >
          View code on GitHub
        </a>
      </article>

      <article className="project-card">
        <h3>Student Record and Username Processor</h3>
        <div className="project-tech">
        <span>C</span>
        <span>CSV Processing</span>
        <span>Makefile</span>
        </div>
        
        <p>
          Built a modular C program to read, process, and write student records
          from CSV files. Organized file handling, string processing, and
          statistics into reusable modules, with a Makefile to automate the
          build.
        </p>
        <p className="project-learning">
          <strong>What I learned:</strong> How to process CSV files in C,
          manipulate strings to generate usernames, and organize a program
          into reusable modules with a Makefile to automate compilation.
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
        <div className="project-tech">
        <span>C</span>
        <span>Dynamic Memory</span>
        <span>File Handling</span>
        </div>
        
        <p>
          Built a C program to load DNA records from CSV files and support
          record insertion, deletion, and sequence-length analysis. Used
          dynamic memory allocation to resize the database and clean up memory
          when finished.
        </p>
        
        <p className="project-learning">
          <strong>What I learned:</strong> How to manage dynamic memory in C,
          resize a database as records are added or removed, and free allocated
           memory correctly to prevent memory leaks.
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
        <div className="project-tech">
        <span>C</span>
        <span>String Processing</span>
        <span>Sequence Analysis</span>
        </div>
        
        <p>
          Developed reusable C functions to analyze DNA sequences, including
          GC-content calculation, motif search, Hamming distance, and palindrome
          detection.
        </p>  
        <p className="personal-learning">
          <strong>What I learned:</strong> How to break sequence-analysis problems
          into reusable C functions, compare strings, find patterns, and handle
          edge cases when processing DNA sequences.
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
        <h3>Sorting and Search Algorithm Benchmark</h3>
        <div className="project-tech">
        <span>C</span>
        <span>Algorithms</span>
        <span>Benchmarking</span>
        </div>
        
        <p>
          Implemented and benchmarked six sorting algorithms in C and compared
          binary and ternary search performance.
        </p>
        <p className="personal-learning">
          <strong>What I learned:</strong> How to measure and compare algorithm
          performance, understand how input size affects execution time, and
           connect theoretical time complexity with practical benchmark results.
        </p>
        <a
          href="https://github.com/NicolasNalepa/sorting-search-algorithm-benchmark"
          target="_blank"
          rel="noopener noreferrer"
        >
          View code on GitHub
        </a>
      </article>
      </div>
    </section>
  )
}

export default Projects