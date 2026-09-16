const students = [
  { initial: "C", name: "Chidinma A.", time: "7:58 AM", color: "#6366F1" },
  { initial: "T", name: "Tunde B.", time: "7:59 AM", color: "#F59E0B" },
  { initial: "A", name: "Amaka O.", time: "8:03 AM", color: "#EC4899" },
];

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg-nfc" aria-hidden="true">
        <svg viewBox="0 0 460 460" width="460" height="460">
          <circle className="ring r1" cx="230" cy="230" r="70" />
          <circle className="ring r2" cx="230" cy="230" r="70" />
          <circle className="ring r3" cx="230" cy="230" r="70" />
        </svg>
      </div>
      <div className="wrap hero-grid">
        <div>
          <span className="badge">Built for Nigerian schools</span>
          <h1>Know who&apos;s in class, and what they learned.</h1>
          <p className="sub">
            Attenddr is an Android tablet station at your classroom door.
            Students check in with a tap or a glance, and the lesson turns
            itself into quiz cards students can study from later.
          </p>
          <div className="ctas">
            <a className="btn btn-primary" href="#cta">
              Book a demo
            </a>
            <a className="btn btn-ghost" href="#cta">
              Try it free for 30 days
            </a>
          </div>
          <p className="fine">One campus, no cost, no commitment.</p>
        </div>

        <div className="device" aria-label="Live check-in preview">
          <div className="device-top">
            <div className="live-status">
              <span className="live-dot" />
              <span className="status">Session live · JSS2 Basic Science</span>
            </div>
            <div className="dot-row" aria-hidden="true">
              <span className="dot" />
              <span className="dot" />
              <span className="dot" />
            </div>
          </div>

          <div className="nfc-tap">
            <div className="nfc-icon-wrap" aria-hidden="true">
              <span className="ping" />
              <span className="ping delay" />
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 8a7 7 0 0 1 9.9 9.9" />
                <path d="M2.5 5.5a10.8 10.8 0 0 1 15.3 15.3" />
                <rect x="2" y="14" width="8" height="8" rx="1.6" />
              </svg>
            </div>
            <div>
              <div className="nfc-title">Tap detected</div>
              <div className="nfc-sub">Reading card…</div>
            </div>
          </div>

          {students.map((student) => (
            <div className="roll-row" key={student.name}>
              <span
                className="avatar"
                style={{ background: student.color }}
                aria-hidden="true"
              >
                {student.initial}
              </span>
              <span className="roll-name">{student.name}</span>
              <span className="roll-time">{student.time}</span>
              <span className="roll-status">In</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}