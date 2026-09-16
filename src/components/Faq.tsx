"use client";

import { useState } from "react";

const faqs = [
  {
    q: "What is Attenddr?",
    a: "A small Android tablet station that sits at your classroom door, school gate or front desk. It handles attendance automatically and turns the lesson itself into revision material students can study from later.",
  },
  {
    q: "How do students check in?",
    a: "Each student taps their NFC card on the terminal as they walk in, or the camera recognises their face at the school gate. Either way, check-in takes a second and needs no staff member.",
  },
  {
    q: "What happens when a student forgets their card?",
    a: "The camera handles face recognition as a fallback, and a teacher can mark a student in manually from the dashboard. No one gets penalised for a forgotten card.",
  },
  {
    q: "How does the quiz part work?",
    a: "A wireless microphone picks up the lesson while it is being taught and transcribes it as text. After class, that transcript becomes a set of quiz cards students can revise from, and teachers can reuse next term.",
  },
  {
    q: "Who is Attenddr for?",
    a: "Schools and school groups, from single campuses to large fee-paying networks. Multi-campus groups feel the pain of manual registers first, so we start there: Nigeria first, with groups in the Gulf next.",
  },
  {
    q: "How is pricing worked out?",
    a: "The terminal is a one-time cost or rolled into the subscription, and the school plan is billed per campus or per student. Get in touch and we will work out exact numbers for your school.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section className="faq" id="faq">
      <div className="wrap faq-grid">
        <div className="faq-left">
          <div className="tag">FAQ</div>
          <h2>Frequently asked questions</h2>
          <p>
            Everything schools ask before a pilot. Anything else, send us an
            email and we will answer the same day.
          </p>
          <a href="mailto:hello@attenddr.com">hello@attenddr.com</a>
        </div>
        <div>
          {faqs.map((item, i) => (
            <div className="faq-item" key={item.q}>
              <button
                className={`faq-q${open === i ? " open" : ""}`}
                onClick={() => setOpen(open === i ? -1 : i)}
                aria-expanded={open === i}
              >
                {item.q}
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
              {open === i && <p className="faq-a">{item.a}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
