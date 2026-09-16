const students = [
  { initial: "C", name: "Chidinma A.", time: "7:58 AM", color: "#0B5D4C" },
  { initial: "T", name: "Tunde B.", time: "7:59 AM", color: "#12855F" },
  { initial: "A", name: "Amaka O.", time: "8:03 AM", color: "#0F7860" },
];

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner">
        <span className="hero-badge">Built for Nigerian schools</span>
        <h1>Know who&apos;s in class, and what they learned.</h1>
        <p className="sub">
          Attenddr is an Android tablet station at your classroom door.
          Students check in with a tap or a glance, and the lesson turns
          itself into quiz cards students can study from later.
        </p>
        <div className="ctas">
          <a
            className="btn btn-primary"
            href="mailto:hello@attenddr.com?subject=Book%20a%2020-minute%20demo"
          >
            Book a demo
          </a>
          <a className="btn btn-outline" href="#how">
            See how it works
          </a>
        </div>
        <p className="fine">One campus, no cost, no commitment.</p>
      </div>

      <div className="hero-visual">
        <svg
          className="hero-wave"
          viewBox="0 0 1440 320"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M-40 190 Q 150 80 340 180 T 720 180 T 1100 180 T 1480 180"
            stroke="#9DF5C3"
            strokeWidth="30"
            strokeLinecap="round"
            opacity="0.55"
          />
          <path
            d="M-40 210 Q 150 110 340 205 T 720 205 T 1100 205 T 1480 205"
            stroke="#7CD2A3"
            strokeWidth="44"
            strokeLinecap="round"
          />
        </svg>

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
