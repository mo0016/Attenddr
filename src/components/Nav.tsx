export default function Nav() {
  const links = [
    { href: "#how", label: "How it works" },
    { href: "#features", label: "Features" },
    { href: "#pricing", label: "Pricing" },
  ];

  return (
    <header className="nav">
      <div className="nav-inner">
        <a className="logo" href="#top">
          <span className="logo-mark" aria-hidden="true">
            <svg
              viewBox="0 0 16 16"
              width="13"
              height="13"
              fill="none"
              stroke="#ffffff"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 8.5 6.5 12 13 4.5" />
            </svg>
          </span>
          Attenddr
        </a>
        <nav className="nav-links" aria-label="Main">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <a className="btn btn-primary" href="#cta">
          Book a demo
        </a>
      </div>
    </header>
  );
}