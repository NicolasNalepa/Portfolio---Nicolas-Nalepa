function Projects() {
  return (
    <section>
      <h2>Projects</h2>

    <article>
          <h3>Sorting and Search Algorithm Benchmark</h3>
          <p>
            Implemented and benchmarked six sorting algorithms in C
            and compared binary and ternary search performance.
          </p>
          <a href="https://github.com/NicolasNalepa/sorting-search-algorithm-benchmark">
            View code on GitHub
          </a>
        </article>

        <article>
          <h3>Student Record and Username Processor</h3>
          <p>
            Built a modular C program to read, process, and write
            student records from CSV files. Organized file handling,
            string processing, and statistics into reusable modules,
            with a Makefile to automate the build.
          </p>
          <a href="https://github.com/NicolasNalepa/student-record-username-processor">
            View code on GitHub
          </a>
        </article>

        <article>
          <h3>Dynamic DNA Record Database</h3>
          <p>
            Built a C program to load DNA records from CSV files and
            support record insertion, deletion, and sequence-length
            analysis. Used dynamic memory allocation to resize the
            database and clean up memory when finished.
          </p>
          <a href="https://github.com/NicolasNalepa/dynamic-dna-record-database">
            View code on GitHub
          </a>
        </article>

        <article>
          <h3>DNA Sequence Analysis Toolkit</h3>
          <p>
            Developed reusable C functions to analyze DNA sequences,
            including GC-content calculation, motif search, Hamming
            distance, and palindrome detection.
          </p>
          <a href="https://github.com/NicolasNalepa/dna-sequence-analysis-toolkit">
            View code on GitHub
          </a>
        </article>
    </section>
  )
}

export default Projects