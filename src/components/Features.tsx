"use client";

import { useState } from "react";
import type { JSX } from "react";

type Feature = {
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

const features: Feature[] = [
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
    title: "Face recognition",
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
    title: "Reports you can defend",
    text: "A clean record per student, class and term, ready for inspection.",
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
  {
    title: "Lessons, transcribed",
    text: "Every class recorded as text while it's being taught.",
    icon: (
      <svg {...iconProps}>
        <rect x="4" y="3" width="16" height="18" rx="2" />
        <path d="M8 8h8M8 12h8M8 16h5" />
      </svg>
    ),
  },
  {
    title: "Auto-built quizzes",
    text: "Turns that transcript into something students can revise from.",
    icon: (
      <svg {...iconProps}>
        <path d="M12 3 4.5 7.5v9L12 21l7.5-4.5v-9L12 3Z" />
        <path d="m9 12 2 2 4-4.5" />
      </svg>
    ),
  },
  {
    title: "See what stuck",
    text: "Understand what a class retained, not just who showed up.",
    icon: (
      <svg {...iconProps}>
        <path d="M12 21s-7.5-4.9-9.5-9A5.4 5.4 0 0 1 12 7.6 5.4 5.4 0 0 1 21.5 12c-2 4.1-9.5 9-9.5 9Z" />
        <circle cx="12" cy="11" r="1.6" />
      </svg>
    ),
  },
];

const INITIAL_COUNT = 3;

export default function Features() {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? features : features.slice(0, INITIAL_COUNT);
  const hasMore = features.length > INITIAL_COUNT;

  return (
    <section className="features" id="features">
      <div className="wrap">
        <div className="section-head">
          <div className="tag">What you get?</div>
          <h2>Everything a front office and a classroom actually need</h2>
        </div>
        <div className="feature-grid">
          {visible.map((feature) => (
            <div className="feature-card" key={feature.title}>
              <div className="feature-icon" aria-hidden="true">
                {feature.icon}
              </div>
              <h4>{feature.title}</h4>
              <p>{feature.text}</p>
            </div>
          ))}
        </div>
        {hasMore && (
          <div className="view-all-wrap">
            <button
              className={`btn-viewall${expanded ? " open" : ""}`}
              onClick={() => setExpanded((prev) => !prev)}
            >
              {expanded ? "Show less" : "View all features"}
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}