import type { JSX } from "react";

type Plan = {
  name: string;
  sub: string;
  features: string[];
  cta: string;
  subject: string;
  featured?: boolean;
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

const plans: Plan[] = [
  {
    name: "Terminal",
    sub: "Own the hardware",
    features: [
      "One-time cost, or rolled into your subscription",
      "NFC reader, camera and microphone included",
      "Set up once, running every day",
    ],
    cta: "Enquire",
    subject: "Enquire%20about%20the%20Terminal",
    icon: (
      <svg {...iconProps}>
        <rect x="5" y="2" width="14" height="20" rx="2.5" />
        <path d="M12 18h.01" />
      </svg>
    ),
  },
  {
    name: "School plan",
    sub: "Billed per campus or per student",
    features: [
      "Full dashboard and reports per class and term",
      "Auto-transcribed lessons with built quizzes",
      "Early warnings before the 70% cutoff",
      "WhatsApp alerts and weekly summaries",
    ],
    cta: "Get a quote",
    subject: "Get%20a%20quote%20for%20the%20School%20plan",
    featured: true,
    icon: (
      <svg {...iconProps}>
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M3 9h18" />
        <path d="M8 13h.01M11.5 13h.01M15 13h.01" />
      </svg>
    ),
  },
  {
    name: "Parent add-on",
    sub: "Optional, priced by the school",
    features: [
      "Revenue share on offer",
      "Same-day absence alerts",
      "Weekly progress summary per child",
    ],
    cta: "Enquire",
    subject: "Enquire%20about%20the%20Parent%20add-on",
    icon: (
      <svg {...iconProps}>
        <path d="M21 11.5a8.5 8.5 0 0 1-12.7 7.4L3 21l2.1-5.3A8.5 8.5 0 1 1 21 11.5Z" />
        <path d="M8.5 11h7M8.5 14h4.5" />
      </svg>
    ),
  },
];

export default function Pricing() {
  return (
    <section className="pricing" id="pricing">
      <div className="wrap">
        <div className="section-head">
          <div className="tag">Pricing</div>
          <h2>Priced around your school, not a fixed plan</h2>
        </div>
        <div className="price-grid">
          {plans.map((plan) => (
            <div
              className={`price-card${plan.featured ? " featured" : ""}`}
              key={plan.name}
            >
              {plan.featured && (
                <span className="price-badge">Most popular</span>
              )}
              <div className="price-icon" aria-hidden="true">
                {plan.icon}
              </div>
              <h4>{plan.name}</h4>
              <p className="price-sub">{plan.sub}</p>
              <ul>
                {plan.features.map((feature) => (
                  <li key={feature}>
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="m5 13 4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                className={`btn ${
                  plan.featured ? "btn-primary" : "btn-ghost"
                }`}
                href={`mailto:hello@attenddr.com?subject=${plan.subject}`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
        <p className="price-note">
          Exact numbers are worked out with each school. Get in touch for a
          quote.
        </p>
      </div>
    </section>
  );
}