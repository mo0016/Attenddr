import type { JSX } from "react";

type WhyItem = {
  title: string;
  text: string;
  icon: JSX.Element;
};

const iconProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.9,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

const items: WhyItem[] = [
  {
    title: "Fast check-in",
    text: "NFC cards move a full class through the door in seconds.",
    icon: (
      <svg {...iconProps}>
        <path d="M13 2 4.5 13.5h6L11 22l8.5-11.5h-6L13 2Z" />
      </svg>
    ),
  },
  {
    title: "Face recognition at the gate",
    text: "No card needed at the school gate.",
    icon: (
      <svg {...iconProps}>
        <path d="M4 8V6a2 2 0 0 1 2-2h2" />
        <path d="M16 4h2a2 2 0 0 1 2 2v2" />
        <path d="M20 16v2a2 2 0 0 1-2 2h-2" />
        <path d="M8 20H6a2 2 0 0 1-2-2v-2" />
        <circle cx="12" cy="10" r="3" />
        <path d="M8.4 16a4.5 4.5 0 0 1 7.2 0" />
      </svg>
    ),
  },
  {
    title: "Records you can defend",
    text: "A clean log per student, class and term, ready for inspection.",
    icon: (
      <svg {...iconProps}>
        <path d="M14 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7l-5-5Z" />
        <path d="M14 2v5h5" />
        <path d="M9 14h6M9 17.5h4" />
      </svg>
    ),
  },
  {
    title: "Early warnings",
    text: "Flags students heading below the 70% exam-eligibility line.",
    icon: (
      <svg {...iconProps}>
        <path d="M10.3 3.6 1.8 18a2 2 0 0 0 1.7 3h13a2 2 0 0 0 1.7-3L13.7 3.6a2 2 0 0 0-3.4 0Z" />
        <path d="M12 9v4.5M12 17h.01" />
      </svg>
    ),
  },
  {
    title: "Parents kept in the loop",
    text: "WhatsApp alerts the same day, plus a weekly summary.",
    icon: (
      <svg {...iconProps}>
        <path d="M21 11.5a8.5 8.5 0 0 1-12.7 7.4L3 21l2.1-5.3A8.5 8.5 0 1 1 21 11.5Z" />
        <path d="M8.5 10.5h7M8.5 13.5h4.5" />
      </svg>
    ),
  },
  {
    title: "One dashboard, every campus",
    text: "Live numbers across classes and locations, in one place.",
    icon: (
      <svg {...iconProps}>
        <rect x="3" y="3" width="7.5" height="10" rx="1.5" />
        <rect x="13.5" y="3" width="7.5" height="6.5" rx="1.5" />
        <rect x="13.5" y="13" width="7.5" height="8" rx="1.5" />
        <rect x="3" y="17" width="7.5" height="4" rx="1.5" />
      </svg>
    ),
  },
];

export default function Why() {
  return (
    <section className="why" id="why">
      <div className="wrap why-grid">
        <div className="why-left">
          <div className="tag">Why Attenddr?</div>
          <h2>Registers get faked. Lessons get forgotten.</h2>
          <p>
            Most schools still track two things by hand: who came to class,
            and what was actually taught. Attenddr replaces the paper run
            with one device at the door that does both.
          </p>
          <a className="btn btn-mint" href="#features">
            See all features
          </a>
        </div>
        <div className="why-list">
          {items.map((item) => (
            <div className="why-row" key={item.title}>
              <div className="why-icon" aria-hidden="true">
                {item.icon}
              </div>
              <div>
                <strong>{item.title}</strong>
                <span>{item.text}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
