const attendanceIssues = [
  "Calling names out loud wastes class time, especially with big groups.",
  "Paper records are easy to alter and hard to check later.",
  "A student can drop under the 70% cutoff for exams before staff notice.",
  "Parents usually find out about an absence too late to do anything.",
];

const revisionIssues = [
  "Once a lesson ends, there's nothing left to study from.",
  "Teachers rarely have time to turn lessons into quizzes.",
  "There's no quick way to see what a class actually took in.",
  "Parents only see how their child is doing once a term.",
];

export default function Problem() {
  return (
    <section className="problem">
      <div className="wrap">
        <div className="section-head">
          <div className="tag">Why it matters?</div>
          <h2>Registers get faked. Lessons get forgotten.</h2>
          <p>
            Most schools still track two things by hand: who came to class, and
            what was actually taught. Neither holds up well under pressure.
          </p>
        </div>
        <div className="pair">
          <div className="pair-card">
            <h3>What goes wrong with attendance</h3>
            <ul>
              {attendanceIssues.map((issue) => (
                <li key={issue}>
                  <span className="check" aria-hidden="true">
                    ✓
                  </span>
                  {issue}
                </li>
              ))}
            </ul>
          </div>
          <div className="pair-card">
            <h3>What goes wrong with revision</h3>
            <ul>
              {revisionIssues.map((issue) => (
                <li key={issue}>
                  <span className="check" aria-hidden="true">
                    ✓
                  </span>
                  {issue}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}