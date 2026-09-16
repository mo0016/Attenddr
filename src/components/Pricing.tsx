import type { JSX } from "react";

type Plan = {
  name: string;
  price: string;
  badge: string;
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
    price: "Own the hardware",
    badge: "One-time setup",
    features: [
      "NFC reader, camera and microphone included",
      "Set up once, running every day",
      "One-time cost, or rolled into your subscription",
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
    price: "Custom quote",
    badge: "Most popular",
    featured: true,
    features: [
      "Full dashboard and reports per class and term",
      "Auto-transcribed lessons with built quizzes",
      "Early warnings before the 70% cutoff",
      "WhatsApp alerts and weekly summaries",
    ],
    cta: "Get a quote",
    subject: "Get%20a%20quote%20for%20the%20School%20plan",
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
    price: "Optional",
    badge: "Revenue share",
    features: [
      "Same-day absence alerts",
      "Weekly progress summary per child",
      "Revenue share on offer",
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
        <div className="section-head center">
          <div className="tag">Pricing</div>
          <h2>Priced around your school, not a fixed plan</h2>
          <p>
            Pick the terminal, pick the plan, add parents if you want them on
            board. Exact numbers are worked out with each school.
          </p>
        </div>
        <div className="price-grid">
          {plans.map((plan) => (
            <div
              className={`price-card${plan.featured ? " featured" : ""}`}
              key={plan.name}
            >
              <div className="price-media" aria-hidden="true">
                {plan.icon}
                <span className="price-badge">{plan.badge}</span>
              </div>
              <h4>{plan.name}</h4>
              <p className="price-sub">{plan.price}</p>
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
                  plan.featured ? "btn-mint" : "btn-outline"
                }`}
                href={`mailto:hello@attenddr.com?subject=${plan.subject}`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        <div className="promo">
          <h3>Free 30-day pilot on one campus</h3>
          <div className="promo-actions">
            <a
              className="btn btn-primary"
              href="mailto:hello@attenddr.com?subject=Start%20a%20free%2030-day%20pilot"
            >
              Start the pilot
            </a>
            <a className="btn btn-outline" href="#how">
              See how it works
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
