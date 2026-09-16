import type { JSX } from "react";

type AudienceItem = {
  label: string;
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

const audience: AudienceItem[] = [
  {
    label: "Buyers",
    text: "Schools and school groups, from single campuses to large fee-paying networks.",
    icon: (
      <svg {...iconProps}>
        <path d="M3 21h18" />
        <path d="M5 21V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v16" />
        <path d="M15 9h2a2 2 0 0 1 2 2v10" />
        <path d="M8 7h4M8 11h4M8 15h4" />
      </svg>
    ),
  },
  {
    label: "Ideal fit",
    text: "Multi-campus groups, where manual roll call and revision fall apart fastest.",
    icon: (
      <svg {...iconProps}>
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="12" cy="12" r="1.2" />
      </svg>
    ),
  },
  {
    label: "Where",
    text: "Nigeria first, with multi-campus groups in the Gulf next.",
    icon: (
      <svg {...iconProps}>
        <path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z" />
        <circle cx="12" cy="10" r="2.5" />
      </svg>
    ),
  },
  {
    label: "Who else uses it",
    text: "Teachers day to day, students revising, and tech-conscious parents keeping track.",
    icon: (
      <svg {...iconProps}>
        <circle cx="9" cy="8" r="3.5" />
        <path d="M3 20a6 6 0 0 1 12 0" />
        <path d="M16 5.5a3.5 3.5 0 0 1 0 6.5" />
        <path d="M16.5 14.5a6 6 0 0 1 4.5 5.5" />
      </svg>
    ),
  },
];

export default function Audience() {
  return (
    <section>
      <div className="wrap">
        <div className="section-head">
          <div className="tag">Who it&apos;s for?</div>
          <h2>Built for schools that outgrew the paper register</h2>
        </div>
        <div className="who">
          {audience.map((item) => (
            <div className="who-card" key={item.label}>
              <div className="who-icon" aria-hidden="true">
                {item.icon}
              </div>
              <div className="label">{item.label}</div>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}