import LogoMark from "./LogoMark";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="foot-cta">
        <h2>Start your journey</h2>
        <p>
          A 20-minute demo, or a free 30-day pilot on one campus. Either way,
          see it working before you decide.
        </p>
        <a
          className="btn btn-light"
          href="mailto:hello@attenddr.com?subject=Book%20a%2020-minute%20demo"
        >
          Book a demo
        </a>
      </div>

      <svg
        className="foot-wave"
        viewBox="0 0 1440 120"
        fill="none"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M-20 70 Q 160 10 340 65 T 720 65 T 1100 65 T 1480 65"
          stroke="#7CD2A3"
          strokeWidth="26"
          strokeLinecap="round"
        />
      </svg>

      <div className="wrap foot-grid">
        <div className="footer-brand">
          <span className="footer-logo">
            <LogoMark size={26} cardColor="#FAF9F5" checkColor="#7CD2A3" />
            Attenddr
          </span>
          <p className="footer-tagline">
            Attendance and lesson recall, handled at the door.
          </p>
        </div>
        <div className="footer-col">
          <h5>Product</h5>
          <ul>
            <li><a href="#how">How it works</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h5>Company</h5>
          <ul>
            <li>
              <a href="mailto:hello@attenddr.com?subject=Book%20a%2020-minute%20demo">
                Book a demo
              </a>
            </li>
            <li>
              <a href="mailto:hello@attenddr.com?subject=Start%20a%20free%2030-day%20pilot">
                Start a pilot
              </a>
            </li>
            <li>
              <a href="mailto:hello@attenddr.com?subject=Enquire%20about%20the%20Terminal">
                Enquire about hardware
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h5>Support</h5>
          <ul>
            <li><a href="mailto:hello@attenddr.com">hello@attenddr.com</a></li>
            <li><a href="#faq">Help center</a></li>
            <li><a href="#reviews">Pilot schools</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="wrap">
          <span>
            &copy; {new Date().getFullYear()} Attenddr. All rights reserved.
          </span>
          <span>Made for Nigerian schools</span>
        </div>
      </div>
    </footer>
  );
}
