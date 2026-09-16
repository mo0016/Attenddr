import type { JSX } from "react";

type Step = {
  n: string;
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

const steps: Step[] = [
  {
    n: "1",
    title: "Students check in",
    text: "A tap of an NFC card, or a glance at the camera for face recognition.",
    icon: (
      <svg {...iconProps}>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M7 15V9" />
        <path d="M10.5 15V9" />
        <path d="M14 15V9" />
      </svg>
    ),
  },
  {
    n: "2",
    title: "Attendance logs itself",
    text: "No roll call. Records land straight in the dashboard, ready for reports.",
    icon: (
      <svg {...iconProps}>
        <rect x="5" y="3" width="14" height="18" rx="2" />
        <path d="M9 3h6v3H9z" />
        <path d="m9 13 2 2 4-4.5" />
      </svg>
    ),
  },
  {
    n: "3",
    title: "The terminal listens in",
    text: "The mic picks up the lesson and transcribes it as the teacher speaks.",
    icon: (
      <svg {...iconProps}>
        <rect x="9" y="2" width="6" height="12" rx="3" />
        <path d="M5 11a7 7 0 0 0 14 0" />
        <path d="M12 18v3" />
      </svg>
    ),
  },
  {
    n: "4",
    title: "A quiz comes out the other end",
    text: "Ready for students to revise from, and teachers to reuse next term.",
    icon: (
      <svg {...iconProps}>
        <path d="M14 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7l-5-5Z" />
        <path d="M14 2v5h5" />
        <path d="m9 13 2 2 4-4.5" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section id="how">
      <div className="wrap">
        <div className="section-head">
          <div className="tag">How it works?</div>
          <h2>One device, at the door, doing two jobs</h2>
          <p>
            An Android tablet station at the classroom door, school gate or
            front desk, with an NFC card reader, a face-recognition camera and
            a wireless microphone. Everything feeds a real-time, multi-campus
            web dashboard.
          </p>
        </div>
        <div className="steps">
          {steps.map((step) => (
            <div className="step" key={step.n}>
              <div className="step-icon" aria-hidden="true">
                {step.icon}
                <span className="n">{step.n}</span>
              </div>
              <h4>{step.title}</h4>
              <p>{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}