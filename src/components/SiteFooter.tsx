export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-inner">
        <div className="footer-brand">
          <span className="footer-logo">
            <span className="logo-mark" aria-hidden="true">
              <svg
                viewBox="0 0 32 32"
                width="15"
                height="15"
                fill="none"
                stroke="#ffffff"
                strokeWidth="4.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M8.5 24.5 16 5 23.5 24.5" />
                <path d="m11.5 16 3.4 4 6.9-8.4" />
              </svg>
            </span>
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
          </ul>
        </div>
        <div className="footer-col">
          <h5>Contact</h5>
          <ul>
            <li><a href="mailto:hello@attenddr.com">hello@attenddr.com</a></li>
            <li><a href="mailto:hello@attenddr.com?subject=Book%20a%2020-minute%20demo">Book a demo</a></li>
            <li><a href="mailto:hello@attenddr.com?subject=Start%20a%20free%2030-day%20pilot">Start a free pilot</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="wrap">
          &copy; {new Date().getFullYear()} Attenddr. All rights reserved.
        </div>
      </div>
    </footer>
  );
}